import Field from './classes/field/Field';
import Canvas from './classes/canvas/Canvas';
import Camera from './classes/camera/Camera';
import { CellDataInterface, Coordinates, Direction } from 'types';
import fieldData from 'data/field';

const field = new Field<CellDataInterface>(fieldData);
const canvas = new Canvas('game');
const camera = new Camera({ x: 0, y: 0 });

const render = (nextCameraCoordinates: Coordinates) => {
    const fieldPart = field.getFieldPart(nextCameraCoordinates);
    canvas.renderCellsMatrix(fieldPart);
};

setTimeout(() => {
    document.getElementById('game').style.opacity = 0;
    document.getElementById('game').style.transition = 'opacity 1500ms ease';
}, 2000)

render(camera.getCurrentCoordinates());

document.addEventListener('keyup', (event: KeyboardEvent) => {
    let direction: Direction | null = null;

    if (event.keyCode == 38) {
        // up arrow
        direction = Direction.UP;
    } else if (event.keyCode == 40) {
        // down arrow
        direction = Direction.DOWN;
    } else if (event.keyCode == 37) {
        // left arrow
        direction = Direction.LEFT;
    } else if (event.keyCode == 39) {
        // right
        direction = Direction.RIGHT;
    }

    const nextCoordinates = camera.getCoordinatesForMovement(direction);

    if (nextCoordinates && field.canProvideFieldPart(nextCoordinates)) {
        render(nextCoordinates);
        camera.move(direction);
    }
});
