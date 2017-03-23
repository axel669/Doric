import React from 'react';

import componentStyleSheet from 'source/util/app';
import theme from 'source/util/theme';

import CustomEvents from "source/component/CustomEvents";

componentStyleSheet.addStyles({
    "doric-button": {
        display: ['-webkit-inline-flex', 'inline-flex'],
        color: theme.button.text.color,
        padding: '0.7em 0.5em',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        userSelect: 'none',
        borderRadius: 3,
        borderWidth: 0,
        overflow: 'hidden',
        marginLeft: 5,
        marginRight: 5
    },
    "doric-button:after": {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transition: 'background-color 250ms linear'
    },
    "doric-button[pressed]:after": {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        transition: 'none'
    },

    "doric-button[disabled]": {
        boxShadow: 'none'
    },
    "doric-button[raised]": {
        boxShadow: theme.general.boxShadow
    },
});
const Button = props => {
    const {
        text = null,
        children,
        className = "",
        ...passThrough
    } = props;

    return <CustomEvents component="doric-button" {...passThrough} class={className}>{text}{children}</CustomEvents>;
};

export default Button;
