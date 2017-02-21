import React from 'react';

import componentStyleSheet from 'util/app';
import consts from 'util/consts';
import {CenterContent} from 'component/ContentAligners';

componentStyleSheet.addStyles({
    "@keyframes spinner-rotate": {
        from: {
            transform: 'rotate(0)'
        },
        to: {
            transform: 'rotate(360deg)'
        }
    },
    "div.spinner": {
        position: 'relative',
    },
    "div.spinner .hex": {
        width: 22,
        height: 38,
        position: 'absolute',
        left: -11,
        top: -19,
    },
    "div.spinner > div": {
        animationName: 'spinner-rotate',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDuration: '2000ms',
    },
    "div.spinner > .outer": {
        animationDirection: 'reverse'
    },
    "div.spinner > .inner > .hex": {
        backgroundColor: 'white'
    },
    "div.spinner > .outer > .hex": {
        backgroundColor: consts.theme.bluish
    }
});
const Spinner = () => (
    <doric-spinner>
        <CenterContent width={45} height={45}>
            <div className="spinner">
                <div className="outer">
                    <div className="hex" style={{transform: "rotate(30deg)"}} />
                    <div className="hex" style={{transform: "rotate(90deg)"}} />
                    <div className="hex" style={{transform: "rotate(150deg)"}} />
                </div>
                <div className="inner">
                    <div className="hex" style={{transform: "rotate(30deg) scale(0.5)"}} />
                    <div className="hex" style={{transform: "rotate(90deg) scale(0.5)"}} />
                    <div className="hex" style={{transform: "rotate(150deg) scale(0.5)"}} />
                </div>
            </div>
        </CenterContent>
    </doric-spinner>
);

export default Spinner;
