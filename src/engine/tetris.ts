import { Block, BlockIDs } from './block';
import { Tetramino, TetraminoType } from './tetramino';
import { GameBoard } from './gameboard';
import { StateManager } from './state-manager';
import { Input } from './input';

export class Tetris {

    private gameBoard: GameBoard;
    private state: StateManager;
    private blockControl = [];
    private currentTetramino: Tetramino;
    private frames: number;

    constructor(private cols, private rows) {
        this.gameBoard = new GameBoard();
        this.state = new StateManager();
        this.reset();
    }

    update(input: Input) {
        this.currentTetramino.setTo(this.blockControl, BlockIDs.NONE);
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
        this.currentTetramino = new Tetramino(TetraminoType.Z);
        this.currentTetramino.x = 3;
        this.currentTetramino.setTo(this.blockControl);
    }

    private moveDown() {
        if (this.currentTetramino.check(this.blockControl, 0, 1)) {
            this.currentTetramino.y += 1;
        }
        
    }
}