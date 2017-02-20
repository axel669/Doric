import Env from "util/env";

const forEach = Array.prototype.forEach;
const schedule = (time, func) => setTimeout(func, time);

const findPressTarget = node => {
    while (node !== null && node !== undefined && node.getAttribute("data-no-press") !== null) {
        node = node.parentNode;
    }

    return node || document.body;
};
const touchData = ({pageX:x, pageY:y, identifier:id, target}, {mouseTriggered = false}, targetOverride = null) => Object.freeze({
    position: Object.freeze({
        x, y
    }),
    time: Date.now(),
    target: targetOverride || target,
    pressTarget: findPressTarget(targetOverride || target),
    id,
    mouseTriggered
});

const polarVector = ({position: {x:x1, y:y1}}, {position: {x:x2, y:y2}}) => {
    let angle;
    let magnitude;

    angle = Math.atan2(y2 - y1, x2 - x1);
    angle *= 180 / Math.PI;
    angle = (angle + 450) % 360;

    magnitude = Math.sqrt(
        (x2 - x1) ** 2 +
        (y2 - y1) ** 2
    );

    return {
        angle,
        magnitude
    };
};

const angleDif = (firstAngle, secondAngle) => {
    const absDif = Math.abs(firstAngle - secondAngle) % 360;
    if (absDif > 180) {
        return 360 - absDif;
    }
    return absDif;
};

const createEvent = (eventType, detail = null, eventProps = {}) => {
    let event;

    event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventType, true, true, detail);

    for(let key of Object.keys(eventProps)) {
        event[key] = eventProps[key];
    }

    return event;
};

const register = (type, createCallbacks) => {
    let {start = () => {}, move = () => {}, end = () => {}} = createCallbacks({polarVector, angleDif});

    registeredHandlers.push(type);
    registeredCallbacks[type] = {start, move, end};
    touchVars[type] = {};
};

const editableTagNames = ["input", "textarea", "select"];

let enabled;
let touchDataStart;
let touchDataLast;
let touchVars;
let registeredHandlers;
let registeredCallbacks;

enabled = true;
touchDataStart = {};
touchDataLast = {};
touchVars = {};
registeredHandlers = [];
registeredCallbacks = {};

window.addEventListener(
    "touchstart",
    evt => {
        let {changedTouches} = evt;
        if (enabled === false) {
            return;
        }

        // console.log(evt.changedTouches);
        //
        // const touch = evt.changedTouches[0];
        // const data = touchData(touch, evt, evt.target);
        //
        // touchDataStart[data.id] = data;
        // touchDataLast[data.id] = data;
        //
        // registeredHandlers.forEach(handlerName => {
        //     const handler = registeredCallbacks[handlerName];
        //
        //     touchVars[handlerName][data.id] = {};
        //     handler.start({touch: data, vars: touchVars[handlerName][data.id]});
        // });

        changedTouches::forEach(touch => {
            const data = touchData(touch, evt);

            touchDataStart[data.id] = data;
            touchDataLast[data.id] = data;

            data.pressTarget.setAttribute("pressed", "");

            registeredHandlers.forEach(handlerName => {
                const handler = registeredCallbacks[handlerName];

                touchVars[handlerName][data.id] = {};
                handler.start({touch: data, vars: touchVars[handlerName][data.id]});
            });
        });
    },
    true
);
window.addEventListener(
    "touchmove",
    evt => {
        let {changedTouches} = evt;
        if (enabled === false) {
            return;
        }

        changedTouches::forEach(touch => {
            const data = touchData(touch, evt);
            const startTouch = touchDataStart[data.id];
            const lastPosition = touchDataLast[data.id];
            const overallVector = polarVector(data, startTouch);
            const difVector = polarVector(data, lastPosition);

            registeredHandlers.forEach(handlerName => {
                const handler = registeredCallbacks[handlerName];
                const vars = touchVars[handlerName][data.id];

                handler.move({touch: data, vars, overallVector, difVector});
            });
        });
    },
    true
);
window.addEventListener(
    "touchend",
    evt => {
        let {changedTouches} = evt;
        if (enabled === false) {
            return;
        }

        changedTouches::forEach(touch => {
            const data = touchData(touch, evt);
            const startTouch = touchDataStart[data.id];
            const targetTagName = data.target.nodeName.toLowerCase();
            const overallVector = polarVector(data, startTouch);

            let somethingEditable;
            let currentNode;

            data.pressTarget.removeAttribute("pressed");

            somethingEditable = false;
            currentNode = data.target;
            while (true) {
                // console.log(currentNode);
                if (currentNode.getAttribute !== undefined && currentNode.getAttribute("contenteditable") === true) {
                    somethingEditable = true;
                    break;
                }

                currentNode = currentNode.parentNode;
                if (currentNode === document || currentNode === null) {
                    break;
                }
            }

            // if (editableTagNames.indexOf(targetTagName) === -1 && somethingEditable === false && evt.cancelable === true) {
            if (evt.cancelable === true) {
                evt.preventDefault();
            }

            registeredHandlers.forEach(handlerName => {
                const handler = registeredCallbacks[handlerName];
                const vars = touchVars[handlerName][data.id];

                handler.end({touch: data, vars, startTouch, overallVector});
                touchVars[handlerName][touch.id] = null;
            });

            touchDataStart[touch.id] = null;
            touchDataLast[touch.id] = null;
        });
    },
    true
);

