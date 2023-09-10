/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matriz = [
    [93, 93, 91, 73, 69],
    [75, 25, 35, 83, 13],
    [51, 12, 25, 52, 35],
    [35, 29, 60, 43, 22],
    [40, 69, 42, 4, 4]
];
//console.log(matriz);

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

function sumar() {
    let total = 0;
    for (let columna = 0; columna < matriz.length; columna++) {

        for (let fila = 0; fila < matriz[columna].length; fila++) {
            total = total + matriz[columna][fila];
            //console.log(matriz[columna][fila])
        }
    }
    return total;
}

console.log(sumar());