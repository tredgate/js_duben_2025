//cars.js
//car_blueprint.js
//learning/objects/cars
export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4;
    this.addDivider();
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
    console.log("Auto je \"Připravené\" a 'Vhodné do provozu'"); // ? znak \ znamená tzv. escape sekvenci. Můžeme takto vypisovat speciální znaky, například uvozovky " do stringu a nebo mají další účely jako je například formátování kódu: \n = nový řádek, \t horizontální tabulátor
  }

  logCarProperties() {
    this.addDivider();
    console.log(
      `Informace o autě ${this.carName}: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
  }

  addDivider() {
    console.log("---------------------");
  }

  repaint(newColor) {
    this.addDivider();
    console.log(
      `Přebarvuji auto "${this.carName}" z ${this.color} na novou barvu: ${newColor}`
    );
    this.color = newColor;
  }

  getColor() {
    return this.color;
  }
}
