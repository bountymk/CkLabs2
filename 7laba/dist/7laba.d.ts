interface Vehicle {
    brand: string;
    model: string;
    owner: Owner;
    vin: string;
    regNumber: string;
}
interface Owner {
    lastName: string;
    firstName: string;
}
interface VehicleStorage<T> {
    vehicles: T[];
    sortByBrand(): T[];
    filterByOwner(lastName: string): T[];
}
declare class VehicleStorageImpl implements VehicleStorage<Vehicle> {
    vehicles: Vehicle[];
    constructor(vehicles: Vehicle[]);
    sortByBrand(): Vehicle[];
    filterByOwner(lastName: string): Vehicle[];
}
declare class VehicleImpl implements Vehicle {
    brand: string;
    model: string;
    owner: Owner;
    vin: string;
    regNumber: string;
    constructor(brand: string, model: string, owner: Owner, vin: string, regNumber: string);
    getInfo(): string;
}
declare const owner1: Owner;
declare const owner2: Owner;
declare const car1: VehicleImpl;
declare const car2: VehicleImpl;
declare const car3: VehicleImpl;
declare const storage: VehicleStorageImpl;
declare const sortedCars: Vehicle[];
declare const filteredCars: Vehicle[];
declare const carInfo: string;
