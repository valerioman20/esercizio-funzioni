
/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* let x = 10
let y = 1
function crazySum (result) {
    if (x != y) {
    let result = x+y
    return result 
} else if (x === y) {
    let result =(x+y)*3 
    return result
}
}
console.log(crazySum(x,y)); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* let numero = 400
let risultato = true 
function boundary(){
if ((numero >= 20 && numero <100) || (numero == 400))  {
    console.log(true);
} else {
    console.log(false);
}
}
boundary() */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* let nome = "EPICODE"
function reverseString() {
    let nuovoNome = nome.replace("EPICODE", "EDOCIPE")
    return nuovoNome
}
console.log(reverseString()); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* function giveMeRandom(n) {
    let randomNumberArr = [];
    for (let i = 0; i < n; i++) {
        let randomNum = Math.floor(Math.random() * 10); // genera un numero random tra 0 e 10
        randomNumberArr.push(randomNum); // aggiunge il numero generato all'array
    }
    return randomNumberArr;
    
}
console.log(giveMeRandom(2)) */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* function area (l1,l2) {
    let area = l1 * l2
    return area
}
console.log(area(3,5)); */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* function crazyDiff (n1,n2) {
  let differenzaAssoluta = Math.abs(n1-n2) 
    if (differenzaAssoluta > 19) {
        return differenzaAssoluta *3
        } else {
            return differenzaAssoluta
        }
}
console.log(crazyDiff(50,19)); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*let stringa1 = "codeRandom"
let stringa2 = "Esempio"
function codify(stringa) {
    if (stringa.startsWith("code")) {
        return stringa;
    } else {
        return "code" + stringa;
    }
}

console.log(codify(stringa2));*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* function check3and7(number) {
   if (number % 3 === 0 || number % 7 === 0) {
    return true;
   } else { 
    return false;
}
}
console.log(check3and7(10));*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

