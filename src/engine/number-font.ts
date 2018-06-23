export class NumberFont {
    width: number;
    constructor(public image, public y, public height) {
        this.width = image.width / 10;
    }

    draw(ctx: CanvasRenderingContext2D, num, x, y, padding) {
        num = num.toString();
        if (padding) {
            num = num.length >= padding ? 
                num : 
                new Array(padding - num.length + 1).join("0") + num
        }
        for (var i = 0, n, len = num.length; i < len; i++) {
            n = parseInt(num[i]);
            ctx.drawImage(this.image, this.width * n, this.y, this.width, this.height, x, y, this.width, this.height);

            x += this.width;
        }
    }
}