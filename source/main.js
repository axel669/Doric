import React from 'react';
import ReactDOM from 'react-dom';

import icons from 'util/icons';
import {warningFunc} from 'util/utils';
import consts from 'util/consts';

import "util/chrono";
import "util/gesture";
import "util/deviceready";

import theme from 'util/theme';
import CustomEvents from "component/CustomEvents";
import Grid from 'component/grid';

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

componentStyleSheet.addStyles({
    "doric-button": {
        display: ['-webkit-inline-flex', 'inline-flex'],
        color: theme.button.text.color,
        padding: '0.7em 0.5em',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        userSelect: 'none',
        borderRadius: 3,
        borderWidth: 0,
        overflow: 'hidden',
        marginLeft: 5,
        marginRight: 5
    },
    "doric-button:after": {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transition: 'background-color 250ms linear'
    },
    "doric-button[pressed]:after": {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        transition: 'none'
    },

    "doric-button[disabled]": {
        boxShadow: 'none'
    },
    "doric-button[raised]": {
        boxShadow: theme.general.boxShadow
    },
});
const Button = props => {
    const {
        text = null,
        children,
        className = "",
        ...passThrough
    } = props;

    return <CustomEvents component="doric-button" {...passThrough} class={className}>{text}{children}</CustomEvents>;
};

componentStyleSheet.addStyles({
    "doric-card": {
        display: 'block',
        boxShadow: theme.general.boxShadow,
        margin: 5,
        borderRadius: 3,
        overflow: 'hidden'
    },
    "doric-card .content": {
        padding: 5
    },
    "doric-card .title": {
        position: 'relative',
        overflow: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        fontWeight: 900,
        fontSize: 18,
        padding: 5,
        borderBottom: '1px solid lightgray'
    },
    "doric-card .actions": {
        padding: 5,
        borderTop: '1px solid lightgray'
    }
});
const Card = props => {
    let {
        children,
        title = null,
        actions = null,
        ...passThrough
    } = props;
    let titleElement = null;
    let actionElement = null;

    if (title !== null) {
        titleElement = <div className="title">{title}</div>;
    }
    if (actions !== null) {
        actionElement = <div className="actions">{actions}</div>;
    }

    return (
        <doric-card {...passThrough}>
            {titleElement}
            <div className="content">{children}</div>
            {actionElement}
        </doric-card>
    );
};

componentStyleSheet.addStyles({
    "doric-icon": {
        display: 'inline',
        fontSize: 18,
        fontFamily: "Ionic"
    }
});
const Icon = ({icon, className, ...passThrough}) => <doric-icon {...passThrough} class={className}>{icons[icon]}</doric-icon>;

const IconButton = ({icon, text = "", children, ...props}) => <Button {...props} text={<Icon icon={icon} />}>{text}{children}</Button>;

componentStyleSheet.addStyles({
    "doric-progress": {
        display: 'block',
        height: 10,
        backgroundColor: "#e0e0e0",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        position: 'relative'
    },
    "doric-progress-bar": {
        height: '100%',
        width: '100%',
        position: 'absolute',
        transformOrigin: 'left center',
        transition: 'transform 200ms ease-out',
    },
    "doric-progress-bar.primary": {
        backgroundColor: '#4285f4',
    },
    "doric-progress-bar.secondary": {
        backgroundColor: '#b3cefb',
    }
});
const Progress = ({progress, secondaryProgress = null, className, children, ...passThrough}) => {
    const scale = `scaleX(${progress})`;
    let secondaryProgressBar = null;

    if (secondaryProgress !== null) {
        const scale2 = `scaleX(${secondaryProgress})`;
        secondaryProgressBar = <doric-progress-bar class="secondary" style={{WebkitTransform: scale2, transform: scale2}} />
    }

    return (
        <doric-progress class={className} {...passThrough}>
            {secondaryProgressBar}
            <doric-progress-bar class="primary" style={{WebkitTransform: scale, transform: scale}} />
        </doric-progress>
    );
}

