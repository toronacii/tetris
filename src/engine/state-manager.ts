export class StateManager {
    public tetraminos: { [key: string]: number }
    public lines = 0;
    public level;

    private _firstLevel;
    private _startLevel;

    score = 0;

    constructor() {
        this.reset(0);
    }

    reset(startLevel = 0) {
        this.tetraminos = {
            L: 0,
            I: 0,
            T: 0,
            S: 0,
            Z: 0,
            O: 0,
            J: 0,
            TOTAL: 0
        }
        this._firstLevel = false;
        this._startLevel = startLevel;
        this.level = this._startLevel;
    }

    incrementTetramino(id) {
        this.tetraminos[id] += 1;
        this.tetraminos.TOTAL += 1;
    }

    addScore(score) {
        let points = [0, 40, 100, 300, 1200][score];
        this.score += (this.level + 1) * points;
    }

    checkLevelUp() {
        if (this._firstLevel) {
            if (this.lines >= (this.level + 1) * 10) {
                this.level++;
            }
        }
        else {
            if (this.lines >= (this._startLevel + 1) * 10 || 100) {
                this._firstLevel = true;
                this.level++;
            }
        }
    }
}