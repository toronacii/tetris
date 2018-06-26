import { Canvas, Content, Tetris, Input } from './engine/index';
import { Game } from './game';

let canvas = new Canvas();
let content = new Content();
let input = new Input();

class App extends Game {

    hasLoad = false;
    tetris: Tetris;

    constructor() {
        super();

        canvas.width = 480;
        canvas.height = 272;
        canvas.scale = 1;

        content.load("back", "assets/images/back.png");
        content.load("blocks", "assets/images/blocks.png");
        content.load("numbers", "assets/images/numbers.png");

        input.bindKey("space", input.Keys.SPACE);
        input.bindKey("left", [input.Keys.LEFT_ARROW, input.Keys["A"]]);
        input.bindKey("up", [input.Keys.UP_ARROW, input.Keys["W"]]);
        input.bindKey("right", [input.Keys.RIGHT_ARROW, input.Keys["D"]]);
        input.bindKey("down", [input.Keys.DOWN_ARROW, input.Keys["S"]]);
    }

    tick() {
        if (this.hasLoad) {
            this.tetris
                .update(input)
                .draw(canvas.ctx);
        } else {
            this.hasLoad = content.progress() === 1;
            if (this.hasLoad) {
                this.tetris = new Tetris();
            }
        }
    }
}

let game = new App().run();

window.onblur = game.stop.bind(game);
window.onfocus = game.run.bind(game);