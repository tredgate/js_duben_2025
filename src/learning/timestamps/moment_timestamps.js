//moment_timestamps.js

import moment from "moment";

// Vytvoření aktuální časové značky
const currentTimestamp = moment();
console.log(`Aktuální časová značka: ${currentTimestamp}`);

// Formátování časové značky do podoby "YYYY-MM-DD HH:mm:ss" - to je například: "2021-09-01 12:00:00"
const formattedTimestamp = currentTimestamp.format("YYYY-MM-DD HH:mm:ss");
console.log("CZ format " + moment().format("DD. M. YYYY HH:mm"));
console.log(`Formátovaná časová značka: ${formattedTimestamp}`);

// Přidání 5 dní k aktuální časové značce
const futureTimestamp = currentTimestamp.add(5, "days").format("DD.MM.YYYY");
console.log(`Časová značka za 5 dní: ${futureTimestamp}`);

// Odebrání 5 dní od aktuální časové značky
const pastTimestamp = currentTimestamp.subtract(5, "days");
console.log(`Časová značka před 5 dny: ${pastTimestamp}`);

// Jen časová značka bez data
const timeOnly = moment().format("HH:mm:ss");
console.log(`Jen čas: ${timeOnly}`);

// Jen datum bez časové značky
const dateOnly = moment().format("YYYY-MM-DD");
console.log(`Jen datum: ${dateOnly}`);

// České datum a čas
const czechDateTime = moment().locale("cs").format("LLLL");
console.log(`České datum a čas: ${czechDateTime}`);

// ISO 8601 formát
const isoTimestamp = moment().toISOString();
console.log(`ISO 8601 formát: ${isoTimestamp}`);
