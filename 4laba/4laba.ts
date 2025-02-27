export namespace Transport {
    export enum DocType {
        Passport = "Паспорт",
        DriverLicense = "Водительское удостоверение",
        IDCard = "ID карта"
    }

    export interface Owner {
        lastName: string;
        firstName: string;
        patronymic: string;
        birthDate: Date;
        docType: DocType;
        docSeries: string;
        docNumber: string;
        displayOwnerInfo(): void;
    }

    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        regNumber: string;
        owner: Owner;
        displayVehicleInfo(): void;
    }

    export class OwnerClass implements Owner {
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

    export class VehicleClass implements Vehicle {
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

    export enum CarBody {
        Sedan = "Седан",
        Hatchback = "Хэтчбек",
        SUV = "Внедорожник",
        Coupe = "Купе"
    }

    export enum CarClass {
        Economy = "Эконом",
        Luxury = "Люкс",
        Sports = "Спортивный"
    }

    export enum FrameType {
        Steel = "Стальная",
        Aluminum = "Алюминиевая",
        Carbon = "Углеродное волокно"
    }

    export interface Car extends Vehicle {
        bodyType: CarBody;
        carClass: CarClass;
        displayVehicleInfo(): void;
    }

    export interface Motorbike extends Vehicle {
        frameType: FrameType;
        isForSport: boolean;
        displayVehicleInfo(): void;
    }

    export class CarModel implements Car {
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

    export class MotorbikeModel implements Motorbike {
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

    export interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];

        getAllVehicles(): T[];
    }

    export class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
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
}
