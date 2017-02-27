import React from 'react';
import ReactDOM from 'react-dom';

import icons from 'util/icons';
import {warningFunc} from 'util/utils';
import consts from 'util/consts';

import "util/chrono";
import "util/gesture";
import "util/deviceready";

import theme from 'util/theme';
import Button from 'component/Button';
import Card from 'component/Card';
import {CenterContent, AlignContent} from 'component/ContentAligners';
import Checkbox from 'component/Checkbox';
import CustomEvents from "component/CustomEvents";
import Grid from 'component/Grid';
import {Icon, IconButton} from 'component/Icon';
import Image from 'component/Image';
import Pinboard from 'component/Pinboard';
import Progress from 'component/Progress';
import Spinner from 'component/Spinner';
import Toggle from 'component/Toggle';

import {CSS} from 'util/stylesheet';
import componentStyleSheet from 'util/app';

window.Doric = {
    Button,
    Card,
    CenterContent,
    AlignContent,
    Checkbox,
    CustomEvents,
    Grid,
    Icon,
    IconButton,
    Image,
    Pinboard,
    Progress,
    Spinner,
    Toggle
};

Math.rand = (a, b = null) => {
    if (b === null) {
        b = a;
        a = 0;
    }
    return Math.floor(Math.random() * (b - a + 1)) + a;
};

window.cblog = console.log.bind(console);
window.cberr = console.error.bind(console);

if (String.prototype.repeat === undefined) {
    String.prototype.repeat = function (n) {
        let res = "";
        while (n > 0) {
            res += this;
            n -= 1;
        }
        return res;
    };
}

window.range = {
    array(start, end = null, f = null) {
        const arr = [];

        if (f === null) {
            if (typeof end === 'function') {
                f = end;
                end = null;
            } else {
                f = i => i;
            }
        }
        if (end === null) {
            end = start;
            start = 0;
        }

        while (start < end) {
            arr.push(f(start));
            start += 1;
        }

        return arr;
    },
    *gen(start, end = null, f = null) {
        if (f === null) {
            if (typeof end === 'function') {
                f = end;
                end = null;
            } else {
                f = i => i;
            }
        }
        if (end === null) {
            end = start;
            start = 0;
        }

        while (start < end) {
            yield f(start);
            start += 1;
        }
    }
};

const HBox = ({children}) => {
    children = React.Children.toArray(children);
    children = children.map(child => <div style={{display: 'inline-block'}}>{child}</div>);
    return <div>{children}</div>
};
const VBox = ({children}) => {
    children = React.Children.toArray(children);
    children = children.map(child => <div>{child}</div>);
    return <div>{children}</div>
};

class Shadow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mounted: false};
    }

    componentDidMount = () => {
        const node = this.refs.root;
        const root = document.createElement(this.props.nodeName);
        const shadow = root.createShadowRoot();
        this.eventNode = root;
        node.parentNode.replaceChild(root, node);
        shadow.appendChild(node);
        this.setState({mounted: true});
        window.shadowNode = root;
    }

    render = () => {
        if (this.state.mounted === false) {
            return <mount-node ref="root" />;
        }
        return (
            <mount-node ref="root">
                {this.props.children}
            </mount-node>
        );
    }
}

const superNest = depth => {
    let child = null;
    if (depth > 0) {
        child = superNest(depth - 1);
    } else {
        child = <CustomEvents component="div" onTouchStart={evt => {cblog('a', evt); evt.stopPropagation();}}>super nest</CustomEvents>;
    }
    return <div>{child}</div>;
};

const wideIMGurl = "http://pre09.deviantart.net/e5d4/th/pre/f/2011/259/c/a/bayonetta_wallpaper_by_meanhonkey1980-d49zzsu.jpg";
// const wideIMGurl = "http://www.imgbase.info/images/safe-wallpapers/video_games/bayonetta/45700_bayonetta.jpg";
// const wideIMGurl = "http://www.ffwa.eu/ff9/images/wallpaper/iifa-1024.jpg";
// const wideIMGurl = "http://a3.mzstatic.com/jp/r30/Purple/v4/d7/12/51/d71251a5-1f50-f6bc-d56a-8740ea2532fb/screen1136x1136.jpeg";


