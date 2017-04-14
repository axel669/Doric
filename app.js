(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.testing = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

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

var HBox = function HBox(_ref) {
    var children = _ref.children;

    children = React.Children.toArray(children);
    children = children.map(function (child) {
        return React.createElement(
            "div",
            { style: { display: 'inline-block' } },
            child
        );
    });
    return React.createElement(
        "div",
        null,
        children
    );
};
var VBox = function VBox(_ref2) {
    var children = _ref2.children;

    children = React.Children.toArray(children);
    children = children.map(function (child) {
        return React.createElement(
            "div",
            null,
            child
        );
    });
    return React.createElement(
        "div",
        null,
        children
    );
};

var Shadow = function (_React$Component) {
    (0, _inherits3.default)(Shadow, _React$Component);

    function Shadow(props) {
        (0, _classCallCheck3.default)(this, Shadow);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Shadow.__proto__ || (0, _getPrototypeOf2.default)(Shadow)).call(this, props));

        _this.componentDidMount = function () {
            var node = _this.refs.root;
            var root = document.createElement(_this.props.nodeName);
            var shadow = root.createShadowRoot();
            _this.eventNode = root;
            node.parentNode.replaceChild(root, node);
            shadow.appendChild(node);
            _this.setState({ mounted: true });
            window.shadowNode = root;
        };

        _this.render = function () {
            if (_this.state.mounted === false) {
                return React.createElement("mount-node", { ref: "root" });
            }
            return React.createElement(
                "mount-node",
                { ref: "root" },
                _this.props.children
            );
        };

        _this.state = { mounted: false };
        return _this;
    }

    return Shadow;
}(React.Component);

var superNest = function superNest(depth) {
    var child = null;
    if (depth > 0) {
        child = superNest(depth - 1);
    } else {
        child = React.createElement(
            CustomEvents,
            { component: "div", onTouchStart: function onTouchStart(evt) {
                    cblog('a', evt);evt.stopPropagation();
                } },
            "super nest"
        );
    }
    return React.createElement(
        "div",
        null,
        child
    );
};

// const wideIMGurl = "http://pre09.deviantart.net/e5d4/th/pre/f/2011/259/c/a/bayonetta_wallpaper_by_meanhonkey1980-d49zzsu.jpg";
// const wideIMGurl = "http://www.imgbase.info/images/safe-wallpapers/video_games/bayonetta/45700_bayonetta.jpg";
// const wideIMGurl = "http://www.ffwa.eu/ff9/images/wallpaper/iifa-1024.jpg";
// const wideIMGurl = "http://a3.mzstatic.com/jp/r30/Purple/v4/d7/12/51/d71251a5-1f50-f6bc-d56a-8740ea2532fb/screen1136x1136.jpeg";
var wideIMGurl = "https://upload.wikimedia.org/wikipedia/en/b/b8/Bayonetta-character.png";

