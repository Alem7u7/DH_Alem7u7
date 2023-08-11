const prompt = require("prompt-sync")({singint: true});

let edad;
let negativo = -1;

while (negativo == -1) {
    edad = parseInt(prompt("Ingrese su edad:"));
    negativo = (Math.sign(edad));

    if (negativo == -1) {
        console.log("Error, edad inválida. Por favor ingrese un número válido.");
    }
}

if(edad < 18) {
    console.log("No puede pasar al bar.");
} else if (edad < 21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else if (edad == 21){
    console.log("Puede pasar al bar, felicidades por haber llegado a la mayoría de edad.");
} else {
    console.log("Puede pasar al bar y tomar alcohol.")
}
