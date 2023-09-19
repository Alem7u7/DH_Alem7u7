let numeros = [6, 5, 1, 2, 4, 3, 8, 7];
let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8];
let numeros2 = [1, 2, 3, 4, 8, 7, 5, 6];

let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) { // puntero que va a señalar cada uno de los elementos del array
        for (let j = 0; j < array.length - i - 1; j++) { // va a recorrer todo el array por cada elemento del 1er for
            count++
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log(array);
}

bubbleSort(numeros1);

function bubbleSort2(array) {
    let swapped;
    do {
        swapped = false;
        for (let j = 0; j < array.length - 1; j++) {
            count++
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log(array);
}

//bubbleSort2(numeros1);
console.log(count);