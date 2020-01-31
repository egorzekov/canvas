import { CellDataInterface } from "../../types";

// For now this functionality will be inside Field class
export default class Cell {
    private data;

    constructor(data: CellDataInterface) {
        this.data = data;
    }

    getSubjectForRender() {
        return {
            type: this.data.type,
            meta: this.data.meta
        };
    }

    isPassable() {
        return this.data.passable;
    }
}