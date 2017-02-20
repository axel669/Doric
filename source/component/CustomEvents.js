import React from 'react';
import ReactDOM from 'react-dom';

const traverse = (node, evt, handlers) => {
    const triggers = [];
    let current = node;
    let cont = true;

    evt.stopPropagation();
    evt.stopPropagation = () => cont = false;
    while (cont == true && current !== document.body && current !== null && current !== undefined) {
        if (handlers.has(current.dataset.synthId) === true) {
            handlers.get(current.dataset.synthId)(evt);
        }
        current = current.parentNode;
    }
};
const handlers = {};
let nextID = 0;
const genID = () => {
    nextID += 1;
    return nextID.toString();
};
const registerHandler = (type, id, handler) => {
    if (handlers[type] === undefined) {
        window.addEventListener(
            type,
            evt => traverse(evt.target, evt, handlers[evt.type.toLowerCase()]),
            true
        );
        handlers[type] = new Map();
    }
    handlers[type].set(id, handler);
};
const unregisterHandlers = id => {
    for (const mapping of Object.values(handlers)) {
        mapping.delete(id);
    }
};
window.showHandlers = () => cblog(handlers);

const nativeEvents = new Set([
    'onCut', 'onCopy', 'onPaste',
    'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate',
    'onKeyDown', 'onKeyPress', 'onKeyUp',
    'onFocus', 'onBlur',
    'onChange', 'onInput', 'onSubmit',
    'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp',
    'onSelect',
    'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart',
    'onScroll',
    'onWheel',
    'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting',
    'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration',
    'onTransitionEnd'
]);
class CustomEvents extends React.Component {
    constructor(props) {
        super(props);
        this.id = genID();
    }

    updateCallbacks = () => {
        for (const key of Object.keys(this.props)) {
            if (key.slice(0, 2) === 'on' && nativeEvents.has(key) === false) {
                registerHandler(key.slice(2).toLowerCase(), this.id, this.props[key]);
            }
        }
    }

    componentDidMount = () => {
        this.updateCallbacks();
        if (ReactDOM.findDOMNode(this).dataset.synthId === undefined) {
            console.warn(`${this.props.component.name} must pass the data-synth-id prop into the DOM elements rendered`);
        }
    }
    componentDidUpdate = () => {
        unregisterHandlers(this.id);
        this.updateCallbacks();
    }
    componentWillUnmount = () => {
        unregisterHandlers(this.id);
    }

    render = () => {
        if ((this.props.component || null) === null) {
            throw new Error("component must be passed into CustomEvents");
        }
        const Component = this.props.component;
        const props = Object.keys(this.props).reduce(
            (p, key) => {
                if ((key !== 'component' && key.slice(0, 2) !== 'on') || nativeEvents.has(key) === true) {
                    p[key] = this.props[key];
                }
                return p;
            },
            {}
        );
        return <Component data-synth-id={this.id} {...props} />;
    }
}
