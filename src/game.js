define(["require", "exports", "./engine/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _reqFrame, _isRunning;
    var Game = /** @class */ (function () {
        function Game() {
            this._loop = this._loop.bind(this);
        }
        Game.prototype.stop = function () {
            if (_reqFrame) {
                window.cancelAnimationFrame(_reqFrame);
            }
            _reqFrame = null;
            _isRunning = false;
        };
        Game.prototype.run = function () {
            if (!_isRunning) {
                _isRunning = true;
                _reqFrame = window.requestAnimationFrame(this._loop);
            }
            return this;
        };
        Game.prototype.tick = function () {
            throw new Error("This function must be overrided!");
        };
        Game.prototype._loop = function () {
            _reqFrame = window.requestAnimationFrame(this._loop);
            this.tick();
            index_1.Canvas.GetInstance().flip();
        };
        return Game;
    }());
    exports.Game = Game;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUEsSUFBSSxTQUFpQixFQUFFLFVBQW1CLENBQUM7SUFFM0M7UUFFSTtZQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELG1CQUFJLEdBQUo7WUFDSSxJQUFJLFNBQVMsRUFBRTtnQkFDWCxNQUFNLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDekM7WUFDRCxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQztRQUVELGtCQUFHLEdBQUg7WUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNiLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLFNBQVMsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELG1CQUFJLEdBQUo7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVPLG9CQUFLLEdBQWI7WUFDSSxTQUFTLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixjQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUNMLFdBQUM7SUFBRCxDQUFDLEFBL0JELElBK0JDO0lBL0JZLG9CQUFJIn0=