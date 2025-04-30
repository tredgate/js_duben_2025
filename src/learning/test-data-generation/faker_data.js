//faker_data.js
//src/learning/test-data-generation
//import { faker } from "@faker-js/faker"; // Univerzální verze Faker
import { fakerCS_CZ as faker } from "@faker-js/faker"; // Česká verze Faker

// ? Dokumentace faker.js: https://fakerjs.dev/api/

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const username = faker.internet.username({
  firstName: firstName,
  lastName: lastName,
});
const email = faker.internet.email({
  firstName: firstName,
  lastName: lastName,
  provider: "seznam.cz",
});
const phone = faker.phone.number();
const maleName = faker.person.fullName({ sex: "male" });
const accountName = faker.finance.accountName();
const accountNumber = faker.finance.accountNumber();
const amount = faker.finance.amount();

console.log("Křestní jméno: " + firstName);
console.log("Příjmení: " + lastName);
console.log("Uživatelské jméno: " + username);
console.log("Email: " + email);
console.log("Phone: " + phone);
console.log("Mužské jméno: " + maleName);
console.log("Účet: " + accountName);
console.log("Číslo účtu: " + accountNumber);
console.log("Částka: " + amount);

const prefix = "+1";
const shortPhone = faker.number.int({ min: 100000, max: 999999 });
const fullPhone = prefix + shortPhone;
console.log(fullPhone);
/*
Vytvořte nová faker data ve vytvořeném souboru. 
Vygenerujte:
Jméno, pohlaví: muž
Vytvořte pro jméno údaje pro účet (pomocí fakeru):
accountName
accountNumber
amount
Údaje vypište do konzole

*/
