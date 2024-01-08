// chiedo all'utente il suo nome
const name = prompt("Qualè il tuo nome?");
console.log (name);

// chiedo all'utente il suo cognnome
const surname = prompt("Qualè il tuo cognome?");
console.log (surname);

// chiedo all'utente il suo colore preferito
const color = prompt("Qualè il tuo colore preferito?");
console.log (color);

// aggiungo alla password il numero 23
let password = name + surname + color + "23";
console.log (password);


// la password che visualizza l'utente
alert ("La tua password è " + password);