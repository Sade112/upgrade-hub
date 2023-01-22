

function sumAll(array) {

    var high = array[0];

  for ( var i=0; i<array.length; i++){
    
    if(array[i] > high){
        console.log(array[i] + " es mayor que " + high);
        high = array[i];
    }else{
        console.log(array[i] + " es menor o igual que " + high);
    }
  }
  console.log(high);
}



const numbers = [1, 2, 3, 5, 45, 37, 58];
const numbers2 = [4, 324, 2, 2355235, 222222222222, 0];
sumAll(numbers2);
