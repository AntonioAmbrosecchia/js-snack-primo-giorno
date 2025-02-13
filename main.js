
//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.


const numero1 = prompt("digita un numero");
const numero2 = prompt("digita un numero");
if (numero1 > numero2) {
    console.log(numero1);
} else {
    console.log(numero2);
}


//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

const firstname = prompt("Digita il primo nome")
const secondname = prompt("Digita il secondo nome")
if (firstname.length > secondname.length) {
    console.log(firstname, secondname);

} else if (secondname.length > firstname.length) {
    console.log(secondname, firstname);

}