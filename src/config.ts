export interface ViewSizeInterface {
    x: number,
    y: number
}

export interface GameConfigInterface {
    viewSize: ViewSizeInterface,
    cellSize: number
}

export const GAME_CONFIG: GameConfigInterface  = {
    viewSize: {
        x: 5,
        y: 5
    },
    cellSize: 40
};
