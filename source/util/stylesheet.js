const cssNoMeasurement = new Set([
    "animationIterationCount",
    "boxFlex",
    "boxFlexGroup",
    "boxOrdinalGroup",
    "columnCount",
    "fillOpacity",
    "flex",
    "flexGrow",
    "flexPositive",
    "flexShrink",
    "flexNegative",
    "flexOrder",
    "fontWeight",
    "lineClamp",
    "lineHeight",
    "opacity",
    "order",
    "orphans",
    "stopOpacity",
    "strokeDashoffset",
    "strokeOpacity",
    "strokeWidth",
    "tabSize",
    "widows",
    "zIndex",
    "zoom"
]);
const cssPrefixNames = new Set([
    'transform',
    'transformOrigin',
    'boxShadow',
    'transition',
    'animation',
    'animationDelay',
    'animationDirection',
    'animationDuration',
    'animationFillMode',
    'animationIterationCount',
    'animationName',
    'animationPlayState',
    'animationTimingFunction',
    'userSelect',
    'justifyContent',
    'alignItems',
    'flexWrap',
]);
const cssPrefixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];

const getCSSValue = (prop, value) => {
    if (value === null) {
        return null;
    }
    if (typeof value === 'function') {
        value = value();
    }
    if (Array.isArray(value) === true) {
        return value.map(value => getCSSValue(prop, value)[0]);
    }
    if (typeof value === 'number' && cssNoMeasurement.has(prop) === false) {
        value += "px";
    }
    return [value];
};

const genCSS = (defs, tabs = 0) => {
    const space = '\t'.repeat(tabs);
    return Object.entries(defs).reduce(
        (css, [selector, cssProps]) => {
            const content = Object.entries(cssProps).reduce(
                (contentArray, [propName, propValue]) => {
                    let lines = [];
                    if (Array.isArray(propValue) === false && typeof propValue === 'object') {
                        lines = [genCSS({[propName]: propValue}, tabs + 1)];
                    } else {
                        const value = getCSSValue(propName, propValue);
                        const cssPropName = propName.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());

                        if (cssPrefixNames.has(propName) === true) {
                            lines = cssPrefixes.map(prefix => `${space}\t${prefix}${cssPropName}: ${value[0]};`);
                        } else {
                            lines = value.map(value => `${space}\t${cssPropName}: ${value};`);
                        }
                    }

                    return [
                        ...contentArray,
                        ...lines
                    ];
                },
                []
            ).join('\n');
            if (selector.slice(0, 10) === "@keyframes") {
                css.push(`${space}@-webkit-keyframes ${selector.slice(11)} {\n${content}\n${space}}`);
            }
            css.push(`${space}${selector} {\n${content}\n${space}}`);
            return css;
        },
        []
    ).join('\n');
};
const createStyleSheet = () => {
    const styles = {};
    return {
        addStyles(defs) {
            for (const [selector, def] of Object.entries(defs)) {
                styles[selector] = def;
            }
        },
        __init(styleTag) {
            styleTag.innerHTML = genCSS(styles);
        }
    };
};

const CSS = Object.freeze({
    rgba: (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`,
    rgb: (r, g, b) => CSS.rgba(r, g, b, 1)
});

export {createStyleSheet, genCSS, CSS};
