import { Canvas } from "./engine/index";

var _reqFrame: number, _isRunning: boolean;

export class Game {

    constructor() {
        this._loop = this._loop.bind(this);
    }

    stop() {
        if (_reqFrame) {
            window.cancelAnimationFrame(_reqFrame)
        }
        _reqFrame = null;
        _isRunning = false;
    }

    run() {
        if (!_isRunning) {
            _isRunning = true;
            _reqFrame = window.requestAnimationFrame(this._loop);
        }
        return this;
    }

    tick() {
        throw new Error("This function must be overrided!");
    }

    private _loop() {
        _reqFrame = window.requestAnimationFrame(this._loop);
        this.tick();
        Canvas.GetInstance().flip();
    }
}