const product = { count: 2, price: 12.55, type: "alimentacion" };
 

function getTotal (a, b){
  return a * b;
}

let result = getTotal (product.count, product.price);


if(product.count > 0){
  console.log (result);
} else {
  result = 0;
  console.log (result);
}


let iva = 0.21;

switch (product.type){
  case "alimentacion" : iva = 0.1;
  break;
  case "libro" : iva = 0.04;
  break;
  default : iva = 0.21;
}

let getVat = result * iva;

console.log ("el iva es: ", getVat)

let precioTotal = getVat + result;

console.log("El precio total es: ", precioTotal);

