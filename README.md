Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
NON USARE SPLIT E REVERSE!!! TUTTO CON CICLO FOR

Risoluzione:

Raccolta dati:
- Creiamo una variabile con la parola da controllare
- Creiamo un array vuoto dove andiamo ad inserire la parola da controllare al contrario con ciclo for
- Creiamo una variabile chiamata "palindromo" a cui assegnamo il valore "false" che useremmo per il nostro output

Risoluzione logica:
- Creiamo una funzione che attraverso un ciclo for scrive la parola al contrario nell'array vuoto e poi mi cambia sia il primo array sia il secondo in stringa lower case poi con una condizione if vediamo se la prima stringa è uguale alla seconda. Se uguale allora la variabile palindromo diventa "true"

Output:
- if(palindromo = true){
    console.log("PALINDROMO")
} else{
    console.log("Non Palindromo)
}




Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Risoluzione:
Raccolta dati:
- Creiamo varibile "userAnswareStr" che poi portiamo in lowe case
- Creiamo variabile "userNumber" (la chiediamo con promt e poi facciamo parseInt per ottenere un numero)
- Creiamo variabile "compNumber" = rollDice()
- Creiamo variabile somma tra il numero inserito e quello generato
- Creiamo variabile risultato = whoWins()

Risoluzione logica:
- Creiamo funzione "rollDice" per generare numero random da 1 a 5
- Creiamo una funzione "whoWins" dove controliamo se la somma tra i due numeri è pari o dispari con una funzione e confrontiamo il risultato della variabile con quello dell'utente

Output:
console.log(Risultato)