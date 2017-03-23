import React from 'react';

import componentStyleSheet from 'source/util/app';

componentStyleSheet.addStyles({
    "doric-pinboard": {
        display: 'inline-block',
        position: 'relative',
        overflow: 'auto'
    },
    "doric-pin": {
        position: 'absolute'
    }
});
const Pinboard = ({style = {}, width = "100%", height = "100%", className = "", children, ...passThrough}) => {
    children = React.Children.toArray(children);

    children = children.map(
        (child, index) => {
            const {pinStyle, ...childProps} = child.props;
            const actualChild = <child.type {...childProps} />;
            return <doric-pin key={index} style={pinStyle}>{actualChild}</doric-pin>;
        }
    );

    return <doric-pinboard class={className} style={{...style, width, height}}>{children}</doric-pinboard>;
};

export default Pinboard;
