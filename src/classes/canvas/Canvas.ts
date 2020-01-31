import { GAME_CONFIG } from 'config';
import { CellDataInterface, CellType, Coordinates } from 'types';

export default class Canvas {
    readonly canvas: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;

    constructor(id: string) {
        this.canvas = document.getElementById(id) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');

        this.adjustCanvasSize();
    }

    private adjustCanvasSize(): void {
        this.canvas.height = GAME_CONFIG.cellSize * GAME_CONFIG.viewSize.y;
        this.canvas.width = GAME_CONFIG.cellSize * GAME_CONFIG.viewSize.x;
    }

    renderRect(coordinates: Coordinates, color: string): void {
        this.ctx.beginPath();
        this.ctx.rect(
            coordinates.x * GAME_CONFIG.cellSize,
            coordinates.y * GAME_CONFIG.cellSize,
            GAME_CONFIG.cellSize,
            GAME_CONFIG.cellSize
        );
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    renderCell(coordinates: Coordinates, cell: CellDataInterface): void {
        if (cell.type === CellType.RECT) {
            this.renderRect(coordinates, cell.meta.color);
        } else if (cell.type === CellType.TILE) {
            // draw tile
        }
    }

    renderCellsMatrix(fieldPart: CellDataInterface[][]): void {
        fieldPart.forEach((row, y) => {
            row.forEach((cell, x) => {
                this.renderCell({ x, y }, cell);
            });
        });
    }

    renderPlayer(coordinates: Coordinates): void {}
}
