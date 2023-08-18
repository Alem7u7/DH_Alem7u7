let peliculas = ['star wars','totoro','rocky','pulp fiction','la vida es bella'];

//Pasar peliculas a mayusculas

function mayus (movies){
    for(let i = 0; i < movies.length; i++){
        movies[i] =  movies[i].toUpperCase();
    }
}

mayus(peliculas);

//Agregar nuevo array

let peliculas2 = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite']

mayus(peliculas2);
let borrar = peliculas2.pop();

function juntar(array1, array2){
    for(let i = 0; i < array2.length; i++ ){
        array1.push(array2[i]);
    }
}

juntar(peliculas,peliculas2);


//Calificaciones

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar(array1, array2){
    let suma1 = 0;
    let suma2 = 0;
    for (let i = 0; i < array1.length; i++){suma1 += array1[i]; suma2 += array2[i];}
    if (suma1 === suma2){return true} else {return false};
}

console.log(peliculas);
console.log('Son iguales? '+ comparar(asiaScores, euroScores));
