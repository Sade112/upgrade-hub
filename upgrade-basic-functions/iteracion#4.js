
function average(array) {
var valor = array[0];
  for (var i = 1; i<array.length; i++){
    valor = array[i] + valor;
  }
  valor = valor / array.length;
 console.log(valor);
}






const numbers = [12, 21, 38, 5, 45, 37, 6];
average(numbers);