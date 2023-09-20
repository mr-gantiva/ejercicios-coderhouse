// 8. Escribir un programa que pida al usuario una lista de letras y muestre por pantalla
// el número de veces que ingresó cada vocal.

// let vocales = ["a", "e", "i", "o", "u"];
// let contador = 0;
// let contadorE = 0;
// let contadorI = 0;
// let contadorO = 0;
// let contadorU = 0;
// let contadorOpcion = 0;

// let consultaLetra = [];
// let opcion;
// do {
//   let ingresoLetra = prompt("Ingrese la letra:").toLowerCase();
//   opcion = Number(prompt("Desea ingresar otra letra 1 - SI 0 - NO"));
//   consultaLetra.push(ingresoLetra);
//   contadorOpcion += 1;
// } while (opcion === 1);

// console.log(consultaLetra + " Contador " + contadorOpcion);

// for (let i = 0; i < consultaLetra.length; i++) {
//   console.log(consultaLetra[i]);
//   if (consultaLetra[i] === vocales[0]) {
//     console.log(`Si esta la vocal ${vocales[0]}`);
//     contador += 1;
//   } else if (consultaLetra[i] === vocales[1]) {
//     console.log(`Si esta la vocal ${vocales[1]}`);
//     contadorE += 1;
//   } else if (consultaLetra[i] === vocales[2]) {
//     console.log(`Si esta la vocal ${vocales[2]}`);
//     contadorI += 1;
//   } else if (consultaLetra[i] === vocales[3]) {
//     console.log(`Si esta la vocal ${vocales[3]}`);
//     contadorO += 1;
//   } else if (consultaLetra[i] === vocales[4]) {
//     console.log(`Si esta la vocal ${vocales[4]}`);
//     contadorU += 1;
//   }
// }

// console.log(
//   `Vocal ${vocales[0]} ingresada ${contador} veces\nVocal ${vocales[1]} ingresada ${contadorE} veces\nVocal ${vocales[2]} ingresada ${contadorI} veces\nVocal ${vocales[3]} ingresada ${contadorO} veces\nVocal ${vocales[4]} ingresada ${contadorU} veces`
// );

const vocalesArray = ["a", "e", "i", "o", "u"];
const contadorVocales = {};

do {
  const ingresoLetra = prompt("Ingrese una letra:").toLowerCase();
  if (vocalesArray.includes(ingresoLetra)) {
    if (!contadorVocales[ingresoLetra]) {
      contadorVocales[ingresoLetra] = 1;
    } else {
      contadorVocales[ingresoLetra]++;
    }
  }
  var opcionContinuar = Number(
    prompt("Desea ingresar otra letra?\n1 - SI\n0 - NO")
  );
} while (opcionContinuar === 1);

console.log("Letras ingresadas:", Object.keys(contadorVocales).join(", "));

for (const vocal in contadorVocales) {
  console.log(`Vocal ${vocal} ingresada ${contadorVocales[vocal]} veces`);
}

// Esta parte del código maneja la lógica para contar cuántas veces se ha ingresado cada vocal en un bucle do...while:

// javascript
// Copy code
// const ingresoLetra = prompt("Ingrese una letra:").toLowerCase();
// if (vocales.includes(ingresoLetra)) {
//   if (!contadorVocales[ingresoLetra]) {
//     contadorVocales[ingresoLetra] = 1;
//   } else {
//     contadorVocales[ingresoLetra]++;
//   }
// }

// Vamos a desglosar qué hace cada parte:

// const ingresoLetra = prompt("Ingrese una letra:").toLowerCase();: Solicita al usuario que ingrese una letra y la almacena en la variable
//  ingresoLetra. Además, convierte la letra ingresada a minúsculas utilizando toLowerCase(). Esto asegura que las comparaciones posteriores
//   sean insensibles a mayúsculas y minúsculas.

// if (vocales.includes(ingresoLetra)) {: Verifica si la letra ingresada (ingresoLetra) está incluida en el array vocales. Si es una vocal
//    válida, procede a contar su ocurrencia.

// if (!contadorVocales[ingresoLetra]) {: Verifica si el contador para la vocal en cuestión (ingresoLetra) aún no ha sido inicializado. Si
//    es así, se inicializa el contador a 1. Esto ocurre cuando se ingresa la vocal por primera vez.

// En caso de que el contador ya esté inicializado (lo que significa que no es la primera vez que se ingresa la vocal), se incrementa el
//  contador en 1. Esto permite llevar un registro de cuántas veces se ha ingresado cada vocal.

// En resumen, esta parte del código se encarga de procesar la entrada del usuario, verificar si es una vocal válida, y llevar un registro
//  de cuántas veces se ha ingresado cada vocal válida en el objeto contadorVocales.
