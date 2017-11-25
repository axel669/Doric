import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import {createStyleSheet, genCSS} from 'source/util/stylesheet';

import RobotoFont from 'source/data-uri/roboto-light.woff.source';
import IonicFont from 'source/data-uri/ionicons.woff.source';

import "source/util/deviceready";

const head = document.querySelector("head");
const roboto = document.createElement("style");
const appStyle = document.createElement("style");
const fonts = new Set();

const componentStyleSheet = createStyleSheet();
let initCalled = false;
let routes = <Route path="/" component={() => <div>Ready!</div>} />;
let routerComponent;

roboto.setAttribute("data-name", "doric-core-style");
head.appendChild(roboto);

appStyle.setAttribute("data-name", "doric-app-style");
head.appendChild(appStyle);

const initialize = async () => {
    if (initCalled === true) {
        return;
    }

    initCalled = true;
    await deviceReady;

    const wrapper = (
        <Router history={hashHistory}>
            <Route getChildRoutes={(location, load) => load(null, routes)} />
        </Router>
    );
    document.body.innerHTML = `<div id="app-container" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden"></div>`;
    componentStyleSheet.__init(roboto);
    routerComponent = ReactDOM.render(
        wrapper,
        document.querySelector("#app-container")
    );
};
const navReplace = url => routerComponent.router.replace(url);
const navPush = url => routerComponent.router.push(url);
const navPop = () => routerComponent.router.goBack();

window.Route = Route;
window.IndexRoute = IndexRoute;
window.App = {
    async start(appRoutes) {
        await initialize();
        routes = appRoutes;
        navReplace("/");
        App.styleSheet.__init(appStyle);
        App.styleSheet = createStyleSheet();
    },
    addFont(name, def) {
        if (fonts.has(name) === true) {
            return;
        }
        const elem = document.createElement("style");

        fonts.add(name);
        elem.dataset.fontName = name;
        elem.innerHTML = genCSS({"@font-face": def});

        head.appendChild(elem);
    },
    styleSheet: createStyleSheet(),
    nav: {
        push: navPush,
        pop: navPop,
        replace: navReplace
    }
};

componentStyleSheet.addStyles({
    "*": {
        boxSizing: 'border-box'
    },
    "html, body": {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0
    },
    body: {
        fontFamily: "Roboto",
        backgroundColor: '#f5f5f5'
    }
});
App.addFont('roboto', {
    fontFamily: `"Roboto"`,
    src: `url("${RobotoFont}") format("woff")`,
    fontWeight: "normal",
    fontStyle: "normal"
});
App.addFont('ionic', {
    fontFamily: `"Ionic"`,
    src: `url("${IonicFont}") format("woff")`,
    fontWeight: "normal",
    fontStyle: "normal"
});

export default componentStyleSheet;
