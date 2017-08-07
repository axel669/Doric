import React from 'react';

import componentStyleSheet from 'source/util/app';

componentStyleSheet.addStyles({
    "doric-form, doric-form-layout": {
        display: 'block'
    },
    "doric-button.form-button": {
        display: ["-webkit-flex", "flex"],
        backgroundColor: '#4285f4',
        color: 'white'
    }
});
const FormLayout = ({style, children}) => <doric-form-layout style={style}>{children}</doric-form-layout>;
FormLayout.FormItem = ({children, ...props}) => <div {...props}>{children}</div>;
class FormUpdater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: undefined};
    }
    update = (value) => {
        this.setState({value});
        this.props.update(value);
    }

    render = () => {
        const {Type, props, valueName, valueChanged, defaultValue} = this.props;
        let {value} = this.state;

        if (value === undefined) {
            value = defaultValue;
        }

        const formProps = {
            [valueName]: value,
            [valueChanged]: this.update
        };

        return <Type {...props} {...formProps} />;
    }
}
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.values = {};
    }

    submit = () => {
        const {onSubmit = (() => {})} = this.props;

        onSubmit(this.values);
    }

    render = () => {
        const {submitText = "Submit", layout:Layout = FormLayout} = this.props;
        const {values} = this;
        const layoutProps = Object
            .keys(this.props)
            .reduce(
                (newProps, key) => {
                    if (key.startsWith("layout-") === true) {
                        newProps[key.slice(7)] = this.props[key];
                    }
                    return newProps;
                },
                {}
            );

        const Item = Layout.FormItem || FormLayout.FormItem;
        const children = React.Children.toArray(this.props.children);
        const displayChildren = children.map(
            child => {
                const name = child.props.formName;
                const {defaultValue} = child.props;
                const valueName = child.type.formValue || 'value';
                const valueChanged = child.type.formValueChanged || "onChange";
                let value = values[name];

                if (value === undefined) {
                    value = defaultValue;
                }

                values[name] = value;

                const Type = child.type;
                const keys = Object.keys(child.props);
                const layoutProps = {};
                const childProps = {};

                for (const key of keys) {
                    if (key.startsWith("layout-") === true) {
                        layoutProps[key.slice(7)] = child.props[key];
                    } else {
                        childProps[key] = child.props[key];
                    }
                }

                const updaterProps = {
                    Type,
                    valueName,
                    valueChanged,
                    defaultValue,
                    update: value => this.values[name] = value,
                    props: childProps
                };

                return (
                    <Item {...layoutProps}>
                        <FormUpdater {...updaterProps} />
                    </Item>
                );
            }
        );

        return (
            <doric-form style={this.props.style} class={this.props.className}>
                <Layout {...layoutProps}>
                    {displayChildren}
                </Layout>
                <Doric.Button text="Submit" className="form-button" onTap={this.submit} raised />
            </doric-form>
        );
    }
}

export default Form;
