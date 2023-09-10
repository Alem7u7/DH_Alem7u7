let matriz = [];

function crearMatriz(x, y) {
    for (let i = 0; i < y; i++) {
        let filas = [];
        for (let i = 0; i < x; i++) {
            filas.push(Math.floor((Math.random() * 99)))
        }
        matriz.push(filas);
    }
    console.log(matriz)
}

crearMatriz(3, 5);
console.log(matriz.length);
console.log(matriz[0].length);

