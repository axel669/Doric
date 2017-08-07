import React from 'react';

import componentStyleSheet from 'source/util/app';
import consts from 'source/util/consts';

import CustomEvents from "source/component/CustomEvents";

const find = Array.prototype.find;
componentStyleSheet.addStyles({
    "doric-slider": {
        display: 'block',
        margin: 3
    },
    "doric-slider-content": {
        display: 'block',
        position: 'relative',
        top: 0,
        left: 0,
        height: 30,
        margin: 2
    },
    "doric-slider-track": {
        position: 'absolute',
        top: 13,
        left: 12,
        right: 12,
        height: 4,
        backgroundColor: consts.theme.grayBG,
        overflow: 'visible'
    },
    "doric-slider-track-fill": {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: consts.theme.bluish,
        transformOrigin: 'left center',
    },
    "doric-slider-thumb": {
        position: 'absolute',
        top: 2,
        width: 0,
        height: 0,
        overflow: 'visible',
    },
    "doric-slider-track-circle": {
        display: 'block',
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: consts.theme.bluish,
        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
        transform: 'translate(-50%, -50%)',
    },
    "doric-slider-value": {
        position: 'absolute',
        width: 30,
        height: 20,
        fontSize: 10,
        textAlign: 'center',
        lineHeight: '20px',
        top: -35,
        left: -15,
        display: 'none',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: consts.theme.bluish,
        color: 'white',
        zIndex: '+1000'
    },
    "doric-slider-thumb[pressed] > doric-slider-value": {
        display: 'block'
    }
});
const clampNormal = value => Math.min(1, Math.max(0, value));
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.touchID = null;
    }

    touchStart = (evt) => {
        if (this.touchID !== null) {
            return;
        }
        const [touch] = evt.changedTouches;
        const track = this.refs.track.getBoundingClientRect();
        const thumb = this.refs.thumb.getBoundingClientRect();
        this.range = track.width;
        this.startPos = track.left;
        this.startValue = thumb.left - track.left;
        this.touchStartPos = touch.clientX;
        this.touchID = touch.identifier;
    }
    touchMove = (evt) => {
        const touch = evt.changedTouches::find(touch => touch.identifier === this.touchID);
        if (touch === undefined) {
            return;
        }

        const {min = 0, max = 10, step = 1, onChange = () => {}, value} = this.props;
        const offset = touch.clientX - this.touchStartPos;
        const pos = this.startValue + offset;

        const range = max - min;
        let newValue = range * clampNormal(pos / this.range) + min;

        newValue = Math.round(newValue / step) * step;

        if (newValue !== value) {
            onChange(newValue);
        }
    }

    componentDidMount = () => {
        this.refs.thumb.addEventListener(
            'touchmove',
            evt => {
                evt.preventDefault();
            },
            {passive: false, capture: true}
        );
    }

    render = () => {
        const {min = 0, max = 10, value = min, color, displayFunc = i => i, label = null} = this.props;
        const pos = (value - min) / (max - min);
        const thumbStyle = {
            left: `${pos * 100}%`
        };
        const fillStyle = {
            transform: `scaleX(${pos})`,
            backgroundColor: color
        };
        const labelElem = label !== null
            ? <div>{label}</div>
            : null;

        const events = {
            onTouchStart: this.touchStart,
            onTouchMove: this.touchMove,
            onTouchEnd: () => this.touchID = null
        };
        const thumb = <doric-slider-track-circle data-no-press style={{backgroundColor: color}} />;
        const valueDisplay = <doric-slider-value style={{backgroundColor: color}}>{displayFunc(value)}</doric-slider-value>;

        return (
            <doric-slider>
                {labelElem}
                <doric-slider-content>
                    <doric-slider-track ref="track">
                        <doric-slider-track-fill style={fillStyle} />
                        <doric-slider-thumb ref="thumb" style={thumbStyle} {...events}>
                            {thumb}
                            {valueDisplay}
                        </doric-slider-thumb>
                    </doric-slider-track>
                </doric-slider-content>
            </doric-slider>
        );
    }
}

export default Slider;
