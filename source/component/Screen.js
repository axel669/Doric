import React from 'react';

import componentStyleSheet from 'source/util/app';

componentStyleSheet.addStyles({
    "doric-screen": {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    "doric-screen-title": {
        display: ['webkit-flex', 'flex'],
        backgroundColor: '#4285f4',
        color: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.25)',
        fontSize: 20
    },
    "doric-screen-content": {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto'
    }
});
class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    render = () => {
        const {
            title
        } = this.props;
        const {
            expanded
        } = this.state;

        const menuStyle = {
            display: expanded === true ? 'block' : 'none'
        };

        return (
            <doric-screen>
                <doric-screen-title>
                    {title}
                    {/* <doric-screen-menu style={menuStyle}>
                        Test
                    </doric-screen-menu> */}
                </doric-screen-title>
                <doric-screen-content>
                    {this.props.children}
                </doric-screen-content>
            </doric-screen>
        );
    }
}

export default Screen;
