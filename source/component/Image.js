import React from 'react';

import componentStyleSheet from 'source/util/app';

componentStyleSheet.addStyles({
    "doric-image": {
        display: 'inline-block',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        verticalAlign: 'top'
    }
});
const Image = ({source, cover = false, contain = false, width = null, height = null, style = {}, ...passThrough}) => {
    let bgSize = 'contain';

    if (cover === true && contain === false) {
        bgSize = 'cover';
    }

    return <doric-image style={{...style, backgroundImage: `url("${source}")`, width, height, backgroundSize: bgSize}} {...passThrough} />;
};

export default Image;
