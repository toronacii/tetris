import { Randomizer } from './randomizer';
import { Block, BlockIDs } from './block';
import { Tetramino, TetraminoType } from './tetramino';
import { GameBoard } from './gameboard';
import { StateManager } from './state-manager';
import { Input } from './input';

export class Tetris {

    private gameBoard = new GameBoard();
    private state = new StateManager();
    private random = new Randomizer();

    private currentTetramino: Tetramino;
    private blockControl = [];
    private frames: number;

    constructor(private cols, private rows) {
        this.reset();
    }

    update(input: Input) {
        this.currentTetramino.setTo(this.blockControl, BlockIDs.NONE);

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
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.gameBoard.draw(ctx, this.state);
        this.blockControl.forEach((row, i) => row.forEach((block, j) => {
            if (block.solid) {
                this.gameBoard.drawBlock(ctx, block, i, j)
            }
        }));

        return this;
    }

    reset() {
        this.frames = 1;
        this.blockControl = [];
        for (let i = 0; i < this.cols; i++) {
            this.blockControl[i] = [];
            for (let j = 0; j < this.rows; j++) {
                this.blockControl[i][j] = new Block(BlockIDs.NONE);
            }
        }
        this.random.initialize();
        this.setNextTetramino();
    }

    setNextTetramino() {
        this.currentTetramino = new Tetramino(this.random.nextID());
        this.currentTetramino.x = 3;
        this.currentTetramino.y = 0;
        this.state.incrementTetramino(this.currentTetramino.ID);
    }

    private moveLeft() {
        if (this.currentTetramino.check(this.blockControl, -1, 0)) {
            this.currentTetramino.x -= 1;
        }
    }

    private moveRight() {
        if (this.currentTetramino.check(this.blockControl, 1, 0)) {
            this.currentTetramino.x += 1;
        }
    }

    private moveRotate(dr = 1) {
        if (this.currentTetramino.check(this.blockControl, 0, 0, dr)) {
            this.currentTetramino.setRotation(dr);
        }
    }

    private moveDown() {
        if (this.currentTetramino.check(this.blockControl, 0, 1)) {
            this.currentTetramino.y += 1;
        }
        else {
            this.currentTetramino.setTo(this.blockControl);
            this.checkRows();
            this.setNextTetramino();
        }
    }

    private hardDrop() {
        let move = true;
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
    }

    private checkRows() {
        let full, removed = 0;

        for (let i = this.rows - 1; i >= 0; i--) {
            full = true;
            for (let j = 0; j < this.cols; j++) {
                let x = 23;
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
    }

    private removeRow(row) {
        for (var i = row; i > 0; i--) {
            for (var j = 0; j < this.cols; j++) {
                this.blockControl[j][i].setType(this.blockControl[j][i - 1].ID);
            }
        }
    }
}