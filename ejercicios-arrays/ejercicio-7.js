// 7. Escribir un programa que almacene el abecedario en un array, elimine las letras
// que ocupen posiciones múltiplos de 3, y muestre por pantalla la lista resultante.

let abecedario = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Crear un nuevo array para almacenar las letras que no ocupen posiciones múltiplos de 3
const resultado = [];

// Iterar a través del abecedario y agregar las letras que no ocupen posiciones múltiplos de 3 al nuevo array
for (let i = 0; i < abecedario.length; i++) {
  if ((i + 1) % 3 !== 0) {
    resultado.push(abecedario[i]);
  }
}

// Mostrar el resultado por pantalla
console.log("Abecedario sin letras en posiciones múltiplos de 3:");
console.log(resultado);

console.log(15 % 3);
