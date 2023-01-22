function finderName(array, valor) {
    for (var i = 0; i < array.length; i++){
        if (array[i] === valor){
            console.log("Elemento encontrado en la posicion: "+ i);
            return [true, i];
        }
    }
    return [false, -1];
}






const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

var resultado = finderName(nameFinder,"Logan");
console.log(resultado);