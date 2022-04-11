/*
    Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
    stampa un messaggio appropriato sull’esito del controllo.
*/

const mailList = [
    "leonardo.blu@gmail.com",
    "raffaello.rosso@gmail.com",
    "donatello.viola@gmail.com",
    "michelangelo.giallo@gmail.com",
];

const output = document.getElementById('output');
const button = document.querySelector('button');

let autorizzazione = false;

button.addEventListener('click', function(){

    const mailInserita = 
    // "leonardo.blu@gmail.com";
    prompt('Inserisci la tua email');

    for(let i=0; i < mailList.length; i++){

    // console.log(i);

    if(mailInserita === mailList[i]){
        autorizzazione = true;
        // console.log(autorizzazione, ", sei autorizzato");
        output.append(`Bentornato ${mailInserita}, prosegui pure`);
    }
};
})



