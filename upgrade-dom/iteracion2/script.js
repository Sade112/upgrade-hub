







function ejercicio1(){
    var nuevoDiv = document.createElement("div");
    var textoDiv = document.createTextNode("Div creado dinamicamente en JS");

    nuevoDiv.appendChild(textoDiv);

    var cambiarDiv = document.querySelector("#fn-insert-here")
    document.body.insertBefore(nuevoDiv, cambiarDiv);
}

function ejercicio2(){
    var nuevoDiv = document.createElement("div");
    var nuevaP = document.createElement("p");
    var textoP = document.createTextNode("Texto creado y anexado al tag p");

    nuevaP.appendChild(textoP);
    nuevoDiv.appendChild(nuevaP);

    var divActual = document.querySelector("#fn-insert-here")
    document.body.insertBefore(nuevoDiv, divActual);
}

function ejercicio3(){
    for (let i = 0; i < 5; i++) {
        var nuevoP = document.createElement("p");
        var textoP = document.createTextNode("Esta es la vuelta numero: "+ i);
    
        nuevoP.appendChild(textoP);
    
        var cambiarDiv = document.querySelector("#fn-insert-here")
        document.body.insertBefore(nuevoP, cambiarDiv);
    }
}

function ejercicio4(){
    var nuevaP = document.createElement("p");
    var textoP = document.createTextNode("Soy dinámico!");

    nuevaP.appendChild(textoP);
    document.body.appendChild(nuevaP);
}

function ejercicio5(){
    var nuevoH2 = document.querySelector(".fn-insert-here");
    console.log(nuevoH2);
    nuevoH2.innerHTML = "Wubba Lubba dub dub";
}

function ejercicio6(){
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

    var nuevaUl = document.createElement("ul");
    
    for (let i = 0; i < apps.length; i++) {
        var nuevoLi = document.createElement("li");
        nuevoLi.innerHTML = apps[i];
        nuevaUl.appendChild(nuevoLi);
    }
    document.body.appendChild(nuevaUl);
}

function ejercicio7(){
    var eliminar = document.querySelectorAll(".fn-remove-me");
    for (let i = 0; i < eliminar.length; i++) {
        eliminar[i].remove();
    }
}

function ejercicio8(){
    var nuevaP = document.createElement("p");
    nuevaP.innerHTML = 'Voy en medio!';

    var viejoDiv = document.querySelectorAll("div.fn-insert-here");
    document.body.insertBefore(nuevaP, viejoDiv[1]);

}

function ejercicio9(){
    var divs = document.querySelectorAll("div.fn-insert-here");

    for (let i = 0; i < divs.length; i++) {
        var nuevaP = document.createElement("p");
        nuevaP.innerHTML = "Voy dentro!";
        divs[i].appendChild(nuevaP);
    }
}