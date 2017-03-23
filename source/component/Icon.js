import React from 'react';

import componentStyleSheet from 'source/util/app';
import icons from 'source/util/icons';

componentStyleSheet.addStyles({
    "doric-icon": {
        display: 'inline',
        fontSize: 18,
        fontFamily: "Ionic"
    }
});
const Icon = ({icon, className, ...passThrough}) => <doric-icon {...passThrough} class={className}>{icons[icon]}</doric-icon>;
const IconButton = ({icon, text = "", children, ...props}) => <Button {...props} text={<Icon icon={icon} />}>{text}{children}</Button>;

export {Icon, IconButton};
