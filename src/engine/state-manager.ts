export class StateManager {
    public tetraminos: { [key: string]: number }
    constructor() {
        this.reset(0);
    }

    reset(step: number) {
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
    }

    incrementTetramino(id) {
        this.tetraminos[id] += 1;
        this.tetraminos.TOTAL += 1;
    }
}