componentStyleSheet.addStyles({
    "doric-input": {
        display: 'inline-block',
        position: 'relative',
        top: 0,
        left: 0,
        display: 'block',
        margin: 3,
        paddingTop: 22,
        backgroundColor: 'white'
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
        width: '100%',
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
        const poc = this.props.onChange || () => {};
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

const Input = {
    Text: props => <TextInput {...props} type="text" />,
    Password: props => <TextInput {...props} type="password" />,
    Search: props => <TextInput {...props} type="search" />,
    URL: props => <TextInput {...props} type="url" />,
    Email: props => <TextInput {...props} type="email" />,
    Number: props => <TextInput {...props} type="number" />
};

const find = Array.prototype.find;
componentStyleSheet.addStyles({
    "doric-range-input": {
        display: 'block',
        position: 'relative',
        top: 0,
        left: 0,
        height: 30
    },
    "doric-range-input-track": {
        position: 'absolute',
        top: 13,
        left: 12,
        right: 12,
        height: 4,
        backgroundColor: consts.theme.grayBG
    },
    "doric-range-input-thumb": {
        position: 'absolute',
        top: -10,
        width: 24,
        height: 24,
        borderRadius: 15,
        backgroundColor: consts.theme.bluish,
        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
        transform: 'translateX(-12px)'
    }
});
class RangeInput extends React.Component {
    constructor(props) {
        super(props);
        this.touchID = null;
    }

    touchStart = (evt) => {
        if (this.touchID !== null) {
            return;
        }
        const [touch] = evt.changedTouches;
        const track = this.refs.track.getBoundingClientRect();
        const thumb = this.refs.thumb.getBoundingClientRect();
        this.range = track.width;
        this.startPos = track.left;
        this.touchStartPos = touch.clientX;
        this.touchID = touch.identifier;
    }
    touchMove = (evt) => {
        const touch = evt.changedTouches::find(touch => touch.identifier === this.touchID);
        if (touch === undefined) {
            return;
        }
    }

    componentDidMount = () => {
        this.refs.thumb.addEventListener(
            'touchmove',
            evt => {
                evt.preventDefault();
            },
            {passive: false, capture: true}
        );
    }

    render = () => {
        const {min = 0, max = 10, value, color} = this.props;
        const pos = (value - min) / (max - min);
        const thumbStyle = {
            left: `${pos * 100}%`,
            backgroundColor: color
        };

        const events = {
            onTouchStart: this.touchStart,
            onTouchMove: this.touchMove,
            onTouchEnd: () => this.touchID = null
        };

        return (
            <doric-range-input>
                <doric-range-input-track ref="track">
                    <doric-range-input-thumb ref="thumb" style={thumbStyle} {...events} />
                </doric-range-input-track>
            </doric-range-input>
        );
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0.3,
            secondary: 0.7,
            checked: false,
            toggle: false,
            text: "",
            text2: "",
            num: 0
        };
    }

    render = () => {
        // const cells = range.array(11, n => <div style={{display: 'table-cell', width: '53.333333%', border: '1px solid black'}}>{n}</div>);
        // const rows = cells.reduce(
        //     (rows, cell, index) => {
        //         let current = rows[rows.length - 1];
        //         current.push(cell);
        //         if (current.length === 3 || index === cells.length - 1) {
        //             current = <div style={{display: 'table-row'}}>{current}</div>;
        //             rows[rows.length - 1] = current;
        //             rows.push([]);
        //         }
        //         return rows;
        //     },
        //     [[]]
        // ).slice(0, -1);
        // const f = 100 / 12;

        return (
            <div style={{width: '100%', height: '100%'}}>
                <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
                    <Doric.Card title="Testing">
                        <RangeInput value={3} />
                        <input type="range" value={this.state.num} onChange={evt => this.setState({num: evt.target.value})} />
                    </Doric.Card>
                    {range.array(30, n => <div>{n}</div>)}
                </div>
            </div>
        );
    }
}
const start = () => {
    // App.styleSheet = createStyleSheet();
    App.styleSheet.addStyles({
        "doric-button.fancy": {
            display: ['-webkit-flex', 'flex']
        },
        "doric-button.fancy[pressed]:after": {
            backgroundColor: CSS.rgba(0, 200, 200, 0.25)
        }
    });
    App.styleSheet.addStyles({
        "doric-checkbox.custom": {
            backgroundColor: CSS.rgba(Math.rand(255), Math.rand(255), Math.rand(255), 1)
        }
    });

    let actions = [<Button text="First" />, <Button text="Second" />];

    App.render(
        <Main />
    );
};
start();
