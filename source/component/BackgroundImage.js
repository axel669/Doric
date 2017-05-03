import React from 'react';

import componentStyleSheet from 'source/util/app';

componentStyleSheet.addStyles({
    "doric-background-image": {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        display: 'block',
        overflow: 'auto',
    }
});
const BackgroundImage = ({children, style = {}, source, ...props}) => {
    const imgStyle = {
        backgroundImage: `url("${source}")`,
        ...style
    };
    return <doric-background-image {...props} style={imgStyle}>{children}</doric-background-image>;
};

export default BackgroundImage;
