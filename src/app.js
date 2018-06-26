var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./engine/index", "./game", "./engine/input"], function (require, exports, index_1, game_1, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var canvas = new index_1.Canvas();
    var content = new index_1.Content();
    var input = new input_1.Input();
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App() {
            var _this = _super.call(this) || this;
            _this.hasLoad = false;
            canvas.width = 480;
            canvas.height = 272;
            canvas.scale = 1;
            content.load("back", "assets/images/back.png");
            content.load("blocks", "assets/images/blocks.png");
            content.load("numbers", "assets/images/numbers.png");
            input.bindKey("space", input_1.KEYS.SPACE);
            input.bindKey("left", [input_1.KEYS.LEFT_ARROW, input_1.KEYS.A]);
            input.bindKey("up", [input_1.KEYS.UP_ARROW, input_1.KEYS.W]);
            input.bindKey("right", [input_1.KEYS.RIGHT_ARROW, input_1.KEYS.D]);
            input.bindKey("down", [input_1.KEYS.DOWN_ARROW, input_1.KEYS.S]);
            return _this;
        }
        App.prototype.tick = function () {
            if (this.hasLoad) {
                this.tetris
                    .update(input)
                    .draw(canvas.ctx);
            }
            else {
                this.hasLoad = content.progress() === 1;
                if (this.hasLoad) {
                    this.tetris = new index_1.Tetris();
                }
            }
        };
        return App;
    }(game_1.Game));
    var game = new App().run();
    window.onblur = game.stop.bind(game);
    window.onfocus = game.run.bind(game);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFJQSxJQUFJLE1BQU0sR0FBRyxJQUFJLGNBQU0sRUFBRSxDQUFDO0lBQzFCLElBQUksT0FBTyxHQUFHLElBQUksZUFBTyxFQUFFLENBQUM7SUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQUV4QjtRQUFrQix1QkFBSTtRQUtsQjtZQUFBLFlBQ0ksaUJBQU8sU0FlVjtZQW5CRCxhQUFPLEdBQUcsS0FBSyxDQUFDO1lBTVosTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDbkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFakIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLDJCQUEyQixDQUFDLENBQUM7WUFFckQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsWUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLFlBQUksQ0FBQyxRQUFRLEVBQUUsWUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxZQUFJLENBQUMsV0FBVyxFQUFFLFlBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsWUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFDckQsQ0FBQztRQUVELGtCQUFJLEdBQUo7WUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU07cUJBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxjQUFNLEVBQUUsQ0FBQztpQkFDOUI7YUFDSjtRQUNMLENBQUM7UUFDTCxVQUFDO0lBQUQsQ0FBQyxBQW5DRCxDQUFrQixXQUFJLEdBbUNyQjtJQUVELElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFM0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDIn0=