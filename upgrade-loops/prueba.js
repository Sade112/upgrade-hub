const products = [
    {tela: 'Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta'},
    {algodon: 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'}
]

// for (var product of products){
//     if (product.includes("Camiseta")){
//         console.log(product);
//     }
// }

for (var i=0; i<products.length; i++){
    if(products[i].includes("Camiseta")){
        console.log(products[i]);
    }
}