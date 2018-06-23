import { NumberFont } from './number-font';
import { Content } from './content';

export class Tetris {

    private back;
    private font: { [key: string]: NumberFont };
    private data: { [key: string]: number }

    constructor() {
        let content = Content.GetInstance();
        this.back = content.get("back");
        let num = content.get("numbers");
        this.font = {
            gray: new NumberFont(num, 0, 9),
            cyan: new NumberFont(num, 9, 9),
            red: new NumberFont(num, 18, 9),
            blue: new NumberFont(num, 27, 9),
            orange: new NumberFont(num, 36, 9),
            green: new NumberFont(num, 45, 9),
            yellow: new NumberFont(num, 54, 9),
            purple: new NumberFont(num, 63, 9)
        }
        this.data = {
            L: 0,
            I: 0,
            T: 0,
            S: 0,
            Z: 0,
            O: 0,
            J: 0,
            TOTAL: 0
        }
    }

    handleInputs(input) {
        return this;
    }

    update() {
        return this;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.back, 0, 0);
        this.font.gray.draw(ctx, 0, 10, 10, 8);

        this.font.orange.draw(ctx, this.data.L, 432, 52, 5);
        this.font.cyan.draw(ctx, this.data.I, 432, 76, 5);
        this.font.purple.draw(ctx, this.data.T, 432, 100, 5);
        this.font.green.draw(ctx, this.data.S, 432, 124, 5);
        this.font.red.draw(ctx, this.data.Z, 432, 148, 5);
        this.font.yellow.draw(ctx, this.data.O, 432, 172, 5);
        this.font.blue.draw(ctx, this.data.J, 432, 196, 5);

        this.font.gray.draw(ctx, this.data.TOTAL, 425, 221, 6);
        return this;
    }
}