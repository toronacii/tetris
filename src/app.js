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
define(["require", "exports", "./engine/index", "./game"], function (require, exports, index_1, game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var canvas = new index_1.Canvas();
    var content = new index_1.Content();
    var input = new index_1.Input();
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
            input.bindKey("space", input.Keys.SPACE);
            input.bindKey("left", [input.Keys.LEFT_ARROW, input.Keys["A"]]);
            input.bindKey("up", [input.Keys.UP_ARROW, input.Keys["W"]]);
            input.bindKey("right", [input.Keys.RIGHT_ARROW, input.Keys["D"]]);
            input.bindKey("down", [input.Keys.DOWN_ARROW, input.Keys["S"]]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFHQSxJQUFJLE1BQU0sR0FBRyxJQUFJLGNBQU0sRUFBRSxDQUFDO0lBQzFCLElBQUksT0FBTyxHQUFHLElBQUksZUFBTyxFQUFFLENBQUM7SUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQUV4QjtRQUFrQix1QkFBSTtRQUtsQjtZQUFBLFlBQ0ksaUJBQU8sU0FlVjtZQW5CRCxhQUFPLEdBQUcsS0FBSyxDQUFDO1lBTVosTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDbkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFakIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLDJCQUEyQixDQUFDLENBQUM7WUFFckQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUNwRSxDQUFDO1FBRUQsa0JBQUksR0FBSjtZQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLENBQUMsTUFBTTtxQkFDTixNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGNBQU0sRUFBRSxDQUFDO2lCQUM5QjthQUNKO1FBQ0wsQ0FBQztRQUNMLFVBQUM7SUFBRCxDQUFDLEFBbkNELENBQWtCLFdBQUksR0FtQ3JCO0lBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUUzQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMifQ==