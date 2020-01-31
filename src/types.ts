export interface Coordinates {
    x: number;
    y: number;
}

export enum CellType {
    RECT = "RECT",
    TILE = "TILE",
}

export enum Direction {
    UP = "UP",
    RIGHT = "RIGHT",
    DOWN = "DOWN",
    LEFT = "LEFT",
}

export interface CellDataInterface {
    type: CellType;
    meta: {
        color: string;
    };
    passable: boolean;
}
