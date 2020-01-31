import { Coordinates, Direction } from 'types';

export default class Player {
    private direction: Direction;
    private coordinates: Coordinates;

    setMovementDirection(direction: Direction) {
        this.direction = direction;
    }

    setCoordinates(coordinates: Coordinates) {
        this.coordinates = coordinates;
    }
}
