// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
//Creo un array vuoto
let arr = [];
//dichiaro una variabile per la somma
let sum = 0;
//eseguo ciclo 
do {
    let userNumber = Number(prompt("Inserisci un numero")); //chiedo all'utente un numero
    //verifico che il dato inserito sia un numero
    if (!isNaN(userNumber)) {
        sum += userNumber; //aggiorno la somma con il numero inserito dall'utente
        if (sum < 50) { //SE la somma è < 50
            arr.push(userNumber); //aggiungo il numero inserito dall'utente nell'array
        }
    }
} while (sum < 50); //esco dal ciclo quando la somma è < 50

console.log(arr);
