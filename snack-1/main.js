// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
//Crea un array vuoto
let arr = [];
//Chiedere all'utente un numero da inserire nell'array
// let userNumber = Number(prompt("Inserisci un numero"));
// arr.push(userNumber);
//dichiaro una variabile per la somma
let sum = 0;
do {
    let userNumber = Number(prompt("Inserisci un numero")); //chiedo all'utente un numero
    arr.push(userNumber); //aggiungo il numero inserito dall'utente nell'array
    sum += userNumber; //aggiorno la somma con il numero inserito dall'utente finchè somma < 50
} while (sum < 50);
console.log(sum, arr)
