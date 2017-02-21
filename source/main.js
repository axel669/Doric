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

Math.rand = (a, b = null) => {
    if (b === null) {
        b = a;
        a = 0;
    }
    return Math.floor(Math.random() * (b - a + 1)) + a;
};

window.cblog = console.log.bind(console);
window.cberr = console.error.bind(console);

// App.start(
//     <Route path="/" component={() => <UI.Screen title="HI CJ" />} />
// );

if (String.prototype.repeat === undefined) {
    String.prototype.repeat = function (n) {
        let res = "";
        while (n > 0) {
            res += this;
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

class Main  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0.3,
            secondary: 0.7,
            checked: false,
            toggle: false
        };
    }

    render = () => {
        const cells = range.array(11, n => <div style={{display: 'table-cell', width: '53.333333%', border: '1px solid black'}}>{n}</div>);
        const rows = cells.reduce(
            (rows, cell, index) => {
                let current = rows[rows.length - 1];
                current.push(cell);
                if (current.length === 3 || index === cells.length - 1) {
                    current = <div style={{display: 'table-row'}}>{current}</div>;
                    rows[rows.length - 1] = current;
                    rows.push([]);
                }
                return rows;
            },
            [[]]
        ).slice(0, -1);
        const f = 100 / 12;

        return (
            <div style={{width: '100%', height: '100%'}}>
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
