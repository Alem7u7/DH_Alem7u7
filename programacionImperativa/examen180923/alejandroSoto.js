/*Ejercicio 1*/

const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2020,
        color: 'negro'
    }
]

let autos2 = [];

function autos2020(autos){
    for (let i = 0; i < autos.length; i++){
        if(autos[i].modelo >= 2020){
            autos2.push(autos[i])
        }
    } 
    console.log(autos2);
}

autos2020(autos);

/*Ejercicio 2*/

let arrayDeNumeros = [10, 22, 3, 8, 9, 104, 5, 6, 7, 15];

function bubbleSort(arreglo, sentido){
    
    console.log(arreglo);

    let numeroTemporal = 0;
    
    if(sentido === 'ASC'){

        for (let i = 0; i < arreglo.length; i++) { 
            for (let j = 0; j < arreglo.length - 1; j++) { 
                
                if (arreglo[j] > arreglo[j + 1]) { 
                    numeroTemporal = arreglo[j]; 
                    arreglo[j] = arreglo[j + 1];
                    arreglo[j + 1] = numeroTemporal; 
                }
            }
        }
    }

    else if(sentido === 'DESC'){
        
        for (let i = 0; i < arreglo.length; i++) { 
            for (let j = 0; j < arreglo.length - 1; j++) { 
                
                if (arreglo[j] < arreglo[j + 1]) {  
                    numeroTemporal = arreglo[j]; 
                    arreglo[j] = arreglo[j + 1];  
                    arreglo[j + 1] = numeroTemporal; 
                }
            }
        }
    }

    console.log(arreglo);

}

bubbleSort(arrayDeNumeros,'DESC');


/*Ejercicio 3*/

let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

let resultado = [];

/*Ejericio3-Funcion 1*/

function matriz(arreglo,posicion){    
    for(let i = 0; i < arreglo.length; i++ ){              
        resultado.push(matrix[i][posicion]);
    }
    return(resultado)
}

console.log(matriz(matrix,2));

/*Ejercicio3-Funcion 2*/

function impares(arreglo){   
    
    for(let i=0; i < arreglo.length; i++){

        for(let j=0; j < arreglo[i].length; j++){
            let numero = arreglo[i][j]; 
            
            if (numero%2 != 0){
                arreglo[i][j] = 0;
            }
        }
        
    }
    console.log(matrix);
}

impares(matrix);
