const prompt = require("prompt-sync")({singint: true});
/*npm install prompt-sync*/
//let numero = parseInt(prompt('Ingrese un numero: '));




/*Loop de pares*/

function loopDePares(num) {
    let numPar;
    for (let i = 1; i <= num; i++) {

        numPar = i + num;
        if (numPar % 2 == 0) {
            console.log('El numero ' + i + ' es par');
        } else {
            console.log(i);
        }

    }

}



/*Loop de impares*/

function loopDeImpares(num, palabra) {
    let numPar;
    for (let i = 1; i <= num; i++) {

        numPar = i + num;
        if (numPar % 2 != 0) {
            console.log(palabra);
        } else {
            console.log(i);
        }

    }

}


/*Sumatoria*/

function sumatoria(num){
    
    let suma = 0;

    for (let i = 0; i <= num; i++){
        suma += i;
    }

    console.log(suma);
}



/*nuevoArreglo*/

function nuevoArreglo(num){
    let arreglo = [];
    for (let i = 1; i <= num; i++){
        arreglo.push(i);
    }
    console.log(arreglo);
}

/*split*/

function split(palabra){
    let arreglo = [];
    for (let i = 0; i < palabra.length; i++){
        arreglo.push(palabra[i]);
    }
    console.log(arreglo);
}

/*Manejando dos arreglos*/

function arrayHandler(palabra1, palabra2){
    let arreglo = palabra1.split('');
    let arreglo1 = palabra2.split('');
    for(let i = 0; i < arreglo.length; i++){
        console.log('Soy ' + arreglo[i] + ' y yo soy ' + arreglo1[i]);
    }

}

/*Palindromo*/

function palindromo(palabra){

    let arreglo = palabra.split('');
    let arreglo1 = [];
    console.log('Es un palindromo?')
    
    for (let i = arreglo.length-1; i >= 0; i--){
        arreglo1.push(arreglo[i]);
    }
    
    let contador = 0;
    for (let i = 1; i <= arreglo.length; i++){
        if (arreglo[i] == arreglo1[i]){contador++;}
    }
    
    if (contador == arreglo.length){console.log(true)}
    else {console.log(false)};

}

//loopDePares(numero);
//loopDeImpares(numero, 'perro');
//sumatoria(numero);
//nuevoArreglo(numero);
//split('hola');
//arrayHandler('hola', 'lola');
palindromo('alejandro');