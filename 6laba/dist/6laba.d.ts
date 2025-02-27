declare function seal(constructor: Function): void;
declare class Car {
    price: number;
    year: number;
    getInfo(): string;
}
declare var car: Car;
declare function upperCase(target: any, key: string, descriptor: PropertyDescriptor): void;
