define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberFont = /** @class */ (function () {
        function NumberFont(image, y, height) {
            this.image = image;
            this.y = y;
            this.height = height;
            this.width = image.width / 10;
        }
        NumberFont.prototype.draw = function (ctx, num, x, y, padding) {
            num = num.toString();
            if (padding) {
                num = num.length >= padding ?
                    num :
                    new Array(padding - num.length + 1).join("0") + num;
            }
            for (var i = 0, n, len = num.length; i < len; i++) {
                n = parseInt(num[i]);
                ctx.drawImage(this.image, this.width * n, this.y, this.width, this.height, x, y, this.width, this.height);
                x += this.width;
            }
        };
        return NumberFont;
    }());
    exports.NumberFont = NumberFont;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZvbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJudW1iZXItZm9udC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUVJLG9CQUFtQixLQUFLLEVBQVMsQ0FBQyxFQUFTLE1BQU07WUFBOUIsVUFBSyxHQUFMLEtBQUssQ0FBQTtZQUFTLE1BQUMsR0FBRCxDQUFDLENBQUE7WUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFBO1lBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUVELHlCQUFJLEdBQUosVUFBSyxHQUE2QixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU87WUFDbEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixJQUFJLE9BQU8sRUFBRTtnQkFDVCxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQztvQkFDekIsR0FBRyxDQUFDLENBQUM7b0JBQ0wsSUFBSSxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTthQUMxRDtZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFMUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbkI7UUFDTCxDQUFDO1FBQ0wsaUJBQUM7SUFBRCxDQUFDLEFBcEJELElBb0JDO0lBcEJZLGdDQUFVIn0=