(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.testing = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _spinnerGif = require("source/data-uri/spinner.gif.source");

var _spinnerGif2 = _interopRequireDefault(_spinnerGif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _DoricUtil = DoricUtil,
    CSS = _DoricUtil.CSS;


if (String.prototype.repeat === undefined) {
    String.prototype.repeat = function (n) {
        var res = "";
        while (n > 0) {
            res += this;
            n -= 1;
        }
        return res;
    };
}

var urls = {
    bay: "http://pre09.deviantart.net/e5d4/th/pre/f/2011/259/c/a/bayonetta_wallpaper_by_meanhonkey1980-d49zzsu.jpg",
    anissa: "https://drive.google.com/uc?export=download&id=0B2Lw_bHTHaI4Q0VfZUtfb0RJaDQ",
    anissa2: "https://drive.google.com/uc?export=download&id=0B2Lw_bHTHaI4enZMWFNWZU9Wc2c",
    kat: "https://drive.google.com/uc?export=download&id=0B2Lw_bHTHaI4UEVwVVB1ZjN1R0k"
};

var Test = function (_React$Component) {
    (0, _inherits3.default)(Test, _React$Component);

    function Test(props) {
        (0, _classCallCheck3.default)(this, Test);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Test.__proto__ || (0, _getPrototypeOf2.default)(Test)).call(this, props));

        _this.updateState = function (name) {
            return function (value) {
                return _this.setState((0, _defineProperty3.default)({}, name, value));
            };
        };

        _this.stateResponder = function (property, event) {
            var _ref;

            return _ref = {}, (0, _defineProperty3.default)(_ref, property, _this.state[property]), (0, _defineProperty3.default)(_ref, event, _this.updateState(property)), _ref;
        };

        _this.render = function () {
            var topMenu = React.createElement(
                "div",
                null,
                React.createElement(Doric.Button, { style: { display: 'flex' }, text: "Test", onTap: function onTap() {
                        return App.nav.push("/test");
                    } })
            );

            return React.createElement(
                Doric.Screen,
                { title: "Screen Test", menu: topMenu, backText: "Test", onBack: function onBack() {
                        return cblog(1);
                    }, ref: "screen" },
                React.createElement(
                    Doric.BackgroundImage,
                    { source: urls.anissa2 },
                    range.array(30, function (i) {
                        return React.createElement(
                            "div",
                            null,
                            i
                        );
                    })
                )
            );
        };

        _this.state = {
            selectedIndex: 0
        };
        return _this;
    }

    return Test;
}(React.Component);

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
var costAt = {
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 1,
    13: 2,
    14: 2
};
var StatDisplay = function StatDisplay(props) {
    var name = props.name,
        base = props.base,
        race = props.race,
        points = props.points,
        _props$onChange = props.onChange,
        onChange = _props$onChange === undefined ? function () {} : _props$onChange;

    var minus = function minus() {
        if (base > 8) {
            onChange(name, base - 1, points + costAt[base - 1]);
        }
    };
    var plus = function plus() {
        if (points > 0 && base < 15 && points >= costAt[base]) {
            onChange(name, base + 1, points - costAt[base]);
        }
    };
    var bonusText = Math.floor((base + race) / 2 - 5);

    if (bonusText >= 0) {
        bonusText = "+" + bonusText;
    }

    return React.createElement(
        Doric.Grid,
        { cellHeight: 35, className: "stat" },
        React.createElement(
            Doric.CenterContent,
            { width: "100%", height: "100%", colSpan: 3, style: { fontWeight: 'bold' } },
            name.toUpperCase()
        ),
        React.createElement(Doric.IconButton, { icon: "ion-minus-round", className: "stat", onTap: minus }),
        React.createElement(
            Doric.CenterContent,
            { width: "100%", height: "100%" },
            base
        ),
        React.createElement(Doric.IconButton, { icon: "ion-plus-round", className: "stat", onTap: plus }),
        React.createElement(
            Doric.CenterContent,
            { colSpan: 2, width: "100%", height: "100%" },
            race
        ),
        React.createElement(
            Doric.CenterContent,
            { colSpan: 2, width: "100%", height: "100%" },
            base + race
        ),
        React.createElement(
            Doric.CenterContent,
            { colSpan: 2, width: "100%", height: "100%" },
            bonusText
        )
    );
};

var PointBuyScreen = function (_React$Component2) {
    (0, _inherits3.default)(PointBuyScreen, _React$Component2);

    function PointBuyScreen(props) {
        (0, _classCallCheck3.default)(this, PointBuyScreen);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (PointBuyScreen.__proto__ || (0, _getPrototypeOf2.default)(PointBuyScreen)).call(this, props));

        _this2.updateStat = function (name, value, newPoints) {
            var _this2$state = _this2.state,
                stats = _this2$state.stats,
                points = _this2$state.points;


            stats[name].base = value;
            points = newPoints;
            _this2.setState({ stats: stats, points: points });
        };

        _this2.render = function () {
            var _this2$state2 = _this2.state,
                stats = _this2$state2.stats,
                points = _this2$state2.points;


            return React.createElement(
                Doric.Screen,
                { title: "D&D Point Buy" },
                React.createElement(
                    "div",
                    { style: { margin: 'auto', width: 320 } },
                    React.createElement(
                        "div",
                        { style: { padding: 3 } },
                        "Points Remaining: ",
                        points
                    ),
                    (0, _entries2.default)(stats).map(function (_ref2) {
                        var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
                            name = _ref3[0],
                            _ref3$ = _ref3[1],
                            base = _ref3$.base,
                            race = _ref3$.race;

                        return React.createElement(StatDisplay, (0, _extends3.default)({ name: name, base: base, race: race, points: points }, { onChange: _this2.updateStat }));
                    })
                )
            );
        };

        _this2.state = {
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
        return _this2;
    }

    return PointBuyScreen;
}(React.Component);

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

var Calendar = function (_React$Component3) {
    (0, _inherits3.default)(Calendar, _React$Component3);

    function Calendar(props) {
        (0, _classCallCheck3.default)(this, Calendar);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (Calendar.__proto__ || (0, _getPrototypeOf2.default)(Calendar)).call(this, props));

        _this3.render = function () {
            var _this3$props = _this3.props,
                selectedDate = _this3$props.selectedDate,
                _this3$props$onChange = _this3$props.onChange,
                onChange = _this3$props$onChange === undefined ? function () {} : _this3$props$onChange;
            var _this3$state = _this3.state,
                month = _this3$state.month,
                year = _this3$state.year;


            var startDate = selectedDate.startOf("month").startOf("week");
            var dayMarkers = range.array(7).map(function (i) {
                var text = startDate.shift(i, 'days').format("{weekday/short}");

                return React.createElement(
                    Doric.CenterContent,
                    { width: "100%", height: "100%" },
                    text
                );
            });
            var dates = range.array(42).map(function (i) {
                var day = startDate.shift(i, 'days');

                if (day.date === selectedDate.date && day.month === selectedDate.month && day.year === selectedDate.year) {

                    return React.createElement(Doric.Button, { className: "calendar", style: { backgroundColor: "#4285f4", color: "white" }, text: day.date + 1 });
                }
                if (day.month === month) {
                    return React.createElement(Doric.Button, { className: "calendar", text: day.date + 1, onTap: function onTap() {
                            return onChange(day);
                        } });
                }

                return React.createElement(Doric.Button, { className: "calendar", disabled: true, text: day.date + 1 });
            });

            return React.createElement(
                "doric-calendar",
                null,
                React.createElement(
                    Doric.Pinboard,
                    { height: 50 },
                    React.createElement(
                        "div",
                        { pinInfo: { top: 0, left: 0 } },
                        month,
                        "/",
                        year
                    )
                ),
                React.createElement(
                    Doric.Grid,
                    { colCount: 7 },
                    dayMarkers,
                    dates
                )
            );
        };

        _this3.state = {
            year: chrono().year,
            month: chrono().month
        };
        return _this3;
    }

    return Calendar;
}(React.Component);

var Printer = function Printer() {
    console.log("re-render!");
    return React.createElement(
        "div",
        null,
        "Printer"
    );
};

dialog.spinner = function (message) {
    return dialog.show({
        content: function content() {
            return React.createElement(
                "div",
                { style: { textAlign: 'center' } },
                message,
                React.createElement(Doric.Image, { width: "100%", height: 30, source: _spinnerGif2.default })
            );
        },
        buttons: [],
        disableEscape: true
    });
};

var Main = function (_React$Component4) {
    (0, _inherits3.default)(Main, _React$Component4);

    function Main(props) {
        (0, _classCallCheck3.default)(this, Main);

        var _this4 = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props));

        _this4.render = function () {
            return React.createElement(
                Doric.Screen,
                { title: "Calendar Test" },
                React.createElement("hr", null),
                React.createElement(Doric.Input.Multiline, { label: "test", value: _this4.state.text, onChange: function onChange(text) {
                        return _this4.setState({ text: text });
                    } })
            );
        };

        _this4.state = {
            date: chrono(),
            text: null
        };
        return _this4;
    }

    return Main;
}(React.Component);

