import React from 'react';
import componentStyleSheet from 'util/app';

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
        overflow: 'hidden',
        position: 'relative',
        top: 0,
        left: 0,
        float: 'left'
    }
});

const Grid = props => {
    const {
        cellSpacingH = 0,
        cellSpacingV = 0,
        cellHeight = 30,
        colCount = 12,
        style = {}
    } = props;
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
            return <doric-grid-item style={{...baseItemStyle, width, marginTop, marginLeft}}><child.type {...childProps} /></doric-grid-item>;
        }
    );

    return (
        <doric-grid style={gridStyle}>
            {children}
        </doric-grid>
    );
};

export default Grid;
