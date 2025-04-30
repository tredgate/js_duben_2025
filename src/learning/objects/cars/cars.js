import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6 TDI",
  "Diesel",
  "Diesel Auto"
);
const raceCar = new CarBlueprint("Růžová", "3.0 V8", "Benzín", "Závoďák");
const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");

dieselCar.logCarProperties();
dieselCar.logCarProperties();
dieselCar.logCarProperties();
raceCar.logCarProperties();
electricCar.logCarProperties();
dieselCar.repaint("Hnědá");
dieselCar.logCarProperties();
const raceCarColor = raceCar.getColor();
console.log(`Získaná barva závoďáka: ${raceCarColor}`);
