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

// const wideIMGurl = "http://pre09.deviantart.net/e5d4/th/pre/f/2011/259/c/a/bayonetta_wallpaper_by_meanhonkey1980-d49zzsu.jpg";
// const wideIMGurl = "http://www.imgbase.info/images/safe-wallpapers/video_games/bayonetta/45700_bayonetta.jpg";
// const wideIMGurl = "http://www.ffwa.eu/ff9/images/wallpaper/iifa-1024.jpg";
// const wideIMGurl = "http://a3.mzstatic.com/jp/r30/Purple/v4/d7/12/51/d71251a5-1f50-f6bc-d56a-8740ea2532fb/screen1136x1136.jpeg";
// const wideIMGurl = "https://upload.wikimedia.org/wikipedia/en/b/b8/Bayonetta-character.png";
const urls = {
    bay: "http://pre09.deviantart.net/e5d4/th/pre/f/2011/259/c/a/bayonetta_wallpaper_by_meanhonkey1980-d49zzsu.jpg",
    anissa: "https://drive.google.com/uc?export=download&id=0B2Lw_bHTHaI4Q0VfZUtfb0RJaDQ",
    anissa2: "https://drive.google.com/uc?export=download&id=0B2Lw_bHTHaI4enZMWFNWZU9Wc2c",
    kat: "https://drive.google.com/uc?export=download&id=0B2Lw_bHTHaI4UEVwVVB1ZjN1R0k"
};

const lineColor = 'gray';
App.styleSheet.addStyles({
    "test-tabs": {
        position: 'relative',
        top: 0,
        left: 0,
        display: 'block'
    },
    "test-tabs-bar": {
        height: 35,
        display: 'block',
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: '#4285f4'
    },
    "test-tabs-tab": {
        position: 'relative',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'absolute',
        opacity: 0.6,
        color: 'white'
    },
    "test-tabs-tab[selected]": {
        opacity: 1
    },
    "test-tabs-tab[selected]::after": {
        content: `""`,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        backgroundColor: '#ffae22'
    },
    "test-tabs-content": {
        display: 'block',
        position: 'absolute',
        top: 35,
        bottom: 0,
        left: 0,
        right: 0
    },
    "test-tabs-content-wrapper": {
        width: '100%',
        height: '100%',
        display: 'block',
        overflow: 'auto'
    }
});

const Tabs = props => {
    const {
        keepAlive = false,
        selectedIndex = 0,
        height = 100,
        unmountOnChange = false
    } = props;
    const children = React.Children.toArray(props.children);
    const onChange = props.onChange || (() => {});
    const size = 100 / children.length;

    const tabs = children.map(
        (tab, index) => {
            const props = {
                selected: (index === selectedIndex) || null,
                style: {
                    width: `${size}%`,
                    left: `${size * index}%`
                },
                onTap (evt) {
                    onChange(index);
                }
            };
            const tabTitle = tab.props.tabTitle;
            const tabIcon = tab.props.tabIcon || null;
            const tabImage = tab.props.tabImage || null;

            let tabContent = null;
            if (tabImage !== null) {
                tabContent = <Image source={tabImage} width="100%" height="100%" />;
            } else {
                tabContent = [<div>{tabTitle}</div>];
                if (tabIcon !== null) {
                    tabContent.unshift(<div style={{padding: 3}}><Doric.Icon icon={tabIcon} /></div>);
                }
            }

            return <Doric.CustomEvents component="test-tabs-tab" {...props}>{tabContent}</Doric.CustomEvents>;
        }
    );

    let displayChidren = null;
    if (unmountOnChange === false) {
        displayChidren = children.map(
            (child, index) => {
                const display = (index === selectedIndex) ? null : 'none';
                return <test-tabs-content-wrapper style={{display}} key={index}>{child}</test-tabs-content-wrapper>;
            }
        );
    } else {
        displayChidren = <test-tabs-content-wrapper key={selectedIndex}>{children[selectedIndex]}</test-tabs-content-wrapper>;
    }

    return (
        <test-tabs style={{height}}>
            <test-tabs-bar>{tabs}</test-tabs-bar>
            <test-tabs-content>
                {displayChidren}
            </test-tabs-content>
        </test-tabs>
    );
};

App.styleSheet.addStyles({
    "doric-background-image": {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        display: 'block',
        overflow: 'auto',
    }
});
const BackgroundImage = ({children, style = {}, source, ...props}) => {
    const imgStyle = {
        backgroundImage: `url("${source}")`,
        ...style
    };
    return <doric-background-image {...props} style={imgStyle}>{children}</doric-background-image>;
};

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }

    updateState = (name) =>
        (value) => this.setState({
            [name]: value
        })

    stateResponder = (property, event) => ({
        [property]: this.state[property],
        [event]: this.updateState(property)
    })

    render = () => {
        return (
            <Doric.Screen title="Screen Test">
                <BackgroundImage source={urls.anissa2}>
                    {range.array(30, i => <div>{i}</div>)}
                </BackgroundImage>
                {/* <Tabs height="100%" {...this.stateResponder('selectedIndex', 'onChange')}>
                    <Doric.Image source={urls.anissa} width="100%" height="75%" tabTitle="1" />
                    <Doric.Image source={urls.anissa2} width="100%" height="75%" tabTitle="2" />
                    <Doric.Image source={urls.kat} width="100%" height="75%" tabTitle="3" />
                </Tabs> */}
            </Doric.Screen>
        );
    }
}

App.styleSheet.addStyles({
    "doric-button.fancy": {
        display: ['-webkit-flex', 'flex']
    },
    "doric-button.fancy[pressed]:after": {
        backgroundColor: CSS.rgba(0, 200, 200, 0.25)
    }
});

let actions = [<Doric.Button text="First" />, <Doric.Button text="Second" />];

App.start(
    <Route>
        <Route path="/" component={Test} />
        <Route path="/test" component={() => <div>LOL</div>} />
    </Route>
);
