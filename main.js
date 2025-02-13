
//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

/*
const numero1 = prompt("digita un numero");
const numero2 = prompt("digita un numero");
if (numero1 > numero2) {
    console.log(numero1);
} else {
    console.log(numero2);
}
*/



//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

/*
const firstname = prompt("Digita il primo nome")
const secondname = prompt("Digita il secondo nome")
if (firstname.length < secondname.length) {
    console.log(firstname, secondname);

} else if (secondname.length < firstname.length) {
    console.log(secondname, firstname);
}
*/



//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

/*
const firstnumber = Number(prompt("tipe a number"));
const secondnumber = Number(prompt("tipe a number"));
const thirdnumber = Number(prompt("tipe a number"));
const fourthnumber = Number(prompt("tipe a number"));
const fifthnumber = Number(prompt("tipe a number"));
const sixthnumber = Number(prompt("tipe a number"));
const seventhnumber = Number(prompt("tipe a number"));
const eighthnumber = Number(prompt("tipe a number"));
const ninthnumber = Number(prompt("tipe a number"));
const tenthnumber = Number(prompt("tipe a number"));
console.log(firstnumber + secondnumber + thirdnumber + fourthnumber +
    fifthnumber + sixthnumber + seventhnumber + eighthnumber + ninthnumber + tenthnumber);
*/

// Correzione

/*
let sum = 0;

for (let index = 0; index < 10; index++) {
    const userNumber = Number(prompt("tipe a number"));
    console.log(userNumber);
    sum += userNumber

}

console.log(sum);
*/



//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

let arrayVuota = []

for (let index = 0; index < 6; index++) {
    const userNumber = Number(prompt("inserisci un numero"));
    if (userNumber % 2 !== 0) {
        console.log(userNumber);
    }


}