define(["require", "exports", "./block", "./tetramino", "./gameboard", "./state-manager"], function (require, exports, block_1, tetramino_1, gameboard_1, state_manager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Tetris = /** @class */ (function () {
        function Tetris(cols, rows) {
            this.cols = cols;
            this.rows = rows;
            this.blockControl = [];
            this.gameBoard = new gameboard_1.GameBoard();
            this.state = new state_manager_1.StateManager();
            this.reset();
        }
        Tetris.prototype.update = function (input) {
            this.currentTetramino.setTo(this.blockControl, block_1.BlockIDs.NONE);
            if (this.frames++ % 20 === 0) {
                this.moveDown();
            }
            this.currentTetramino.setTo(this.blockControl);
            return this;
        };
        Tetris.prototype.draw = function (ctx) {
            var _this = this;
            this.gameBoard.draw(ctx, this.state);
            this.blockControl.forEach(function (row, i) { return row.forEach(function (block, j) {
                if (block.solid) {
                    _this.gameBoard.drawBlock(ctx, block, i, j);
                }
            }); });
            return this;
        };
        Tetris.prototype.reset = function () {
            this.frames = 1;
            this.blockControl = [];
            for (var i = 0; i < this.cols; i++) {
                this.blockControl[i] = [];
                for (var j = 0; j < this.rows; j++) {
                    this.blockControl[i][j] = new block_1.Block(block_1.BlockIDs.NONE);
                }
            }
            this.currentTetramino = new tetramino_1.Tetramino(tetramino_1.TetraminoType.Z);
            this.currentTetramino.x = 3;
            this.currentTetramino.setTo(this.blockControl);
        };
        Tetris.prototype.moveDown = function () {
            if (this.currentTetramino.check(this.blockControl, 0, 1)) {
                this.currentTetramino.y += 1;
            }
        };
        return Tetris;
    }());
    exports.Tetris = Tetris;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGV0cmlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BO1FBUUksZ0JBQW9CLElBQUksRUFBVSxJQUFJO1lBQWxCLFNBQUksR0FBSixJQUFJLENBQUE7WUFBVSxTQUFJLEdBQUosSUFBSSxDQUFBO1lBSjlCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1lBS3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUVELHVCQUFNLEdBQU4sVUFBTyxLQUFZO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELHFCQUFJLEdBQUosVUFBSyxHQUE2QjtZQUFsQyxpQkFTQztZQVJHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFLLE9BQUEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2RCxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7b0JBQ2IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7aUJBQzdDO1lBQ0wsQ0FBQyxDQUFDLEVBSm9DLENBSXBDLENBQUMsQ0FBQztZQUVKLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxzQkFBSyxHQUFMO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLGFBQUssQ0FBQyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0RDthQUNKO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkscUJBQVMsQ0FBQyx5QkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFTyx5QkFBUSxHQUFoQjtZQUNJLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7UUFFTCxDQUFDO1FBQ0wsYUFBQztJQUFELENBQUMsQUF0REQsSUFzREM7SUF0RFksd0JBQU0ifQ==