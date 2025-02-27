enum DocType {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    IDCard = "ID карта"
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
    constructor(
        public lastName: string,
        public firstName: string,
        public patronymic: string,
        public birthDate: Date,
        public docType: DocType,
        public docSeries: string,
        public docNumber: string
    ) {}

    displayOwnerInfo(): void {
        console.log(`
            Владелец:
            Фамилия: ${this.lastName}
            Имя: ${this.firstName}
            Отчество: ${this.patronymic}
            Дата рождения: ${this.birthDate.toLocaleDateString()}
            Тип документа: ${this.docType}
            Серия документа: ${this.docSeries}
            Номер документа: ${this.docNumber}
        `);
    }
}

class VehicleClass implements Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public year: number,
        public vin: string,
        public regNumber: string,
        public owner: Owner
    ) {}

    displayVehicleInfo(): void {
        console.log(`
            Транспортное средство:
            Марка: ${this.brand}
            Модель: ${this.model}
            Год выпуска: ${this.year}
            VIN-номер: ${this.vin}
            Регистрационный номер: ${this.regNumber}
        `);
    }
}

const owner1 = new OwnerClass(
    "Иванов",
    "Иван",
    "Иванович",
    new Date("1985-05-10"),
    DocType.Passport,
    "1234",
    "567890"
);

const car1 = new VehicleClass("Toyota", "Corolla", 2020, "1HGBH41JXMN109186", "AB123CD", owner1);

car1.displayVehicleInfo();
owner1.displayOwnerInfo();



enum CarBody {
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    SUV = "Внедорожник",
    Coupe = "Купе"
}

enum CarClass {
    Economy = "Эконом",
    Luxury = "Люкс",
    Sports = "Спортивный"
}

enum FrameType {
    Steel = "Стальная",
    Aluminum = "Алюминиевая",
    Carbon = "Углеродное волокно"
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
    constructor(
        public brand: string,
        public model: string,
        public year: number,
        public vin: string,
        public regNumber: string,
        public owner: Owner,
        public bodyType: CarBody,
        public carClass: CarClass
    ) {}

    displayVehicleInfo(): void {
        console.log(`
            Автомобиль:
            Марка: ${this.brand}
            Модель: ${this.model}
            Год выпуска: ${this.year}
            VIN-номер: ${this.vin}
            Регистрационный номер: ${this.regNumber}
            Тип кузова: ${this.bodyType}
            Класс автомобиля: ${this.carClass}
        `);
    }
}

class MotorbikeModel implements Motorbike {
    constructor(
        public brand: string,
        public model: string,
        public year: number,
        public vin: string,
        public regNumber: string,
        public owner: Owner,
        public frameType: FrameType,
        public isForSport: boolean
    ) {}

    displayVehicleInfo(): void {
        console.log(`
            Мотоцикл:
            Марка: ${this.brand}
            Модель: ${this.model}
            Год выпуска: ${this.year}
            VIN-номер: ${this.vin}
            Регистрационный номер: ${this.regNumber}
            Тип рамы: ${this.frameType}
            Для спорта: ${this.isForSport ? "Да" : "Нет"}
        `);
    }
}

const car2 = new CarModel("BMW", "X5", 2022, "1HGBH41JXMN109188", "AB123CD", owner1, CarBody.SUV, CarClass.Luxury);
const motorbike1 = new MotorbikeModel("Harley-Davidson", "Sportster", 2021, "1HD1BWV155Z123456", "XY123ZY", owner1, FrameType.Steel, true);

car2.displayVehicleInfo();
motorbike1.displayVehicleInfo();



interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];

    getAllVehicles(): T[];
}

class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];

    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }

    getAllVehicles(): T[] {
        return this.vehicles;
    }

    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }
}

const vehicleStorage = new VehicleStorageClass<Vehicle>();
vehicleStorage.addVehicle(car1);
vehicleStorage.addVehicle(car2);

console.log(vehicleStorage.getAllVehicles());
