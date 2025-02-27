declare const findMin: (arr: number[]) => number;
declare const nums: number[];
declare const hasPos: (matrix: number[][]) => boolean;
declare const mat: number[][];
declare const sumTuple: (tuple: [number, number, number]) => number;
declare const numsTuple: [number, number, number];
declare enum Ball {
    Red = "Red",
    Blue = "Blue",
    Green = "Green"
}
declare class Vehicle {
    brand: string;
    year: number;
    info(): string;
}
declare class Car1 extends Vehicle {
    brand: string;
    year: number;
    info(): string;
}
declare class Car2 extends Vehicle {
    brand: string;
    year: number;
    info(): string;
}
declare function printInfo<T extends Vehicle>(car: T): void;
declare const bmwCar: Car1;
declare const audiCar: Car2;
type Item = {
    name: string;
    ballType: Ball;
    wheels: number;
    speed: number;
};
declare const item: Item;
