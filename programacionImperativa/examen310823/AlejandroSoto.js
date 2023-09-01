/*Ejercicio 1:*/

let num1 = 5;
let num2 = 8;
let num3 = 19;

function numeros(a, b, c) {
    if (a > b) {
        return(b * c)
    } else if (b % 2 == 0) {
        return(b + " es par")
    } else if (((a + b + c) / 3) % 1 == 0) {
        return("La suma de estos tres números es múltiplo de 3.")
    }
}

console.log(numeros(num1, num2, num3));

/*Ejercicio 2:*/

let personas = {
    informacion: [{
        nombre: "Emilia",
        apellido: "Cedenio",
        edad: 24,
        estadoEmpleado: false,
    }],

    consultarInformacion: function () {

        let edad = personas.informacion[0].edad;
        let empleado = personas.informacion[0].estadoEmpleado;
        let nombre = personas.informacion[0].nombre;
        let apellido = personas.informacion[0].apellido;


        if (edad > 18 && empleado == true) {
            return (nombre + " " + apellido + " está empleado y es mayor de edad.")
        } else if (edad > 18 && empleado == false) {
            return (nombre + " " + apellido + " NO está empleado y es mayor de edad.")
        } else if (edad < 18 || empleado == false) {
            return (nombre + " " + apellido + " NO está empleado y NO es mayor de edad.")
        }
    }

}

console.log(personas.consultarInformacion())


/*Ejercicio 3*/

let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    
    anio: 2019,
    color: 'negro'
}]

autos.pop();

let autosNuevos = [];

for (let i = 0; i < autos.length; i++){
    if(autos[i].anio > 2019){
        autosNuevos.push(autos[i])
    }
}

console.log(autos);
console.log(autosNuevos);