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
            return _this;
        }
        App.prototype.tick = function () {
            if (this.hasLoad) {
                this.tetris
                    .handleInputs({})
                    .update()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFHQSxJQUFJLE1BQU0sR0FBRyxJQUFJLGNBQU0sRUFBRSxDQUFDO0lBQzFCLElBQUksT0FBTyxHQUFHLElBQUksZUFBTyxFQUFFLENBQUM7SUFFNUI7UUFBa0IsdUJBQUk7UUFLbEI7WUFBQSxZQUNJLGlCQUFPLFNBU1Y7WUFiRCxhQUFPLEdBQUcsS0FBSyxDQUFDO1lBTVosTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDbkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFakIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLDJCQUEyQixDQUFDLENBQUM7O1FBQ3pELENBQUM7UUFFRCxrQkFBSSxHQUFKO1lBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNO3FCQUNOLFlBQVksQ0FBQyxFQUFFLENBQUM7cUJBQ2hCLE1BQU0sRUFBRTtxQkFDUixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxjQUFNLEVBQUUsQ0FBQztpQkFDOUI7YUFDSjtRQUNMLENBQUM7UUFDTCxVQUFDO0lBQUQsQ0FBQyxBQTlCRCxDQUFrQixXQUFJLEdBOEJyQjtJQUVELElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFM0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDIn0=