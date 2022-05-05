//Chiedi all'utente di inserire un numero N
const userNumber = Number(prompt("Inserisci un numero"));
let newArray = [];
let randomNumber;
//Genera quindi N array
for ( let i = 0; i < userNumber; i++ ) {
    randomNumber = Math.floor(Math.random() * 100) + 1; //Genero numero random tra 1 e 100
    newArray.push(randomNumber); //aggiungo il numero random all'array
    console.log(newArray);
}
//Ogni array è formato da 10 numeri casuali tra 1 e 100
const arrayLenght = Math.floor(Math.random() * 10) + 1;
for ( i = 0; i < arrayLenght; i++ ) {
    newArray.push(randomNumber);
}

//Stampa a schermo un array ogni volta che viene generato.
// console.log(newArray)