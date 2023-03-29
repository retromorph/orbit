export abstract class Positionable {
    private _x: number
    private _y: number
    private _velocityX: number;
    private _velocityY: number

    protected constructor(x: number, y: number, velocityX: number, velocityY: number) {
        this._x = x;
        this._y = y;
        this._velocityX = velocityX;
        this._velocityY = velocityY;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    get velocityX(): number {
        return this._velocityX;
    }

    set velocityX(value: number) {
        this._velocityX = value;
    }

    get velocityY(): number {
        return this._velocityY;
    }

    set velocityY(value: number) {
        this._velocityY = value;
    }
}