export declare namespace Transport {
    enum DocType {
        Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
        DriverLicense = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",
        IDCard = "ID \u043A\u0430\u0440\u0442\u0430"
    }
    interface Owner {
        lastName: string;
        firstName: string;
        patronymic: string;
        birthDate: Date;
        docType: DocType;
        docSeries: string;
        docNumber: string;
        displayOwnerInfo(): void;
    }
    interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        regNumber: string;
        owner: Owner;
        displayVehicleInfo(): void;
    }
    class OwnerClass implements Owner {
        lastName: string;
        firstName: string;
        patronymic: string;
        birthDate: Date;
        docType: DocType;
        docSeries: string;
        docNumber: string;
        constructor(lastName: string, firstName: string, patronymic: string, birthDate: Date, docType: DocType, docSeries: string, docNumber: string);
        displayOwnerInfo(): void;
    }
    class VehicleClass implements Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        regNumber: string;
        owner: Owner;
        constructor(brand: string, model: string, year: number, vin: string, regNumber: string, owner: Owner);
        displayVehicleInfo(): void;
    }
    enum CarBody {
        Sedan = "\u0421\u0435\u0434\u0430\u043D",
        Hatchback = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
        SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
        Coupe = "\u041A\u0443\u043F\u0435"
    }
    enum CarClass {
        Economy = "\u042D\u043A\u043E\u043D\u043E\u043C",
        Luxury = "\u041B\u044E\u043A\u0441",
        Sports = "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439"
    }
    enum FrameType {
        Steel = "\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F",
        Aluminum = "\u0410\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u0430\u044F",
        Carbon = "\u0423\u0433\u043B\u0435\u0440\u043E\u0434\u043D\u043E\u0435 \u0432\u043E\u043B\u043E\u043A\u043D\u043E"
    }
    interface Car extends Vehicle {
        bodyType: CarBody;
        carClass: CarClass;
        displayVehicleInfo(): void;
    }
    interface Motorbike extends Vehicle {
        frameType: FrameType;
        isForSport: boolean;
        displayVehicleInfo(): void;
    }
    class CarModel implements Car {
        brand: string;
        model: string;
        year: number;
        vin: string;
        regNumber: string;
        owner: Owner;
        bodyType: CarBody;
        carClass: CarClass;
        constructor(brand: string, model: string, year: number, vin: string, regNumber: string, owner: Owner, bodyType: CarBody, carClass: CarClass);
        displayVehicleInfo(): void;
    }
    class MotorbikeModel implements Motorbike {
        brand: string;
        model: string;
        year: number;
        vin: string;
        regNumber: string;
        owner: Owner;
        frameType: FrameType;
        isForSport: boolean;
        constructor(brand: string, model: string, year: number, vin: string, regNumber: string, owner: Owner, frameType: FrameType, isForSport: boolean);
        displayVehicleInfo(): void;
    }
    interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicles(): T[];
    }
    class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
        creationDate: Date;
        vehicles: T[];
        constructor();
        getAllVehicles(): T[];
        addVehicle(vehicle: T): void;
    }
}
