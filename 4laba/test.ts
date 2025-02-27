import { Transport } from './4laba';

const owner1 = new Transport.OwnerClass(
    "Иванов",
    "Иван",
    "Иванович",
    new Date("1985-05-10"),
    Transport.DocType.Passport,
    "1234",
    "567890"
);

const car1 = new Transport.VehicleClass("Toyota", "Corolla", 2020, "1HGBH41JXMN109186", "AB123CD", owner1);
const car2 = new Transport.CarModel("BMW", "X5", 2022, "1HGBH41JXMN109188", "AB123CD", owner1, Transport.CarBody.SUV, Transport.CarClass.Luxury);
const motorbike1 = new Transport.MotorbikeModel("Harley-Davidson", "Sportster", 2021, "1HD1BWV155Z123456", "XY123ZY", owner1, Transport.FrameType.Steel, true);

car1.displayVehicleInfo();
car2.displayVehicleInfo();
motorbike1.displayVehicleInfo();



const vehicleStorage = new Transport.VehicleStorageClass<Transport.Vehicle>();
vehicleStorage.addVehicle(car1);
vehicleStorage.addVehicle(car2);

console.log(vehicleStorage.getAllVehicles());