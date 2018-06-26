define(["require", "exports", "./index", "./number-font"], function (require, exports, index_1, number_font_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameBoard = /** @class */ (function () {
        function GameBoard() {
            var content = index_1.Content.GetInstance();
            this.back = content.get("back");
            this.blocks = content.get("blocks");
            var num = content.get("numbers");
            this.font = {
                gray: new number_font_1.NumberFont(num, 0, 9),
                cyan: new number_font_1.NumberFont(num, 9, 9),
                red: new number_font_1.NumberFont(num, 18, 9),
                blue: new number_font_1.NumberFont(num, 27, 9),
                orange: new number_font_1.NumberFont(num, 36, 9),
                green: new number_font_1.NumberFont(num, 45, 9),
                yellow: new number_font_1.NumberFont(num, 54, 9),
                purple: new number_font_1.NumberFont(num, 63, 9)
            };
        }
        GameBoard.prototype.draw = function (ctx, _a) {
            var tetraminos = _a.tetraminos;
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
        };
        return GameBoard;
    }());
    exports.GameBoard = GameBoard;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2FtZWJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUdBO1FBS0k7WUFDSSxJQUFJLE9BQU8sR0FBRyxlQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLElBQUksd0JBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxFQUFFLElBQUksd0JBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0IsR0FBRyxFQUFFLElBQUksd0JBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxFQUFFLElBQUksd0JBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxFQUFFLElBQUksd0JBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsS0FBSyxFQUFFLElBQUksd0JBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDakMsTUFBTSxFQUFFLElBQUksd0JBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxFQUFFLElBQUksd0JBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNyQyxDQUFBO1FBQ0wsQ0FBQztRQUVELHdCQUFJLEdBQUosVUFBSyxHQUFHLEVBQUUsRUFBYztnQkFBWiwwQkFBVTtZQUNsQixHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0FBQyxBQXBDRCxJQW9DQztJQXBDWSw4QkFBUyJ9