import { GameBoard } from './gameboard';
import { StateManager } from './state-manager';
import { Input } from './input';

export class Tetris {

    private gameBoard: GameBoard;
    private state: StateManager;

    constructor() {
        this.gameBoard = new GameBoard();
        this.state = new StateManager();
    }

    update(input: Input) {
        if (input.pressed("space")) {
            console.log("space is nice")
        }
        return this;
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.gameBoard.draw(ctx, this.state);
        return this;
    }
}