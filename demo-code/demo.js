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

const urls = {
    bay: "http://pre09.deviantart.net/e5d4/th/pre/f/2011/259/c/a/bayonetta_wallpaper_by_meanhonkey1980-d49zzsu.jpg",
    anissa: "https://drive.google.com/uc?export=download&id=0B2Lw_bHTHaI4Q0VfZUtfb0RJaDQ",
    anissa2: "https://drive.google.com/uc?export=download&id=0B2Lw_bHTHaI4enZMWFNWZU9Wc2c",
    kat: "https://drive.google.com/uc?export=download&id=0B2Lw_bHTHaI4UEVwVVB1ZjN1R0k"
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
        const topMenu = <div>
            <Doric.Button style={{display: 'flex'}} text="Test" onTap={() => App.nav.push("/test")} />
        </div>;

        return (
            <Doric.Screen title="Screen Test" menu={topMenu} backText="Test" onBack={() => cblog(1)} ref="screen">
                <Doric.BackgroundImage source={urls.anissa2}>
                    {range.array(30, i => <div>{i}</div>)}
                </Doric.BackgroundImage>
            </Doric.Screen>
        );
    }
}

let actions = [<Doric.Button text="First" />, <Doric.Button text="Second" />];

App.start(
    <Route>
        <Route path="/" component={Test} />
        <Route path="/test" component={() => <Doric.Screen title="LOL" backText="Back" />} />
    </Route>
);