App.start(React.createElement(
    Route,
    null,
    React.createElement(Route, { path: "/", component: Main })
));

},{"babel-runtime/core-js/object/entries":8,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/defineProperty":13,"babel-runtime/helpers/extends":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16,"babel-runtime/helpers/slicedToArray":17,"source/data-uri/spinner.gif.source":2}],2:[function(require,module,exports){
module.exports = "data:image/gif;base64,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";

},{}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":19}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":20}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":21}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":22}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":23}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/entries"), __esModule: true };
},{"core-js/library/fn/object/entries":24}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":25}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":26}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":27}],12:[function(require,module,exports){
"use strict";

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],13:[function(require,module,exports){
"use strict";

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":7}],14:[function(require,module,exports){
"use strict";

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

exports["default"] = _Object$assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/assign":5}],15:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":6,"babel-runtime/core-js/object/set-prototype-of":10}],16:[function(require,module,exports){
"use strict";

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

exports.__esModule = true;
},{"babel-runtime/helpers/typeof":18}],17:[function(require,module,exports){
"use strict";

var _isIterable2 = require("babel-runtime/core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/get-iterator":3,"babel-runtime/core-js/is-iterable":4}],18:[function(require,module,exports){
"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

exports["default"] = function (obj) {
  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
};

exports.__esModule = true;
},{"babel-runtime/core-js/symbol":11}],19:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":69,"../modules/es6.string.iterator":76,"../modules/web.dom.iterable":79}],20:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":70,"../modules/es6.string.iterator":76,"../modules/web.dom.iterable":79}],21:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":33,"../../modules/es6.object.assign":72}],22:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":51}],23:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":51}],24:[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/$.core').Object.entries;
},{"../../modules/$.core":33,"../../modules/es7.object.entries":78}],25:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/$.core').Object.getPrototypeOf;
},{"../../modules/$.core":33,"../../modules/es6.object.get-prototype-of":73}],26:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":33,"../../modules/es6.object.set-prototype-of":74}],27:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":33,"../../modules/es6.object.to-string":75,"../../modules/es6.symbol":77}],28:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],29:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],30:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":46}],31:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":32,"./$.wks":67}],32:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],33:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],34:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":28}],35:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],36:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":39}],37:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":51}],38:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":33,"./$.ctx":34,"./$.global":41}],39:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],40:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":51,"./$.to-iobject":64}],41:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],42:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],43:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":51,"./$.descriptors":36,"./$.property-desc":57}],44:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":32}],45:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":32}],46:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],47:[function(require,module,exports){
'use strict';
var $              = require('./$')
  , descriptor     = require('./$.property-desc')
  , setToStringTag = require('./$.set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./$":51,"./$.hide":43,"./$.property-desc":57,"./$.set-to-string-tag":60,"./$.wks":67}],48:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./$.library')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , hide           = require('./$.hide')
  , has            = require('./$.has')
  , Iterators      = require('./$.iterators')
  , $iterCreate    = require('./$.iter-create')
  , setToStringTag = require('./$.set-to-string-tag')
  , getProto       = require('./$').getProto
  , ITERATOR       = require('./$.wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./$":51,"./$.export":38,"./$.has":42,"./$.hide":43,"./$.iter-create":47,"./$.iterators":50,"./$.library":53,"./$.redefine":58,"./$.set-to-string-tag":60,"./$.wks":67}],49:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],50:[function(require,module,exports){
module.exports = {};
},{}],51:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],52:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":51,"./$.to-iobject":64}],53:[function(require,module,exports){
module.exports = true;
},{}],54:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var $        = require('./$')
  , toObject = require('./$.to-object')
  , IObject  = require('./$.iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = require('./$.fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./$":51,"./$.fails":39,"./$.iobject":44,"./$.to-object":65}],55:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./$.export')
  , core    = require('./$.core')
  , fails   = require('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":33,"./$.export":38,"./$.fails":39}],56:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject')
  , isEnum    = $.isEnum;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = $.getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};
},{"./$":51,"./$.to-iobject":64}],57:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],58:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":43}],59:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":51,"./$.an-object":30,"./$.ctx":34,"./$.is-object":46}],60:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":51,"./$.has":42,"./$.wks":67}],61:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":41}],62:[function(require,module,exports){
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":35,"./$.to-integer":63}],63:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],64:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":35,"./$.iobject":44}],65:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":35}],66:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],67:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":41,"./$.shared":61,"./$.uid":66}],68:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":31,"./$.core":33,"./$.iterators":50,"./$.wks":67}],69:[function(require,module,exports){
var anObject = require('./$.an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":30,"./$.core":33,"./core.get-iterator-method":68}],70:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./$.classof":31,"./$.core":33,"./$.iterators":50,"./$.wks":67}],71:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./$.add-to-unscopables')
  , step             = require('./$.iter-step')
  , Iterators        = require('./$.iterators')
  , toIObject        = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./$.add-to-unscopables":29,"./$.iter-define":48,"./$.iter-step":49,"./$.iterators":50,"./$.to-iobject":64}],72:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":38,"./$.object-assign":54}],73:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":55,"./$.to-object":65}],74:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":38,"./$.set-proto":59}],75:[function(require,module,exports){

},{}],76:[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":48,"./$.string-at":62}],77:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , DESCRIPTORS    = require('./$.descriptors')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setToStringTag = require('./$.set-to-string-tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":51,"./$.an-object":30,"./$.descriptors":36,"./$.enum-keys":37,"./$.export":38,"./$.fails":39,"./$.get-names":40,"./$.global":41,"./$.has":42,"./$.is-array":45,"./$.keyof":52,"./$.library":53,"./$.property-desc":57,"./$.redefine":58,"./$.set-to-string-tag":60,"./$.shared":61,"./$.to-iobject":64,"./$.uid":66,"./$.wks":67}],78:[function(require,module,exports){
// http://goo.gl/XkBrjD
var $export  = require('./$.export')
  , $entries = require('./$.object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"./$.export":38,"./$.object-to-array":56}],79:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":50,"./es6.array.iterator":71}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5hdG9tL3BhY2thZ2VzL2F0b20tYmFiZWwtY29tcGlsZXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRlbW8tY29kZVxcZGVtby5qcyIsInNvdXJjZS9kYXRhLXVyaS9zcGlubmVyLmdpZi5zb3VyY2UiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9lbnRyaWVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZW50cmllcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY2xhc3NvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVzY3JpcHRvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5leHBvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtYXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1zdGVwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5rZXlvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmxpYnJhcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3QtYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LXNhcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC1wcm90by5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWlvYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dRQTs7Ozs7O2lCQXhRYyxTO0lBQVAsRyxjQUFBLEc7OztBQUVQLElBQUksT0FBTyxTQUFQLENBQWlCLE1BQWpCLEtBQTRCLFNBQWhDLEVBQTJDO0FBQ3ZDLFdBQU8sU0FBUCxDQUFpQixNQUFqQixHQUEwQixVQUFVLENBQVYsRUFBYTtBQUNuQyxZQUFJLE1BQU0sRUFBVjtBQUNBLGVBQU8sSUFBSSxDQUFYLEVBQWM7QUFDVixtQkFBTyxJQUFQO0FBQ0EsaUJBQUssQ0FBTDtBQUNIO0FBQ0QsZUFBTyxHQUFQO0FBQ0gsS0FQRDtBQVFIOztBQUVELElBQU0sT0FBTztBQUNULFNBQUssMEdBREk7QUFFVCxZQUFRLDZFQUZDO0FBR1QsYUFBUyw2RUFIQTtBQUlULFNBQUs7QUFKSSxDQUFiOztJQU9NLEk7OztBQUNGLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSUFDVCxLQURTOztBQUFBLGNBT25CLFdBUG1CLEdBT0wsVUFBQyxJQUFEO0FBQUEsbUJBQ1YsVUFBQyxLQUFEO0FBQUEsdUJBQVcsTUFBSyxRQUFMLG1DQUNOLElBRE0sRUFDQyxLQURELEVBQVg7QUFBQSxhQURVO0FBQUEsU0FQSzs7QUFBQSxjQVluQixjQVptQixHQVlGLFVBQUMsUUFBRCxFQUFXLEtBQVg7QUFBQTs7QUFBQSxrRUFDWixRQURZLEVBQ0QsTUFBSyxLQUFMLENBQVcsUUFBWCxDQURDLHVDQUVaLEtBRlksRUFFSixNQUFLLFdBQUwsQ0FBaUIsUUFBakIsQ0FGSTtBQUFBLFNBWkU7O0FBQUEsY0FpQm5CLE1BakJtQixHQWlCVixZQUFNO0FBQ1gsZ0JBQU0sVUFBVTtBQUFBO0FBQUE7QUFDWixvQ0FBQyxLQUFELENBQU8sTUFBUCxJQUFjLE9BQU8sRUFBQyxTQUFTLE1BQVYsRUFBckIsRUFBd0MsTUFBSyxNQUE3QyxFQUFvRCxPQUFPO0FBQUEsK0JBQU0sSUFBSSxHQUFKLENBQVEsSUFBUixDQUFhLE9BQWIsQ0FBTjtBQUFBLHFCQUEzRDtBQURZLGFBQWhCOztBQUlBLG1CQUNJO0FBQUMscUJBQUQsQ0FBTyxNQUFQO0FBQUEsa0JBQWMsT0FBTSxhQUFwQixFQUFrQyxNQUFNLE9BQXhDLEVBQWlELFVBQVMsTUFBMUQsRUFBaUUsUUFBUTtBQUFBLCtCQUFNLE1BQU0sQ0FBTixDQUFOO0FBQUEscUJBQXpFLEVBQXlGLEtBQUksUUFBN0Y7QUFDSTtBQUFDLHlCQUFELENBQU8sZUFBUDtBQUFBLHNCQUF1QixRQUFRLEtBQUssT0FBcEM7QUFDSywwQkFBTSxLQUFOLENBQVksRUFBWixFQUFnQjtBQUFBLCtCQUFLO0FBQUE7QUFBQTtBQUFNO0FBQU4seUJBQUw7QUFBQSxxQkFBaEI7QUFETDtBQURKLGFBREo7QUFPSCxTQTdCa0I7O0FBRWYsY0FBSyxLQUFMLEdBQWE7QUFDVCwyQkFBZTtBQUROLFNBQWI7QUFGZTtBQUtsQjs7O0VBTmMsTUFBTSxTOztBQWlDekIsSUFBSSxVQUFKLENBQWUsU0FBZixDQUF5QjtBQUNyQix5QkFBcUI7QUFDakIsZ0JBQVEsQ0FEUztBQUVqQixlQUFPLE1BRlU7QUFHakIsZ0JBQVEsTUFIUztBQUlqQixzQkFBYyxFQUpHO0FBS2pCLGtCQUFVO0FBTE8sS0FEQTtBQVFyQix1QkFBbUI7QUFDZixlQUFPO0FBRFEsS0FSRTtBQVdyQixzQ0FBa0M7QUFDOUIseUJBQWlCLElBQUksSUFBSixDQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCO0FBRGE7QUFYYixDQUF6QjtBQWVBLElBQU0sU0FBUztBQUNYLE9BQUcsQ0FEUTtBQUVYLE9BQUcsQ0FGUTtBQUdYLFFBQUksQ0FITztBQUlYLFFBQUksQ0FKTztBQUtYLFFBQUksQ0FMTztBQU1YLFFBQUksQ0FOTztBQU9YLFFBQUk7QUFQTyxDQUFmO0FBU0EsSUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLEtBQUQsRUFBVztBQUFBLFFBRXZCLElBRnVCLEdBT3ZCLEtBUHVCLENBRXZCLElBRnVCO0FBQUEsUUFHdkIsSUFIdUIsR0FPdkIsS0FQdUIsQ0FHdkIsSUFIdUI7QUFBQSxRQUl2QixJQUp1QixHQU92QixLQVB1QixDQUl2QixJQUp1QjtBQUFBLFFBS3ZCLE1BTHVCLEdBT3ZCLEtBUHVCLENBS3ZCLE1BTHVCO0FBQUEsMEJBT3ZCLEtBUHVCLENBTXZCLFFBTnVCO0FBQUEsUUFNdkIsUUFOdUIsbUNBTVgsWUFBTSxDQUFFLENBTkc7O0FBUTNCLFFBQU0sUUFBUSxTQUFSLEtBQVEsR0FBTTtBQUNoQixZQUFJLE9BQU8sQ0FBWCxFQUFjO0FBQ1YscUJBQVMsSUFBVCxFQUFlLE9BQU8sQ0FBdEIsRUFBeUIsU0FBUyxPQUFPLE9BQU8sQ0FBZCxDQUFsQztBQUNIO0FBQ0osS0FKRDtBQUtBLFFBQU0sT0FBTyxTQUFQLElBQU8sR0FBTTtBQUNmLFlBQUksU0FBUyxDQUFULElBQWMsT0FBTyxFQUFyQixJQUEyQixVQUFVLE9BQU8sSUFBUCxDQUF6QyxFQUF1RDtBQUNuRCxxQkFBUyxJQUFULEVBQWUsT0FBTyxDQUF0QixFQUF5QixTQUFTLE9BQU8sSUFBUCxDQUFsQztBQUNIO0FBQ0osS0FKRDtBQUtBLFFBQUksWUFBWSxLQUFLLEtBQUwsQ0FBVyxDQUFDLE9BQU8sSUFBUixJQUFnQixDQUFoQixHQUFvQixDQUEvQixDQUFoQjs7QUFFQSxRQUFJLGFBQWEsQ0FBakIsRUFBb0I7QUFDaEIsMEJBQWdCLFNBQWhCO0FBQ0g7O0FBRUQsV0FDSTtBQUFDLGFBQUQsQ0FBTyxJQUFQO0FBQUEsVUFBWSxZQUFZLEVBQXhCLEVBQTRCLFdBQVUsTUFBdEM7QUFDSTtBQUFDLGlCQUFELENBQU8sYUFBUDtBQUFBLGNBQXFCLE9BQU0sTUFBM0IsRUFBa0MsUUFBTyxNQUF6QyxFQUFnRCxTQUFTLENBQXpELEVBQTRELE9BQU8sRUFBQyxZQUFZLE1BQWIsRUFBbkU7QUFBMEYsaUJBQUssV0FBTDtBQUExRixTQURKO0FBRUksNEJBQUMsS0FBRCxDQUFPLFVBQVAsSUFBa0IsTUFBSyxpQkFBdkIsRUFBeUMsV0FBVSxNQUFuRCxFQUEwRCxPQUFPLEtBQWpFLEdBRko7QUFHSTtBQUFDLGlCQUFELENBQU8sYUFBUDtBQUFBLGNBQXFCLE9BQU0sTUFBM0IsRUFBa0MsUUFBTyxNQUF6QztBQUFpRDtBQUFqRCxTQUhKO0FBSUksNEJBQUMsS0FBRCxDQUFPLFVBQVAsSUFBa0IsTUFBSyxnQkFBdkIsRUFBd0MsV0FBVSxNQUFsRCxFQUF5RCxPQUFPLElBQWhFLEdBSko7QUFLSTtBQUFDLGlCQUFELENBQU8sYUFBUDtBQUFBLGNBQXFCLFNBQVMsQ0FBOUIsRUFBaUMsT0FBTSxNQUF2QyxFQUE4QyxRQUFPLE1BQXJEO0FBQTZEO0FBQTdELFNBTEo7QUFNSTtBQUFDLGlCQUFELENBQU8sYUFBUDtBQUFBLGNBQXFCLFNBQVMsQ0FBOUIsRUFBaUMsT0FBTSxNQUF2QyxFQUE4QyxRQUFPLE1BQXJEO0FBQTZELG1CQUFPO0FBQXBFLFNBTko7QUFPSTtBQUFDLGlCQUFELENBQU8sYUFBUDtBQUFBLGNBQXFCLFNBQVMsQ0FBOUIsRUFBaUMsT0FBTSxNQUF2QyxFQUE4QyxRQUFPLE1BQXJEO0FBQTZEO0FBQTdEO0FBUEosS0FESjtBQVdILENBbkNEOztJQXFDTSxjOzs7QUFDRiw0QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMkpBQ1QsS0FEUzs7QUFBQSxlQWlDbkIsVUFqQ21CLEdBaUNOLFVBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxTQUFkLEVBQTRCO0FBQUEsK0JBQ2YsT0FBSyxLQURVO0FBQUEsZ0JBQ2hDLEtBRGdDLGdCQUNoQyxLQURnQztBQUFBLGdCQUN6QixNQUR5QixnQkFDekIsTUFEeUI7OztBQUdyQyxrQkFBTSxJQUFOLEVBQVksSUFBWixHQUFtQixLQUFuQjtBQUNBLHFCQUFTLFNBQVQ7QUFDQSxtQkFBSyxRQUFMLENBQWMsRUFBQyxZQUFELEVBQVEsY0FBUixFQUFkO0FBQ0gsU0F2Q2tCOztBQUFBLGVBeUNuQixNQXpDbUIsR0F5Q1YsWUFBTTtBQUFBLGdDQUNhLE9BQUssS0FEbEI7QUFBQSxnQkFDSixLQURJLGlCQUNKLEtBREk7QUFBQSxnQkFDRyxNQURILGlCQUNHLE1BREg7OztBQUdYLG1CQUNJO0FBQUMscUJBQUQsQ0FBTyxNQUFQO0FBQUEsa0JBQWMsT0FBTSxlQUFwQjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxPQUFPLEVBQUMsUUFBUSxNQUFULEVBQWlCLE9BQU8sR0FBeEIsRUFBWjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxPQUFPLEVBQUMsU0FBUyxDQUFWLEVBQVo7QUFBQTtBQUN1QjtBQUR2QixxQkFESjtBQUlLLDJDQUFlLEtBQWYsRUFBc0IsR0FBdEIsQ0FDRztBQUFBO0FBQUEsNEJBQUUsSUFBRjtBQUFBO0FBQUEsNEJBQVMsSUFBVCxVQUFTLElBQVQ7QUFBQSw0QkFBZSxJQUFmLFVBQWUsSUFBZjs7QUFBQSwrQkFBMEIsb0JBQUMsV0FBRCx5QkFBaUIsRUFBQyxVQUFELEVBQU8sVUFBUCxFQUFhLFVBQWIsRUFBbUIsY0FBbkIsRUFBakIsSUFBNkMsVUFBVSxPQUFLLFVBQTVELElBQTFCO0FBQUEscUJBREg7QUFKTDtBQURKLGFBREo7QUFZSCxTQXhEa0I7O0FBRWYsZUFBSyxLQUFMLEdBQWE7QUFDVCxtQkFBTztBQUNILHFCQUFLO0FBQ0QsMEJBQU0sQ0FETDtBQUVELDBCQUFNO0FBRkwsaUJBREY7QUFLSCxxQkFBSztBQUNELDBCQUFNLENBREw7QUFFRCwwQkFBTTtBQUZMLGlCQUxGO0FBU0gscUJBQUs7QUFDRCwwQkFBTSxDQURMO0FBRUQsMEJBQU07QUFGTCxpQkFURjtBQWFILHFCQUFLO0FBQ0QsMEJBQU0sQ0FETDtBQUVELDBCQUFNO0FBRkwsaUJBYkY7QUFpQkgscUJBQUs7QUFDRCwwQkFBTSxDQURMO0FBRUQsMEJBQU07QUFGTCxpQkFqQkY7QUFxQkgscUJBQUs7QUFDRCwwQkFBTSxDQURMO0FBRUQsMEJBQU07QUFGTDtBQXJCRixhQURFO0FBMkJULG9CQUFRO0FBM0JDLFNBQWI7QUFGZTtBQStCbEI7OztFQWhDd0IsTUFBTSxTOztBQTREbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSSxVQUFKLENBQWUsU0FBZixDQUF5QjtBQUNyQiw2QkFBeUI7QUFDckIsZUFBTyxNQURjO0FBRXJCLGdCQUFRLE1BRmE7QUFHckIsZ0JBQVEsQ0FIYTtBQUlyQixzQkFBYztBQUpPO0FBREosQ0FBekI7O0lBUU0sUTs7O0FBQ0Ysc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLCtJQUNULEtBRFM7O0FBQUEsZUFRbkIsTUFSbUIsR0FRVixZQUFNO0FBQUEsK0JBQ2lDLE9BQUssS0FEdEM7QUFBQSxnQkFDSixZQURJLGdCQUNKLFlBREk7QUFBQSxxREFDVSxRQURWO0FBQUEsZ0JBQ1UsUUFEVix5Q0FDcUIsWUFBTSxDQUFFLENBRDdCO0FBQUEsK0JBRVcsT0FBSyxLQUZoQjtBQUFBLGdCQUVKLEtBRkksZ0JBRUosS0FGSTtBQUFBLGdCQUVHLElBRkgsZ0JBRUcsSUFGSDs7O0FBSVgsZ0JBQU0sWUFBWSxhQUNiLE9BRGEsQ0FDTCxPQURLLEVBRWIsT0FGYSxDQUVMLE1BRkssQ0FBbEI7QUFHQSxnQkFBTSxhQUFhLE1BQU0sS0FBTixDQUFZLENBQVosRUFDZCxHQURjLENBRVgsYUFBSztBQUNELG9CQUFNLE9BQU8sVUFDUixLQURRLENBQ0YsQ0FERSxFQUNDLE1BREQsRUFFUixNQUZRLENBRUQsaUJBRkMsQ0FBYjs7QUFJQSx1QkFBTztBQUFDLHlCQUFELENBQU8sYUFBUDtBQUFBLHNCQUFxQixPQUFNLE1BQTNCLEVBQWtDLFFBQU8sTUFBekM7QUFBaUQ7QUFBakQsaUJBQVA7QUFDSCxhQVJVLENBQW5CO0FBVUEsZ0JBQU0sUUFBUSxNQUFNLEtBQU4sQ0FBWSxFQUFaLEVBQ1QsR0FEUyxDQUVOLGFBQUs7QUFDRCxvQkFBTSxNQUFNLFVBQVUsS0FBVixDQUFnQixDQUFoQixFQUFtQixNQUFuQixDQUFaOztBQUVBLG9CQUFJLElBQUksSUFBSixLQUFhLGFBQWEsSUFBMUIsSUFDRyxJQUFJLEtBQUosS0FBYyxhQUFhLEtBRDlCLElBRUcsSUFBSSxJQUFKLEtBQWEsYUFBYSxJQUZqQyxFQUV1Qzs7QUFFbkMsMkJBQU8sb0JBQUMsS0FBRCxDQUFPLE1BQVAsSUFBYyxXQUFVLFVBQXhCLEVBQW1DLE9BQU8sRUFBQyxpQkFBaUIsU0FBbEIsRUFBNkIsT0FBTyxPQUFwQyxFQUExQyxFQUF3RixNQUFNLElBQUksSUFBSixHQUFXLENBQXpHLEdBQVA7QUFDSDtBQUNELG9CQUFJLElBQUksS0FBSixLQUFjLEtBQWxCLEVBQXlCO0FBQ3JCLDJCQUFPLG9CQUFDLEtBQUQsQ0FBTyxNQUFQLElBQWMsV0FBVSxVQUF4QixFQUFtQyxNQUFNLElBQUksSUFBSixHQUFXLENBQXBELEVBQXVELE9BQU87QUFBQSxtQ0FBTSxTQUFTLEdBQVQsQ0FBTjtBQUFBLHlCQUE5RCxHQUFQO0FBQ0g7O0FBRUQsdUJBQU8sb0JBQUMsS0FBRCxDQUFPLE1BQVAsSUFBYyxXQUFVLFVBQXhCLEVBQW1DLGNBQW5DLEVBQTRDLE1BQU0sSUFBSSxJQUFKLEdBQVcsQ0FBN0QsR0FBUDtBQUNILGFBaEJLLENBQWQ7O0FBbUJBLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUMseUJBQUQsQ0FBTyxRQUFQO0FBQUEsc0JBQWdCLFFBQVEsRUFBeEI7QUFDSTtBQUFBO0FBQUEsMEJBQUssU0FBUyxFQUFDLEtBQUssQ0FBTixFQUFTLE1BQU0sQ0FBZixFQUFkO0FBQ0ssNkJBREw7QUFBQTtBQUNhO0FBRGI7QUFESixpQkFESjtBQU1JO0FBQUMseUJBQUQsQ0FBTyxJQUFQO0FBQUEsc0JBQVksVUFBVSxDQUF0QjtBQUNLLDhCQURMO0FBRUs7QUFGTDtBQU5KLGFBREo7QUFhSCxTQXpEa0I7O0FBRWYsZUFBSyxLQUFMLEdBQWE7QUFDVCxrQkFBTSxTQUFTLElBRE47QUFFVCxtQkFBTyxTQUFTO0FBRlAsU0FBYjtBQUZlO0FBTWxCOzs7RUFQa0IsTUFBTSxTOztBQTZEN0IsSUFBTSxVQUFVLFNBQVYsT0FBVSxHQUFNO0FBQ2xCLFlBQVEsR0FBUixDQUFZLFlBQVo7QUFDQSxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNILENBSEQ7O0FBT0EsT0FBTyxPQUFQLEdBQWlCLFVBQUMsT0FBRDtBQUFBLFdBQWEsT0FBTyxJQUFQLENBQVk7QUFDdEMsaUJBQVM7QUFBQSxtQkFBTTtBQUFBO0FBQUEsa0JBQUssT0FBTyxFQUFDLFdBQVcsUUFBWixFQUFaO0FBQW9DLHVCQUFwQztBQUE0QyxvQ0FBQyxLQUFELENBQU8sS0FBUCxJQUFhLE9BQU0sTUFBbkIsRUFBMEIsUUFBUSxFQUFsQyxFQUFzQyw0QkFBdEM7QUFBNUMsYUFBTjtBQUFBLFNBRDZCO0FBRXRDLGlCQUFTLEVBRjZCO0FBR3RDLHVCQUFlO0FBSHVCLEtBQVosQ0FBYjtBQUFBLENBQWpCOztJQU1NLEk7OztBQUNGLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1SUFDVCxLQURTOztBQUFBLGVBUW5CLE1BUm1CLEdBUVYsWUFBTTtBQUNYLG1CQUNJO0FBQUMscUJBQUQsQ0FBTyxNQUFQO0FBQUEsa0JBQWMsT0FBTSxlQUFwQjtBQUNJLCtDQURKO0FBRUksb0NBQUMsS0FBRCxDQUFPLEtBQVAsQ0FBYSxTQUFiLElBQXVCLE9BQU0sTUFBN0IsRUFBb0MsT0FBTyxPQUFLLEtBQUwsQ0FBVyxJQUF0RCxFQUE0RCxVQUFVO0FBQUEsK0JBQVEsT0FBSyxRQUFMLENBQWMsRUFBQyxVQUFELEVBQWQsQ0FBUjtBQUFBLHFCQUF0RTtBQUZKLGFBREo7QUFPSCxTQWhCa0I7O0FBRWYsZUFBSyxLQUFMLEdBQWE7QUFDVCxrQkFBTSxRQURHO0FBRVQsa0JBQU07QUFGRyxTQUFiO0FBRmU7QUFNbEI7OztFQVBjLE1BQU0sUzs7QUFvQnpCLElBQUksS0FBSixDQUNJO0FBQUMsU0FBRDtBQUFBO0FBQ0ksd0JBQUMsS0FBRCxJQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLElBQTNCO0FBREosQ0FESjs7O0FDcFNBO0FBQ0E7O0FDREE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCB7Q1NTfSA9IERvcmljVXRpbDtcclxuXHJcbmlmIChTdHJpbmcucHJvdG90eXBlLnJlcGVhdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBTdHJpbmcucHJvdG90eXBlLnJlcGVhdCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgbGV0IHJlcyA9IFwiXCI7XHJcbiAgICAgICAgd2hpbGUgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzO1xyXG4gICAgICAgICAgICBuIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCB1cmxzID0ge1xyXG4gICAgYmF5OiBcImh0dHA6Ly9wcmUwOS5kZXZpYW50YXJ0Lm5ldC9lNWQ0L3RoL3ByZS9mLzIwMTEvMjU5L2MvYS9iYXlvbmV0dGFfd2FsbHBhcGVyX2J5X21lYW5ob25rZXkxOTgwLWQ0OXp6c3UuanBnXCIsXHJcbiAgICBhbmlzc2E6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0wQjJMd19iSFRIYUk0UTBWZlpVdGZiMFJKYURRXCIsXHJcbiAgICBhbmlzc2EyOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9ZG93bmxvYWQmaWQ9MEIyTHdfYkhUSGFJNGVuWk1XRk5XWlU5V2MyY1wiLFxyXG4gICAga2F0OiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9ZG93bmxvYWQmaWQ9MEIyTHdfYkhUSGFJNFVFVndWVkIxWmpOMVIwa1wiXHJcbn07XHJcblxyXG5jbGFzcyBUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlID0gKG5hbWUpID0+XHJcbiAgICAgICAgKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgc3RhdGVSZXNwb25kZXIgPSAocHJvcGVydHksIGV2ZW50KSA9PiAoe1xyXG4gICAgICAgIFtwcm9wZXJ0eV06IHRoaXMuc3RhdGVbcHJvcGVydHldLFxyXG4gICAgICAgIFtldmVudF06IHRoaXMudXBkYXRlU3RhdGUocHJvcGVydHkpXHJcbiAgICB9KVxyXG5cclxuICAgIHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b3BNZW51ID0gPGRpdj5cclxuICAgICAgICAgICAgPERvcmljLkJ1dHRvbiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319IHRleHQ9XCJUZXN0XCIgb25UYXA9eygpID0+IEFwcC5uYXYucHVzaChcIi90ZXN0XCIpfSAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPERvcmljLlNjcmVlbiB0aXRsZT1cIlNjcmVlbiBUZXN0XCIgbWVudT17dG9wTWVudX0gYmFja1RleHQ9XCJUZXN0XCIgb25CYWNrPXsoKSA9PiBjYmxvZygxKX0gcmVmPVwic2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8RG9yaWMuQmFja2dyb3VuZEltYWdlIHNvdXJjZT17dXJscy5hbmlzc2EyfT5cclxuICAgICAgICAgICAgICAgICAgICB7cmFuZ2UuYXJyYXkoMzAsIGkgPT4gPGRpdj57aX08L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgPC9Eb3JpYy5CYWNrZ3JvdW5kSW1hZ2U+XHJcbiAgICAgICAgICAgIDwvRG9yaWMuU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFwcC5zdHlsZVNoZWV0LmFkZFN0eWxlcyh7XHJcbiAgICBcImRvcmljLWJ1dHRvbi5zdGF0XCI6IHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDUwLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgIFwiZG9yaWMtZ3JpZC5zdGF0XCI6IHtcclxuICAgICAgICB3aWR0aDogMzIwXHJcbiAgICB9LFxyXG4gICAgXCJkb3JpYy1ncmlkLnN0YXQ6bnRoLWNoaWxkKG9kZClcIjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ1NTLnJnYmEoMjAwLCAyMDAsIDIwMCwgMC43KVxyXG4gICAgfVxyXG59KTtcclxuY29uc3QgY29zdEF0ID0ge1xyXG4gICAgODogMSxcclxuICAgIDk6IDEsXHJcbiAgICAxMDogMSxcclxuICAgIDExOiAxLFxyXG4gICAgMTI6IDEsXHJcbiAgICAxMzogMixcclxuICAgIDE0OiAyXHJcbn07XHJcbmNvbnN0IFN0YXREaXNwbGF5ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBiYXNlLFxyXG4gICAgICAgIHJhY2UsXHJcbiAgICAgICAgcG9pbnRzLFxyXG4gICAgICAgIG9uQ2hhbmdlID0gKCgpID0+IHt9KVxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgbWludXMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJhc2UgPiA4KSB7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlKG5hbWUsIGJhc2UgLSAxLCBwb2ludHMgKyBjb3N0QXRbYmFzZSAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcGx1cyA9ICgpID0+IHtcclxuICAgICAgICBpZiAocG9pbnRzID4gMCAmJiBiYXNlIDwgMTUgJiYgcG9pbnRzID49IGNvc3RBdFtiYXNlXSkge1xyXG4gICAgICAgICAgICBvbkNoYW5nZShuYW1lLCBiYXNlICsgMSwgcG9pbnRzIC0gY29zdEF0W2Jhc2VdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGV0IGJvbnVzVGV4dCA9IE1hdGguZmxvb3IoKGJhc2UgKyByYWNlKSAvIDIgLSA1KTtcclxuXHJcbiAgICBpZiAoYm9udXNUZXh0ID49IDApIHtcclxuICAgICAgICBib251c1RleHQgPSBgKyR7Ym9udXNUZXh0fWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RG9yaWMuR3JpZCBjZWxsSGVpZ2h0PXszNX0gY2xhc3NOYW1lPVwic3RhdFwiPlxyXG4gICAgICAgICAgICA8RG9yaWMuQ2VudGVyQ29udGVudCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY29sU3Bhbj17M30gc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT57bmFtZS50b1VwcGVyQ2FzZSgpfTwvRG9yaWMuQ2VudGVyQ29udGVudD5cclxuICAgICAgICAgICAgPERvcmljLkljb25CdXR0b24gaWNvbj1cImlvbi1taW51cy1yb3VuZFwiIGNsYXNzTmFtZT1cInN0YXRcIiBvblRhcD17bWludXN9IC8+XHJcbiAgICAgICAgICAgIDxEb3JpYy5DZW50ZXJDb250ZW50IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj57YmFzZX08L0RvcmljLkNlbnRlckNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxEb3JpYy5JY29uQnV0dG9uIGljb249XCJpb24tcGx1cy1yb3VuZFwiIGNsYXNzTmFtZT1cInN0YXRcIiBvblRhcD17cGx1c30gLz5cclxuICAgICAgICAgICAgPERvcmljLkNlbnRlckNvbnRlbnQgY29sU3Bhbj17Mn0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPntyYWNlfTwvRG9yaWMuQ2VudGVyQ29udGVudD5cclxuICAgICAgICAgICAgPERvcmljLkNlbnRlckNvbnRlbnQgY29sU3Bhbj17Mn0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPntiYXNlICsgcmFjZX08L0RvcmljLkNlbnRlckNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxEb3JpYy5DZW50ZXJDb250ZW50IGNvbFNwYW49ezJ9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj57Ym9udXNUZXh0fTwvRG9yaWMuQ2VudGVyQ29udGVudD5cclxuICAgICAgICA8L0RvcmljLkdyaWQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY2xhc3MgUG9pbnRCdXlTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RhdHM6IHtcclxuICAgICAgICAgICAgICAgIHN0cjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFjZTogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRleDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFjZTogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFjZTogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGludDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFjZTogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFjZTogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoYToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFjZTogMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb2ludHM6IDI3XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ID0gKG5hbWUsIHZhbHVlLCBuZXdQb2ludHMpID0+IHtcclxuICAgICAgICBsZXQge3N0YXRzLCBwb2ludHN9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgc3RhdHNbbmFtZV0uYmFzZSA9IHZhbHVlO1xyXG4gICAgICAgIHBvaW50cyA9IG5ld1BvaW50cztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0cywgcG9pbnRzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtzdGF0cywgcG9pbnRzfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxEb3JpYy5TY3JlZW4gdGl0bGU9XCJEJkQgUG9pbnQgQnV5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnYXV0bycsIHdpZHRoOiAzMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogM319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb2ludHMgUmVtYWluaW5nOiB7cG9pbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhzdGF0cykubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoW25hbWUsIHtiYXNlLCByYWNlfV0pID0+IDxTdGF0RGlzcGxheSB7Li4ue25hbWUsIGJhc2UsIHJhY2UsIHBvaW50c319IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVN0YXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0RvcmljLlNjcmVlbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBsZXQgYWN0aW9ucyA9IFs8RG9yaWMuQnV0dG9uIHRleHQ9XCJGaXJzdFwiIC8+LCA8RG9yaWMuQnV0dG9uIHRleHQ9XCJTZWNvbmRcIiAvPl07XHJcblxyXG4vLyBBcHAuc3R5bGVTaGVldC5hZGRTdHlsZXMoe1xyXG4vLyAgICAgXCJkb3JpYy1jYWxlbmRhci1kYXlcIjoge1xyXG4vLyAgICAgICAgIGhlaWdodDogMzAsXHJcbi8vICAgICAgICAgZGlzcGxheTogWyctd2Via2l0LWlubGluZS1mbGV4JywgJ2lubGluZS1mbGV4J10sXHJcbi8vICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbi8vICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbi8vICAgICB9LFxyXG4vLyAgICAgXCJkb3JpYy1jYWxlbmRhci1kYXkuZ3JheWVkXCI6IHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknXHJcbi8vICAgICB9LFxyXG4vLyAgICAgXCJkb3JpYy1jYWxlbmRhci1kYXkuZ3JheWVkXCI6IHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknXHJcbi8vICAgICB9XHJcbi8vIH0pO1xyXG5BcHAuc3R5bGVTaGVldC5hZGRTdHlsZXMoe1xyXG4gICAgXCJkb3JpYy1idXR0b24uY2FsZW5kYXJcIjoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMFxyXG4gICAgfVxyXG59KTtcclxuY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeWVhcjogY2hyb25vKCkueWVhcixcclxuICAgICAgICAgICAgbW9udGg6IGNocm9ubygpLm1vbnRoXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3NlbGVjdGVkRGF0ZSwgb25DaGFuZ2UgPSAoKSA9PiB7fX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHttb250aCwgeWVhcn0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydERhdGUgPSBzZWxlY3RlZERhdGVcclxuICAgICAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxyXG4gICAgICAgICAgICAuc3RhcnRPZihcIndlZWtcIik7XHJcbiAgICAgICAgY29uc3QgZGF5TWFya2VycyA9IHJhbmdlLmFycmF5KDcpXHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICBpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaGlmdChpLCAnZGF5cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJ7d2Vla2RheS9zaG9ydH1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8RG9yaWMuQ2VudGVyQ29udGVudCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+e3RleHR9PC9Eb3JpYy5DZW50ZXJDb250ZW50PjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkYXRlcyA9IHJhbmdlLmFycmF5KDQyKVxyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgICAgaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gc3RhcnREYXRlLnNoaWZ0KGksICdkYXlzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXkuZGF0ZSA9PT0gc2VsZWN0ZWREYXRlLmRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgZGF5Lm1vbnRoID09PSBzZWxlY3RlZERhdGUubW9udGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgZGF5LnllYXIgPT09IHNlbGVjdGVkRGF0ZS55ZWFyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPERvcmljLkJ1dHRvbiBjbGFzc05hbWU9XCJjYWxlbmRhclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiM0Mjg1ZjRcIiwgY29sb3I6IFwid2hpdGVcIn19IHRleHQ9e2RheS5kYXRlICsgMX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXkubW9udGggPT09IG1vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RG9yaWMuQnV0dG9uIGNsYXNzTmFtZT1cImNhbGVuZGFyXCIgdGV4dD17ZGF5LmRhdGUgKyAxfSBvblRhcD17KCkgPT4gb25DaGFuZ2UoZGF5KX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPERvcmljLkJ1dHRvbiBjbGFzc05hbWU9XCJjYWxlbmRhclwiIGRpc2FibGVkIHRleHQ9e2RheS5kYXRlICsgMX0gLz47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRvcmljLWNhbGVuZGFyPlxyXG4gICAgICAgICAgICAgICAgPERvcmljLlBpbmJvYXJkIGhlaWdodD17NTB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcGluSW5mbz17e3RvcDogMCwgbGVmdDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9udGh9L3t5ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Eb3JpYy5QaW5ib2FyZD5cclxuICAgICAgICAgICAgICAgIDxEb3JpYy5HcmlkIGNvbENvdW50PXs3fT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF5TWFya2Vyc31cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0ZXN9XHJcbiAgICAgICAgICAgICAgICA8L0RvcmljLkdyaWQ+XHJcbiAgICAgICAgICAgIDwvZG9yaWMtY2FsZW5kYXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUHJpbnRlciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmUtcmVuZGVyIVwiKTtcclxuICAgIHJldHVybiA8ZGl2PlByaW50ZXI8L2Rpdj47XHJcbn07XHJcblxyXG5pbXBvcnQgc3Bpbm5lckdJRiBmcm9tICdzb3VyY2UvZGF0YS11cmkvc3Bpbm5lci5naWYuc291cmNlJztcclxuXHJcbmRpYWxvZy5zcGlubmVyID0gKG1lc3NhZ2UpID0+IGRpYWxvZy5zaG93KHtcclxuICAgIGNvbnRlbnQ6ICgpID0+IDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+e21lc3NhZ2V9PERvcmljLkltYWdlIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MzB9IHNvdXJjZT17c3Bpbm5lckdJRn0gLz48L2Rpdj4sXHJcbiAgICBidXR0b25zOiBbXSxcclxuICAgIGRpc2FibGVFc2NhcGU6IHRydWVcclxufSlcclxuXHJcbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGF0ZTogY2hyb25vKCksXHJcbiAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RG9yaWMuU2NyZWVuIHRpdGxlPVwiQ2FsZW5kYXIgVGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8RG9yaWMuSW5wdXQuTXVsdGlsaW5lIGxhYmVsPVwidGVzdFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0ZXh0ID0+IHRoaXMuc2V0U3RhdGUoe3RleHR9KX0gLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8Q2FsZW5kYXIgc2VsZWN0ZWREYXRlPXt0aGlzLnN0YXRlLmRhdGV9IG9uQ2hhbmdlPXtkYXRlID0+IHRoaXMuc2V0U3RhdGUoe2RhdGV9KX0gLz4gKi99XHJcbiAgICAgICAgICAgIDwvRG9yaWMuU2NyZWVuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFwcC5zdGFydChcclxuICAgIDxSb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL3Rlc3RcIiBjb21wb25lbnQ9eygpID0+IDxEb3JpYy5TY3JlZW4gdGl0bGU9XCJMT0xcIiBiYWNrVGV4dD1cIkJhY2tcIiAvPn0gLz4gKi99XHJcbiAgICA8L1JvdXRlPlxyXG4pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoTUFBd0FQY0FBQUFBQURNek0yVmxaWmVYbDVpWW1KbVptYWlvcUt1cnE3Q3dzTHU3dThMQ3dzckt5czdPenMvUHo5TFMwdFRVMU5YVjFkbloyZURnNE9IaDRlUGo0K1RrNU9ibTV1am82T3JxNnV2cjYrN3U3dkR3OFBMeTh2UHo4L1gxOWZiMjl2ZjM5L2o0K1BuNStmcjYrdnY3Ky96OC9QMzkvZjcrL3YvLy81R1JrWmFXbHBxYW1rMU5UWFIwZElDQWdISnljcW1wcWQvZjN6UTBORFkyTmtORFEwUkVSRWhJU0VsSlNVOVBUMXBhV2x0YlczbDVlWDkvZjV1Ym01K2ZuNkNnb0tPam82U2twS2FtcHFlbnA3T3pzN1MwdExhMnRybTV1YisvdjhIQndjM056ZERRME5iVzF0ZlgxOXpjM09YbDVlbnA2ZTN0N1ZOVFV4MGRIU0FnSUNZbUprVkZSWHA2ZW41K2ZvU0VoSk9UazlIUjBVNU9Ub1dGaFFFQkFRSUNBZ1FFQkJRVUZCVVZGUm9hR2hzYkd5SWlJaU1qSXk4dkx6QXdNREV4TVRJeU1sRlJVVlpXVmxkWFYyWm1abWRuWjJob2FHeHNiSEZ4Y1hOemMzWjJkbmg0ZUh4OGZJYUdob2VIaDRpSWlKV1ZsWjZlbnF5c3JMR3hzYmUzdDdpNHVMcTZ1cjYrdnNQRHc4VEV4TXZMeTh6TXpOUFQwOWpZMk5yYTJ0dmIyOTdlM3VMaTR1enM3Ty92Ny9IeDhmVDA5RXRMUzFKU1VwS1NraDRlSGlRa0pDY25KMFpHUmxSVVZIVjFkWHQ3ZTB4TVRIZDNkN3k4dkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaC93dEpRME5TUjBKSE1UQXhNa2dBQUF4SVRHbHVid0lRQUFCdGJuUnlVa2RDSUZoWldpQUh6Z0FDQUFrQUJnQXhBQUJoWTNOd1RWTkdWQUFBQUFCSlJVTWdjMUpIUWdBQUFBQUFBQUFBQUFBQUFRQUE5dFlBSWY4TFNVTkRVa2RDUnpFd01USklBQUFNU0V4cGJtOENFQUFBYlc1MGNsSkhRaUJZV1ZvZ0I4NEFBZ0FKQUFZQU1RQUFZV056Y0UxVFJsUUFBQUFBU1VWRElITlNSMElBQUFBQUFBQUFBQUFBQUFFQUFQYldBQ0gvQzBsRFExSkhRa2N4TURFeVNBQUFERWhNYVc1dkFoQUFBRzF1ZEhKU1IwSWdXRmxhSUFmT0FBSUFDUUFHQURFQUFHRmpjM0JOVTBaVUFBQUFBRWxGUXlCelVrZENBQUFBQUFBQUFBQUFBQUFCQUFEMjFnQWgvd3RKUTBOU1IwSkhNVEF4TWtnQUFBeElUR2x1YndJUUFBQnRiblJ5VWtkQ0lGaFpXaUFIemdBQ0FBa0FCZ0F4QUFCaFkzTndUVk5HVkFBQUFBQkpSVU1nYzFKSFFnQUFBQUFBQUFBQUFBQUFBUUFBOXRZQUlmOExTVU5EVWtkQ1J6RXdNVEpJQUFBTVNFeHBibThDRUFBQWJXNTBjbEpIUWlCWVdWb2dCODRBQWdBSkFBWUFNUUFBWVdOemNFMVRSbFFBQUFBQVNVVkRJSE5TUjBJQUFBQUFBQUFBQUFBQUFBRUFBUGJXQUNIL0MwbERRMUpIUWtjeE1ERXlTQUFBREVoTWFXNXZBaEFBQUcxdWRISlNSMElnV0ZsYUlBZk9BQUlBQ1FBR0FERUFBR0ZqYzNCTlUwWlVBQUFBQUVsRlF5QnpVa2RDQUFBQUFBQUFBQUFBQUFBQkFBRDIxZ0FoL3d0SlEwTlNSMEpITVRBeE1rZ0FBQXhJVEdsdWJ3SVFBQUJ0Ym5SeVVrZENJRmhaV2lBSHpnQUNBQWtBQmdBeEFBQmhZM053VFZOR1ZBQUFBQUJKUlVNZ2MxSkhRZ0FBQUFBQUFBQUFBQUFBQVFBQTl0WUFJZjhMU1VORFVrZENSekV3TVRKSUFBQU1TRXhwYm04Q0VBQUFiVzUwY2xKSFFpQllXVm9nQjg0QUFnQUpBQVlBTVFBQVlXTnpjRTFUUmxRQUFBQUFTVVZESUhOU1IwSUFBQUFBQUFBQUFBQUFBQUVBQVBiV0FDSCtMVTFoWkdVZ1lua2dTM0poYzJsdGFYSmhJRTVsYW1Ob1pYWmhJQ2gzZDNjdWJHOWhaR2x1Wm04dWJtVjBLUUFoK1FRRUJRRC9BQ3dBQUFBQU1BQXdBQUFILzRBb2dvT0VoWWFIaUltS2k0eU5qbzRsSlkrVGpVMVpVbEpaVFpTY2hrVlZBS0VBVlVXZHBoQ2dvcUZWRUthY1BLcXFQSzZJSnhzVVVDT0RKRGl4b2pna3RJVlJQVGsyT0RzTkp5Z2pMTDZoTExyQ2dsRXZNZ0hZQVRjS2dsZlBBRmZUZ3ozWjVUb1lLQTFVdmxRTjRpZ2JPdVhaTXdtQ0JsT3FVd2J2S0JRMjg3TDlFSFJDU1FzclZsb29XZllPQ282QTJBNFFPaEVpQk1OK0pIWkFyTUdrMzZJR04rYkpTQ0hKb3lJRk9XWmdvNUdDZzBsR0dCTDRPTUFrMkV0RUpremNiQVRGeUFBVlJDenNUQVFCaTRDakFxNHNHV29JZ3d1a1NLOVVZRXJvQ0ZTb0NLZ1M3SEVWcVphU1RFOXc3U3JncTFZVVZzbG1QZXUwcTlTemdyT0tRbFVLZDFEUG4wSHJGc3FwTnhHSUNROGlhTGdJOXdtQ0ZRTUlBR0ZnODJ5R0lRTWlSMTdCZ1BEUUUwa2thdzZpNGV3SEdKb2xFNGhRNklSbGNSMkNoSmI4WUpDSUMwNmNYQkRoY1FTQzFRTjZUQkRFNGNHQzN3c2V1T3pub01CcUJDQlFpSUFBSERnRTJ1OUVJREV1V2NnVFFWQ2FONGZpVWNRV0JFRU1KTWt3S0laMjRERmVqdWp3Z2JENTh3dlNzNFcvQU4zWkVVek9NNUYyMWtOKzRFeDQwTmNJR1VnZ1FRYjg5YVhnZ2xvRkFnQWgrUVFGQlFBdkFDd0NBQUlBSndBckFBQUkvd0JSQ0J4SXNLQkJFeVlNS2x6SXNLQ0VQWFRvN0pIUXNHTEZRWkVDYUF3UWFaREZqd1VWcmRtNGNZMGlrQ2hYa0NTNTRvWExsekJqeXZTUVlVT0pnU1htck53NDU2WkFFWXNRTVRyUnNJT2ZMblRzN0RtSm9vU2NuUnJsM0R5aGdFMlpNV2hjWEZqWW9ZQWJBV0FGMUlFZ1VBWFVBQ29FOWhrRG9DMEFMMXkyR3ZUek5TellPNDVRSUdLeGt3VWlGQlhTdUhYcnhZVkJEM2ZzaG9YRFFHQUNTQ1FoSlJCb0FNeGd0Mm9ZRmN4QVIzSFlCQzhQcFlnVEo4V2hsM2t1dXgyVHFPQUdPNTdCQ29vNVlrUk1QVjVVQXpDenFLQ0pQYkZiVUxCSVNJenVOaU1NS3FxaitBMkNoQlZKdFBoeW1ZeUNoUkM2d0JIZ1pnNENFQ0ExdE44SWt4dk1tVDVFRnpwaUFFZ1FCZWdnUnhEU2c4ZEFoWVVuMHFQY0w1RERsZ1NBTkxBQmZ5aFpjQUFCQXd4QWdBSERFVmhSQjN3a0tPRUFCalRpWUVPR0lEaGhnb1ZjeUZBZ0cwcjRCM3dlRWdSaWlBT01XS0pCR2FMWTRZb0ZRUmhpaFRBYVpLQ0dDelpZWTBIK0FTamdqZ3psQitSSEpYQ0FnUVloREZuUUl4RVVzZ0FoVzF4QTRvNGZHTExBbFZjV0l0ZVFFMkRwNVJaSkFrbkNBMTVpU1lnR1E0N2dRSmxZWWpDa0NSR3d1VUFoSENpSkFTRnNSdUFUa0NaSWdDZVdoanlpcEVBbFlIQ0lBdzlNQU42Z0E1a3dBZ2t4TVNycHBKUlcrbEZBQUNINUJBVUZBQ3dBTEFNQUFnQXJBQ2NBQUFqL0FGRUlIRWl3WU1FVEp3d3FYTWlRSVlZalBYb2N3ZEN3b3NXQkVIZ0kyQ2lBQjRTTElCVkMwY2h4SXc4b0lWTUtORkt5cEJHVkMwZDArSkJRb0lrQkxUa09NREZ3QkJRS0cycGFGT0VBUVJBRFNUTFlWSkZ6b3dxZUp4cnN3R0VqUjQ4b1E1RVVHTUIxZ0pBbkFvazBGVUJFb0lJYkFkSUdrUEVDYTBNSFc3dHlSUUFDaFlWTU9UTlpRSUZCaDlxL1BScU9RQ0MzYTQ4SkFwZnNLTGxqaWNBRU0vNnExYkdCWVljZ2hicytHRmdCZ1NSSkNDb00vQ0ZaclEwS0REL0F5RHlBUUlTQ0pVb1VQRkE2TFE2VUMwOGtZUjFFZzBVbU5XcnZJTkV3dzVEQ0t4Z0laVmdpaFF6Sk54cFlmSUpnUldzZ0RJaGY1SkNDUnRvWk9SU0FzUVF4NFVFRURjc3RrbWh5d0VjQ2lqRGpHeHlodmFEUEdER2dpSkIvVUxFbUxoNFI1QUVUQ3hTNHdBTWM4RGVRQVpNQTRDQUFsQlFoMEFoTkdHamdBL3Z4cDBTRER6cFlTUk1vWkdDaGhSY29pRW1ISFhhQmdnUWpHdWdFZnlGWWd1S0RsNVRBWW9zTHZDaGZqRE02V0tPSU9KYkkzNGs5cWtoaGl4Z3F1T0dNSHdvMG9JVUlLaWdRZ3gxR1NOQjkrV1VvNVFuK0FmaVJsQ0hSQithWVpKWnA1cGxvcHFubW1teTI2ZWFiY0Y0VUVBQWgrUVFGQlFBcEFDd0RBQUlBS3dBbkFBQUkvd0JSQ0J4SXNLREJnd2dUS2pUWXdWQ2dRSVk2TEp4STBRSWZBZ01HRU9CamdhTEhneHdPWkJ3NTRBQ0hqeWdGYnNGSVV1T1dsQWhOakNCeFl1Q0pCQzFIY3FvcHNNU0dEQjU0VGl5QjRaQ0RCeE5BQ0x5Wk0yTUNub3IyMktIVHhZL0VoU1lrRUZyQWRZR2hSd0liTkIzUVFDQ0VPZ0xTQ25CVDRHcENERnU3Y28xUUFzVUdHRGxoYkVEaDZJNWF0Vzc4S0RRUlFXN1hRaWRSVURCQTBnQUZnUXpnL0ZWN3gwUENFUTRNZDhVd3NGR2hQMzhLTlJxWVlMSmFPaGtTa25pZ2VRRWhEUVZObUNnb3lIUmFPM3NUVG1pOUpjUkVDaTFzNzVtZDhJTWh3NFV1VURTQjRNM2tPb29tUG9wUXlQV1dDOFFuZ2tBd3g0MEFPRjBnZU5Vc3dRR0RCdDhvVFZBUUJJaUJJNWp3RDVhb0d6L2xDVVI2NUx3b0VLUCt4d1NhQkNCZ0FHc000dDlFaHdRNG9JQlNTSENnUXBJc3VPQWVEeUkwUWh3U0RyaEpkaFVPZEdHR0FtN1lvVUVSZ2tqaGlBVWxtR0dES0JvRTRJSUZ0bWpRZmZudDE1K01DTTJIbzRlRTZJR0hBUlhzU0pBR0xZVGhCUUJnbk5HSFVES1MwTUlYQUVRWkpSa0tDRW1JR0ZKbTJjWUlPK3B4WkpaUm1ySElqbm1BS2VVWWlleG9BQmhtQXFBR0l6dFdrSWFaWHJnZ0pBcDlqSkdsRjF3b0orUUpDckJSeGhob3VPRG5uU2lJc0FnaWpEQkpVRUFBSWZrRUJRVUFXd0FzQndBREFDY0FLd0FBQi8rQUtJS0RoSVFqR1JJU0dTT0ZqWTZQalI1TUM1UUxUQjZRbVpvams1V1VUSXlhb29VWW5wNFlvNm1DTWFhVk1ZUW5IeDJocW9Tc3JRdXZnaGxKQmtFSURpSzFnMUM0QzFDQ1QwSUR6QU1GU01MREloQ3RFTUlnQ00zTkJRN0RnaHdQbmc4Y2doTTkyczBJdExVaUYwNU9GOUVvRCtqTlFSM2VneWNuaFJFRTlRTmdmTWdIU1VNUWdFbjRFWFIwZ3NFS2RFTXlMSVJFZ2dHUWZ5c1FQSm1ZNllTR0NBOG1nT0E0eklRSmtwb3NFRkV4d0FneWxJMldYQkZBVXdBV0NEQUpWWmhaazZZTFZEbFJJT2paODBqUUVscUkxdXloRUNWU3BUU1pCaDBLMVdqUW5VcC9CaFVrcytmTnJZTlVzblFKdHBCSnNDU1lIUENSQUNoWURpbWhhQVFJTUNPSEFyQWxVc2lZeS9kR2c2MU1hdkFkdklNRXdSTWhRalJGY1dEd1lCd3ZhNTFRMHNLS2xSWktGUDV3ek5jR0JXOEdwZ0FZRFdDS0FVRUpabkFPb0dQRHNBWlVTSk9tOGhlRGp0VTl2RjJSTGZ1S0lBVTNCc3Q0RVdYWUNCYThTYk5nZEtMQkRodzJjdlFvUG93RWp1U2pjUmdXTkFJS2hRMkxhL0hBRG9ESFZnaFZrbGZCdWJWSWV0SlZpcFJGMFNTTEZDbFptc3dmVktMRXdrQUFJZmtFQlFVQUx3QXNCd0FEQUNjQUt3QUFDUDhBVVFnY1NMQ2d3WU1JRXlwY3lMQ2h3NGNRSTBwY2VJTEVDQk1USDRLWThNREJJUXdsTWk1OFpHaUJ5UVdFSkdBVWViQkVoSk1uQ1dGZ2VaQkRJWmduRDYya09SQUR6cE1PUnZBa3FJSFF6d1VQU0F3ZEdHTEwwUWxMQ1Y2NENkUFFoNmdEVFZ6WVlyUlFoRWRZQzRiUWdJRkR5TEFLVDV4QVczQkRBMEFKdG5CZ2k0S0NBUUlEQmhBNFlBRnRJd041QXcvZzB5RnNJY0dCQ1JqQ2F1SVA0c0NCR0R0K1BDQXkxc09QRllmOSs1Z3dXcnQ0OWZLbDZ4YXVYTG9EMVNLc1lBQ1BIa0pDSDVxZ0lBZ1FBMGNKVC9RNUF3YUFsekF0TkRnRWdXQ09Hd0Z3dWtCQXFJQU1nT2ZQdjdSUXV0QUVnamNDc21ldm84amdpRGJRdzR2WkljU1FRZ3Z0NlBmc0ZMaklUSGpvWHZRUVBERml4TnFCZ3RDanQ3T2hZS0l4NzBHWGgwQW5ISkpDSEhHa2NNaDlDZWluSFIwWkZNU0lHZ0VDQUlZQkFpVUFTUUFjQmdCSkFnSXhBSWVEQXR6aGdVRXVlQkZnR2hXZ2dBZ0xIWGJJQWlJb09IS0hnMjc0Y2RBRlhLZ0kzUmg5Q0tSQ2pER3FJQkFFZGFEblJnR0Y3ZWdDR21PVXdZWUNhNVVnQjVFZHluR1dJbnZZUVVjWGZqU0owQW1NSUxLSUNBT1ZNQWVXSE01eEZnb2xiSkNCQi9kSnRBS2JBYXdRbGlKcllMbEdkMkVORWttTWtReENsd1I3MEVISEhoS2dKcEFKNjBVVUVBQWgrUVFGQlFBdEFDd0NBQWNBS3dBbkFBQUkvd0JSQ0J4SXNLREJnd2dUS2x6SXNLSERoeEFqU3B4SXNhTEZpeGd6YXR6SXNhUEhoaVJHZkVRSWdRY1hGanVXbk1nb0FrcU1HRkJFRGl4Q0NZQk5BSk1NWU9Ud1lJSFBCVXc4Q0d4UzZlYk5TVW9zaXVqNTAyY1RrVjJNR3NWazhVTFRwaGxLWEpKNjAxS0lpazZ1L3BTZ2xhdE5yMkRGK3BTQUlxcFpxaFd0cXMyQWdpaFhwRXFaTm4wcWtLYlJuRHYxQWhVNnNPVEpsQ3N4dG53WjgyRElrUXd4SlBCeG9Ba0ppQ2MwUkhnd0FZUkRCVGxtQkFoQUl3VUhoeVFZQUNFd29BZUNKd3diM0JoTlcwYUtFZ3hQTUZneG9IZnZJWFFUa3RoQnUzZ05KZ3cxQlBITlBFbmlnMUJ3RkM5K29HQUozQVFqc0diZUc4YUhoQlJzVExHbi9XTmdCUVNTSkNHb01QQUJkOTlCT2lUY29HTjhnQmtKQkM3WklhQy9nSlFDVGRERGV3TWdJQk5DUGRpbkF3WW9XSkNKZi81bFlnRUtJQ0R3WGdFT0xCVEZDeklVZDRNQ0FoRUJJWVJFQ1BTRUVNd1ZnSVFJREVYUlF3NDI0TEJEQXl1Wm9NS0kvcWxnZ2tBWkpHRkFFQWhzd1dKREoyeEFRV01DbVRBQWp2ME5zS05BSjN6UXdZRVdHY0drQUVaQUJnVVBPUElBQldRb2xBUWhEeENBS1JBR1IvVFF3eEVNbWpuUUNjOUZGQkFBSWZrRUJRVUFLUUFzQWdBSEFDc0FKd0FBQ1A4QVVRZ2NLUEFFSTBTTFJCQmN5TENodzRZWFhLQVpVNGFOZ2hNUE0yb2tlSUdMRndBZ0FZenBzN0hrUXhjZlE0Sk1VOEdreTRHTTFLZ01DY2JBeTVlSnhzd01tZWVteTBWbWRnTHdvc2VueVJGdGhJb2haTlNrQWpJenY3UWcwYlRraVQ1bndBd04wMEpEVlpjVkRPRFJRMmpFMTQwbFNweDlHYVBBQ3psNkVHRmNtM0hRbWdCNEEyaEtRUGVoQkNsNTgybzYxTGZobnNDQkpSVmVhR0lUNHJ4eHpDNFcyUGd4M3NpVEJ4NjJyRGl6d0wrUEIzc2VhRGZ3M3RFRTI3Nk5PeGYxd0xTdU16cGlBRWdRQlJNM1EyakF3RUZ0U1FoZDRBaHdNd2NCQ0pNbUxtd2h0S0JRaEVjYkZkVVJRSjM2R3dTNE4xNG90S0I3ZDBNZk1wclUyRk85ZkFzS0cwTnM4YzUrUXNZTmRzcVhGOFE0KzBBTnpObDNmMERWWVFZNjhsWEhsMENORlBMSEg0VTBNaEFHK25ubmdHUU5lWEJIZ0FMQXdZQkFGQmd3d0lZREdJQWVDaHh3MTJBRTlqWGtoeHNCM3VFSUNodkF3Q0dITUd5QVFna1JORWdJQmhwMVVBQ0sxZFVCZ1VBTnZQaGlBd0k5WWdoN2hFaFFva01kK05FRkhYYnNvVWhCQ1FqSllRSnpnVERCQXc0Y2dvRnZHNTNnUVFZYmdIbENsVllPd0Vscko1QXd3cEpOYlVHQWxRUnNnUm9IQjFoNUFBZXVXY0RIbkFNUXdJY0ZzYUhRZ1NHQkJHSklCNFhTRlJBQU93PT1cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2VudHJpZXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGFzc2lnbiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX09iamVjdCRhc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX09iamVjdCRzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX09iamVjdCRzZXRQcm90b3R5cGVPZiA/IF9PYmplY3Qkc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX1N5bWJvbCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkLmNyZWF0ZShQLCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmVudHJpZXM7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuU3ltYm9sOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMS4yLjYnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSAkLmdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSAkLmlzRW51bVxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKWtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGdldE5hbWVzICA9IHJlcXVpcmUoJy4vJCcpLmdldE5hbWVzXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgaWYod2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScpcmV0dXJuIGdldFdpbmRvd05hbWVzKGl0KTtcbiAgcmV0dXJuIGdldE5hbWVzKHRvSU9iamVjdChpdCkpO1xufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24oYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLmhpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90byAgICAgICA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCBtZXRob2RzLCBrZXk7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJG5hdGl2ZSl7XG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8oJGRlZmF1bHQuY2FsbChuZXcgQmFzZSkpO1xuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZighTElCUkFSWSAmJiBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICAgIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICAgIH1cbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59OyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsIi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0Jyk7XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgYSA9IE9iamVjdC5hc3NpZ25cbiAgICAsIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gYSh7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cyhhKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICwgJCRsZW4gPSAkJC5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0S2V5cyAgICA9ICQuZ2V0S2V5c1xuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9sc1xuICAgICwgaXNFbnVtICAgICA9ICQuaXNFbnVtO1xuICB3aGlsZSgkJGxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdCgkJFtpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufSA6IE9iamVjdC5hc3NpZ247IiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTsiLCJ2YXIgJCAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgaXNFbnVtICAgID0gJC5pc0VudW07XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzRW50cmllcyl7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdChpdClcbiAgICAgICwga2V5cyAgID0gJC5nZXRLZXlzKE8pXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGkgICAgICA9IDBcbiAgICAgICwgcmVzdWx0ID0gW11cbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSl7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5oaWRlJyk7IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGdldERlc2MgID0gcmVxdWlyZSgnLi8kJykuZ2V0RGVzY1xuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi8kLmN0eCcpKEZ1bmN0aW9uLmNhbGwsIGdldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgc3RvcmUgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIFN5bWJvbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5TeW1ib2w7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBTeW1ib2wgJiYgU3ltYm9sW25hbWVdIHx8IChTeW1ib2wgfHwgdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59OyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLm9iamVjdC1hc3NpZ24nKX0pOyIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCRnZXRQcm90b3R5cGVPZil7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXR9KTsiLCIiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLndrcycpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuLyQua2V5b2YnKVxuICAsICRuYW1lcyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdldC1uYW1lcycpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBnZXREZXNjICAgICAgICA9ICQuZ2V0RGVzY1xuICAsIHNldERlc2MgICAgICAgID0gJC5zZXREZXNjXG4gICwgX2NyZWF0ZSAgICAgICAgPSAkLmNyZWF0ZVxuICAsIGdldE5hbWVzICAgICAgID0gJG5hbWVzLmdldFxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIHNldHRlciAgICAgICAgID0gZmFsc2VcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgaXNFbnVtICAgICAgICAgPSAkLmlzRW51bVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCB1c2VOYXRpdmUgICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoc2V0RGVzYyh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gc2V0RGVzYyh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnZXREZXNjKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIHNldERlc2MoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pc2V0RGVzYyhPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IHNldERlc2M7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbC5wcm90b3R5cGUpO1xuICBzeW0uX2sgPSB0YWc7XG4gIERFU0NSSVBUT1JTICYmIHNldHRlciAmJiBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlzZXREZXNjKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBzZXREZXNjKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkpO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldXG4gICAgPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgdmFyIEQgPSBnZXREZXNjKGl0ID0gdG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOKXJlc3VsdC5wdXNoKGtleSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyICRzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgLCBpICAgID0gMVxuICAgICwgJCQgICA9IGFyZ3VtZW50c1xuICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgd2hpbGUoJCQubGVuZ3RoID4gaSlhcmdzLnB1c2goJCRbaSsrXSk7XG4gIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgfTtcbiAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG59O1xudmFyIGJ1Z2d5SlNPTiA9ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighdXNlTmF0aXZlKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKGlzU3ltYm9sKHRoaXMpKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgcmV0dXJuIHdyYXAodWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKSk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2wucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICBpc1N5bWJvbCA9IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xuICB9O1xuXG4gICQuY3JlYXRlICAgICA9ICRjcmVhdGU7XG4gICQuaXNFbnVtICAgICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJC5nZXREZXNjICAgID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJC5zZXREZXNjICAgID0gJGRlZmluZVByb3BlcnR5O1xuICAkLnNldERlc2NzICAgPSAkZGVmaW5lUHJvcGVydGllcztcbiAgJC5nZXROYW1lcyAgID0gJG5hbWVzLmdldCA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAkLmdldFN5bWJvbHMgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuLyQubGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgc3ltYm9sU3RhdGljcyA9IHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufTtcbi8vIDE5LjQuMi4yIFN5bWJvbC5oYXNJbnN0YW5jZVxuLy8gMTkuNC4yLjMgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZVxuLy8gMTkuNC4yLjQgU3ltYm9sLml0ZXJhdG9yXG4vLyAxOS40LjIuNiBTeW1ib2wubWF0Y2hcbi8vIDE5LjQuMi44IFN5bWJvbC5yZXBsYWNlXG4vLyAxOS40LjIuOSBTeW1ib2wuc2VhcmNoXG4vLyAxOS40LjIuMTAgU3ltYm9sLnNwZWNpZXNcbi8vIDE5LjQuMi4xMSBTeW1ib2wuc3BsaXRcbi8vIDE5LjQuMi4xMiBTeW1ib2wudG9QcmltaXRpdmVcbi8vIDE5LjQuMi4xMyBTeW1ib2wudG9TdHJpbmdUYWdcbi8vIDE5LjQuMi4xNCBTeW1ib2wudW5zY29wYWJsZXNcbiQuZWFjaC5jYWxsKChcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCwnICtcbiAgJ3NwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHN5bSA9IHdrcyhpdCk7XG4gIHN5bWJvbFN0YXRpY3NbaXRdID0gdXNlTmF0aXZlID8gc3ltIDogd3JhcChzeW0pO1xufSk7XG5cbnNldHRlciA9IHRydWU7XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnU3ltYm9sJywgc3ltYm9sU3RhdGljcyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXVzZU5hdGl2ZSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIXVzZU5hdGl2ZSB8fCBidWdneUpTT04pLCAnSlNPTicsIHtzdHJpbmdpZnk6ICRzdHJpbmdpZnl9KTtcblxuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCIvLyBodHRwOi8vZ29vLmdsL1hrQnJqRFxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGVudHJpZXMgPSByZXF1aXJlKCcuLyQub2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KXtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbkl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTsiXX0=
