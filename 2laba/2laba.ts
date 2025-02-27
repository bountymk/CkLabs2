const findMin = (arr: number[]): number => {
    return Math.min(...arr);
};

const nums = [10.5, 20.3, -5.6, 7.8];
console.log(findMin(nums));

const hasPos = (matrix: number[][]): boolean => {
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

const sumTuple = (tuple: [number, number, number]): number => {
    return tuple[0] + tuple[1] + tuple[2];
};

const numsTuple: [number, number, number] = [8, 15, 22];
console.log(sumTuple(numsTuple));

enum Ball {
    Red = "Red",
    Blue = "Blue",
    Green = "Green"
}

console.log(Ball.Blue);

class Vehicle {
    brand: string = 'Unknown';
    year: number = 2000;
    info() {
        return `${this.brand} - ${this.year}`;
    }
}

class Car1 extends Vehicle {
    brand = "BMW";
    year = 2020;
    info() {
        return `${this.brand} - ${this.year}`;
    }
}

class Car2 extends Vehicle {
    brand = "Audi";
    year = 2018;
    info() {
        return `${this.brand} - ${this.year}`;
    }
}

function printInfo<T extends Vehicle>(car: T): void {
    console.log(car.info());
}

const bmwCar = new Car1();
const audiCar = new Car2();

printInfo(bmwCar);
printInfo(audiCar);

type Item = {
    name: string;
    ballType: Ball;
    wheels: number;
    speed: number;
};

const item: Item = {
    name: "Car",
    ballType: Ball.Red,
    wheels: 4,
    speed: 180
};

console.log(JSON.stringify(item));
