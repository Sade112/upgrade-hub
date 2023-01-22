
function averageWord(array) {

    var valor = array[0];

    for (var i = 1; i<array.length; i++){
        if (typeof array[i] == "number"){
            valor = array[i] + valor;
        }else{
            valor = array[i].length + valor;
        }
    }

console.log(valor);
  
}





const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
averageWord(mixedElements);