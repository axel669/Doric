import React from 'react';

import componentStyleSheet from 'source/util/app';
import {CSS} from 'source/util/stylesheet';

const animTime = 200;
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
        fontSize: 20,
        zIndex: '+5',
        overflow: 'visible'
    },
    "doric-screen-content": {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto'
    },
    "doric-screen-menu": {
        position: 'absolute',
        top: 40,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: CSS.rgba(0, 0, 0, 0.2),
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.25)',
        zIndex: '+5',
        transform: 'translateX(-100%)',
        overflow: 'hidden',
        opacity: 0,
        transition: `opacity ${animTime}ms linear, transform 0ms linear 250ms`
    },
    "doric-screen-menu > div": {
        transform: 'translateY(-100%)',
        transition: `transform ${animTime}ms linear`
    },
    "doric-screen-menu[visible='true']": {
        transform: 'translateX(0)',
        opacity: 1,
        transition: `opacity ${animTime}ms linear`
    },
    "doric-screen-menu[visible='true'] > div": {
        transform: 'translateY(0%)'
    },
    ".doric-screen-menu-button": {
        width: 45,
        height: 40,
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'white',
        borderRadius: 0,
        margin: 0
    },
    ".doric-screen-back-button": {
        height: 40,
        position: 'absolute',
        top: 0,
        left: 0,
        color: 'white',
        borderRadius: 0,
        margin: 0,
        fontSize: 14
    }
});
class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    toggle = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render = () => {
        const {
            title,
            menu = null,
            backText = null
        } = this.props;
        let {
            onBack = null
        } = this.props;
        const {
            expanded
        } = this.state;

        let menuButton = null;
        let backButton = null;

        if (onBack !== null || backText !== null) {
            onBack = onBack || (() => App.nav.pop());
            backButton = <Doric.IconButton icon="ion-chevron-left" text={backText} className="doric-screen-back-button" onTap={onBack} />;
        }

        if (menu !== null) {
            menuButton = <Doric.IconButton className="doric-screen-menu-button" icon="ion-navicon" onTap={this.toggle} iconStyle={{fontSize: 28}} />;
        }

        return (
            <doric-screen>
                <doric-screen-title>
                    {title}
                    {backButton}
                    {menuButton}
                </doric-screen-title>
                <doric-screen-menu visible={expanded}>
                    <div style={{backgroundColor: '#4285f4', position: 'absolute', width: '100%'}}>
                        {menu}
                    </div>
                </doric-screen-menu>
                <doric-screen-content>
                    {this.props.children}
                </doric-screen-content>
            </doric-screen>
        );
    }
}

export default Screen;
