const prompt = require("prompt-sync")({singint: true});



/*Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.*/
/*
let valor = parseInt(prompt('Ingrese valor: '));

function sumar (valor) {        
    for (let i = valor; i <= valor+10; i++){
        console.log(i)
    }
}

console.log(sumar(valor));
*/


/*Imprimir los números entre el 5 y el 20, saltando de tres en tres.*/

/*
function tres(){
    for(let i = 5; i<=20; i += 3){ console.log(i) }
}

tres();
*/

/*Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100 */

function sumatoria(){
    let inicio = 0;
    for (let i = 1; i <= 100; i++ ){inicio += i;} 
    console.log(inicio);
}

sumatoria();






