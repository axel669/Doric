import React from 'react';

import Button from 'source/component/button';

import componentStyleSheet from 'source/util/app';
import icons from 'source/util/icons';

componentStyleSheet.addStyles({
    "doric-icon": {
        display: 'inline',
        fontSize: 16,
        fontFamily: "Ionic",
        padding: 2
    }
});
const Icon = ({icon, className, ...passThrough}) => <doric-icon {...passThrough} class={className}>{icons[icon]}</doric-icon>;
const IconButton = ({icon, iconStyle, text = "", children, ...props}) => <Button {...props} text={<Icon icon={icon} style={iconStyle} />}>{text}{children}</Button>;

export {Icon, IconButton};
