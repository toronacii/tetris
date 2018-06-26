define(["require", "exports", "./canvas"], function (require, exports, canvas_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _instance, _bindings = {}, _pressed = {}, _down = {}, _released = [];
    exports.KEYS = {
        SPACE: 32,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        A: "A".charCodeAt(0),
        W: "W".charCodeAt(0),
        D: "D".charCodeAt(0),
        S: "S".charCodeAt(0)
    };
    exports.BUTTONS = {
        LEFT: -1,
        MIDDLE: -2,
        RIGHT: -3
    };
    var Input = /** @class */ (function () {
        function Input() {
            this.mouse = { x: 0, y: 0 };
            var canvas = canvas_1.Canvas.GetInstance();
            canvas.frame.onmousedown = this.onDown.bind(this);
            canvas.frame.onmouseup = this.onUp.bind(this);
            canvas.frame.onmousemove = this.onMove.bind(this);
            canvas.frame.oncontextmenu = this.onContext.bind(this);
            document.onkeydown = this.onDown.bind(this);
            document.onkeyup = this.onUp.bind(this);
            document.onmousemove = this.onUp.bind(this);
            _instance = this;
        }
        Input.prototype.bindKey = function (action, keys) {
            if (typeof keys === "number") {
                _bindings[keys] = action;
                return;
            }
            keys.forEach(function (key) {
                _bindings[key] = action;
            });
        };
        Input.prototype.onDown = function (event) {
            var action = this.getAction(event);
            if (action) {
                _pressed[action] = !_down[action];
                _down[action] = true;
                event.preventDefault();
            }
        };
        Input.prototype.onUp = function (event) {
            var action = this.getAction(event);
            if (action) {
                _released.push(action);
                event.preventDefault();
            }
        };
        Input.prototype.onMove = function (_a) {
            var el = _a.target, clientX = _a.clientX, clientY = _a.clientY;
            var ox = 0;
            var oy = 0;
            do {
                ox += el.offsetLeft;
                oy += el.offsetTop;
            } while (el = el.parentOffset);
            this.mouse.x = clientX - ox;
            this.mouse.y = clientY - oy;
            event.preventDefault();
        };
        Input.prototype.onContext = function (event) {
            if (_bindings[exports.BUTTONS.RIGHT]) {
                event.preventDefault();
            }
        };
        Input.prototype.clearPressed = function () {
            _released.forEach(function (action) { return _down[action] = false; });
            _pressed = {};
            _released = [];
        };
        Input.prototype.pressed = function (action) {
            return _pressed[action];
        };
        Input.prototype.down = function (action) {
            return _down[action];
        };
        Input.prototype.released = function (action) {
            return _released.some(function (_action) { return action === _action; });
        };
        Input.prototype.getAction = function (event) {
            return _bindings[this.getCode(event)];
        };
        Input.prototype.getCode = function (_a) {
            var type = _a.type, keyCode = _a.keyCode, button = _a.button;
            switch (type) {
                case "keydown":
                case "keyup":
                    return keyCode;
                case "mousedown":
                case "mouseup":
                    if ([0, 1, 2].indexOf(button) >= 0) {
                        return -button - 1;
                    }
            }
        };
        Input.GetInstance = function () {
            return _instance;
        };
        return Input;
    }());
    exports.Input = Input;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxJQUFJLFNBQWdCLEVBQ2hCLFNBQVMsR0FBRyxFQUFFLEVBQ2QsUUFBUSxHQUFHLEVBQUUsRUFDYixLQUFLLEdBQUcsRUFBRSxFQUNWLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFFTixRQUFBLElBQUksR0FBRztRQUNoQixLQUFLLEVBQUUsRUFBRTtRQUNULFVBQVUsRUFBRSxFQUFFO1FBQ2QsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLFVBQVUsRUFBRSxFQUFFO1FBQ2QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCLENBQUE7SUFFWSxRQUFBLE9BQU8sR0FBRztRQUNuQixJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ1IsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNWLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDWixDQUFBO0lBRUQ7UUFHSTtZQUZBLFVBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFBO1lBR2xCLElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVsQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FB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