class VehicleStorageImpl {
    constructor(vehicles) {
        this.vehicles = vehicles;
    }
    sortByBrand() {
        return this.vehicles.sort((a, b) => a.brand.localeCompare(b.brand));
    }
    filterByOwner(lastName) {
        return this.vehicles.filter(vehicle => vehicle.owner.lastName.toLowerCase() === lastName.toLowerCase());
    }
}
class VehicleImpl {
    constructor(brand, model, owner, vin, regNumber) {
        this.brand = brand;
        this.model = model;
        this.owner = owner;
        this.vin = vin;
        this.regNumber = regNumber;
    }
    getInfo() {
        return `${this.vin} ${this.owner.firstName} ${this.owner.lastName} ${this.regNumber}`;
    }
}
const owner1 = { lastName: 'Smith', firstName: 'John' };
const owner2 = { lastName: 'Doe', firstName: 'Jane' };
const car1 = new VehicleImpl('Toyota', 'Camry', owner1, '1HGBH41JXMN109186', 'AB123CD');
const car2 = new VehicleImpl('Honda', 'Accord', owner2, '2A4GR43RX5R820098', 'XY456ZT');
const car3 = new VehicleImpl('BMW', 'X5', owner1, '5UXKR8C56B0S12834', 'PQ789LM');
const storage = new VehicleStorageImpl([car1, car2, car3]);
const sortedCars = storage.sortByBrand();
console.log(sortedCars);
const filteredCars = storage.filterByOwner('Smith');
console.log(filteredCars);
const carInfo = car1.getInfo();
console.log(carInfo);
