//Chiedere all’utente il cognome
//inserirlo in un array con altri cognomi (ve li passo, son buono ;)): ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
//stampa la lista ordinata alfabeticamente
//scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

//chiedere cognome utente
var cognomeUtente = prompt("Inserisci il tuo cognome");
//lista cognomi ARRAY
var cognomi = ["Bianchi","Rossi","Verdi","Duzioni","Balsano"];
//while (cognomeUtente.length <= 0) {
    //var cognomeUtente = prompt ("Inserisci cognome");
//}
cognomi.push(cognomeUtente);
cognomi.sort();       //.sort() ordina alfabeticamente un array
console.log(cognomi);

//stampo la lista ordinata alfabeticamente
for (var i = 0; i < cognomi.length; i++) {
    document.getElementById("lista-cognomi").innerHTML += "<li>" + cognomi[i] + "</li>";
}

//scrivo la posizione del cognome nella lista
var posizioneCognome = (cognomi.indexOf(cognomeUtente) + 1);
document.getElementById("posizione-lista").innerHTML = "Complimenti, ti trovi alla posizione numero " + posizioneCognome;