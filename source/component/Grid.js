import React from 'react';

import componentStyleSheet from 'source/util/app';

componentStyleSheet.addStyles({
    "doric-grid": {
        display: 'block',
        overflow: 'auto'
    },
    "doric-grid-item": {
        display: 'inline-block',
        margin: 0,
        padding: 0,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'transparent',
        // overflow: 'hidden',
        position: 'relative',
        top: 0,
        left: 0,
        float: 'left'
    },
    "doric-radio-item": {
        width: '100%',
        height: '100%',
        display: ['-webkit-flex', 'flex'],
        justifyContent: 'center',
        alignItems: 'center'
    },
    "doric-radio-item[selected='true']": {
        backgroundColor: 'cyan'
    }
});

const Grid = props => {
    const {
        cellSpacing = [0, 0],
        cellHeight = 30,
        colCount = 12,
        style = {},
        className
    } = props;
    const [cellSpacingH, cellSpacingV] = (typeof cellSpacing === 'number') ? [cellSpacing, cellSpacing] : cellSpacing;
    const gridStyle = {
        ...style,
        paddingLeft: cellSpacingH,
        paddingTop: cellSpacingV
    };
    const baseItemStyle = {
        borderWidth: `${cellSpacingV}px ${cellSpacingH}px`
    };
    let {children} = props;

    if (cellHeight !== null) {
        baseItemStyle.height = cellHeight + cellSpacingV * 2;
    }

    children = React.Children.toArray(children);
    children = children.map(
        child => {
            const {colSpan = 1, ...childProps} = child.props;
            const width = `calc(${(colSpan * 100) / colCount}% + ${cellSpacingH}px)`;
            const marginLeft = -cellSpacingH;
            const marginTop = -cellSpacingV;
            return <doric-grid-item style={{...baseItemStyle, width, marginTop, marginLeft}}><child.type {...childProps} ref={child.ref} /></doric-grid-item>;
        }
    );

    return (
        <doric-grid style={gridStyle} class={className}>
            {children}
        </doric-grid>
    );
};

Grid.RadioItem = ({children, selected, itemStyle = {}}) => (
    <doric-radio-item selected={selected} style={itemStyle}>
        {children}
    </doric-radio-item>
);

export default Grid;
