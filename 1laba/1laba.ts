const func = (x: number, y: number): string => "" + x + y;
console.log(func(1, 2));

let num1: number = 1;
let str1: string = "1";
let tuple1: [number, string] = [1, 'a'];
enum Pet { Dog, Cat };
let pet1: Pet = Pet.Cat;
let isActive: boolean = true;
const numbers: number[] = [1, 2, 3, 4, 5];
let randomObj: any = new Object();
const point1: { first: number, second: string } = { first: 1, second: "" };

interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}

const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
};

console.log(JSON.stringify(data));
