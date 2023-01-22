
function handleClick(event){
    console.log("Hola!")
}

document.getElementById("btnToClick").addEventListener("click", handleClick);



function escribir(event){
    console.log(event.target.value);
}

document.querySelector(".focus").addEventListener("focus", escribir);