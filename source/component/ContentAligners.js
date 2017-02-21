import React from 'react';

import componentStyleSheet from 'util/app';

componentStyleSheet.addStyles({
    "doric-center-content": {
        display: ['-webkit-inline-flex', 'inline-flex'],
        alignItems: 'center',
        justifyContent: 'center'
    },
    "doric-align-content": {
        display: ['-webkit-inline-flex', 'inline-flex'],
    },
    "doric-center-content.block, doric-align-content.block": {
        display: ['-webkit-flex', 'flex']
    }
});
const CenterContent = ({width, height, className = "", block, style = {}, ...passThrough}) =>
    <doric-center-content class={`${block ? "block" : ""} ${className}`.trim()} {...passThrough} style={{...style, width, height}} />;
const AlignContent = ({width, height, className = "", block, horizontal = "center", vertical = "center", style = {}, ...passThrough}) =>
    <doric-align-content
        class={`${block ? "block" : ""} ${className}`.trim()}
        {...passThrough}
        style={{
            ...style,
            width,
            height,
            WebkitAlignItems: vertical,
            WebkitJustifyContent: horizontal,
            alignItems: vertical,
            justifyContent: horizontal
        }} />;

export default {
    CenterContent,
    AlignContent
};
