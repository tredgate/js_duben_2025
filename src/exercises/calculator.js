function add(a, b) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
}

function subtract(a, b) {
  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
}

function multiply(a, b) {
  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
}

const divide = (a, b) => {
  if (b == 0) {
    console.error("CHYBA: nelze dělit nulou!");
    return;
  }
  const result = a / b;
  console.log(`${a} / ${b} = ${result}`);
};

add(15, 48);
subtract(98, 41);
multiply(54, 30);
divide(88, 0);

console.log("0.1 * 0.2 by mělo být 0.02: " + 0.1 * 0.2);
