var _fw, _fh, _vw, _vh, _scale, _instance;

export class Canvas {
    frame: HTMLCanvasElement;
    view: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    private _scale: number;
    private _fCtx: CanvasRenderingContext2D;

    get width() {
        return _vw;
    }

    set width(w: number) {
        this.view.width = w;
        this._scale = _scale;
    }

    get height() {
        return _vh;
    }

    set height(h: number) {
        this.view.height = h;
        this._scale = _scale;
    }

    get scale() {
        return _scale;
    }

    set scale(s: number) {
        this._scale = s;
        _vw = this.view.width;
        _vh = this.view.height;
        _fw = this.frame.width = _vw * s;
        _fh = this.frame.height = _vh * s;

        this._fCtx.imageSmoothingEnabled = false;
        this._fCtx.oImageSmoothingEnabled = false;
        this._fCtx.webkitImageSmoothingEnabled = false;
        this._fCtx.mozImageSmoothingEnabled = false;
    }

    constructor() {
        this.frame = document.getElementsByTagName("canvas")[0];
        this.view = document.createElement("canvas");
        this.ctx = this.view.getContext("2d");
        this._scale = 1;

        this._fCtx = this.frame.getContext("2d");
        _fw = _fh = _vw = _vh = _scale = 1;

        _instance = this;
    }

    flip() {
        this._fCtx.clearRect(0, 0, _fw, _fh);
        this._fCtx.drawImage(this.view, 0, 0, _fw, _fh);

        this.ctx.clearRect(0, 0, _vw, _vh);
    }

    static GetInstance() {
        return _instance;
    }
}