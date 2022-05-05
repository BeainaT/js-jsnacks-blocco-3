//Chiedi all'utente di inserire un numero N
const userNumber = Number(prompt("Inserisci un numero"));

//Genera quindi N array
for (let i = 0; i < userNumber; i++) {
    let newArray = [] //includo costante nel ciclo che verrà generata dall'input (userNumber)
    //Ogni array è formato da 10 numeri casuali tra 1 e 100
    for ( let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1; //Genero numero random tra 1 e 100 includendo NEL CICLO la costante
        newArray.push(randomNumber)//aggiungo il numero random all'array
    }
    //stampa degli array generati
    console.log(newArray)
}

//Stampa a schermo un array ogni volta che viene generato.