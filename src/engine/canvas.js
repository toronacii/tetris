define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _fw, _fh, _vw, _vh, _scale, _instance;
    var Canvas = /** @class */ (function () {
        function Canvas() {
            this.frame = document.getElementsByTagName("canvas")[0];
            this.view = document.createElement("canvas");
            this.ctx = this.view.getContext("2d");
            this._scale = 1;
            this._fCtx = this.frame.getContext("2d");
            _fw = _fh = _vw = _vh = _scale = 1;
            _instance = this;
        }
        Object.defineProperty(Canvas.prototype, "width", {
            get: function () {
                return _vw;
            },
            set: function (w) {
                this.view.width = w;
                this._scale = _scale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Canvas.prototype, "height", {
            get: function () {
                return _vh;
            },
            set: function (h) {
                this.view.height = h;
                this._scale = _scale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Canvas.prototype, "scale", {
            get: function () {
                return _scale;
            },
            set: function (s) {
                this._scale = s;
                _vw = this.view.width;
                _vh = this.view.height;
                _fw = this.frame.width = _vw * s;
                _fh = this.frame.height = _vh * s;
                this._fCtx.imageSmoothingEnabled = false;
                this._fCtx.oImageSmoothingEnabled = false;
                this._fCtx.webkitImageSmoothingEnabled = false;
                this._fCtx.mozImageSmoothingEnabled = false;
            },
            enumerable: true,
            configurable: true
        });
        Canvas.prototype.flip = function () {
            this._fCtx.clearRect(0, 0, _fw, _fh);
            this._fCtx.drawImage(this.view, 0, 0, _fw, _fh);
            this.ctx.clearRect(0, 0, _vw, _vh);
        };
        Canvas.GetInstance = function () {
            return _instance;
        };
        return Canvas;
    }());
    exports.Canvas = Canvas;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7SUFFMUM7UUEyQ0k7WUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUVoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRW5DLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQztRQTdDRCxzQkFBSSx5QkFBSztpQkFBVDtnQkFDSSxPQUFPLEdBQUcsQ0FBQztZQUNmLENBQUM7aUJBRUQsVUFBVSxDQUFTO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDekIsQ0FBQzs7O1dBTEE7UUFPRCxzQkFBSSwwQkFBTTtpQkFBVjtnQkFDSSxPQUFPLEdBQUcsQ0FBQztZQUNmLENBQUM7aUJBRUQsVUFBVyxDQUFTO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLENBQUM7OztXQUxBO1FBT0Qsc0JBQUkseUJBQUs7aUJBQVQ7Z0JBQ0ksT0FBTyxNQUFNLENBQUM7WUFDbEIsQ0FBQztpQkFFRCxVQUFVLENBQVM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUN2QixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDakMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBRWxDLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO1lBQ2hELENBQUM7OztXQWJBO1FBMkJELHFCQUFJLEdBQUo7WUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRWhELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFTSxrQkFBVyxHQUFsQjtZQUNJLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0FBQyxBQWpFRCxJQWlFQztJQWpFWSx3QkFBTSJ9