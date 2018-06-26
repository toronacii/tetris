const ShapeDefinition = {
    L: ["001", "111", "000"].join(""),
    I: ["0000", "1111", "0000", "0000"].join(""),
    T: ["010", "111", "000"].join(""),
    S: ["011", "110", "000"].join(""),
    Z: ["110", "011", "000"].join(""),
    O: ["011", "011", "000"].join(""),
    J: ["100", "111", "000"].join("")
}

export class Tetramino {
    private _shapes : any[][][] = [];
    rotation = 0;
    ID: string;

    constructor(id: string, public x: number = 0, public y: number = 0) {
        this.ID = id.toUpperCase();
        let shape = ShapeDefinition[this.ID];
        
        let s = [], n = Math.sqrt(shape.length);

        for (let i = 0; i < n; i++) {
            s[i] = [];
            for (let j = 0; j < n; j++) {
                s[i][j] = parseInt(shape[j + i*n])
            }
        }
        this._shapes.push(s);

        let r = 3, t;
        while (this.ID !== "O" && r-- !== 0) {
           t = [];
           for (let i = 0; i < n; i++) {
                t[i] = [];
                for (let j = 0; j < n; j++) {
                    t[i][j] = s[n - j - 1][i];
                }
            }
            s = t.slice(0);
            this._shapes.push(s);
        }
    }

    setTo(control: any[][], id: string | number = this.ID) {
        let shape = this._shapes[this.rotation];
        
        shape.forEach((_, i) => _.forEach((__, j) => {
            if (shape[j][i]) {
                control[this.x + i][this.y + j].setType(id);
            }
        }))
    }

    check(control: any[][], dx = 0, dy = 0, dr = null) {
        dr = dr ? this.getRotation(dr) : this.rotation;
        
        let x = this.x + dx,
            y = this.y + dy,
            w = control.length,
            h = control[0].length,
            shape = this._shapes[dr];

        shape.forEach((_, i) => _.forEach((__, j) => {
            if (shape[j][i]) {
                if (!(0 <= x + i && x + i < w && 0 <= y + j && y + j < h) ||
                    control[x + i][y + j].solid
                ) {
                    return false
                }
            }
        }));

        return true;
    }

    toString() {
        let str = "";
        for (let i = 0; i < this._shapes.length; i++) {
            str += "\n";
            let _shape = this._shapes[i];
            for (let j = 0; j < _shape.length; j++) {
                for (let k = 0; k < _shape[j].length; k++) {
                    str += _shape[j][k] ? "#" : ".";
                }
                str += "\n";
            }
        }
        return str;
    }

    private getRotation(dr) {
        let r = this.rotation;

        if (dr > 0) {
            return (r + 1) % this._shapes.length;
        }
        
        return r - 1 >= 0 ? r -1 : this._shapes.length - 1 
    }
}

export enum TetraminoType {
    L = "L",
    I = "I",
    T = "L",
    S = "S",
    Z = "Z",
    O = "O",
    J = "J"
}