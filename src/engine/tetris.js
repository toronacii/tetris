define(["require", "exports", "./gameboard", "./state-manager"], function (require, exports, gameboard_1, state_manager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Tetris = /** @class */ (function () {
        function Tetris() {
            this.gameBoard = new gameboard_1.GameBoard();
            this.state = new state_manager_1.StateManager();
        }
        Tetris.prototype.update = function (input) {
            if (input.pressed("space")) {
                console.log("space is nice");
            }
            return this;
        };
        Tetris.prototype.draw = function (ctx) {
            this.gameBoard.draw(ctx, this.state);
            return this;
        };
        return Tetris;
    }());
    exports.Tetris = Tetris;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGV0cmlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBO1FBS0k7WUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSw0QkFBWSxFQUFFLENBQUM7UUFDcEMsQ0FBQztRQUVELHVCQUFNLEdBQU4sVUFBTyxLQUFZO1lBQ2YsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO2FBQy9CO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELHFCQUFJLEdBQUosVUFBSyxHQUE2QjtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0FBQyxBQXJCRCxJQXFCQztJQXJCWSx3QkFBTSJ9