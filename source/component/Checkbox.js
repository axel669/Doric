import React from 'react';

import componentStyleSheet from 'source/util/app';
import consts from 'source/util/consts';
import {CSS} from 'source/util/stylesheet';
import {warningFunc} from 'source/util/utils';

import {CenterContent} from 'source/component/ContentAligners';
import CustomEvents from "source/component/CustomEvents";
import {Icon} from 'source/component/Icon';

componentStyleSheet.addStyles({
    "doric-checkbox": {
        position: 'relative',
        display: 'block',
        userSelect: 'none',
        padding: 5,
        minHeight: 30
    },
    "doric-checkbox[disabled='true']": {
        color: 'gray',
        opacity: 0.6
    },
    "doric-checkbox:after": {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transition: consts.css.backgroundTransition
    },
    "doric-checkbox[pressed]:not([disabled='true']):after": {
        backgroundColor: CSS.rgba(0, 0, 0, 0.25),
        transition: 'none'
    },
    "doric-checkbox doric-icon": {
        transition: 'color 250ms linear'
    },
    "doric-checkbox[checked='true']:not([disabled='true']) doric-icon": {
        color: consts.theme.bluish
    }
});
const Checkbox = props => {
    const {
        checked = false,
        children,
        label,
        onChange = warningFunc("Checkbox has no onChange function"),
        onIcon = "ion-android-checkbox",
        offIcon = "ion-android-checkbox-outline-blank",
        side = 'left',
        className = "",
        style = {},
        ...passThrough
    } = props;
    const change = () => {
        if (props.disabled !== true) {
            onChange(checked === false);
        }
    }
    const iconName = (checked === true) ? onIcon : offIcon;
    const padding = {
        [`padding${side.charAt(0).toUpperCase()}${side.slice(1)}`]: 30
    };
    const checkPosition = {};

    if (side === 'center') {
        checkPosition.left = 'calc(50% - 15px)';
    }
    else {
        checkPosition[side] = 0;
    }

    return (
        <CustomEvents component="doric-checkbox" class={className} onTap={change} {...passThrough} style={{...style, ...padding}} checked={checked}>
            <CenterContent data-no-press style={{...checkPosition, top: 0, position: 'absolute'}} width={30} height="100%">
                <Icon icon={iconName} data-no-press style={{fontSize: 26}} />
            </CenterContent>
            {label}{children}
        </CustomEvents>
    );
};
Checkbox.formValue = "checked";

export default Checkbox;
