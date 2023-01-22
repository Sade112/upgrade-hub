

var count = 0;

for (let i = 0; i < 150; i++) {
    count++;
    console.log(count);

    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
        .then((response) => response.json()) // Obtén la respuesta en formato JSON
        .then((data) => {
            var nombre = data.name;
            var imagen = data.sprites.front_default;
            var tipo = data.types.map((type) => type.type.name).join(', ')
            var id = data.id;





            var oldOl = document.querySelector("ol");

            var pokeLi = document.createElement("li");
            var pokeDiv = document.createElement("div");

            oldOl.appendChild(pokeLi);
            pokeLi.appendChild(pokeDiv);


            pokeDiv.innerHTML = `
            <div class="card">
            <h4 class="card-title">${nombre}</h4>
            <img class="card-image" src="${imagen}" alt="">
            <p class="card-subtitle">${tipo}</p>
            <p class="card-subtitle">${id}</p>
            </div>
            `
            });



}


