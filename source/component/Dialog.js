import React from 'react';

import componentStyleSheet from 'source/util/app';

import spinnerGIF from 'source/data-uri/spinner.gif.source';

componentStyleSheet.addStyles({
    "doric-button[fill]": {
        width: '100%',
        height: '100%',
        margin: 0,
        borderRadius: 0
    },
    "@keyframes doric-alert-appear": {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    },
    "doric-alert-wrapper": {
        animationName: 'doric-alert-appear',
        animationDuration: '250ms',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    "doric-alert": {
        backgroundColor: 'white',
        maxWidth: '80vw',
        borderRadius: 3,
        width: '100%',
        marginTop: '5vh',
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden'
    },
    "doric-alert-title": {
        display: 'block',
        borderBottom: '1px solid lightgray',
        padding: 2,
        fontSize: 18,
        backgroundColor: "#5e9bff",
        color: 'white'
    }
});
const dialogStack = [];
window.addEventListener(
    'keydown',
    evt => {
        if (evt.keyCode === 27 && dialogStack.length > 0) {
            dialogStack.slice(-1)[0].escape(null);
        }
    }
);
const dialog = {
    show(dialogInfo) {
        const {
            content: Content,
            props = {},
            title = null,
            disableEscape = false,
            buttons = [
                {text: "Ok", close: true}
            ]
        } = dialogInfo;
        const titleElement = title === null
            ? null
            : <doric-alert-title>{title}</doric-alert-title>

        const triggers = {};
        const dialogButtons = buttons.map(
            ({text, close = false, className = '', trigger = null}) => {
                let onTap;

                switch (true) {
                    case (close === true):
                        onTap = () => dobj.close(null);
                        break;

                    case (trigger !== null):
                        onTap = () => ref[trigger](dobj.close);
                        break;
                }

                return <Doric.Button {...{className, text, onTap}} fill />;
            }
        );
        const renderElem = document.createElement("div");

        let resolver;
        const valuePromise = new Promise(resolve => resolver = resolve);
        const close = (value = null) => {
            dialogStack.splice(dialogStack.indexOf(dobj), 1);
            document.body.removeChild(renderElem);
            resolver(value);
        }
        const dobj = {
            escape(value = null) {
                if (disableEscape !== true) {
                    close(value)
                }
            },
            close,
            value: valuePromise
        };
        let ref;

        const container = (
            <doric-alert-wrapper>
                <doric-alert>
                    {titleElement}
                    <div style={{maxHeight: '33vh', borderBottom: '1px solid lightgray'}}>
                        <Content {...props} {...triggers} ref={self => ref = self} close={dobj.close} />
                    </div>
                    <Doric.Grid cellHeight={30} colCount={dialogButtons.length}>
                        {dialogButtons}
                    </Doric.Grid>
                </doric-alert>
            </doric-alert-wrapper>
        );

        dialogStack.push(dobj);
        document.body.appendChild(renderElem);
        ReactDOM.render(container, renderElem);

        return dobj;
    },
    closeTop(value = null) {
        if (dialogStack.length > 0) {
            dialogStack.slice(-1)[0].close(value);
        }
    }
};
dialog.alert = (options, ...others) => {
    if (typeof options === 'string') {
        options = {
            message: options,
            title: others[0]
        }
    }

    const {message, title = null} = options;

    return dialog.show({
        content: () => <div style={{padding: 3, textAlign: 'center'}}>{message}</div>,
        title
    });
};
class ConfirmDialogDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    trueResponse = (close) => close(true)

    render = () => {
        return <div style={{padding: 3, textAlign: 'center'}}>{this.props.message}</div>;
    }
}
dialog.confirm = (options, ...others) => {
    if (typeof options === 'string') {
        options = {
            message: options,
            title: others[0]
        }
    }

    const {message, title = null, okText, cancelText} = options;

    return dialog.show({
        title,
        buttons: [
            {text: okText || "OK", trigger: 'trueResponse'},
            {text: cancelText || "Cancel", close: true}
        ],
        content: ConfirmDialogDisplay,
        props: {message}
    });
};

class PromptDialogDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.defaultValue};
    }

    finish = (close) => close(this.state.value)
    onEnter = (evt) => {
        evt.preventDefault();
        this.props.close(this.state.value);
    }

    render = () => {
        return (
            <form onSubmit={this.onEnter}>
                <Doric.Input.Text label={this.props.label} value={this.state.value} onChange={value => this.setState({value})} />
            </form>
        );
    }
}
dialog.prompt = (options, ...others) => {
    if (typeof options === 'string') {
        options = {
            message: options,
            title: others[0]
        }
    }

    const {message, value = "", title = null, okText, cancelText} = options;

    return dialog.show({
        title,
        buttons: [
            {text: okText || "OK", trigger: 'finish'},
            {text: cancelText || "Cancel", close: true}
        ],
        content: PromptDialogDisplay,
        props: {
            label: message,
            defaultValue: value
        }
    });
}

dialog.spinner = (message) => dialog.show({
    content: () => <div style={{textAlign: 'center'}}>{message}<Doric.Image width="100%" height={30} source={spinnerGIF} /></div>,
    buttons: [],
    disableEscape: true
})

window.dialog = dialog;
