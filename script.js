let frutasForEach = ["manzana", "plátano", "naranja"];
frutasForEach.forEach(function(fruta) {
    console.log(fruta);
});

let numerosFilter = [1, 2, 3, 4, 5];
let numerosPares = numerosFilter.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numerosPares);

let numerosMap = [1, 2, 3, 4, 5];
let numerosDobles = numerosMap.map(function(numero) {
  return numero * 2;
});
console.log(numerosDobles);

let frutasSplice = ["manzana", "naranja"];
frutasSplice.splice(1, 0, "plátano");
console.log(frutasSplice); // Muestra ["manzana", "plátano", "naranja"]

let numerosSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numerosSort.sort(); // Ordena los números de menor a mayor
console.log(numerosSort); // Muestra [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

let numerosReduce = [1, 2, 3, 4, 5];
let suma = numerosReduce.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0); // La suma inicial es 0
console.log(suma); // Muestra 15 (1 + 2 + 3 + 4 + 5)

let numerosSome = [1, 2, 3, 4, 5];
let esNumeroPar = numerosSome.some(function(numero) {
  return numero % 2 === 0;
});
console.log(esNumeroPar); // Muestra true (porque al menos un número es par)

let numerosEvery = [1, 2, 3, 4, 5];
let esPar = numerosEvery.every(function(numero) {
  return numero % 2 === 0;
});
console.log(esPar); // Muestra false (porque no todos los números son pares)
