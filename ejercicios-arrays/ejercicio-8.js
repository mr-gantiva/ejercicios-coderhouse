// 8. Escribir un programa que pida al usuario una lista de letras y muestre por pantalla
// el número de veces que ingresó cada vocal.

let vocales = ["a", "e", "i", "o", "u"];
let contador = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;
let contadorOpcion = 0;

let consultaLetra = [];
let opcion;
do {
  let ingresoLetra = prompt("Ingrese la letra:").toLowerCase();
  opcion = Number(prompt("Desea ingresar otra letra 1 - SI 0 - NO"));
  consultaLetra.push(ingresoLetra);
  contadorOpcion += 1;
} while (opcion === 1);

console.log(consultaLetra + " Contador " + contadorOpcion);

for (let i = 0; i < consultaLetra.length; i++) {
  console.log(consultaLetra[i]);
  if (consultaLetra[i] === vocales[0]) {
    console.log(`Si esta la vocal ${vocales[0]}`);
    contador += 1;
  } else if (consultaLetra[i] === vocales[1]) {
    console.log(`Si esta la vocal ${vocales[1]}`);
    contadorE += 1;
  } else if (consultaLetra[i] === vocales[2]) {
    console.log(`Si esta la vocal ${vocales[2]}`);
    contadorI += 1;
  } else if (consultaLetra[i] === vocales[3]) {
    console.log(`Si esta la vocal ${vocales[3]}`);
    contadorO += 1;
  } else if (consultaLetra[i] === vocales[4]) {
    console.log(`Si esta la vocal ${vocales[4]}`);
    contadorU += 1;
  }
}

console.log(
  `Vocal ${vocales[0]} ingresada ${contador} veces\nVocal ${vocales[1]} ingresada ${contadorE} veces\nVocal ${vocales[2]} ingresada ${contadorI} veces\nVocal ${vocales[3]} ingresada ${contadorO} veces\nVocal ${vocales[4]} ingresada ${contadorU} veces`
);
