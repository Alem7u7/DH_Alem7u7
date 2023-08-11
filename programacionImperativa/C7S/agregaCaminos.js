const prompt = require("prompt-sync")({singint: true});

let edad;
let negativo = -1;

while (negativo == -1) {
    edad = parseInt(prompt("Ingrese su edad: "));
    negativo = (Math.sign(edad));

    if (negativo == -1) {
        console.log("Error, edad inválida. Por favor ingrese un número válido.");
    }
}

function edadImpar(edad) {
    let impar = edad%2;
    if(impar == 1){ return "Sabias que tu edad es impar?"} else {return ""} 
}

if(edad < 18) {
    console.log("No puede pasar al bar.");
    console.log(edadImpar(edad));
} else if (edad < 21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
    console.log(edadImpar(edad));
} else if (edad == 21){
    console.log("Puede pasar al bar, felicidades por haber llegado a la mayoría de edad.");
    console.log(edadImpar(edad));
} else {
    console.log("Puede pasar al bar y tomar alcohol.")
    console.log(edadImpar(edad));
}





