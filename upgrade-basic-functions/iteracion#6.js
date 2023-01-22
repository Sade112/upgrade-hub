function eliminarDuplicados(array) {
    // Iteramos sobre cada uno de los elementos del array
    for (let i = 0; i < array.length; i++) {
        // Almacenamos el elemento en una variable
        const elemento = array[i];
        // Iteramos sobre el resto de elementos del array
        for (let j = i + 1; j < array.length; j++) {
            // Si encontramos un elemento duplicado, lo eliminamos del array
            if (elemento === array[j]) {
                
                array.splice(j, 1);
                
                j--;
            }
        }
    }
    // Retornamos el array sin elementos duplicados
    console.log(array);
};

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

eliminarDuplicados(duplicates);