var lineColor = 'gray';
App.styleSheet.addStyles({
    "doric-tabs": {
        position: 'relative',
        top: 0,
        left: 0,
        display: 'block'
    },
    "doric-tabs-bar": {
        height: 35,
        display: 'block',
        position: 'absolute',
        top: 0,
        width: '100%'
    },
    "doric-tabs-tab": {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        border: '1px solid transparent',
        borderBottom: "1px solid " + lineColor,
        position: 'absolute',
        opacity: 0.7,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    "doric-tabs-tab[selected]": {
        border: "1px solid " + lineColor,
        borderBottom: '1px solid transparent',
        opacity: 1
    },
    "doric-tabs-content": {
        display: 'block',
        position: 'absolute',
        top: 35,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'auto'
    }
});

// class Tabs extends React.Component {
//     constructor(props) {
//         super(props);
//         this.scrolls = {};
//     }
//
//     componentWillUpdate = () => {
//         console.log(this.props);
//     }
//     componentDidUpdate = () => {
//         const {
//             selectedIndex = 0,
//             unmountOnChange = false
//         } = this.props;
//
//         if (unmountOnChange === false) {
//             this.refs.content.scrollTop = this.scrolls[selectedIndex];
//         }
//     }
//
//     render = () => {
//         const {
//             selectedIndex = 0,
//             height = 100,
//             unmountOnChange = false
//         } = this.props;
//         const children = React.Children.toArray(this.props.children);
//         const onChange = this.props.onChange || (() => {});
//         const size = 100 / children.length;
//
//         const tabs = children.map(
//             (tab, index) => {
//                 const props = {
//                     selected: (index === selectedIndex) || null,
//                     style: {
//                         width: `${size}%`,
//                         left: `${size * index}%`
//                     },
//                     onTap (evt) {
//                         onChange(index);
//                     }
//                 };
//                 const tabTitle = tab.props["tab-title"];
//                 const tabIcon = tab.props['tab-icon'] || null;
//                 const tabImage = tab.props['tab-image'] || null;
//
//                 if (this.scrolls[index] === undefined) {
//                     this.scrolls[index] = 0;
//                 }
//
//                 let tabContent = null;
//                 if (tabImage !== null) {
//                     tabContent = <Doric.Image source={tabImage} width="100%" height="100%" />;
//                 } else {
//                     tabContent = [<div>{tabTitle}</div>];
//                     if (tabIcon !== null) {
//                         tabContent.unshift(<div style={{padding: 3}}><Doric.Icon icon={tabIcon} /></div>);
//                     }
//                 }
//
//                 return <Doric.CustomEvents component="doric-tabs-tab" {...props}>{tabContent}</Doric.CustomEvents>;
//             }
//         );
//
//         let displayChidren = null;
//         if (unmountOnChange === false) {
//             displayChidren = children.map(
//                 (child, index) => {
//                     const display = (index === selectedIndex) ? null : 'none';
//                     return <div style={{display}}>{child}</div>;
//                 }
//             );
//         } else {
//             displayChidren = <div>{children[selectedIndex]}</div>;
//         }
//
//         return (
//             <doric-tabs style={{height}}>
//                 <doric-tabs-bar>{tabs}</doric-tabs-bar>
//                 <doric-tabs-content ref="content">
//                     {displayChidren}
//                 </doric-tabs-content>
//             </doric-tabs>
//         );
//     }
// }

var Tabs = function Tabs(props) {
    var _props$keepAlive = props.keepAlive,
        keepAlive = _props$keepAlive === undefined ? false : _props$keepAlive,
        _props$selectedIndex = props.selectedIndex,
        selectedIndex = _props$selectedIndex === undefined ? 0 : _props$selectedIndex,
        _props$height = props.height,
        height = _props$height === undefined ? 100 : _props$height,
        _props$unmountOnChang = props.unmountOnChange,
        unmountOnChange = _props$unmountOnChang === undefined ? false : _props$unmountOnChang;

    var children = React.Children.toArray(props.children);
    var onChange = props.onChange || function () {};
    var size = 100 / children.length;

    var tabs = children.map(function (tab, index) {
        var props = {
            selected: index === selectedIndex || null,
            style: {
                width: size + "%",
                left: size * index + "%"
            },
            onTap: function onTap(evt) {
                onChange(index);
            }
        };
        var tabTitle = tab.props["tab-title"];
        var tabIcon = tab.props['tab-icon'] || null;
        var tabImage = tab.props['tab-image'] || null;

        var tabContent = null;
        if (tabImage !== null) {
            tabContent = React.createElement(Doric.Image, { source: tabImage, width: "100%", height: "100%" });
        } else {
            tabContent = [React.createElement(
                "div",
                null,
                tabTitle
            )];
            if (tabIcon !== null) {
                tabContent.unshift(React.createElement(
                    "div",
                    { style: { padding: 3 } },
                    React.createElement(Doric.Icon, { icon: tabIcon })
                ));
            }
        }

        return React.createElement(
            Doric.CustomEvents,
            (0, _extends3.default)({ component: "doric-tabs-tab" }, props),
            tabContent
        );
    });

    var displayChidren = null;
    if (unmountOnChange === false) {
        displayChidren = children.map(function (child, index) {
            var display = index === selectedIndex ? null : 'none';
            return React.createElement(
                "div",
                { style: { display: display }, key: index },
                child
            );
        });
    } else {
        displayChidren = React.createElement(
            "div",
            null,
            children[selectedIndex]
        );
    }

    return React.createElement(
        "doric-tabs",
        { style: { height: height } },
        React.createElement(
            "doric-tabs-bar",
            null,
            tabs
        ),
        React.createElement(
            "doric-tabs-content",
            null,
            displayChidren
        )
    );
};

var TestLifecycle = function (_React$Component2) {
    (0, _inherits3.default)(TestLifecycle, _React$Component2);

    function TestLifecycle(props) {
        (0, _classCallCheck3.default)(this, TestLifecycle);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (TestLifecycle.__proto__ || (0, _getPrototypeOf2.default)(TestLifecycle)).call(this, props));

        _this2.componentDidMount = function () {
            // console.log('mounted');
        };

        _this2.componentWillUnmount = function () {
            // console.log('unmounted');
        };

        _this2.render = function () {
            return React.createElement(
                "div",
                null,
                _this2.props.children
            );
        };

        return _this2;
    }

    return TestLifecycle;
}(React.Component);

