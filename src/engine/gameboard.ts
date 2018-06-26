import { Block } from './block';
import { Content } from "./index";
import { NumberFont } from "./number-font";

export class GameBoard {
    private back;
    private blocks;
    private font: { [key: string]: NumberFont };
    
    constructor() {
        let content = Content.GetInstance();
        this.back = content.get("back");
        this.blocks = content.get("blocks");
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
    }

    draw(ctx: CanvasRenderingContext2D, { tetraminos }) {
        ctx.drawImage(this.back, 0, 0);
        this.font.gray.draw(ctx, 0, 10, 10, 8);

        this.font.orange.draw(ctx, tetraminos.L, 432, 52, 5);
        this.font.cyan.draw(ctx, tetraminos.I, 432, 76, 5);
        this.font.purple.draw(ctx, tetraminos.T, 432, 100, 5);
        this.font.green.draw(ctx, tetraminos.S, 432, 124, 5);
        this.font.red.draw(ctx, tetraminos.Z, 432, 148, 5);
        this.font.yellow.draw(ctx, tetraminos.O, 432, 172, 5);
        this.font.blue.draw(ctx, tetraminos.J, 432, 196, 5);

        this.font.gray.draw(ctx, tetraminos.TOTAL, 425, 221, 6);
    }

    drawBlock(ctx: CanvasRenderingContext2D, block: Block, x, y) {
        let id = block.ID,
            size = 13;

        x = 180 + x * (size - 1);
        y = 4 + y * (size - 1);

        ctx.drawImage(this.blocks, id * (size - 1), 0, size, size, x, y, size, size)
    }
}