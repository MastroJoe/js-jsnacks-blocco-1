// calcolo la somma dei primi 10 numeri
var somma = 0;

for (var i = 1; i <= 10; i++) {
  var somma = somma + i;
  console.log(i);
}

console.log(somma);

// calcolo la media dei primi 10 numeri
var media = somma/10;

console.log(media);


// oppure
// var somma = 0;
//
// for (var i = 0; i < 10; i++) {
//   somma += i+1;
//   console.log(i);
// }
//
// var media = somma/i;
//
// console.log(media);
