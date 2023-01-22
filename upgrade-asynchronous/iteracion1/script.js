fetch('https://api.agify.io?name=michael')
    .then(response => response.json())
    .then(data => console.log(data));




//Ejercicio 2

function consultar(){
    var valor = document.querySelector(".dato").value
    console.log(valor);

    fetch(`https://api.nationalize.io/?name=${valor}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.country)

        var newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
        var newH2 = document.createElement("h2");
        newH2.innerHTML = data.name;
        newDiv.appendChild(newH2);
        var newUl = document.createElement("ul");
        newDiv.appendChild(newUl);

        function borrar(){
            newUl.removeChild(`newLi.li${i}`)
        }

        for (let i = 0; i < data.country.length; i++) {
            var newLi = document.createElement("li");
            newLi.setAttribute("class", `li${i}`)
            newLi.innerHTML = `Pais: ${data.country[i].country_id} \\ Probabilidad: ${data.country[i].probability * 100}%`;
            newUl.appendChild(newLi);
            var newButton = document.createElement("button");
            newButton.innerHTML = "X";

            newButton.setAttribute("onclick", `newUl.removeChild(newLi.li${i})`)
            newLi.appendChild(newButton);
        }

    
    });

}
