
// INPUT
// mail utente
var nome = prompt("Inserisci il tuo nome: ");
console.log(nome);


// array degli invitati alla festa
var invitati = ["Marco", "Carlos", "Leonardo", "Giovanni", "Antonia"];
console.log(invitati);

// scorro la lista degli invitati
var sentinella = false;

for (var i = 0; i < invitati.length; i++) {
  if (invitati[i] === nome) {
    sentinella = true;
    i = invitati.lenght;
  }
}

// stampo il risultato del controllo
var accettato = "Accesso Consentito";
var negato = "Accesso Negato";

if (sentinella) {
  console.log(accettato);
} else {
  console.log(negato);
}