componentStyleSheet.addStyles({
    "doric-center-content": {
        display: ['-webkit-inline-flex', 'inline-flex'],
        alignItems: 'center',
        justifyContent: 'center'
    },
    "doric-align-content": {
        display: ['-webkit-inline-flex', 'inline-flex'],
    },
    "doric-center-content.block, doric-align-content.block": {
        display: ['-webkit-flex', 'flex']
    }
});
const CenterContent = ({width, height, className = "", block, style = {}, ...passThrough}) =>
    <doric-center-content class={`${block ? "block" : ""} ${className}`.trim()} {...passThrough} style={{...style, width, height}} />;
const AlignContent = ({width, height, className = "", block, horizontal = "center", vertical = "center", style = {}, ...passThrough}) =>
    <doric-align-content
        class={`${block ? "block" : ""} ${className}`.trim()}
        {...passThrough}
        style={{
            ...style,
            width,
            height,
            WebkitAlignItems: vertical,
            WebkitJustifyContent: horizontal,
            alignItems: vertical,
            justifyContent: horizontal
        }} />;


componentStyleSheet.addStyles({
    "@keyframes spinner-rotate": {
        from: {
            transform: 'rotate(0)'
        },
        to: {
            transform: 'rotate(360deg)'
        }
    },
    "div.spinner": {
        position: 'relative',
    },
    "div.spinner .hex": {
        width: 22,
        height: 38,
        position: 'absolute',
        left: -11,
        top: -19,
    },
    "div.spinner > div": {
        animationName: 'spinner-rotate',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDuration: '2000ms',
    },
    "div.spinner > .outer": {
        animationDirection: 'reverse'
    },
    "div.spinner > .inner > .hex": {
        backgroundColor: 'white'
    },
    "div.spinner > .outer > .hex": {
        backgroundColor: consts.theme.bluish
    }
});
const Spinner = () => (
    <doric-spinner>
        <CenterContent width={45} height={45}>
            <div className="spinner">
                <div className="outer">
                    <div className="hex" style={{transform: "rotate(30deg)"}} />
                    <div className="hex" style={{transform: "rotate(90deg)"}} />
                    <div className="hex" style={{transform: "rotate(150deg)"}} />
                </div>
                <div className="inner">
                    <div className="hex" style={{transform: "rotate(30deg) scale(0.5)"}} />
                    <div className="hex" style={{transform: "rotate(90deg) scale(0.5)"}} />
                    <div className="hex" style={{transform: "rotate(150deg) scale(0.5)"}} />
                </div>
            </div>
        </CenterContent>
    </doric-spinner>
);

componentStyleSheet.addStyles({
    "doric-image": {
        display: 'inline-block',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    }
});
const Image = ({source, cover = false, contain = false, width = null, height = null, style = {}, ...passThrough}) => {
    let bgSize = 'contain';

    if (cover === true && contain === false) {
        bgSize = 'cover';
    }

    return <doric-image style={{...style, backgroundImage: `url("${source}")`, width, height, backgroundSize: bgSize}} {...passThrough} />;
}


componentStyleSheet.addStyles({
    "doric-checkbox": {
        position: 'relative',
        display: 'block',
        userSelect: 'none'
    },
    "doric-checkbox[disabled='true']": {
        color: 'gray',
        opacity: 0.6
    },
    "doric-checkbox:after": {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transition: consts.css.backgroundTransition
    },
    "doric-checkbox[pressed]:not([disabled='true']):after": {
        backgroundColor: CSS.rgba(0, 0, 0, 0.25),
        transition: 'none'
    },
    "doric-checkbox doric-icon": {
        transition: 'color 250ms linear'
    },
    "doric-checkbox[checked='true']:not([disabled='true']) doric-icon": {
        color: consts.theme.bluish
    }
});
const Checkbox = props => {
    const {
        checked = false,
        children,
        label,
        onChange = warningFunc("Checkbox has no onChange function"),
        onIcon = "ion-android-checkbox",
        offIcon = "ion-android-checkbox-outline-blank",
        side = 'left',
        className = "",
        style = {},
        ...passThrough
    } = props;
    const change = () => {
        if (props.disabled !== true) {
            onChange(checked === false);
        }
    }
    const iconName = (checked === true) ? onIcon : offIcon;
    const padding = {
        padding: 5,
        [`padding${side.charAt(0).toUpperCase()}${side.slice(1)}`]: 30
    };

    return (
        <CustomEvents component="doric-checkbox" class={className} onTap={change} {...passThrough} style={{...style, ...padding}} checked={checked}>
            <CenterContent data-no-press style={{[side]: 0, top: 0, position: 'absolute'}} width={30} height="100%">
                <Icon icon={iconName} data-no-press style={{fontSize: 26}} />
            </CenterContent>
            {label}{children}
        </CustomEvents>
    );
};


