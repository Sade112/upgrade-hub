
function findLongestWord(array) {

    var longest = array[0];

    for (var i=0; i<array.length; i++){
        
        if(array[i].length > longest.length){
            console.log(array[i] + " es mas larga que "+ longest);
            longest = array[i];
            
        }else{
            console.log(array[i] + " es mas corta que "+ longest);
        }
    }
    console.log("La palabra mas larga es: " + longest);
}







const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

findLongestWord(avengers);