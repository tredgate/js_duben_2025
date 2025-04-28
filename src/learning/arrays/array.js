// array.js
// arrays
const cities = ["Praha", "Ostrava", "Brno", "České Budějovice"];

console.log(cities);
console.log("Výpis 2. člena cities: " + cities[1]);

// ? Přidání města do cities
cities.push("Prostějov");
cities.push("Vítkovice");
console.log(cities);

// ? Procyklíme všechny hodnoty cities
for (let i = 0; i < cities.length; i++) {
  console.log(`cities[${i}] je ${cities[i]}`);
}
