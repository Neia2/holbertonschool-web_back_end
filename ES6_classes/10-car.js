const carSymbol = Symbol('car');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[carSymbol] = true; // Assigning the symbol for identification
  }

  cloneCar() {
    return Object.assign(
      Object.create(Object.getPrototypeOf(this)),
      {
        _brand: this._brand,
        _motor: this._motor,
        _color: this._color,
        [carSymbol]: this[carSymbol], // Copy the symbol property as well
      },
    );
  }
}
