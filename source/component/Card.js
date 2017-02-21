import React from 'react';

import componentStyleSheet from 'util/app';
import theme from 'util/theme';

componentStyleSheet.addStyles({
    "doric-card": {
        display: 'block',
        boxShadow: theme.general.boxShadow,
        margin: 5,
        borderRadius: 3,
        overflow: 'hidden'
    },
    "doric-card .content": {
        padding: 5
    },
    "doric-card .title": {
        position: 'relative',
        overflow: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        fontWeight: 900,
        fontSize: 18,
        padding: 5,
        borderBottom: '1px solid lightgray'
    },
    "doric-card .actions": {
        padding: 5,
        borderTop: '1px solid lightgray'
    }
});
const Card = props => {
    let {
        children,
        title = null,
        actions = null,
        ...passThrough
    } = props;
    let titleElement = null;
    let actionElement = null;

    if (title !== null) {
        titleElement = <div className="title">{title}</div>;
    }
    if (actions !== null) {
        actionElement = <div className="actions">{actions}</div>;
    }

    return (
        <doric-card {...passThrough}>
            {titleElement}
            <div className="content">{children}</div>
            {actionElement}
        </doric-card>
    );
};

export default Card;
