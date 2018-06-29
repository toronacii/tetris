define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StateManager = /** @class */ (function () {
        function StateManager() {
            this.lines = 0;
            this.score = 0;
            this.reset(0);
        }
        StateManager.prototype.reset = function (startLevel) {
            if (startLevel === void 0) { startLevel = 0; }
            this.tetraminos = {
                L: 0,
                I: 0,
                T: 0,
                S: 0,
                Z: 0,
                O: 0,
                J: 0,
                TOTAL: 0
            };
            this._firstLevel = false;
            this._startLevel = startLevel;
            this.level = this._startLevel;
        };
        StateManager.prototype.incrementTetramino = function (id) {
            this.tetraminos[id] += 1;
            this.tetraminos.TOTAL += 1;
        };
        StateManager.prototype.addScore = function (score) {
            var points = [0, 40, 100, 300, 1200][score];
            this.score += (this.level + 1) * points;
        };
        StateManager.prototype.checkLevelUp = function () {
            if (this._firstLevel) {
                if (this.lines >= (this.level + 1) * 10) {
                    this.level++;
                }
            }
            else {
                if (this.lines >= (this._startLevel + 1) * 10 || 100) {
                    this._firstLevel = true;
                    this.level++;
                }
            }
        };
        return StateManager;
    }());
    exports.StateManager = StateManager;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXRlLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFVSTtZQVJPLFVBQUssR0FBRyxDQUFDLENBQUM7WUFNakIsVUFBSyxHQUFHLENBQUMsQ0FBQztZQUdOLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUVELDRCQUFLLEdBQUwsVUFBTSxVQUFjO1lBQWQsMkJBQUEsRUFBQSxjQUFjO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUc7Z0JBQ2QsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLENBQUM7YUFDWCxDQUFBO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2xDLENBQUM7UUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELCtCQUFRLEdBQVIsVUFBUyxLQUFLO1lBQ1YsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzVDLENBQUM7UUFFRCxtQ0FBWSxHQUFaO1lBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDckMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNoQjthQUNKO2lCQUNJO2dCQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRTtvQkFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDaEI7YUFDSjtRQUNMLENBQUM7UUFDTCxtQkFBQztJQUFELENBQUMsQUFyREQsSUFxREM7SUFyRFksb0NBQVkifQ==