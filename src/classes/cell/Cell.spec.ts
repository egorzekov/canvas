import Cell from "./Cell";
import { CellDataInterface, CellType } from "../../types";

const testCellData: CellDataInterface = {
    type: CellType.RECT,
    passable: true,
    meta: {
        color: "red",
    },
};

describe("Cell", () => {
    const cell = new Cell(testCellData);

    it("should get valid subject for render", () => {
        expect(cell.getSubjectForRender()).toStrictEqual({
            type: CellType.RECT,
            meta: {
                color: "red",
            },
        });
    });

    it("should return valid 'passable' value", () => {
        expect(cell.isPassable()).toBe(true);
    });
});
