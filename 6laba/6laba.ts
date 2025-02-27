function seal(constructor: Function) {
    Object.seal(constructor.prototype);
  }
  
  @seal
  class Car {
    price: number = 1000;
    year: number = 2025;
  
    @upperCase
    getInfo(): string {
      return "price: " + this.price + "; year: " + this.year;
    }
  }
  
  var car = new Car();
  
  function upperCase(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
      let result = original.call(this, args);
      return result.toUpperCase();
    };
  }
  
  console.log(car.getInfo());
  
  