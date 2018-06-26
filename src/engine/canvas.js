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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FudmFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFpQixDQUFDO0lBRWxEO1FBMkNJO1lBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUVuQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUE3Q0Qsc0JBQUkseUJBQUs7aUJBQVQ7Z0JBQ0ksT0FBTyxHQUFHLENBQUM7WUFDZixDQUFDO2lCQUVELFVBQVUsQ0FBUztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLENBQUM7OztXQUxBO1FBT0Qsc0JBQUksMEJBQU07aUJBQVY7Z0JBQ0ksT0FBTyxHQUFHLENBQUM7WUFDZixDQUFDO2lCQUVELFVBQVcsQ0FBUztnQkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN6QixDQUFDOzs7V0FMQTtRQU9ELHNCQUFJLHlCQUFLO2lCQUFUO2dCQUNJLE9BQU8sTUFBTSxDQUFDO1lBQ2xCLENBQUM7aUJBRUQsVUFBVSxDQUFTO2dCQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUVsQyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztZQUNoRCxDQUFDOzs7V0FiQTtRQTJCRCxxQkFBSSxHQUFKO1lBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVoRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRU0sa0JBQVcsR0FBbEI7WUFDSSxPQUFPLFNBQVMsQ0FBQztRQUNyQixDQUFDO1FBQ0wsYUFBQztJQUFELENBQUMsQUFqRUQsSUFpRUM7SUFqRVksd0JBQU0ifQ==