define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BlockIDs = {
        NONE: 0,
        I: 1,
        Z: 2,
        J: 3,
        L: 4,
        S: 5,
        O: 6,
        T: 7
    };
    var Block = /** @class */ (function () {
        function Block(id) {
            if (id === void 0) { id = "none"; }
            this.setType(id);
            for (var id_1 in exports.BlockIDs) {
                Block[id_1] = exports.BlockIDs[id_1];
            }
        }
        Block.prototype.setType = function (id) {
            this.ID = typeof id === "number" ? id : exports.BlockIDs[id.toUpperCase()];
            this.solid = this.ID !== exports.BlockIDs.NONE;
        };
        return Block;
    }());
    exports.Block = Block;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJibG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBYSxRQUFBLFFBQVEsR0FBRztRQUNwQixJQUFJLEVBQUUsQ0FBQztRQUNQLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsRUFBRSxDQUFDO0tBQ1AsQ0FBQTtJQUVEO1FBSUksZUFBWSxFQUE0QjtZQUE1QixtQkFBQSxFQUFBLFdBQTRCO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakIsS0FBSyxJQUFJLElBQUUsSUFBSSxnQkFBUSxFQUFFO2dCQUNyQixLQUFLLENBQUMsSUFBRSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxJQUFFLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUM7UUFFRCx1QkFBTyxHQUFQLFVBQVEsRUFBbUI7WUFDdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssZ0JBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0MsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQUFDLEFBZkQsSUFlQztJQWZZLHNCQUFLIn0=