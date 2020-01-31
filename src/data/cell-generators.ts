import { CellDataInterface, CellType } from "../types";

export const createCell = (type: CellType) => {
    return (passable: boolean) => {
        return (color: string): CellDataInterface => ({
            type,
            passable,
            meta: { color },
        });
    };
};

const createRectCell = createCell(CellType.RECT);

const createPassableRectCell = createRectCell(true);
const createNotPassableRectCell = createRectCell(false);

export const water = createNotPassableRectCell('blue');
export const rock = createNotPassableRectCell('brown');

export const sand = createPassableRectCell('yellow');
export const grass = createPassableRectCell('green');
export const road = createPassableRectCell('grey');

