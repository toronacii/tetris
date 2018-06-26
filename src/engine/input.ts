import { Canvas } from './canvas';

var _instance: Input,
    _bindings = {},
    _pressed = {},
    _down = {},
    _released = [];

export class Input {
    Buttons = {
        LEFT: -1,
        MIDDLE: -2,
        RIGHT: -3
    }
    Keys = {
        SPACE: 32,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40
    }
    mouse = { x: 0, y: 0 }

    constructor() {
        for (let char = 65; char <= 90; char++) {
            this.Keys[String.fromCharCode(char)] = char;
        }
        let canvas = Canvas.GetInstance();
        
        canvas.frame.onmousedown = this.onDown.bind(this);
        canvas.frame.onmouseup = this.onUp.bind(this);
        canvas.frame.onmousemove = this.onMove.bind(this);
        canvas.frame.oncontextmenu = this.onContext.bind(this);

        document.onkeydown = this.onDown.bind(this);
        document.onkeyup = this.onUp.bind(this);
        document.onmousemove = this.onUp.bind(this);

        _instance = this;

    }

    bindKey(action, keys: number | any[]) {
        if (typeof keys === "number") {
            _bindings[keys] = action;
            return;
        }

        keys.forEach(key => {
            _bindings[key] = action;
        });
    }

    onDown(event) {
        let action = this.getAction(event);
        if (action) {
            _pressed[action] = !_down[action];
            _down[action] = true;
        }
        event.preventDefault();
    }

    onUp(event) {
        let action = this.getAction(event);
        if (action) {
            _released.push(action);
        }
        event.preventDefault();
    }

    onMove({ target: el, clientX, clientY }) {
        let ox = 0;
        let oy = 0;

        do {
            ox += el.offsetLeft;
            oy += el.offsetTop;
        } while (el = el.parentOffset);

        this.mouse.x = clientX - ox;
        this.mouse.y = clientY - oy;
        event.preventDefault();
    }

    onContext(event) {
        if (_bindings[this.Buttons.RIGHT]) {
            event.preventDefault();
        }
    }

    clearPressed() {
        _released.forEach(action => _down[action] = false);
        _pressed = {};
        _released = [];
    }

    pressed(action) {
        return _pressed[action];
    }

    down(action) {
        return _down[action];
    }

    released(action) {
        return _released.some(_action => action === _action);
    }

    private getAction(event) {
        return _bindings[this.getCode(event)];
    }

    private getCode({ type, keyCode, button }) {
        switch(type) {
            case "keydown":
            case "keyup":
                return keyCode;
            case "mousedown":
            case "mouseup":
                if ([0, 1, 2].indexOf(button) >= 0) {
                    return -button - 1;
                }
        }
    }

    static GetInstance() {
        return _instance;
    }
}