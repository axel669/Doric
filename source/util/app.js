import React from 'react';
import ReactDOM from 'react-dom';

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

roboto.setAttribute("data-name", "doric-core-style");
head.appendChild(roboto);

appStyle.setAttribute("data-name", "doric-app-style");
head.appendChild(appStyle);

window.App = {
    async render(content) {
        const wrapper = (
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden'}}>{content}</div>
        );
        if (initCalled === false) {
            await deviceReady;
            componentStyleSheet.__init(roboto);
            initCalled = true;
        }
        ReactDOM.render(wrapper, document.body);
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
    styleSheet: createStyleSheet()
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
