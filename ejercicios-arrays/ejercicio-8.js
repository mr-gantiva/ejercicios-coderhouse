// 8. Escribir un programa que pida al usuario una lista de letras y muestre por pantalla
// el número de veces que ingresó cada vocal.

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
  "a",
];
let contador = 0;

for (let i = 0; i < abecedario.length; i++) {
  console.log(abecedario[i]);
  if (abecedario[i] === "a") {
    console.log("Si esta");
    contador += 1;
  } else {
    console.log("No esta");
  }
}

console.log("Veces esta: " + contador);
