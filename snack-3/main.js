// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const body = document.querySelector("body"); //Seleziono elemento esistente in HTML
//Creo due div
const oddBox = document.createElement("div");
const evenBox = document.createElement("div");
//ad ogni div aggiungo id e colore
oddBox.id = "red";
oddBox.style.color = "red";
evenBox.id = "green";
evenBox.style.color = "green";
//aggiungo i nuovi elementi a body
body.append(oddBox);
body.append(evenBox);
//Genero un array di numeri
const myArray = [];
for ( i = 0; i < 10; i++) {
    numbers = Math.floor(Math.random() * 10) + 1;
    myArray.push(numbers);
    // Se i numeri generati sono pari, li aggiungo a div con #green, altrimenti li aggiungo a div con #red;
    if (numbers % 2 === 0) {
        evenBox.append(numbers);
    } else {
        oddBox.append(numbers);
    }
}
console.log(myArray);



