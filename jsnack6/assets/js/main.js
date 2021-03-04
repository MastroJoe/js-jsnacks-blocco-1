// chiedo all'utente di inserire un numero
var n = parseInt(prompt("Inserisci un numero: "));

if (isNaN(numero)) {
  console.log("Ti avevo chiesto un numero!");
// stampo il cubo dei primi n numeri
  for (var i = 1; i <= n ; i++) {
    var risultato = Math.pow(i, 3);
    console.log(risultato);
  }
}
