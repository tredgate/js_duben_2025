const actualPoints = 75;
const pointsToSuccess = 75;
const studentName = "Denis Drzý";

if (actualPoints >= pointsToSuccess) {
  console.log(
    `Student/ka ${studentName} prospěl/a s ${actualPoints}, minimum bylo: ${pointsToSuccess} bodů`
  );
} else {
  console.log(
    `Student/ka ${studentName} neprospěl/a s ${actualPoints} body, chybělo mu/jí ${
      pointsToSuccess - actualPoints
    } bodů.`
  );
}
