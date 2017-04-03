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
            b: 0
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
                    <Doric.Card>
                        <Doric.Input.Multiline value={this.state.text2} onChange={text2 => this.setState({text2})} />
                    </Doric.Card>
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

    let actions = [<Doric.Button text="First" />, <Doric.Button text="Second" />];

    App.render(
        <Main />
    );
};
start();
