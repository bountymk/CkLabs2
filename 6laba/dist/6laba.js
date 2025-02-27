var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function seal(constructor) {
    Object.seal(constructor.prototype);
}
let Car = class Car {
    constructor() {
        this.price = 1000;
        this.year = 2025;
    }
    getInfo() {
        return "price: " + this.price + "; year: " + this.year;
    }
};
__decorate([
    upperCase
], Car.prototype, "getInfo", null);
Car = __decorate([
    seal
], Car);
var car = new Car();
function upperCase(target, key, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        let result = original.call(this, args);
        return result.toUpperCase();
    };
}
console.log(car.getInfo());
