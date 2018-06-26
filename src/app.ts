import { Canvas, Content, Tetris } from './engine/index';
import { Game } from './game';
import { Input, KEYS } from './engine/input';

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

        input.bindKey("space", KEYS.SPACE);
        input.bindKey("left", [KEYS.LEFT_ARROW, KEYS.A]);
        input.bindKey("up", [KEYS.UP_ARROW, KEYS.W]);
        input.bindKey("right", [KEYS.RIGHT_ARROW, KEYS.D]);
        input.bindKey("down", [KEYS.DOWN_ARROW, KEYS.S]);
    }

    tick() {
        if (this.hasLoad) {
            this.tetris
                .update(input)
                .draw(canvas.ctx);
        } else {
            this.hasLoad = content.progress() === 1;
            if (this.hasLoad) {
                this.tetris = new Tetris(10, 22);
            }
        }
    }
}

let game = new App().run();

window.onblur = game.stop.bind(game);
window.onfocus = game.run.bind(game);