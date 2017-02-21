import React from 'react';

import componentStyleSheet from 'util/app';

componentStyleSheet.addStyles({
    "doric-progress": {
        display: 'block',
        height: 10,
        backgroundColor: "#e0e0e0",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        position: 'relative'
    },
    "doric-progress-bar": {
        height: '100%',
        width: '100%',
        position: 'absolute',
        transformOrigin: 'left center',
        transition: 'transform 200ms ease-out',
    },
    "doric-progress-bar.primary": {
        backgroundColor: '#4285f4',
    },
    "doric-progress-bar.secondary": {
        backgroundColor: '#b3cefb',
    }
});
const Progress = ({progress, secondaryProgress = null, className, children, ...passThrough}) => {
    const scale = `scaleX(${progress})`;
    let secondaryProgressBar = null;

    if (secondaryProgress !== null) {
        const scale2 = `scaleX(${secondaryProgress})`;
        secondaryProgressBar = <doric-progress-bar class="secondary" style={{WebkitTransform: scale2, transform: scale2}} />
    }

    return (
        <doric-progress class={className} {...passThrough}>
            {secondaryProgressBar}
            <doric-progress-bar class="primary" style={{WebkitTransform: scale, transform: scale}} />
        </doric-progress>
    );
};

export default Progress;
