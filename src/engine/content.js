define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _files = {}, _filesCount = 0, _loadCount = 0, _instance;
    var Content = /** @class */ (function () {
        function Content() {
            _instance = this;
        }
        Content.prototype.get = function (name) {
            return _files[name];
        };
        Content.prototype.progress = function () {
            return _loadCount / _filesCount;
        };
        Content.prototype.load = function (name, src) {
            if (src === void 0) { src = name; }
            _filesCount++;
            switch (src.split('.').pop()) {
                case "png":
                case "gif":
                case "jpg":
                    var img = new Image();
                    img.onload = function () {
                        _loadCount++;
                    };
                    img.src = src;
                    _files[name] = img;
                    break;
                case "ogg":
                case "mp3":
                case "wav":
                    break;
                case "json":
                case "tmx":
                    break;
            }
        };
        Content.GetInstance = function () {
            return _instance;
        };
        return Content;
    }());
    exports.Content = Content;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsSUFBSSxNQUFNLEdBQUcsRUFBRSxFQUNYLFdBQVcsR0FBRyxDQUFDLEVBQ2YsVUFBVSxHQUFHLENBQUMsRUFDZCxTQUFrQixDQUFDO0lBRXZCO1FBQ0k7WUFDSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFFRCxxQkFBRyxHQUFILFVBQUksSUFBWTtZQUNaLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQ0ksT0FBTyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLENBQUM7UUFFRCxzQkFBSSxHQUFKLFVBQUssSUFBWSxFQUFFLEdBQWtCO1lBQWxCLG9CQUFBLEVBQUEsVUFBa0I7WUFDakMsV0FBVyxFQUFFLENBQUM7WUFDZCxRQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3pCLEtBQUssS0FBSyxDQUFDO2dCQUNYLEtBQUssS0FBSyxDQUFDO2dCQUNYLEtBQUssS0FBSztvQkFDTixJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUN0QixHQUFHLENBQUMsTUFBTSxHQUFHO3dCQUNULFVBQVUsRUFBRSxDQUFDO29CQUNqQixDQUFDLENBQUE7b0JBQ0QsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDbkIsTUFBTTtnQkFDVixLQUFLLEtBQUssQ0FBQztnQkFDWCxLQUFLLEtBQUssQ0FBQztnQkFDWCxLQUFLLEtBQUs7b0JBQ04sTUFBTTtnQkFDVixLQUFLLE1BQU0sQ0FBQztnQkFDWixLQUFLLEtBQUs7b0JBQ04sTUFBTTthQUNiO1FBQ0wsQ0FBQztRQUVNLG1CQUFXLEdBQWxCO1lBQ0ksT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLEFBdkNELElBdUNDO0lBdkNZLDBCQUFPIn0=