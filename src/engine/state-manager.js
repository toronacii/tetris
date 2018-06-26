define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StateManager = /** @class */ (function () {
        function StateManager() {
            this.reset(0);
        }
        StateManager.prototype.reset = function (step) {
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
        };
        StateManager.prototype.incrementTetramino = function (id) {
            this.tetraminos[id] += 1;
            this.tetraminos.TOTAL += 1;
        };
        return StateManager;
    }());
    exports.StateManager = StateManager;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXRlLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFFSTtZQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUVELDRCQUFLLEdBQUwsVUFBTSxJQUFZO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRztnQkFDZCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixLQUFLLEVBQUUsQ0FBQzthQUNYLENBQUE7UUFDTCxDQUFDO1FBRUQseUNBQWtCLEdBQWxCLFVBQW1CLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDTCxtQkFBQztJQUFELENBQUMsQUF2QkQsSUF1QkM7SUF2Qlksb0NBQVkifQ==