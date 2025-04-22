// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// NON USARE SPLIT E REVERSE!!! TUTTO CON CICLO FOR

// Risoluzione:
// Raccolta dati:
// const parola = prompt("Dimmi una parola e di dirò se è un plindromo")
const parola = "otto"
const contrario = []
let palindromo = false
const result = isPalindromo(parola, contrario)
// Risoluzione logica

function isPalindromo(parolaStr, contrarioArr){
    // console.log(parolaStr)
    for(let i = parolaStr.length - 1; i >= 0 ; i--){
        let curLetter = parolaStr[i]
        // console.log(curLetter)
        contrarioArr.push(curLetter)
        // console.log(contrarioArr)
    }
    let contrarioStr = contrarioArr.join("")
    // console.log(contrarioStr);
    if(parolaStr === contrarioStr){
        palindromo = true
    }
    return palindromo
}
// console.log(result)

// Output
if(result === true){
    console.log("PALINDROMO!!!")
}else {
    console.log("Non Palindromo")
}

console.log("- - - - - - - - - - - -")


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Risoluzione:
// Raccolta dati:
const userAnswareProm = "pari"
const userAnsware = userAnswareProm.toLowerCase()
const userNumberStr = 3
const userNumber = parseInt(userNumberStr)
const CompNumber =  rollDice()
const somma = userNumber + CompNumber
const risultato = whoWin(somma)

// Risoluzione logica
function rollDice(){
    return Math.floor(Math.random() * 5) + 1
}
console.log(CompNumber)

function whoWin(laSomma){
    if(laSomma % 2 === 0){
        numero = "pari"
    }else{
        numero = "dispari"
    }
    if(numero === userAnsware){
        vincitore = "Vince il giocatore"
    }else{
        vincitore = "Vince il Computer"
    }
    return vincitore
}

// Output

console.log(risultato)

