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

