// alcohol_eligibility.js
// složka: conditions

const actualAge = 10;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

// Složené závorky ve Win (CZ): Pravý alt + B / pravý alt + N
if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`); // ? Zpětné apostrofy: template literal
  // Alternativa string: console.log(fullName + " už může pít alkohol.")
  // Zpětný apostrof ve Win (CZ): pravý alt + ý, $: pravý alt + ů
} else if (actualAge >= 0) {
  let missingYears;
  const ageMissing = drinkingAgeLimit - actualAge;

  if (ageMissing == 1) {
    missingYears = "rok";
  } else if (ageMissing > 4) {
    missingYears = "let";
  } else {
    missingYears = "roky";
  }
  console.log(
    `${fullName} ještě nemůže pít alkohol. Je mu/jí ${actualAge} let a chybí mu/jí ještě ${
      drinkingAgeLimit - actualAge
    } ${missingYears}.`
  );
} else {
  console.error("CHYBA: aktuální věk je zadaný ve špatném formátu");
}

/*
Cvičení (zde bude časovač: ⌛10:00):
Vytvořte program, který bude vyhodnocovat, jestli má student dostatek bodů k úspěšnému ukončení studia.
Program ulož do složky: src/exercises
Název souboru: student_absolvent.js

Vstupy: 
Počet bodů studenta.
Jméno studenta.

Hodnocení:
Minimální počet bodů pro úspěch: 75

Výsledek zaloguj srozumitelně do konzole s jménem.

*/
