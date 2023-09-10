let matriz = [];

function crearMatriz (tamanio){
    let contador = 1;
    for(let i = 0; i < tamanio; i++){

        let columnas = [];

        for(let i = 0; i < tamanio; i++){
            columnas.push(contador);
            contador++;   
        }

        matriz.push(columnas);
    }
}

function diagonalRojo(){
    
    let posicion = matriz[0].length-1;
    let total = 0;

    for(let y = 0; y < matriz.length; y++){
        //console.log(matriz[y][posicion]);
        total = total + matriz[y][posicion];
        posicion--;
    }
    return total;
}

function diagonalVerde(){

    let posicion = 0;
    let total = 0;

    for(let y = 0; y < matriz.length; y++){
        //console.log(matriz[x][contador]);
        total = total + matriz[y][posicion];
        posicion++;
    }
    return total;
}

crearMatriz(10);
console.log(matriz);
console.log(diagonalVerde());
console.log(diagonalRojo());