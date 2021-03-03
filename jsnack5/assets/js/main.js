// INPUT
// chiedere 10 volte un numero e stampare la somma di tutti
var somma = 0;

for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("inserisci un numero: "));
  console.log(numero);
  somma = somma + numero;
}

console.log(somma);
