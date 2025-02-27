declare const func: (a: number, b: number) => string;
declare let a: number;
declare let b: string;
declare let c: [number, string];
declare enum Pet {
    Dog = 0,
    Cat = 1
}
declare let d: Pet;
declare let e: boolean;
declare const f: number[];
declare let g: any;
declare const h: {
    first: number;
    second: string;
};
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
declare const data: ToJsonStringify;