var Main = function (_React$Component3) {
    (0, _inherits3.default)(Main, _React$Component3);

    function Main(props) {
        (0, _classCallCheck3.default)(this, Main);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props));

        _this3.render = function () {
            // console.log('wat', Date.now());
            return React.createElement(
                "div",
                { style: { width: '100%', height: '100%' } },
                React.createElement(
                    "div",
                    { style: { width: '100%', height: '100%', overflow: 'auto' } },
                    React.createElement(
                        Doric.Card,
                        { title: "Testing" },
                        React.createElement(Doric.Image, { source: wideIMGurl, width: "100%", height: 150 }),
                        React.createElement(Doric.Input.Text, { value: _this3.state.text, onChange: function onChange(text) {
                                return _this3.setState({ text: text });
                            }, label: "Woah" }),
                        React.createElement(Doric.Slider, { value: _this3.state.num, onChange: function onChange(num) {
                                return _this3.setState({ num: num });
                            }, min: 0, max: 100 })
                    ),
                    React.createElement(
                        Tabs,
                        { onChange: function onChange(tab) {
                                return _this3.setState({ tab: tab });
                            }, selectedIndex: _this3.state.tab, height: 250 },
                        React.createElement(
                            TestLifecycle,
                            { "tab-image": wideIMGurl },
                            range.array(20, function (i) {
                                return React.createElement(
                                    "div",
                                    null,
                                    i
                                );
                            })
                        ),
                        React.createElement(
                            TestLifecycle,
                            { "tab-title": "B", "tab-icon": "ion-ionic" },
                            "2"
                        ),
                        React.createElement(
                            TestLifecycle,
                            { "tab-title": "C" },
                            "3"
                        ),
                        React.createElement(
                            TestLifecycle,
                            { "tab-icon": "ion-checkmark-circled" },
                            "4"
                        )
                    )
                )
            );
        };

        _this3.state = {
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
        return _this3;
    }

    return Main;
}(React.Component);

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

var actions = [React.createElement(Doric.Button, { text: "First" }), React.createElement(Doric.Button, { text: "Second" })];

