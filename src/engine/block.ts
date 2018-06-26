export const BlockIDs = {
    NONE: 0,
    I: 1,
    Z: 2,
    J: 3,
    L: 4,
    S: 5,
    O: 6,
    T: 7
}

export class Block {
    ID: number;
    solid: boolean;

    constructor(id: string | number = "none") {
        this.setType(id);
        for (let id in BlockIDs) {
            Block[id] = BlockIDs[id];
        }
    }

    setType(id: number | string) {
        this.ID = typeof id === "number" ? id : BlockIDs[id.toUpperCase()];
        this.solid = this.ID !== BlockIDs.NONE;
    }
}