// creo array vuoto
var arrayVuoto = [];

//chiedo sei volte di inserire un numero
for (var i = 0; i < 6; i++) {
  var numero = prompt("Inserisci un numero: ");
  // se il numero inserito è dispari
  if (numero%2) {
    // lo inserisce nell'Array
    arrayVuoto.push(numero);
  }
}

console.log(arrayVuoto);
