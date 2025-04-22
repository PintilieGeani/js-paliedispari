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