componentStyleSheet.addStyles({
    "doric-toggle": {
        display: 'block',
        position: 'relative',
        userSelect: 'none'
    },
    "doric-toggle[disabled='true']": {
        color: 'gray',
        opacity: 0.6
    },
    "doric-toggle:after": {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transition: consts.css.backgroundTransition
    },
    "doric-toggle[pressed]:not([disabled='true']):after": {
        backgroundColor: CSS.rgba(0, 0, 0, 0.25),
        transition: 'none'
    },
    "doric-toggle-switch": {
        width: 36,
        height: 14,
        borderRadius: 7,
        backgroundColor: consts.theme.grayBG,
        position: 'relative',
        transition: 'background-color 50ms linear'
    },
    "doric-toggle:not([disabled='true']) doric-toggle-switch[on='true']": {
        backgroundColor: '#b3cefb'
    },
    "doric-toggle-switch:after": {
        content: "''",
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
        position: 'absolute',
        top: -3,
        left: -1,
        width: 20,
        height: 20,
        borderRadius: 11,
        backgroundColor: 'gray',
        transition: 'transform 50ms linear, background-color 50ms linear'
    },
    "doric-toggle-switch[on='true']:after": {
        transform: 'translateX(18px)'
    },
    "doric-toggle:not([disabled='true']) doric-toggle-switch[on='true']:after": {
        backgroundColor: consts.theme.bluish
    }
});
const Toggle = props => {
    const {
        on = false,
        label,
        children,
        side = 'left',
        style = {},
        className = "",
        onChange = warningFunc("Toggle has no change function"),
        ...passThrough
    } = props;
    const change = () => {
        if (props.disabled !== true) {
            onChange(on === false);
        }
    }
    const padding = {
        padding: 5,
        [`padding${side.charAt(0).toUpperCase()}${side.slice(1)}`]: 45
    };

    return (
        <CustomEvents component="doric-toggle" on={on} style={{...style, ...padding}} onTap={change} class={className} {...passThrough}>
            <CenterContent data-no-press style={{[side]: 0, top: 0, position: 'absolute'}} width={45} height="100%">
                <doric-toggle-switch on={on} data-no-press />
            </CenterContent>
            {label}{children}
        </CustomEvents>
    );
};

componentStyleSheet.addStyles({
    "doric-pinboard": {
        display: 'inline-block',
        position: 'relative',
        overflow: 'auto'
    },
    "doric-pin": {
        position: 'absolute'
    }
});
const Pinboard = ({style = {}, width = "100%", height = "100%", className = "", children, ...passThrough}) => {
    children = React.Children.toArray(children);

    children = children.map(
        (child, index) => {
            const {pinStyle, ...childProps} = child.props;
            const actualChild = <child.type {...childProps} />;
            return <doric-pin key={index} style={pinStyle}>{actualChild}</doric-pin>;
        }
    );

    return <doric-pinboard class={className} style={{...style, width, height}}>{children}</doric-pinboard>;
};


const Flexbox = props => {
    const {
        colCount,
        minWidth = null,
        maxWidth = null
    } = props;
    let chidren = React.Children.toArray(props.children);
};



