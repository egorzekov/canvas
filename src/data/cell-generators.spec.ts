import { createCell } from "./cell-generators";
import { CellType } from "../types";

describe("cell generators", () => {
    it("should create valid cell structure", () => {
        expect(createCell(CellType.RECT)(true)("green")).toStrictEqual({
            type: CellType.RECT,
            passable: true,
            meta: {
                color: "green",
            },
        });

        expect(createCell(CellType.RECT)(false)("yellow")).toStrictEqual({
            type: CellType.RECT,
            passable: false,
            meta: {
                color: "yellow",
            },
        });
    });
});
