import CustomEvents from "source/component/CustomEvents";
import Image from 'source/component/Image';

import componentStyleSheet from 'source/util/app';

const lineColor = 'gray';
componentStyleSheet.addStyles({
    "doric-tabs": {
        position: 'relative',
        top: 0,
        left: 0,
        display: 'block'
    },
    "doric-tabs-bar": {
        height: 35,
        display: 'block',
        position: 'absolute',
        top: 0,
        width: '100%'
    },
    "doric-tabs-tab": {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        border: '1px solid transparent',
        borderBottom: `1px solid ${lineColor}`,
        position: 'absolute',
        opacity: 0.7,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    "doric-tabs-tab[selected]": {
        border: `1px solid ${lineColor}`,
        borderBottom: '1px solid transparent',
        opacity: 1
    },
    "doric-tabs-content": {
        display: 'block',
        position: 'absolute',
        top: 35,
        bottom: 0,
        left: 0,
        right: 0
    },
    "doric-tabs-content-wrapper": {
        width: '100%',
        height: '100%',
        display: 'block',
        overflow: 'auto'
    }
});

const Tabs = props => {
    const {
        keepAlive = false,
        selectedIndex = 0,
        height = 100,
        unmountOnChange = false
    } = props;
    const children = React.Children.toArray(props.children);
    const onChange = props.onChange || (() => {});
    const size = 100 / children.length;

    const tabs = children.map(
        (tab, index) => {
            const props = {
                selected: (index === selectedIndex) || null,
                style: {
                    width: `${size}%`,
                    left: `${size * index}%`
                },
                onTap (evt) {
                    onChange(index);
                }
            };
            const tabTitle = tab.props.tabTitle;
            const tabIcon = tab.props.tabIcon || null;
            const tabImage = tab.props.tabImage || null;

            let tabContent = null;
            if (tabImage !== null) {
                tabContent = <Image source={tabImage} width="100%" height="100%" />;
            } else {
                tabContent = [<div>{tabTitle}</div>];
                if (tabIcon !== null) {
                    tabContent.unshift(<div style={{padding: 3}}><Doric.Icon icon={tabIcon} /></div>);
                }
            }

            return <CustomEvents component="doric-tabs-tab" {...props}>{tabContent}</CustomEvents>;
        }
    );

    let displayChidren = null;
    if (unmountOnChange === false) {
        displayChidren = children.map(
            (child, index) => {
                const display = (index === selectedIndex) ? null : 'none';
                return <doric-tabs-content-wrapper style={{display}} key={index}>{child}</doric-tabs-content-wrapper>;
            }
        );
    } else {
        displayChidren = <doric-tabs-content-wrapper key={selectedIndex}>{children[selectedIndex]}</doric-tabs-content-wrapper>;
    }

    return (
        <doric-tabs style={{height}}>
            <doric-tabs-bar>{tabs}</doric-tabs-bar>
            <doric-tabs-content>
                {displayChidren}
            </doric-tabs-content>
        </doric-tabs>
    );
};

export default Tabs;
