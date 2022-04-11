/*
    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


const estrattore = document.querySelector('button');
const dadoUno = document.querySelector('#dado-uno');
const dadoDue = document.querySelector('#dado-due');

estrattore.addEventListener('click', function(){

    let dadoGiocatore = Math.floor(Math.random() * 6 + 1);
    console.log('questo è il dado giocatore',dadoGiocatore);
    // dadoGiocatore.append(dadoUno);

    let dadoBot = Math.floor(Math.random() * 6 + 1);
    console.log('questo è il dado del bot', dadoBot);
    // dadoBot.append(dadoDue);


    if(dadoGiocatore > dadoBot){
        alert("Il giocatore ha vinto!");
    } else if (dadoGiocatore < dadoBot){
        alert("Il bot ha vinto!");
    } else {
        alert ("Wow, pareggio!");
    };

});
