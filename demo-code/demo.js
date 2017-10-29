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
// let actions = [<Doric.Button text="First" />, <Doric.Button text="Second" />];

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Doric.Screen title="Test">
                <Doric.Checkbox side="center" />
                <Doric.Image width="100%" height="100%" source={urls.anissa2} />
            </Doric.Screen>
        );
    }
}

App.start(
    <Route>
        <Route path="/" component={Main} />
        {/* <Route path="/test" component={() => <Doric.Screen title="LOL" backText="Back" />} /> */}
    </Route>
);
