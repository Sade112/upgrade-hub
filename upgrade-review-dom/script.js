// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

var newUl = document.createElement("ul");
document.body.appendChild(newUl);

for (let i = 0; i < countries.length; i++) {
    var newLi = document.createElement("li");
    newLi.innerHTML = countries[i];
    newUl.appendChild(newLi);
}


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
var basura = document.querySelector(".fn-remove-me");
document.body.removeChild(basura);


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

var newUl2 = document.createElement("ul");
var viejoDiv = document.querySelector('div[data-function="printHere"]')
viejoDiv.appendChild(newUl2);

for (let i = 0; i < cars.length; i++) {
    var newLi2 = document.createElement("li");
    newLi2.innerHTML = cars[i];
    newUl2.appendChild(newLi2);
}

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

var nuevaUl = document.createElement("ul");
document.body.appendChild(nuevaUl);

for (let i = 0; i < countries2.length; i++) {
    
    var cadaLi = document.createElement("li");
    cadaLi.innerHTML = `
    <div class="112">
        <h4>
            ${countries2[i].title}
        </h4>
        <img src="${countries2[i].imgUrl}">
        <button class="borradoElemento" onclick="borrarElemento(${i})">
            Borrar elemento
        </button>
    </div>
    `
    

    cadaLi.setAttribute("class", `random${i}`);
    nuevaUl.appendChild(cadaLi);

    function borrarElemento(index){
        var removeItem = document.querySelector(`.random${index}`);
        removeItem.remove();
        console.log("hola");
    }
    
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
function borrar(){
    var notquiero = nuevaUl.lastChild
    nuevaUl.removeChild(notquiero);
}


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

// function borrarElemento(){
//     let removeItem = document.getElementById(`cars${i+1}`);
//         removeItem.remove();
// }