export class Randomizer {
    private _IDs = "LITSZOJ".split("");
    private _S_ID = this._IDs.indexOf("S");
    private _Z_ID = this._IDs.indexOf("Z");
    private size = this._IDs.length;
    private idx: number;
    private bag: number[]

    constructor() {
        this.initialize();
    }

    initialize() {
        this.idx = 0;
        this.bag = [];

        for (let i = 0; i < this.size; i++) {
            this.bag.push(i);
        }
        do {
            this.shufle();
        } while (this.bag[0] === this._S_ID || this.bag[0] === this._Z_ID);
    }

    shufle(array = this.bag) {
        let index, temp,
            counter = array.length;

        while (counter > 0) {
            index = Math.round(Math.random() * --counter);
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    nextID() {
        return this._IDs[this.nextInt()];
    }
    
    private nextInt() {
        let i = this.bag[this.idx];
        this.idx += 1;
        if (this.idx >= this.size) {
            this.idx = 0;
            this.shufle();
        }
        return i;
    }
}