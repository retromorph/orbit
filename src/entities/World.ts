import type {Planet} from "./Planet";
import {circleAndLineFromCenterIntersection, circleIntersection} from "../helpers";

export class World {
    private readonly _sizeX: number;
    private readonly _sizeY: number;
    private readonly _fps: number;
    private readonly _planets: Planet[];
    private _pause: boolean;
    private _multiplier: number;

    constructor(sizeX: number, sizeY: number, fps: number) {
        this._sizeX = sizeX;
        this._sizeY = sizeY;
        this._fps = fps;
        this._planets = [];
        this._pause = false;
        this._multiplier = 1;
    }

    addPlanet(planet: Planet) {
        this._planets.push(planet);
    }

    next() {
        if (!this._pause) {
            this._planets.forEach(planet => {
                this.planets.forEach(planet2 => {
                    console.log(circleIntersection(planet.x, planet.y, planet.size, planet2.x, planet2.y, planet2.size))
                    if (planet !== planet2 && circleIntersection(planet.x, planet.y, planet.size, planet2.x, planet2.y, planet2.size).length != 0) {
                        // planet.velocityX = (planet.mass * planet.velocityX + planet2.mass * planet2.velocityX) / (planet.mass + planet2.mass);
                        // planet2.velocityX = (planet.mass * planet.velocityX + planet2.mass * planet2.velocityX) / (planet.mass + planet2.mass);
                        // planet.velocityY = (planet.mass * planet.velocityY + planet2.mass * planet2.velocityY) / (planet.mass + planet2.mass);
                        // planet2.velocityY = (planet.mass * planet.velocityY + planet2.mass * planet2.velocityY) / (planet.mass + planet2.mass);

                        // const x = planet2.x - planet.x;
                        // const y = planet2.y - planet.y;
                        // const normalizedX = x / Math.sqrt(x ** 2 + y ** 2);
                        // const normalizedY = y / Math.sqrt(x ** 2 + y ** 2);
                        // const velocity1 = normalizedX * planet.velocityX + normalizedY * planet.velocityY;
                        // const velocity2 = normalizedX * planet2.velocityX + normalizedY * planet2.velocityY;
                        // const velocity = (planet.mass * velocity1 + planet2.mass * velocity2) / (planet.mass + planet2.mass);
                        //
                        // planet.velocityX = velocity * normalizedX;
                        // planet.velocityY = velocity * normalizedY;
                        //
                        // const [realX, realY] = circleAndLineFromCenterIntersection(planet2.x, planet2.y, planet2.size + planet.size, planet.x, planet.y)
                        // planet.x = realX;
                        // planet.y = realY;

                        planet.velocityX = -planet.velocityX;
                        planet.velocityY = -planet.velocityY;

                        console.log("collision!!!")
                        planet.next(this._planets, this._fps, this.multiplier, planet2);
                    } else {
                        planet.next(this._planets, this._fps, this.multiplier)
                    }
                })
            })
        }
    }

    togglePause(): void {
        this._pause = !this._pause;
    }

    get sizeX(): number {
        return this._sizeX;
    }

    get sizeY(): number {
        return this._sizeY;
    }

    get fps(): number {
        return this._fps;
    }

    get planets(): Planet[] {
        return this._planets;
    }

    get pause(): boolean {
        return this._pause;
    }

    get multiplier(): number {
        return this._multiplier;
    }

    set multiplier(value: number) {
        this._multiplier = value;
    }
}