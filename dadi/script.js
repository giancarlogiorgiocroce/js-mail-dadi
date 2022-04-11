/*
    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


const estrattore = document.querySelector('button');
console.log(estrattore);

estrattore.addEventListener('click', function(){

    let dadoGiocatore = Math.floor(Math.random() * 6 + 1);
    console.log('questo è il dado giocatore',dadoGiocatore);

    let dadoBot = Math.floor(Math.random() * 6 + 1);
    console.log('questo è il dado del bot', dadoBot);

});
