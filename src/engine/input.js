define(["require", "exports", "./canvas"], function (require, exports, canvas_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _instance, _bindings = {}, _pressed = {}, _down = {}, _released = [];
    var Input = /** @class */ (function () {
        function Input() {
            this.Buttons = {
                LEFT: -1,
                MIDDLE: -2,
                RIGHT: -3
            };
            this.Keys = {
                SPACE: 32,
                LEFT_ARROW: 37,
                UP_ARROW: 38,
                RIGHT_ARROW: 39,
                DOWN_ARROW: 40
            };
            this.mouse = { x: 0, y: 0 };
            for (var char = 65; char <= 90; char++) {
                this.Keys[String.fromCharCode(char)] = char;
            }
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
            }
            event.preventDefault();
        };
        Input.prototype.onUp = function (event) {
            var action = this.getAction(event);
            if (action) {
                _released.push(action);
            }
            event.preventDefault();
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
            if (_bindings[this.Buttons.RIGHT]) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxJQUFJLFNBQWdCLEVBQ2hCLFNBQVMsR0FBRyxFQUFFLEVBQ2QsUUFBUSxHQUFHLEVBQUUsRUFDYixLQUFLLEdBQUcsRUFBRSxFQUNWLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFFbkI7UUFlSTtZQWRBLFlBQU8sR0FBRztnQkFDTixJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNSLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUNaLENBQUE7WUFDRCxTQUFJLEdBQUc7Z0JBQ0gsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsVUFBVSxFQUFFLEVBQUU7YUFDakIsQ0FBQTtZQUNELFVBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFBO1lBR2xCLEtBQUssSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUMvQztZQUNELElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVsQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV2RCxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU1QyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJCLENBQUM7UUFFRCx1QkFBTyxHQUFQLFVBQVEsTUFBTSxFQUFFLElBQW9CO1lBQ2hDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO2dCQUN6QixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDWixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELHNCQUFNLEdBQU4sVUFBTyxLQUFLO1lBQ1IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLE1BQU0sRUFBRTtnQkFDUixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDeEI7WUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsQ0FBQztRQUVELG9CQUFJLEdBQUosVUFBSyxLQUFLO1lBQ04sSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLE1BQU0sRUFBRTtnQkFDUixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBZ0M7Z0JBQTlCLGNBQVUsRUFBRSxvQkFBTyxFQUFFLG9CQUFPO1lBQ2pDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNYLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVYLEdBQUc7Z0JBQ0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BCLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO2FBQ3RCLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFFL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRUQseUJBQVMsR0FBVCxVQUFVLEtBQUs7WUFDWCxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDMUI7UUFDTCxDQUFDO1FBRUQsNEJBQVksR0FBWjtZQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxFQUFyQixDQUFxQixDQUFDLENBQUM7WUFDbkQsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNkLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVELHVCQUFPLEdBQVAsVUFBUSxNQUFNO1lBQ1YsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUVELG9CQUFJLEdBQUosVUFBSyxNQUFNO1lBQ1AsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVELHdCQUFRLEdBQVIsVUFBUyxNQUFNO1lBQ1gsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsTUFBTSxLQUFLLE9BQU8sRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFFTyx5QkFBUyxHQUFqQixVQUFrQixLQUFLO1lBQ25CLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRU8sdUJBQU8sR0FBZixVQUFnQixFQUF5QjtnQkFBdkIsY0FBSSxFQUFFLG9CQUFPLEVBQUUsa0JBQU07WUFDbkMsUUFBTyxJQUFJLEVBQUU7Z0JBQ1QsS0FBSyxTQUFTLENBQUM7Z0JBQ2YsS0FBSyxPQUFPO29CQUNSLE9BQU8sT0FBTyxDQUFDO2dCQUNuQixLQUFLLFdBQVcsQ0FBQztnQkFDakIsS0FBSyxTQUFTO29CQUNWLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ2hDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3FCQUN0QjthQUNSO1FBQ0wsQ0FBQztRQUVNLGlCQUFXLEdBQWxCO1lBQ0ksT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQUFDLEFBeEhELElBd0hDO0lBeEhZLHNCQUFLIn0=