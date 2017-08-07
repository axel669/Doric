import React from 'react';

import componentStyleSheet from 'source/util/app';
import consts from 'source/util/consts';

import CustomEvents from "source/component/CustomEvents";

componentStyleSheet.addStyles({
    "doric-input": {
        display: 'inline-block',
        position: 'relative',
        top: 0,
        left: 0,
        display: 'block',
        margin: 3,
        paddingTop: 22,
        backgroundColor: 'white',
        verticalAlign: 'top'
    },
    "doric-input > input": {
        width: '100%',
        borderWidth: 0,
        padding: 5,
        borderBottom: `2px solid ${consts.theme.grayBG}`,
        backgroundColor: 'transparent',
        position: 'relative',
        top: 0,
        left: 0,
        zIndex: "+1"
    },
    "doric-input > input:focus": {
        outline: 'none'
    },
    "doric-input > doric-input-label": {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingLeft: 2,
        height: 22,
        transformOrigin: 'left top',
        transform: 'translate(0, 3px) scale(0.85)',
        transition: 'transform 150ms linear'
    },
    "doric-input > input:focus ~ doric-input-label:not([placeholder])": {
        color: '#435dec'
    },
    "doric-input > doric-input-label[placeholder]": {
        transform: 'translate(5px, 100%)',
        color: 'gray'
    },
    "doric-input > input + doric-input-flourish": {
        position: 'absolute',
        height: 2,
        backgroundColor: consts.theme.bluish,
        left: 0,
        right: 0,
        bottom: 0,
        transform: 'scaleX(0)',
        zIndex: "+2"
    },
    "doric-input > input:focus + doric-input-flourish": {
        transition: 'transform 100ms linear',
        transform: 'scaleX(1)'
    }
});
class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const {
            value = "",
            type = "text",
            label = null
        } = this.props;
        const labelProps = {
            placeholder: (value === "" || value === null) ? "" : null
        };
        const poc = this.props.onChange || (() => {});
        const onChange = evt => poc(evt.target.value, evt);

        return (
            <CustomEvents component="doric-input" onTap={() => this.refs.textInput.focus()}>
                <input {...{type, onChange, value}} ref="textInput" />
                <doric-input-flourish />
                <doric-input-label {...labelProps}>{label}</doric-input-label>
            </CustomEvents>
        );
    }
}

componentStyleSheet.addStyles({
    "doric-input-multiline": {
        display: 'inline-block',
        position: 'relative',
        top: 0,
        left: 0,
        display: 'block',
        margin: 3,
        paddingTop: 22,
        backgroundColor: 'white'
    },
    "doric-input-multiline > textarea": {
        width: '100%',
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 5,
        margin: 0,
        borderBottom: `2px solid ${consts.theme.grayBG}`,
        backgroundColor: 'transparent',
        position: 'relative',
        top: 0,
        left: 0,
        zIndex: "+1",
        resize: 'none'
    },
    "doric-input-multiline > textarea:focus": {
        outline: 'none'
    },

    "doric-input-multiline > textarea + doric-input-multiline-flourish": {
        position: 'absolute',
        height: 2,
        backgroundColor: consts.theme.bluish,
        left: 0,
        right: 0,
        bottom: 4,
        transform: 'scaleX(0)',
        zIndex: "+2"
    },
    "doric-input-multiline > textarea:focus + doric-input-multiline-flourish": {
        transition: 'transform 100ms linear',
        transform: 'scaleX(1)'
    }
});
const MultilineInput = (props) => {
    const {
        value,
        lines = 3
    } = props;
    const poc = props.onChange || (() => {});
    const onChange = evt => poc(evt.target.value);

    return (
        <CustomEvents component="doric-input-multiline">
            <textarea value={value} onChange={onChange} rows={lines} />
            <doric-input-multiline-flourish />
        </CustomEvents>
    );
};

const Input = {
    Text: props => <TextInput {...props} type="text" />,
    Password: props => <TextInput {...props} type="password" />,
    Search: props => <TextInput {...props} type="search" />,
    URL: props => <TextInput {...props} type="url" />,
    Email: props => <TextInput {...props} type="email" />,
    Number: props => <TextInput {...props} type="number" />,
    Multiline: MultilineInput
};

export default Input;
