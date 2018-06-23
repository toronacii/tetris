import { Canvas, Content, Tetris } from './engine/index';
import { Game } from './game';

let canvas = new Canvas();
let content = new Content();

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
    }

    tick() {
        if (this.hasLoad) {
            this.tetris
                .handleInputs({})
                .update()
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