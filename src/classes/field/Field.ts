import { CellDataInterface, Coordinates } from "types";
import { GAME_CONFIG } from "config";

export default class Field<Cell> {
    readonly field: Cell[][];
    readonly fieldSize: number;

    static isValidField(fieldData: any[][]) {
        return fieldData.every(row => row.length === fieldData.length);
    }

    constructor(fieldData: Cell[][]) {
        this.field = fieldData;
        this.fieldSize = fieldData.length;
    }

    public canProvideFieldPart(topLeftCoordinates: Coordinates): boolean {
        // too high or bottom
        if (
            topLeftCoordinates.y < 0 ||
            topLeftCoordinates.y + GAME_CONFIG.viewSize.y > this.fieldSize
        ) {
            return false;
        }
        // too right or  left
        else if (
            topLeftCoordinates.x < 0 ||
            topLeftCoordinates.x + GAME_CONFIG.viewSize.x > this.fieldSize
        ) {
            return false;
        }

        return true;
    }

    public getFieldPart(topLeftCoordinates: Coordinates): Cell[][] {
        const { x, y } = topLeftCoordinates;

        return this.field
            .slice(y, y + GAME_CONFIG.viewSize.y)
            .map(row => row.slice(x, x + GAME_CONFIG.viewSize.x));
    }
}
