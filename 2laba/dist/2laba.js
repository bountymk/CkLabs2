const findMin = (arr) => {
    return Math.min(...arr);
};
const nums = [10.5, 20.3, -5.6, 7.8];
console.log(findMin(nums));
const hasPos = (matrix) => {
    for (let row of matrix) {
        if (row.some(val => val > 0)) {
            return true;
        }
    }
    return false;
};
const mat = [
    [-1, -2, -3],
    [-4, -5, -6],
    [-7, -8, -9]
];
console.log(hasPos(mat));
const sumTuple = (tuple) => {
    return tuple[0] + tuple[1] + tuple[2];
};
const numsTuple = [8, 15, 22];
console.log(sumTuple(numsTuple));
var Ball;
(function (Ball) {
    Ball["Red"] = "Red";
    Ball["Blue"] = "Blue";
    Ball["Green"] = "Green";
})(Ball || (Ball = {}));
console.log(Ball.Blue);
class Vehicle {
    constructor() {
        this.brand = 'Unknown';
        this.year = 2000;
    }
    info() {
        return `${this.brand} - ${this.year}`;
    }
}
class Car1 extends Vehicle {
    constructor() {
        super(...arguments);
        this.brand = "BMW";
        this.year = 2020;
    }
    info() {
        return `${this.brand} - ${this.year}`;
    }
}
class Car2 extends Vehicle {
    constructor() {
        super(...arguments);
        this.brand = "Audi";
        this.year = 2018;
    }
    info() {
        return `${this.brand} - ${this.year}`;
    }
}
function printInfo(car) {
    console.log(car.info());
}
const bmwCar = new Car1();
const audiCar = new Car2();
printInfo(bmwCar);
printInfo(audiCar);
const item = {
    name: "Car",
    ballType: Ball.Red,
    wheels: 4,
    speed: 180
};
console.log(JSON.stringify(item));
