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

App.styleSheet.addStyles({
    "doric-button.stat": {
        margin: 0,
        width: '100%',
        height: '100%',
        borderRadius: 50,
        overflow: 'hidden'
    },
    "doric-grid.stat": {
        width: 320
    },
    "doric-grid.stat:nth-child(odd)": {
        backgroundColor: CSS.rgba(200, 200, 200, 0.7)
    }
});
const costAt = {
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 2,
    14: 2
};
const StatDisplay = (props) => {
    const {
        name,
        base,
        race,
        points,
        onChange = (() => {})
    } = props;
    const minus = () => {
        if (base > 8) {
            onChange(name, base - 1, points + costAt[base - 1]);
        }
    };
    const plus = () => {
        if (points > 0 && base < 15 && points >= costAt[base]) {
            onChange(name, base + 1, points - costAt[base]);
        }
    };
    let bonusText = Math.floor((base + race) / 2 - 5);

    if (bonusText >= 0) {
        bonusText = `+${bonusText}`;
    }

    return (
        <Doric.Grid cellHeight={35} className="stat">
            <Doric.CenterContent width="100%" height="100%" colSpan={3} style={{fontWeight: 'bold'}}>{name.toUpperCase()}</Doric.CenterContent>
            <Doric.IconButton icon="ion-minus-round" className="stat" onTap={minus} />
            <Doric.CenterContent width="100%" height="100%">{base}</Doric.CenterContent>
            <Doric.IconButton icon="ion-plus-round" className="stat" onTap={plus} />
            <Doric.CenterContent colSpan={2} width="100%" height="100%">{race}</Doric.CenterContent>
            <Doric.CenterContent colSpan={2} width="100%" height="100%">{base + race}</Doric.CenterContent>
            <Doric.CenterContent colSpan={2} width="100%" height="100%">{bonusText}</Doric.CenterContent>
        </Doric.Grid>
    );
};

class PointBuyScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: {
                str: {
                    base: 8,
                    race: 0
                },
                dex: {
                    base: 8,
                    race: 1
                },
                con: {
                    base: 8,
                    race: 0
                },
                int: {
                    base: 8,
                    race: 1
                },
                wis: {
                    base: 8,
                    race: 0
                },
                cha: {
                    base: 8,
                    race: 2
                }
            },
            points: 27
        };
    }

    updateStat = (name, value, newPoints) => {
        let {stats, points} = this.state;

        stats[name].base = value;
        points = newPoints;
        this.setState({stats, points});
    }

    render = () => {
        const {stats, points} = this.state;

        return (
            <Doric.Screen title="D&D Point Buy">
                <div style={{margin: 'auto', width: 320}}>
                    <div style={{padding: 3}}>
                        Points Remaining: {points}
                    </div>
                    {Object.entries(stats).map(
                        ([name, {base, race}]) => <StatDisplay {...{name, base, race, points}} onChange={this.updateStat} />
                    )}
                </div>
            </Doric.Screen>
        );
    }
}

// let actions = [<Doric.Button text="First" />, <Doric.Button text="Second" />];

// App.styleSheet.addStyles({
//     "doric-calendar-day": {
//         height: 30,
//         display: ['-webkit-inline-flex', 'inline-flex'],
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     "doric-calendar-day.grayed": {
//         backgroundColor: 'lightgray'
//     },
//     "doric-calendar-day.grayed": {
//         backgroundColor: 'lightgray'
//     }
// });
App.styleSheet.addStyles({
    "doric-button.calendar": {
        width: '100%',
        height: '100%',
        margin: 0,
        borderRadius: 0
    }
});
class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: chrono().year,
            month: chrono().month
        };
    }

    render = () => {
        const {selectedDate, onChange = () => {}} = this.props;
        const {month, year} = this.state;

        const startDate = selectedDate
            .startOf("month")
            .startOf("week");
        const dayMarkers = range.array(7)
            .map(
                i => {
                    const text = startDate
                        .shift(i, 'days')
                        .format("{weekday/short}");

                    return <Doric.CenterContent width="100%" height="100%">{text}</Doric.CenterContent>;
                }
            );
        const dates = range.array(42)
            .map(
                i => {
                    const day = startDate.shift(i, 'days');

                    if (day.date === selectedDate.date
                        && day.month === selectedDate.month
                        && day.year === selectedDate.year) {

                        return <Doric.Button className="calendar" style={{backgroundColor: "#4285f4", color: "white"}} text={day.date + 1} />;
                    }
                    if (day.month === month) {
                        return <Doric.Button className="calendar" text={day.date + 1} onTap={() => onChange(day)} />;
                    }

                    return <Doric.Button className="calendar" disabled text={day.date + 1} />;
                }
            )

        return (
            <doric-calendar>
                <Doric.Pinboard height={50}>
                    <div pinInfo={{top: 0, left: 0}}>
                        {month}/{year}
                    </div>
                </Doric.Pinboard>
                <Doric.Grid colCount={7}>
                    {dayMarkers}
                    {dates}
                </Doric.Grid>
            </doric-calendar>
        );
    }
}

const Printer = () => {
    console.log("re-render!");
    return <div>Printer</div>;
};

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: chrono()
        };
    }

    dialog = async (data) => {
        class test extends React.Component {
            constructor(props) {
                super(props);
            }

            onFinish = (close) => {
                close('hi');
            }

            render = () => {
                const {close} = this.props;

                return (
                    <div>
                        <Doric.Button text="Close?" raised onTap={close} />
                        <Doric.Button text="Finish!" raised onTap={() => close(100)} />
                    </div>
                );
            }
        }

        const di = dialog.alert("test", "Data");
        console.log(await di.value);
    }

    render = () => {
        const showData = data => {
            dialog.alert({
                message: <pre>{JSON.stringify(data, null, '  ')}</pre>,
                title: "Data"
            });
        };

        return (
            <Doric.Screen title="Calendar Test">
                {/* <Calendar selectedDate={this.state.date} onChange={date => this.setState({date})} /> */}
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