App.render(React.createElement(Main, null));

},{"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":7,"babel-runtime/helpers/extends":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/possibleConstructorReturn":10}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":12}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":13}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":14}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":15}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":16}],7:[function(require,module,exports){
"use strict";

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],8:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/assign":2}],9:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/create":3,"babel-runtime/core-js/object/set-prototype-of":5}],10:[function(require,module,exports){
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
},{"babel-runtime/helpers/typeof":11}],11:[function(require,module,exports){
"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

exports["default"] = function (obj) {
  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
};

exports.__esModule = true;
},{"babel-runtime/core-js/symbol":6}],12:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":20,"../../modules/es6.object.assign":48}],13:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":34}],14:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/$.core').Object.getPrototypeOf;
},{"../../modules/$.core":20,"../../modules/es6.object.get-prototype-of":49}],15:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":20,"../../modules/es6.object.set-prototype-of":50}],16:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":20,"../../modules/es6.object.to-string":51,"../../modules/es6.symbol":52}],17:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],18:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":33}],19:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],20:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],21:[function(require,module,exports){
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
},{"./$.a-function":17}],22:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],23:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":26}],24:[function(require,module,exports){
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
},{"./$":34}],25:[function(require,module,exports){
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
},{"./$.core":20,"./$.ctx":21,"./$.global":28}],26:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],27:[function(require,module,exports){
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
},{"./$":34,"./$.to-iobject":44}],28:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],29:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],30:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":34,"./$.descriptors":23,"./$.property-desc":39}],31:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":19}],32:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":19}],33:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],34:[function(require,module,exports){
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
},{}],35:[function(require,module,exports){
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
},{"./$":34,"./$.to-iobject":44}],36:[function(require,module,exports){
module.exports = true;
},{}],37:[function(require,module,exports){
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
},{"./$":34,"./$.fails":26,"./$.iobject":31,"./$.to-object":45}],38:[function(require,module,exports){
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
},{"./$.core":20,"./$.export":25,"./$.fails":26}],39:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],40:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":30}],41:[function(require,module,exports){
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
},{"./$":34,"./$.an-object":18,"./$.ctx":21,"./$.is-object":33}],42:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":34,"./$.has":29,"./$.wks":47}],43:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":28}],44:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":22,"./$.iobject":31}],45:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":22}],46:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],47:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":28,"./$.shared":43,"./$.uid":46}],48:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":25,"./$.object-assign":37}],49:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":38,"./$.to-object":45}],50:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":25,"./$.set-proto":41}],51:[function(require,module,exports){

},{}],52:[function(require,module,exports){
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
},{"./$":34,"./$.an-object":18,"./$.descriptors":23,"./$.enum-keys":24,"./$.export":25,"./$.fails":26,"./$.get-names":27,"./$.global":28,"./$.has":29,"./$.is-array":32,"./$.keyof":35,"./$.library":36,"./$.property-desc":39,"./$.redefine":40,"./$.set-to-string-tag":42,"./$.shared":43,"./$.to-iobject":44,"./$.uid":46,"./$.wks":47}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5hdG9tL3BhY2thZ2VzL2F0b20tYmFiZWwtY29tcGlsZXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRlbW8tY29kZVxcZGVtby5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVmaW5lZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlc2NyaXB0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nZXQtbmFtZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oaWRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5rZXlvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmxpYnJhcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3QtYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LXNhcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC1wcm90by5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJDQWMsUztJQUFQLEcsY0FBQSxHOzs7QUFFUCxJQUFJLE9BQU8sU0FBUCxDQUFpQixNQUFqQixLQUE0QixTQUFoQyxFQUEyQztBQUN2QyxXQUFPLFNBQVAsQ0FBaUIsTUFBakIsR0FBMEIsVUFBVSxDQUFWLEVBQWE7QUFDbkMsWUFBSSxNQUFNLEVBQVY7QUFDQSxlQUFPLElBQUksQ0FBWCxFQUFjO0FBQ1YsbUJBQU8sSUFBUDtBQUNBLGlCQUFLLENBQUw7QUFDSDtBQUNELGVBQU8sR0FBUDtBQUNILEtBUEQ7QUFRSDs7QUFFRCxJQUFNLE9BQU8sU0FBUCxJQUFPLE9BQWdCO0FBQUEsUUFBZCxRQUFjLFFBQWQsUUFBYzs7QUFDekIsZUFBVyxNQUFNLFFBQU4sQ0FBZSxPQUFmLENBQXVCLFFBQXZCLENBQVg7QUFDQSxlQUFXLFNBQVMsR0FBVCxDQUFhO0FBQUEsZUFBUztBQUFBO0FBQUEsY0FBSyxPQUFPLEVBQUMsU0FBUyxjQUFWLEVBQVo7QUFBd0M7QUFBeEMsU0FBVDtBQUFBLEtBQWIsQ0FBWDtBQUNBLFdBQU87QUFBQTtBQUFBO0FBQU07QUFBTixLQUFQO0FBQ0gsQ0FKRDtBQUtBLElBQU0s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Q0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCB7Q1NTfSA9IERvcmljVXRpbDtcclxuXHJcbmlmIChTdHJpbmcucHJvdG90eXBlLnJlcGVhdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBTdHJpbmcucHJvdG90eXBlLnJlcGVhdCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgbGV0IHJlcyA9IFwiXCI7XHJcbiAgICAgICAgd2hpbGUgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgIHJlcyArPSB0aGlzO1xyXG4gICAgICAgICAgICBuIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCBIQm94ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XHJcbiAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLm1hcChjaGlsZCA9PiA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jayd9fT57Y2hpbGR9PC9kaXY+KTtcclxuICAgIHJldHVybiA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cclxufTtcclxuY29uc3QgVkJveCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xyXG4gICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5tYXAoY2hpbGQgPT4gPGRpdj57Y2hpbGR9PC9kaXY+KTtcclxuICAgIHJldHVybiA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cclxufTtcclxuXHJcbmNsYXNzIFNoYWRvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge21vdW50ZWQ6IGZhbHNlfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5yZWZzLnJvb3Q7XHJcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5ub2RlTmFtZSk7XHJcbiAgICAgICAgY29uc3Qgc2hhZG93ID0gcm9vdC5jcmVhdGVTaGFkb3dSb290KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudE5vZGUgPSByb290O1xyXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocm9vdCwgbm9kZSk7XHJcbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdW50ZWQ6IHRydWV9KTtcclxuICAgICAgICB3aW5kb3cuc2hhZG93Tm9kZSA9IHJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1vdW50ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8bW91bnQtbm9kZSByZWY9XCJyb290XCIgLz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxtb3VudC1ub2RlIHJlZj1cInJvb3RcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21vdW50LW5vZGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3VwZXJOZXN0ID0gZGVwdGggPT4ge1xyXG4gICAgbGV0IGNoaWxkID0gbnVsbDtcclxuICAgIGlmIChkZXB0aCA+IDApIHtcclxuICAgICAgICBjaGlsZCA9IHN1cGVyTmVzdChkZXB0aCAtIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjaGlsZCA9IDxDdXN0b21FdmVudHMgY29tcG9uZW50PVwiZGl2XCIgb25Ub3VjaFN0YXJ0PXtldnQgPT4ge2NibG9nKCdhJywgZXZ0KTsgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO319PnN1cGVyIG5lc3Q8L0N1c3RvbUV2ZW50cz47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPGRpdj57Y2hpbGR9PC9kaXY+O1xyXG59O1xyXG5cclxuLy8gY29uc3Qgd2lkZUlNR3VybCA9IFwiaHR0cDovL3ByZTA5LmRldmlhbnRhcnQubmV0L2U1ZDQvdGgvcHJlL2YvMjAxMS8yNTkvYy9hL2JheW9uZXR0YV93YWxscGFwZXJfYnlfbWVhbmhvbmtleTE5ODAtZDQ5enpzdS5qcGdcIjtcclxuLy8gY29uc3Qgd2lkZUlNR3VybCA9IFwiaHR0cDovL3d3dy5pbWdiYXNlLmluZm8vaW1hZ2VzL3NhZmUtd2FsbHBhcGVycy92aWRlb19nYW1lcy9iYXlvbmV0dGEvNDU3MDBfYmF5b25ldHRhLmpwZ1wiO1xyXG4vLyBjb25zdCB3aWRlSU1HdXJsID0gXCJodHRwOi8vd3d3LmZmd2EuZXUvZmY5L2ltYWdlcy93YWxscGFwZXIvaWlmYS0xMDI0LmpwZ1wiO1xyXG4vLyBjb25zdCB3aWRlSU1HdXJsID0gXCJodHRwOi8vYTMubXpzdGF0aWMuY29tL2pwL3IzMC9QdXJwbGUvdjQvZDcvMTIvNTEvZDcxMjUxYTUtMWY1MC1mNmJjLWQ1NmEtODc0MGVhMjUzMmZiL3NjcmVlbjExMzZ4MTEzNi5qcGVnXCI7XHJcbmNvbnN0IHdpZGVJTUd1cmwgPSBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2IvYjgvQmF5b25ldHRhLWNoYXJhY3Rlci5wbmdcIjtcclxuXHJcbmNvbnN0IGxpbmVDb2xvciA9ICdncmF5JztcclxuQXBwLnN0eWxlU2hlZXQuYWRkU3R5bGVzKHtcclxuICAgIFwiZG9yaWMtdGFic1wiOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xyXG4gICAgfSxcclxuICAgIFwiZG9yaWMtdGFicy1iYXJcIjoge1xyXG4gICAgICAgIGhlaWdodDogMzUsXHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIFwiZG9yaWMtdGFicy10YWJcIjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuICAgICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtsaW5lQ29sb3J9YCxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBvcGFjaXR5OiAwLjcsXHJcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMyxcclxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogM1xyXG4gICAgfSxcclxuICAgIFwiZG9yaWMtdGFicy10YWJbc2VsZWN0ZWRdXCI6IHtcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtsaW5lQ29sb3J9YCxcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0sXHJcbiAgICBcImRvcmljLXRhYnMtY29udGVudFwiOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6IDM1LFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIG92ZXJmbG93OiAnYXV0bydcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBjbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbi8vICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4vLyAgICAgICAgIHRoaXMuc2Nyb2xscyA9IHt9O1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgY29tcG9uZW50V2lsbFVwZGF0ZSA9ICgpID0+IHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuLy8gICAgIH1cclxuLy8gICAgIGNvbXBvbmVudERpZFVwZGF0ZSA9ICgpID0+IHtcclxuLy8gICAgICAgICBjb25zdCB7XHJcbi8vICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSAwLFxyXG4vLyAgICAgICAgICAgICB1bm1vdW50T25DaGFuZ2UgPSBmYWxzZVxyXG4vLyAgICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4vL1xyXG4vLyAgICAgICAgIGlmICh1bm1vdW50T25DaGFuZ2UgPT09IGZhbHNlKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMucmVmcy5jb250ZW50LnNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsc1tzZWxlY3RlZEluZGV4XTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICByZW5kZXIgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3Qge1xyXG4vLyAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gMCxcclxuLy8gICAgICAgICAgICAgaGVpZ2h0ID0gMTAwLFxyXG4vLyAgICAgICAgICAgICB1bm1vdW50T25DaGFuZ2UgPSBmYWxzZVxyXG4vLyAgICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4vLyAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcclxuLy8gICAgICAgICBjb25zdCBvbkNoYW5nZSA9IHRoaXMucHJvcHMub25DaGFuZ2UgfHwgKCgpID0+IHt9KTtcclxuLy8gICAgICAgICBjb25zdCBzaXplID0gMTAwIC8gY2hpbGRyZW4ubGVuZ3RoO1xyXG4vL1xyXG4vLyAgICAgICAgIGNvbnN0IHRhYnMgPSBjaGlsZHJlbi5tYXAoXHJcbi8vICAgICAgICAgICAgICh0YWIsIGluZGV4KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBwcm9wcyA9IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogKGluZGV4ID09PSBzZWxlY3RlZEluZGV4KSB8fCBudWxsLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfSVgLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHtzaXplICogaW5kZXh9JWBcclxuLy8gICAgICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uVGFwIChldnQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoaW5kZXgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCB0YWJUaXRsZSA9IHRhYi5wcm9wc1tcInRhYi10aXRsZVwiXTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRhYkljb24gPSB0YWIucHJvcHNbJ3RhYi1pY29uJ10gfHwgbnVsbDtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRhYkltYWdlID0gdGFiLnByb3BzWyd0YWItaW1hZ2UnXSB8fCBudWxsO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsc1tpbmRleF0gPT09IHVuZGVmaW5lZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsc1tpbmRleF0gPSAwO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgbGV0IHRhYkNvbnRlbnQgPSBudWxsO1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKHRhYkltYWdlICE9PSBudWxsKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGFiQ29udGVudCA9IDxEb3JpYy5JbWFnZSBzb3VyY2U9e3RhYkltYWdlfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz47XHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRlbnQgPSBbPGRpdj57dGFiVGl0bGV9PC9kaXY+XTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAodGFiSWNvbiAhPT0gbnVsbCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0YWJDb250ZW50LnVuc2hpZnQoPGRpdiBzdHlsZT17e3BhZGRpbmc6IDN9fT48RG9yaWMuSWNvbiBpY29uPXt0YWJJY29ufSAvPjwvZGl2Pik7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIDxEb3JpYy5DdXN0b21FdmVudHMgY29tcG9uZW50PVwiZG9yaWMtdGFicy10YWJcIiB7Li4ucHJvcHN9Pnt0YWJDb250ZW50fTwvRG9yaWMuQ3VzdG9tRXZlbnRzPjtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICk7XHJcbi8vXHJcbi8vICAgICAgICAgbGV0IGRpc3BsYXlDaGlkcmVuID0gbnVsbDtcclxuLy8gICAgICAgICBpZiAodW5tb3VudE9uQ2hhbmdlID09PSBmYWxzZSkge1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5Q2hpZHJlbiA9IGNoaWxkcmVuLm1hcChcclxuLy8gICAgICAgICAgICAgICAgIChjaGlsZCwgaW5kZXgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gKGluZGV4ID09PSBzZWxlY3RlZEluZGV4KSA/IG51bGwgOiAnbm9uZSc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tkaXNwbGF5fX0+e2NoaWxkfTwvZGl2PjtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5Q2hpZHJlbiA9IDxkaXY+e2NoaWxkcmVuW3NlbGVjdGVkSW5kZXhdfTwvZGl2PjtcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPGRvcmljLXRhYnMgc3R5bGU9e3toZWlnaHR9fT5cclxuLy8gICAgICAgICAgICAgICAgIDxkb3JpYy10YWJzLWJhcj57dGFic308L2RvcmljLXRhYnMtYmFyPlxyXG4vLyAgICAgICAgICAgICAgICAgPGRvcmljLXRhYnMtY29udGVudCByZWY9XCJjb250ZW50XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlDaGlkcmVufVxyXG4vLyAgICAgICAgICAgICAgICAgPC9kb3JpYy10YWJzLWNvbnRlbnQ+XHJcbi8vICAgICAgICAgICAgIDwvZG9yaWMtdGFicz5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBUYWJzID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGtlZXBBbGl2ZSA9IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkSW5kZXggPSAwLFxyXG4gICAgICAgIGhlaWdodCA9IDEwMCxcclxuICAgICAgICB1bm1vdW50T25DaGFuZ2UgPSBmYWxzZVxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UgfHwgKCgpID0+IHt9KTtcclxuICAgIGNvbnN0IHNpemUgPSAxMDAgLyBjaGlsZHJlbi5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgdGFicyA9IGNoaWxkcmVuLm1hcChcclxuICAgICAgICAodGFiLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAoaW5kZXggPT09IHNlbGVjdGVkSW5kZXgpIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtzaXplfSVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGAke3NpemUgKiBpbmRleH0lYFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVGFwIChldnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYlRpdGxlID0gdGFiLnByb3BzW1widGFiLXRpdGxlXCJdO1xyXG4gICAgICAgICAgICBjb25zdCB0YWJJY29uID0gdGFiLnByb3BzWyd0YWItaWNvbiddIHx8IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhYkltYWdlID0gdGFiLnByb3BzWyd0YWItaW1hZ2UnXSB8fCBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhYkNvbnRlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGFiSW1hZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhYkNvbnRlbnQgPSA8RG9yaWMuSW1hZ2Ugc291cmNlPXt0YWJJbWFnZX0gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIC8+O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFiQ29udGVudCA9IFs8ZGl2Pnt0YWJUaXRsZX08L2Rpdj5dO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhYkljb24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJDb250ZW50LnVuc2hpZnQoPGRpdiBzdHlsZT17e3BhZGRpbmc6IDN9fT48RG9yaWMuSWNvbiBpY29uPXt0YWJJY29ufSAvPjwvZGl2Pik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8RG9yaWMuQ3VzdG9tRXZlbnRzIGNvbXBvbmVudD1cImRvcmljLXRhYnMtdGFiXCIgey4uLnByb3BzfT57dGFiQ29udGVudH08L0RvcmljLkN1c3RvbUV2ZW50cz47XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgZGlzcGxheUNoaWRyZW4gPSBudWxsO1xyXG4gICAgaWYgKHVubW91bnRPbkNoYW5nZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBkaXNwbGF5Q2hpZHJlbiA9IGNoaWxkcmVuLm1hcChcclxuICAgICAgICAgICAgKGNoaWxkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9IChpbmRleCA9PT0gc2VsZWN0ZWRJbmRleCkgPyBudWxsIDogJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tkaXNwbGF5fX0ga2V5PXtpbmRleH0+e2NoaWxkfTwvZGl2PjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BsYXlDaGlkcmVuID0gPGRpdj57Y2hpbGRyZW5bc2VsZWN0ZWRJbmRleF19PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRvcmljLXRhYnMgc3R5bGU9e3toZWlnaHR9fT5cclxuICAgICAgICAgICAgPGRvcmljLXRhYnMtYmFyPnt0YWJzfTwvZG9yaWMtdGFicy1iYXI+XHJcbiAgICAgICAgICAgIDxkb3JpYy10YWJzLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7ZGlzcGxheUNoaWRyZW59XHJcbiAgICAgICAgICAgIDwvZG9yaWMtdGFicy1jb250ZW50PlxyXG4gICAgICAgIDwvZG9yaWMtdGFicz5cclxuICAgICk7XHJcbn07XHJcblxyXG5jbGFzcyBUZXN0TGlmZWN5Y2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtb3VudGVkJyk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndW5tb3VudGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8ZGl2Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcm9ncmVzczogMC4zLFxyXG4gICAgICAgICAgICBzZWNvbmRhcnk6IDAuNyxcclxuICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvZ2dsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHRleHQyOiBcIlwiLFxyXG4gICAgICAgICAgICBudW06IDAsXHJcbiAgICAgICAgICAgIHI6IDAsXHJcbiAgICAgICAgICAgIGc6IDAsXHJcbiAgICAgICAgICAgIGI6IDAsXHJcbiAgICAgICAgICAgIHRhYjogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3YXQnLCBEYXRlLm5vdygpKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdhdXRvJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEb3JpYy5DYXJkIHRpdGxlPVwiVGVzdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RG9yaWMuSW1hZ2Ugc291cmNlPXt3aWRlSU1HdXJsfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9ezE1MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERvcmljLklucHV0LlRleHQgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH0gb25DaGFuZ2U9e3RleHQgPT4gdGhpcy5zZXRTdGF0ZSh7dGV4dH0pfSBsYWJlbD1cIldvYWhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RG9yaWMuU2xpZGVyIHZhbHVlPXt0aGlzLnN0YXRlLm51bX0gb25DaGFuZ2U9e251bSA9PiB0aGlzLnNldFN0YXRlKHtudW19KX0gbWluPXswfSBtYXg9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0RvcmljLkNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxEb3JpYy5DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RG9yaWMuSW5wdXQuTXVsdGlsaW5lIHZhbHVlPXt0aGlzLnN0YXRlLnRleHQyfSBvbkNoYW5nZT17dGV4dDIgPT4gdGhpcy5zZXRTdGF0ZSh7dGV4dDJ9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0RvcmljLkNhcmQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJzIG9uQ2hhbmdlPXt0YWIgPT4gdGhpcy5zZXRTdGF0ZSh7dGFifSl9IHNlbGVjdGVkSW5kZXg9e3RoaXMuc3RhdGUudGFifSBoZWlnaHQ9ezI1MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXN0TGlmZWN5Y2xlIHRhYi1pbWFnZT17d2lkZUlNR3VybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmFuZ2UuYXJyYXkoMjAsIGkgPT4gPGRpdj57aX08L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rlc3RMaWZlY3ljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXN0TGlmZWN5Y2xlIHRhYi10aXRsZT1cIkJcIiB0YWItaWNvbj1cImlvbi1pb25pY1wiPjI8L1Rlc3RMaWZlY3ljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXN0TGlmZWN5Y2xlIHRhYi10aXRsZT1cIkNcIj4zPC9UZXN0TGlmZWN5Y2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVzdExpZmVjeWNsZSB0YWItaWNvbj1cImlvbi1jaGVja21hcmstY2lyY2xlZFwiPjQ8L1Rlc3RMaWZlY3ljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFwcC5zdHlsZVNoZWV0LmFkZFN0eWxlcyh7XHJcbiAgICBcImRvcmljLWJ1dHRvbi5mYW5jeVwiOiB7XHJcbiAgICAgICAgZGlzcGxheTogWyctd2Via2l0LWZsZXgnLCAnZmxleCddXHJcbiAgICB9LFxyXG4gICAgXCJkb3JpYy1idXR0b24uZmFuY3lbcHJlc3NlZF06YWZ0ZXJcIjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ1NTLnJnYmEoMCwgMjAwLCAyMDAsIDAuMjUpXHJcbiAgICB9XHJcbn0pO1xyXG5BcHAuc3R5bGVTaGVldC5hZGRTdHlsZXMoe1xyXG4gICAgXCJkb3JpYy1jaGVja2JveC5jdXN0b21cIjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQ1NTLnJnYmEoTWF0aC5yYW5kKDI1NSksIE1hdGgucmFuZCgyNTUpLCBNYXRoLnJhbmQoMjU1KSwgMSlcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgYWN0aW9ucyA9IFs8RG9yaWMuQnV0dG9uIHRleHQ9XCJGaXJzdFwiIC8+LCA8RG9yaWMuQnV0dG9uIHRleHQ9XCJTZWNvbmRcIiAvPl07XHJcblxyXG5BcHAucmVuZGVyKFxyXG4gICAgPE1haW4gLz5cclxuKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGFzc2lnbiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX09iamVjdCRhc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgX09iamVjdCRzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX09iamVjdCRzZXRQcm90b3R5cGVPZiA/IF9PYmplY3Qkc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX1N5bWJvbCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuYXNzaWduOyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5TeW1ib2w7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMS4yLjYnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSAkLmdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSAkLmlzRW51bVxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKWtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGdldE5hbWVzICA9IHJlcXVpcmUoJy4vJCcpLmdldE5hbWVzXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgaWYod2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScpcmV0dXJuIGdldFdpbmRvd05hbWVzKGl0KTtcbiAgcmV0dXJuIGdldE5hbWVzKHRvSU9iamVjdChpdCkpO1xufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24oYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTsiLCJ2YXIgJCAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSAkLmdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCIvLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIGEgPSBPYmplY3QuYXNzaWduXG4gICAgLCBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuIGEoe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoYSh7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldEtleXMgICAgPSAkLmdldEtleXNcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHNcbiAgICAsIGlzRW51bSAgICAgPSAkLmlzRW51bTtcbiAgd2hpbGUoJCRsZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoJCRbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfVxuICByZXR1cm4gVDtcbn0gOiBPYmplY3QuYXNzaWduOyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTsiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgZ2V0RGVzYyAgPSByZXF1aXJlKCcuLyQnKS5nZXREZXNjXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuLyQuY3R4JykoRnVuY3Rpb24uY2FsbCwgZ2V0RGVzYyhPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjXG4gICwgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5vYmplY3QtYXNzaWduJyl9KTsiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigkZ2V0UHJvdG90eXBlT2Ype1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuLyQuc2V0LXByb3RvJykuc2V0fSk7IiwiIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLndrcycpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuLyQua2V5b2YnKVxuICAsICRuYW1lcyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdldC1uYW1lcycpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBnZXREZXNjICAgICAgICA9ICQuZ2V0RGVzY1xuICAsIHNldERlc2MgICAgICAgID0gJC5zZXREZXNjXG4gICwgX2NyZWF0ZSAgICAgICAgPSAkLmNyZWF0ZVxuICAsIGdldE5hbWVzICAgICAgID0gJG5hbWVzLmdldFxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIHNldHRlciAgICAgICAgID0gZmFsc2VcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgaXNFbnVtICAgICAgICAgPSAkLmlzRW51bVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCB1c2VOYXRpdmUgICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoc2V0RGVzYyh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gc2V0RGVzYyh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnZXREZXNjKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIHNldERlc2MoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pc2V0RGVzYyhPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IHNldERlc2M7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbC5wcm90b3R5cGUpO1xuICBzeW0uX2sgPSB0YWc7XG4gIERFU0NSSVBUT1JTICYmIHNldHRlciAmJiBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlzZXREZXNjKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBzZXREZXNjKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkpO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldXG4gICAgPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgdmFyIEQgPSBnZXREZXNjKGl0ID0gdG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOKXJlc3VsdC5wdXNoKGtleSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyICRzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgLCBpICAgID0gMVxuICAgICwgJCQgICA9IGFyZ3VtZW50c1xuICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgd2hpbGUoJCQubGVuZ3RoID4gaSlhcmdzLnB1c2goJCRbaSsrXSk7XG4gIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgfTtcbiAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG59O1xudmFyIGJ1Z2d5SlNPTiA9ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighdXNlTmF0aXZlKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKGlzU3ltYm9sKHRoaXMpKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgcmV0dXJuIHdyYXAodWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKSk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2wucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICBpc1N5bWJvbCA9IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xuICB9O1xuXG4gICQuY3JlYXRlICAgICA9ICRjcmVhdGU7XG4gICQuaXNFbnVtICAgICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJC5nZXREZXNjICAgID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJC5zZXREZXNjICAgID0gJGRlZmluZVByb3BlcnR5O1xuICAkLnNldERlc2NzICAgPSAkZGVmaW5lUHJvcGVydGllcztcbiAgJC5nZXROYW1lcyAgID0gJG5hbWVzLmdldCA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAkLmdldFN5bWJvbHMgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuLyQubGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgc3ltYm9sU3RhdGljcyA9IHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufTtcbi8vIDE5LjQuMi4yIFN5bWJvbC5oYXNJbnN0YW5jZVxuLy8gMTkuNC4yLjMgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZVxuLy8gMTkuNC4yLjQgU3ltYm9sLml0ZXJhdG9yXG4vLyAxOS40LjIuNiBTeW1ib2wubWF0Y2hcbi8vIDE5LjQuMi44IFN5bWJvbC5yZXBsYWNlXG4vLyAxOS40LjIuOSBTeW1ib2wuc2VhcmNoXG4vLyAxOS40LjIuMTAgU3ltYm9sLnNwZWNpZXNcbi8vIDE5LjQuMi4xMSBTeW1ib2wuc3BsaXRcbi8vIDE5LjQuMi4xMiBTeW1ib2wudG9QcmltaXRpdmVcbi8vIDE5LjQuMi4xMyBTeW1ib2wudG9TdHJpbmdUYWdcbi8vIDE5LjQuMi4xNCBTeW1ib2wudW5zY29wYWJsZXNcbiQuZWFjaC5jYWxsKChcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCwnICtcbiAgJ3NwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHN5bSA9IHdrcyhpdCk7XG4gIHN5bWJvbFN0YXRpY3NbaXRdID0gdXNlTmF0aXZlID8gc3ltIDogd3JhcChzeW0pO1xufSk7XG5cbnNldHRlciA9IHRydWU7XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnU3ltYm9sJywgc3ltYm9sU3RhdGljcyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXVzZU5hdGl2ZSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIXVzZU5hdGl2ZSB8fCBidWdneUpTT04pLCAnSlNPTicsIHtzdHJpbmdpZnk6ICRzdHJpbmdpZnl9KTtcblxuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTsiXX0=
