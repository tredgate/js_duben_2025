// * DONE: vytvořte 2 pole: movieNames, movieRatings, každé pole bude mít 5 položek, 1. pole movieNames bude pole stringů, 2. movieRatings bude pole number. V hodnocení budou alespoň 2 filmy nad 8 a 2 filmy pod 8 hodnocení. Můžete používat desetinná čísla, oddělovač je tečka (9.5)

const movieNames = [
  "Gladiator",
  "Hunger Games",
  "Forest Gump",
  "Kameňák",
  "Blbý a blbější",
];
const moviesRatings = [7.5, 6.4, 7.8, 2.5, 7.9];
const recommendedMovies = [];

// * DONE: udělejte standardní for, který bude mít podmínku dle velikosti MovieNames a vypíše movieName a rating do konzole ve formátu: Film: movieName, Hodnocení: movieRatings

for (let i = 0; i < movieNames.length; i++) {
  let recommend;
  if (moviesRatings[i] >= 8) {
    recommend = "Doporučeno";
    recommendedMovies.push(movieNames[i]);
  } else {
    recommend = "Odpad!";
  }
  console.log(
    `Film: ${movieNames[i]}, \n\tHodnocení: ${moviesRatings[i]}\n\tNázor odborníka: ${recommend}`
  );
}

console.log("\nDoporučené filmy:");
if (recommendedMovies.length != 0) {
  recommendedMovies.forEach((movie) => {
    console.log(movie);
  });
} else {
  console.log("Žádné doporučené filmy");
}
