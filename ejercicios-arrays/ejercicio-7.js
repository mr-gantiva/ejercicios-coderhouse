// 7. Escribir un programa que almacene el abecedario en un array, elimine las letras
// que ocupen posiciones múltiplos de 3, y muestre por pantalla la lista resultante.

const abecedario = [
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

for (let i = 0; i < abecedario.length; i++) {
  console.log(abecedario[i]);
  if (abecedario[i] % 3 == 0) {
    console.log("Es multiplo");
  }
}
