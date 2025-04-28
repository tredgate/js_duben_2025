const startSignal = "green";
const nextSignal = "yellow";
let result;

switch (nextSignal) {
  case "green":
    result = "green";
    break;
  case "yellow":
    result = "yellow";
    break;
  case "red":
    result = "red";
    break;
  default:
    console.error("CHYBA: Nevalidní signál");
}

console.log(`Barva semaforu se změnila z ${startSignal} na ${result}`);
