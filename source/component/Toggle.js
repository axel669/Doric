import React from 'react';

import componentStyleSheet from 'source/util/app';
import consts from 'source/util/consts';
import {CSS} from 'source/util/stylesheet';

import CustomEvents from "source/component/CustomEvents";
import {CenterContent} from 'source/component/ContentAligners';

componentStyleSheet.addStyles({
    "doric-toggle": {
        display: 'block',
        position: 'relative',
        userSelect: 'none'
    },
    "doric-toggle[disabled='true']": {
        color: 'gray',
        opacity: 0.6
    },
    "doric-toggle:after": {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transition: consts.css.backgroundTransition
    },
    "doric-toggle[pressed]:not([disabled='true']):after": {
        backgroundColor: CSS.rgba(0, 0, 0, 0.25),
        transition: 'none'
    },
    "doric-toggle-switch": {
        width: 36,
        height: 14,
        borderRadius: 7,
        backgroundColor: consts.theme.grayBG,
        position: 'relative',
        transition: 'background-color 50ms linear'
    },
    "doric-toggle:not([disabled='true']) doric-toggle-switch[on='true']": {
        backgroundColor: '#b3cefb'
    },
    "doric-toggle-switch:after": {
        content: "''",
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
        position: 'absolute',
        top: -3,
        left: -1,
        width: 20,
        height: 20,
        borderRadius: 11,
        backgroundColor: 'gray',
        transition: 'transform 50ms linear, background-color 50ms linear'
    },
    "doric-toggle-switch[on='true']:after": {
        transform: 'translateX(18px)'
    },
    "doric-toggle:not([disabled='true']) doric-toggle-switch[on='true']:after": {
        backgroundColor: consts.theme.bluish
    }
});
const Toggle = props => {
    const {
        on = false,
        label,
        children,
        side = 'left',
        style = {},
        className = "",
        onChange = warningFunc("Toggle has no change function"),
        ...passThrough
    } = props;
    const change = () => {
        if (props.disabled !== true) {
            onChange(on === false);
        }
    }
    const padding = {
        padding: 5,
        [`padding${side.charAt(0).toUpperCase()}${side.slice(1)}`]: 45
    };

    return (
        <CustomEvents component="doric-toggle" on={on} style={{...style, ...padding}} onTap={change} class={className} {...passThrough}>
            <CenterContent data-no-press style={{[side]: 0, top: 0, position: 'absolute'}} width={45} height="100%">
                <doric-toggle-switch on={on} data-no-press />
            </CenterContent>
            {label}{children}
        </CustomEvents>
    );
};

export default Toggle;
