function contarRepeticiones(arr) {
    let contador = {};
    for (let i = 0; i < arr.length; i++) {
        let palabra = arr[i];
        if (contador[palabra] === undefined) {
        contador[palabra] = 1;
        } else {
        contador[palabra]++;
        }
    }
    return contador;
}



const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

var resultado = contarRepeticiones(counterWords);
console.log(resultado);


