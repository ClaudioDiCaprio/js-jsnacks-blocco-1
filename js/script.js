// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while


//FOR

// let ask = 0;
// let add = 0;

// for (let i = 0; i < 5; i++) {
//     ask = prompt("Insert a number");
//     if(isNaN(ask)){
//         ask = prompt("Fatal error: you must insert a number");
//     }
//     add += parseInt(ask);

//     console.log(add);
// };

// alert('add is : ' + add);


//WHILE

let ask = 0;
let add = 0;


let i = 0;

while (i < 5){
    ask = prompt("Insert a number");
    if(isNaN(ask)){
        ask = prompt("Fatal error: you must insert a number");
    }
    add += parseInt(ask);
    
    i++;

    console.log(add);
};

alert('add is : ' + add);


// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
















// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
// JSnack 3
// Stampa le potenze di 2 fino a 1000.