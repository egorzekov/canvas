import Camera from './Camera';
import { Direction } from 'types';

jest.mock('config', () => ({
    GAME_CONFIG: {
        viewSize: {
            x: 3,
            y: 3,
        },
    },
}));

const initialCoordinates = { x: 2, y: 2 };
const camera = new Camera(initialCoordinates);

describe('Camera', () => {
    it('should validate view sizes', () => {
        expect(Camera.validateIfViewSizesAreOdd({ x: 5, y: 5 })).toBeTruthy();

        expect(Camera.validateIfViewSizesAreOdd({ x: 6, y: 5 })).toBeFalsy();
        expect(Camera.validateIfViewSizesAreOdd({ x: 6, y: 6 })).toBeFalsy();
    });

    it('should return valid center coordinates', () => {
        expect(camera.getCenterCoordinates()).toStrictEqual({
            x: 4,
            y: 4,
        });
    });

    it('should return valid coordinates', () => {
        expect(camera.getCurrentCoordinates()).toStrictEqual(
            initialCoordinates
        );
    });

    it('should get coordinates for and after move UP', () => {
        const next = { x: 2, y: 1 };

        expect(camera.getCoordinatesForMovement(Direction.UP)).toStrictEqual(
            next
        );

        camera.move(Direction.UP);
        expect(camera.getCurrentCoordinates()).toStrictEqual(next);
    });

    it('should get coordinates for and after move RIGHT', () => {
        const next = { x: 3, y: 1 };

        expect(camera.getCoordinatesForMovement(Direction.RIGHT)).toStrictEqual(
            next
        );

        camera.move(Direction.RIGHT);
        expect(camera.getCurrentCoordinates()).toStrictEqual(next);
    });

    it('should get coordinates for and after move DOWN', () => {
        const next = { x: 3, y: 2 };

        expect(camera.getCoordinatesForMovement(Direction.DOWN)).toStrictEqual(
            next
        );

        camera.move(Direction.DOWN);
        expect(camera.getCurrentCoordinates()).toStrictEqual(next);
    });

    it('should get coordinates for and after move LEFT', () => {
        const next = { x: 2, y: 2 };

        expect(camera.getCoordinatesForMovement(Direction.LEFT)).toStrictEqual(
            next
        );

        camera.move(Direction.LEFT);
        expect(camera.getCurrentCoordinates()).toStrictEqual(next);
    });
});
