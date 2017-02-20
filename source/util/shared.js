/* @flow */
import React from "react";

const sharedReference = value => ({
    get value() {
        return value;
    },
    set(newValue) {
        value = newValue;
    }
});
class SharedObjectDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.reference.value};
    }

    update = (value) => {
        this.props.reference.set(value);
        this.setState({value});
    }

    render = () => {
        const {component: Component, reference, valueProp, containerStyle, ...props} = this.props;
        const {value} = this.state;

        return (
            <div style={containerStyle}>
                <Component {...props} {...{[valueProp]: value}} onChange={this.update} />
            </div>
        );
    }
}

export {
    sharedReference,
    SharedObjectDisplay
};