// const wideIMGurl = "http://pre09.deviantart.net/e5d4/th/pre/f/2011/259/c/a/bayonetta_wallpaper_by_meanhonkey1980-d49zzsu.jpg";
// const wideIMGurl = "http://www.imgbase.info/images/safe-wallpapers/video_games/bayonetta/45700_bayonetta.jpg";
const wideIMGurl = "http://www.ffwa.eu/ff9/images/wallpaper/iifa-1024.jpg";
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
                {/*{Date.now()}
                <br />*/}
                {/*<Image source={wideIMGurl} height={300} width="100%" />
                <div style={{paddingLeft: 1, paddingTop: 1}}>
                    {range.array(17, i => <div style={{backgroundColor: 'cyan', width: `calc(${f}% + 1px)`, display: 'inline-block', border: '1px solid black', borderWidth: '4px 1px', marginLeft: -1, marginTop: -4}}>{i}</div>)}
                </div>*/}
                <Grid cellSpacingH={2} cellSpacingV={2} colCount={8} cellHeight={null}>
                    {range.array(47, i => <div style={{width: '100%', height: (i % 2 + 1) * 25, backgroundColor: 'cyan', display: 'inline-block'}}>{i}</div>)}
                </Grid>
                {/*<Toggle label="Test" on={this.state.toggle} onChange={toggle => this.setState({toggle})} disabled side="right" />*/}
                {/*<Pinboard height="80%">
                    <Toggle pinStyle={{top: 0, left: 0, right: 0}} on={this.state.toggle} onChange={toggle => this.setState({toggle})} disabled side="right">
                        <Image source={wideIMGurl} style={{backgroundPosition: 'right center'}} width="100%" height={75} />
                    </Toggle>
                    <Toggle pinStyle={{bottom: -50, left: 0, right: -50}} on={this.state.toggle} onChange={toggle => this.setState({toggle})}>
                        <Image source={wideIMGurl} style={{backgroundPosition: 'left center'}} width="100%" height={75} />
                    </Toggle>
                </Pinboard>*/}
                {/*<div style={{display: 'table', borderCollapse: 'collapse', width: '100%'}}>
                    {rows}
                </div>*/}
                {/*<Button className="fancy" style={{color: 'blue'}} onHold={start}><img src="http://img06.deviantart.net/32ae/i/2016/050/b/b/bayonetta_fanart_by_kike1988-d9scsbb.jpg" width="75" />Demo Text</Button>
                <Button raised disabled><img src="http://img06.deviantart.net/32ae/i/2016/050/b/b/bayonetta_fanart_by_kike1988-d9scsbb.jpg" width="75" />Demo Text</Button>
                <Card title="Testing" {...{actions}}>Test</Card>*/}
                {/*<CustomEvents component={"div"} onHold={cblog} style={{WebkitUserSelect: 'none', padding: 5, fontSize: 20}}>test</CustomEvents>*/}
                {/*<HBox>
                    {range.array(10, i => <div style={{border: '1px solid black', padding: 3, width: '100%'}}>{i}</div>)}
                </HBox>
                <VBox>
                    {range.array(10, i => <span style={{padding: 3, width: 250}}>{i}</span>)}
                </VBox>
                <div style={[{backgroundColor: 'cyan'}, {height: 20}]} />*/}
                {/*<Shadow nodeName="shadow-div">Testing?</Shadow>
                <Shadow nodeName="shadow-image">
                    <style>{`
                        div {
                            background-image: url("http://img06.deviantart.net/32ae/i/2016/050/b/b/bayonetta_fanart_by_kike1988-d9scsbb.jpg");
                            background-repeat: no-repeat;
                            background-size: contain;
                        }
                    `}</style>
                    <div style={{height: 350}} />
                </Shadow>
                <BetterButton text="Bestest" />
                <Shadow nodeName="event-test">
                    <BetterButton text="Nested Shadow" />
                </Shadow>
                <input type="text" />
                <div data-synth-id={2}>{superNest(15)}</div>*/}
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
