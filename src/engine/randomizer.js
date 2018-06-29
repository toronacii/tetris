define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Randomizer = /** @class */ (function () {
        function Randomizer() {
            this._IDs = "LITSZOJ".split("");
            this._S_ID = this._IDs.indexOf("S");
            this._Z_ID = this._IDs.indexOf("Z");
            this.size = this._IDs.length;
            this.initialize();
        }
        Randomizer.prototype.initialize = function () {
            this.idx = 0;
            this.bag = [];
            for (var i = 0; i < this.size; i++) {
                this.bag.push(i);
            }
            do {
                this.shufle();
            } while (this.bag[0] === this._S_ID || this.bag[0] === this._Z_ID);
        };
        Randomizer.prototype.shufle = function (array) {
            if (array === void 0) { array = this.bag; }
            var index, temp, counter = array.length;
            while (counter > 0) {
                index = Math.round(Math.random() * --counter);
                temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }
            return array;
        };
        Randomizer.prototype.nextID = function () {
            return this._IDs[this.nextInt()];
        };
        Randomizer.prototype.nextInt = function () {
            var i = this.bag[this.idx];
            this.idx += 1;
            if (this.idx >= this.size) {
                this.idx = 0;
                this.shufle();
            }
            return i;
        };
        return Randomizer;
    }());
    exports.Randomizer = Randomizer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9taXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhbmRvbWl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFRSTtZQVBRLFNBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLFVBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixVQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsU0FBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBSzVCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRUQsK0JBQVUsR0FBVjtZQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFFZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEI7WUFDRCxHQUFHO2dCQUNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNqQixRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDdkUsQ0FBQztRQUVELDJCQUFNLEdBQU4sVUFBTyxLQUFnQjtZQUFoQixzQkFBQSxFQUFBLFFBQVEsSUFBSSxDQUFDLEdBQUc7WUFDbkIsSUFBSSxLQUFLLEVBQUUsSUFBSSxFQUNYLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBRTNCLE9BQU8sT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzlDLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDdkI7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsMkJBQU0sR0FBTjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRU8sNEJBQU8sR0FBZjtZQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ2QsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNqQjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0FBQyxBQWxERCxJQWtEQztJQWxEWSxnQ0FBVSJ9