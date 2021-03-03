// INPUT
// prima parola
var primaParola = prompt("Inserisci una parola:");
// seconda parola
var secondaParola = prompt("Inserisci un'altra parola:");

console.log(primaParola.length);
console.log(secondaParola.length);

// OUTPUT
// stampa la parola piu corta e poi la piu lunga
if (primaParola.length > secondaParola.lenght) {
  console.log(secondaParola, primaParola);
} else {
  console.log(primaParola, secondaParola);
}
