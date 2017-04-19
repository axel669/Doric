const {CSS} = DoricUtil;

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

// const wideIMGurl = "http://pre09.deviantart.net/e5d4/th/pre/f/2011/259/c/a/bayonetta_wallpaper_by_meanhonkey1980-d49zzsu.jpg";
// const wideIMGurl = "http://www.imgbase.info/images/safe-wallpapers/video_games/bayonetta/45700_bayonetta.jpg";
// const wideIMGurl = "http://www.ffwa.eu/ff9/images/wallpaper/iifa-1024.jpg";
// const wideIMGurl = "http://a3.mzstatic.com/jp/r30/Purple/v4/d7/12/51/d71251a5-1f50-f6bc-d56a-8740ea2532fb/screen1136x1136.jpeg";
const wideIMGurl = "https://upload.wikimedia.org/wikipedia/en/b/b8/Bayonetta-character.png";

class TestLifecycle extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        // console.log('mounted');
    }
    componentWillUnmount = () => {
        // console.log('unmounted');
    }

    render = () => {
        return <div>{this.props.children}</div>;
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
            num: 0,
            r: 0,
            g: 0,
            b: 0,
            tab: 0
        };
    }

    render = () => {
        // console.log('wat', Date.now());
        return (
            <div style={{width: '100%', height: '100%'}}>
                <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
                    <Doric.Card title="Testing">
                        <Doric.Image source={wideIMGurl} width="100%" height={150} />
                        <Doric.Input.Text value={this.state.text} onChange={text => this.setState({text})} label="Woah" />
                        <Doric.Slider value={this.state.num} onChange={num => this.setState({num})} min={0} max={100} />
                    </Doric.Card>
                    <Doric.Button text="Navigate?" raised onTap={() => App.nav.push('/test')} />
                    {/* <Doric.Card>
                        <Doric.Input.Multiline value={this.state.text2} onChange={text2 => this.setState({text2})} />
                    </Doric.Card> */}
                    <Doric.Tabs onChange={tab => this.setState({tab})} selectedIndex={this.state.tab} height={250}>
                        <TestLifecycle tabImage={wideIMGurl}>
                            {range.array(20, i => <div>{i}</div>)}
                        </TestLifecycle>
                        <TestLifecycle tabTitle="B" tabIcon="ion-ionic">2</TestLifecycle>
                        <TestLifecycle tabTitle="C">3</TestLifecycle>
                        <TestLifecycle tabIcon="ion-checkmark-circled">4</TestLifecycle>
                    </Doric.Tabs>
                </div>
            </div>
        );
    }
}

const arrayFind = Array.prototype.find;
class Movable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
    }

    setup = (evt) => {
        const [touch] = evt.changedTouches;
        const id = touch.identifier;
        const {x, y} = this.state;
        const startingPoint = {
            x: touch.clientX,
            y: touch.clientY
        };
        this.update = (evt) => {
            const touch = evt.changedTouches::arrayFind(touch => touch.identifier === id);
            if (touch === undefined) {
                return;
            }

            const dx = touch.clientX - startingPoint.x;
            const dy = touch.clientY - startingPoint.y;
            this.setState({
                x: x + dx,
                y: y + dy
            });
        };
        (this.props.onDragStart || (() => {}))(this);
    }
    move = (evt) => {
        this.update(evt);
        (this.props.onDrag || (() => {}))(this);
        // cblog(evt);
    }
    stop = () => {
        (this.props.onDragEnd || (() => {}))(this);
    }

    render = () => {
        const {x, y} = this.state;
        const transform = `translate(${x}px, ${y}px)`;
        return <div style={{transform, display: 'inline-block'}} onTouchMove={this.move} onTouchStart={this.setup} onTouchEnd={this.stop}>{this.props.children}</div>;
    }
}

const Test = () => {
    return (
        <Doric.Screen title="Screen Test">
            <div onTouchMove={evt => evt.target.style.transform = `translate(${evt.changedTouches[0].clientX}px, ${evt.changedTouches[0].clientY}px)`} style={{width: 100, height: 100, backgroundColor: 'cyan'}} />
            <Movable onDrag={component => }>
                <div style={{width: 100, height: 100, backgroundColor: 'cyan'}} />
            </Movable>
        </Doric.Screen>
    );
};

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

let actions = [<Doric.Button text="First" />, <Doric.Button text="Second" />];

App.start(
    <Route>
        <Route path="/" component={Test} />
        <Route path="/test" component={() => <div>LOL</div>} />
    </Route>
);
