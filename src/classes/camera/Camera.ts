import { Coordinates, Direction } from 'types';
import { GAME_CONFIG, ViewSizeInterface } from 'config';

export { Direction };

export default class Camera {
    private x: number;
    private y: number;

    static validateIfViewSizesAreOdd(viewSize: ViewSizeInterface): boolean {
        return viewSize.x % 2 === 1 && viewSize.y % 2 === 1;
    }

    constructor(coordinates: Coordinates) {
        this.x = coordinates.x;
        this.y = coordinates.y;
    }

    getCenterCoordinates = (): Coordinates => {
        return {
            x: this.x + Math.ceil(GAME_CONFIG.viewSize.x / 2),
            y: this.y + Math.ceil(GAME_CONFIG.viewSize.y / 2),
        };
    };

    getCurrentCoordinates = (): Coordinates => {
        return { x: this.x, y: this.y };
    };

    private getCoordinatesForMoveUp = (): Coordinates => {
        return { x: this.x, y: this.y - 1 };
    };

    private moveUp = (): void => {
        this.y--;
    };

    private getCoordinatesForMoveRight = (): Coordinates => {
        return { x: this.x + 1, y: this.y };
    };

    private moveRight = (): void => {
        this.x++;
    };

    private getCoordinatesForMoveDown = (): Coordinates => {
        return { x: this.x, y: this.y + 1 };
    };

    private moveDown = (): void => {
        this.y++;
    };

    private getCoordinatesForMoveLeft = (): Coordinates => {
        return { x: this.x - 1, y: this.y };
    };

    private moveLeft = (): void => {
        this.x--;
    };

    private readonly getCoordinatesForMovementMap = {
        [Direction.UP]: this.getCoordinatesForMoveUp,
        [Direction.RIGHT]: this.getCoordinatesForMoveRight,
        [Direction.DOWN]: this.getCoordinatesForMoveDown,
        [Direction.LEFT]: this.getCoordinatesForMoveLeft,
    };

    getCoordinatesForMovement = (
        direction: Direction | null
    ): Coordinates | null => {
        if (!direction) {
            return null;
        }

        return this.getCoordinatesForMovementMap[direction]();
    };

    private readonly changeCoordinatesForMovementMap = {
        [Direction.UP]: this.moveUp,
        [Direction.RIGHT]: this.moveRight,
        [Direction.DOWN]: this.moveDown,
        [Direction.LEFT]: this.moveLeft,
    };

    move = (direction: Direction): void => {
        this.changeCoordinatesForMovementMap[direction]();
    };
}
