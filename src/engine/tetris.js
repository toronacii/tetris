define(["require", "exports", "./randomizer", "./block", "./tetramino", "./gameboard", "./state-manager"], function (require, exports, randomizer_1, block_1, tetramino_1, gameboard_1, state_manager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Tetris = /** @class */ (function () {
        function Tetris(cols, rows) {
            this.cols = cols;
            this.rows = rows;
            this.gameBoard = new gameboard_1.GameBoard();
            this.state = new state_manager_1.StateManager();
            this.random = new randomizer_1.Randomizer();
            this.blockControl = [];
            this.reset();
        }
        Tetris.prototype.update = function (input) {
            this.currentTetramino.setTo(this.blockControl, block_1.BlockIDs.NONE);
            if (input.pressed("up")) {
                this.moveRotate();
            }
            if (input.pressed("down")) {
                this.moveDown();
            }
            if (input.pressed("left")) {
                this.moveLeft();
            }
            if (input.pressed("right")) {
                this.moveRight();
            }
            if (input.pressed("space")) {
                this.hardDrop();
            }
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
            this.random.initialize();
            this.setNextTetramino();
        };
        Tetris.prototype.setNextTetramino = function () {
            this.currentTetramino = new tetramino_1.Tetramino(this.random.nextID());
            this.currentTetramino.x = 3;
            this.currentTetramino.y = 0;
            this.state.incrementTetramino(this.currentTetramino.ID);
        };
        Tetris.prototype.moveLeft = function () {
            if (this.currentTetramino.check(this.blockControl, -1, 0)) {
                this.currentTetramino.x -= 1;
            }
        };
        Tetris.prototype.moveRight = function () {
            if (this.currentTetramino.check(this.blockControl, 1, 0)) {
                this.currentTetramino.x += 1;
            }
        };
        Tetris.prototype.moveRotate = function (dr) {
            if (dr === void 0) { dr = 1; }
            if (this.currentTetramino.check(this.blockControl, 0, 0, dr)) {
                this.currentTetramino.setRotation(dr);
            }
        };
        Tetris.prototype.moveDown = function () {
            if (this.currentTetramino.check(this.blockControl, 0, 1)) {
                this.currentTetramino.y += 1;
            }
            else {
                this.currentTetramino.setTo(this.blockControl);
                this.checkRows();
                this.setNextTetramino();
            }
        };
        Tetris.prototype.hardDrop = function () {
            var move = true;
            while (move) {
                if (this.currentTetramino.check(this.blockControl, 0, 1)) {
                    this.currentTetramino.y += 1;
                    this.state.score += 2;
                }
                else {
                    move = false;
                    this.currentTetramino.setTo(this.blockControl);
                    this.checkRows();
                    this.setNextTetramino();
                }
            }
        };
        Tetris.prototype.checkRows = function () {
            var full, removed = 0;
            for (var i = this.rows - 1; i >= 0; i--) {
                full = true;
                for (var j = 0; j < this.cols; j++) {
                    var x = 23;
                    if (!this.blockControl[j][i].solid) {
                        full = false;
                        break;
                    }
                }
                if (full) {
                    this.removeRow(i);
                    removed++;
                    this.state.lines++;
                    i++;
                }
            }
            if (removed) {
                this.state.addScore(removed);
                this.state.checkLevelUp();
            }
        };
        Tetris.prototype.removeRow = function (row) {
            for (var i = row; i > 0; i--) {
                for (var j = 0; j < this.cols; j++) {
                    this.blockControl[j][i].setType(this.blockControl[j][i - 1].ID);
                }
            }
        };
        return Tetris;
    }());
    exports.Tetris = Tetris;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGV0cmlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU9BO1FBVUksZ0JBQW9CLElBQUksRUFBVSxJQUFJO1lBQWxCLFNBQUksR0FBSixJQUFJLENBQUE7WUFBVSxTQUFJLEdBQUosSUFBSSxDQUFBO1lBUjlCLGNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztZQUM1QixVQUFLLEdBQUcsSUFBSSw0QkFBWSxFQUFFLENBQUM7WUFDM0IsV0FBTSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1lBRzFCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1lBSXRCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBRUQsdUJBQU0sR0FBTixVQUFPLEtBQVk7WUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU5RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQjtZQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO1lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkI7WUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQjtZQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO1lBRUQsSUFBSSxJQUFJ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