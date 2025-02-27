"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let DocType;
    (function (DocType) {
        DocType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
        DocType["IDCard"] = "ID \u043A\u0430\u0440\u0442\u0430";
    })(DocType = Transport.DocType || (Transport.DocType = {}));
    class OwnerClass {
        constructor(lastName, firstName, patronymic, birthDate, docType, docSeries, docNumber) {
            this.lastName = lastName;
            this.firstName = firstName;
            this.patronymic = patronymic;
            this.birthDate = birthDate;
            this.docType = docType;
            this.docSeries = docSeries;
            this.docNumber = docNumber;
        }
        displayOwnerInfo() {
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
    Transport.OwnerClass = OwnerClass;
    class VehicleClass {
        constructor(brand, model, year, vin, regNumber, owner) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.regNumber = regNumber;
            this.owner = owner;
        }
        displayVehicleInfo() {
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
    Transport.VehicleClass = VehicleClass;
    let CarBody;
    (function (CarBody) {
        CarBody["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        CarBody["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        CarBody["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
        CarBody["Coupe"] = "\u041A\u0443\u043F\u0435";
    })(CarBody = Transport.CarBody || (Transport.CarBody = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
        CarClass["Sports"] = "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    let FrameType;
    (function (FrameType) {
        FrameType["Steel"] = "\u0421\u0442\u0430\u043B\u044C\u043D\u0430\u044F";
        FrameType["Aluminum"] = "\u0410\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u0430\u044F";
        FrameType["Carbon"] = "\u0423\u0433\u043B\u0435\u0440\u043E\u0434\u043D\u043E\u0435 \u0432\u043E\u043B\u043E\u043A\u043D\u043E";
    })(FrameType = Transport.FrameType || (Transport.FrameType = {}));
    class CarModel {
        constructor(brand, model, year, vin, regNumber, owner, bodyType, carClass) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.regNumber = regNumber;
            this.owner = owner;
            this.bodyType = bodyType;
            this.carClass = carClass;
        }
        displayVehicleInfo() {
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
    Transport.CarModel = CarModel;
    class MotorbikeModel {
        constructor(brand, model, year, vin, regNumber, owner, frameType, isForSport) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.regNumber = regNumber;
            this.owner = owner;
            this.frameType = frameType;
            this.isForSport = isForSport;
        }
        displayVehicleInfo() {
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
    Transport.MotorbikeModel = MotorbikeModel;
    class VehicleStorageClass {
        constructor() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        getAllVehicles() {
            return this.vehicles;
        }
        addVehicle(vehicle) {
            this.vehicles.push(vehicle);
        }
    }
    Transport.VehicleStorageClass = VehicleStorageClass;
})(Transport || (exports.Transport = Transport = {}));
