import {Positionable} from "./Positionable";

export class Planet extends Positionable {
    private _size: number;
    private _mass: number;
    private readonly _debug: boolean;

    constructor(x: number, y: number, size: number, velocityX: number = 0, velocityY: number = 0, debug = false) {
        super(x, y, velocityX, velocityY);
        this._size = size;
        this._mass = 4 / 3 * Math.PI * (size ** 3);
        this._debug = debug;
    }

    next(planets: Planet[], fps: number, multiplier: number, collision: Planet = null) {
        // if (this._debug) {
        //     console.log(`(${this.x}, ${this.y}): ${this.velocityX} ${this.velocityY} ${Math.sqrt(this.velocityX ** 2 + this.velocityY ** 2)}`)
        // }

        let aX = 0
        let aY = 0
        planets.forEach(planet => {
            if (planet === collision) {
                console.log(`${this._size} ${collision.size}`)
            } else if (planet != this) {
                console.log(`${this._size} _`)
                // console.log(`${this.size} ${planet} ${collision}`)
                const rX = planet.x - this.x
                const rY = planet.y - this.y
                const norm = Math.sqrt(rX ** 2 + rY ** 2)
                const normRX = rX / norm
                const normRY = rY / norm

                const a = planet._mass / (rX ** 2 + rY ** 2)
                aX += a * normRX
                aY += a * normRY
            }
        })
        console.log('---------')

        this.velocityX += aX * multiplier / fps
        this.velocityY += aY * multiplier / fps

        this.x += this.velocityX * multiplier / fps
        this.y += this.velocityY * multiplier / fps
    }

    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }

    get mass(): number {
        return this._mass;
    }

    set mass(value: number) {
        this._mass = value;
    }
}