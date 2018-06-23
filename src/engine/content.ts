var _files = {},
    _filesCount = 0,
    _loadCount = 0,
    _instance: Content;

export class Content {
    constructor() {
        _instance = this;
    }
    
    get(name: string) {
        return _files[name];
    }
    
    progress() {
        return _loadCount / _filesCount;
    }

    load(name: string, src: string = name) {
        _filesCount++;
        switch(src.split('.').pop()) {
            case "png":
            case "gif":
            case "jpg":
                let img = new Image();
                img.onload = () => {
                    _loadCount++;
                }
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
    }

    static GetInstance() {
        return _instance;
    }
}