(() => {
    if (Env.mobile === true) {
        return;
    }
    const copyPropList = ['pageX', 'pageY', 'screenX', 'screenY', 'altKey', 'ctrlKey', 'shiftKey', 'metaKey', 'clientX', 'clientY', 'layerX', 'layerY', 'x', 'y'];
    const createTouch = (evt, target) => copyPropList.reduce(
        (synthTouch, propertyName) => {
            synthTouch[propertyName] = evt[propertyName];
            return synthTouch;
        },
        {identifier: -1, target, sourceElement: target}
    );
    const createTouchList = (evt, target) => ({
        changedTouches: {
            0: createTouch(evt, target),
            length: 1
        }
    });
    let currentElement;
    let mouseIsDown;

    currentElement = null;
    mouseIsDown = false;

    window.addEventListener(
        "mousedown",
        evt => {
            if (evt.button !== 0) {
                return;
            }
            const event = createEvent(
                "touchstart",
                null,
                {
                    ...createTouchList(evt, evt.target),
                    mouseTriggered: true
                }
            );

            mouseIsDown = true;
            currentElement = evt.target;
            currentElement.dispatchEvent(event);
        }
    );
    window.addEventListener(
        "mousemove",
        evt => {
            if (mouseIsDown === false) {
                return;
            }
            const event = createEvent(
                "touchmove",
                null,
                {
                    ...createTouchList(evt, currentElement),
                    mouseTriggered: true
                }
            );

            if (evt.target.tagName.toLowerCase() !== 'input' || evt.target.type !== 'range') {
                evt.preventDefault();
            }
            currentElement.dispatchEvent(event);
        }
    );
    window.addEventListener(
        "mouseup",
        evt => {
            if (evt.button !== 0 || mouseIsDown === false) {
                return;
            }
            const event = createEvent(
                "touchend",
                null,
                {
                    ...createTouchList(evt, currentElement),
                    mouseTriggered: true
                }
            );

            mouseIsDown = false;
            currentElement.dispatchEvent(event);
            currentElement = null;
        }
    );
})();

register(
    "tap",
    () => ({
        start ({vars}) {
            vars.valid = true;
        },
        move ({vars, overallVector}) {
            if (overallVector.magnitude > 20) {
                vars.valid = false;
            }
        },
        end ({vars, startTouch, touch, overallVector}) {
            if (overallVector.magnitude > 20) {
                vars.valid = false;
            }
            if (vars.valid === true && (touch.time - startTouch.time) < 500) {
                if (startTouch.target !== document.activeElement && document.activeElement !== null && touch.mouseTriggered === false && ('blur' in document.activeElement)) {
                    document.activeElement.blur();
                    startTouch.target.focus();
                }

                startTouch.target.dispatchEvent(
                    createEvent("tap", null, {touch})
                );
            }
        }
    })
);

register(
    "hold",
    () => {
        const createCallbackForTouch = touch =>
            () => {
                timeouts[touch.id] = null;
                touch.target.dispatchEvent(
                    createEvent("hold", null, {position: touch.position})
                );
            };
        let timeouts;

        timeouts = {};
        return {
            start ({touch}) {
                timeouts[touch.id] = schedule(1000, createCallbackForTouch(touch));
            },
            move ({touch, overallVector}) {
                if (overallVector.magnitude > 20) {
                    clearTimeout(timeouts[touch.id]);
                    timeouts[touch.id] = null;
                }
            },
            end ({touch}) {
                if (timeouts[touch.id] !== null) {
                    clearTimeout(timeouts[touch.id]);
                    timeouts[touch.id] = null;
                }
            }
        };
    }
);

window.gesture = {register};
