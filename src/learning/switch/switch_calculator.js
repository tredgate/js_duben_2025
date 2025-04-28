//switch_calculator.js
// složka: switch
const a = 2;
const b = 5;
const operation = "add";
let result;

switch (operation) {
  case "add":
    result = a + b;
    break;
  case "subtract":
    result = a - b;
    break;
  case "multiply":
    result = a * b;
    break;
  case "divide":
    result = a / b;
    break;
  default:
    console.error("CHYBA: Nevalidní operace");
}

console.log(`Výsledek operace: ${operation} je: ${result}`);

/*
Cvičení - semafor (⌛10:00):
Vytvořte nový program ve složce src/exercises, program pojmenujte: traffic_light_switch.js
Vytvořte switch switchTrafficLight, která simuluje chování semaforu.
Switch bude přijímat jeden parametr: budoucí stav semaforu ('red', 'yellow', 'green').
Podle budoucího stavu switche rozhodne a nastaví barvu semaforu (proměnná: resultLight):
green: změní na 'green'
yellow: změní na 'yellow'
red: změní na 'red'
Pokud je vstup neplatný, vrátí 'Neznámý stav'.
Výstup bude v console.log s popisem stavu.
 */
