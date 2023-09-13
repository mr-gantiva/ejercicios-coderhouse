// 6. Escribir un programa que almacene las asignaturas de un curso (por ejemplo
//     Matemáticas, Física, Química, Historia y Lengua) en un array, pregunte al usuario
//     la nota que ha sacado en cada asignatura y elimine del array las asignaturas
//     aprobadas. Al final el programa debe mostrar por pantalla las asignaturas que el
//     usuario tiene que repetir.

const asignaturas = [
  "Matemáticas",
  "Física",
  "Química",
  "Historia",
  "Lengua",
  "Computación",
];

const asignaturasARepetir = [];
const arrayNotas = [];

for (let i = 0; i < asignaturas.length; i++) {
  const nota = parseFloat(prompt(`Ingrese la nota de ${asignaturas[i]}`));

  arrayNotas[asignaturas[i]] = nota;

  if (nota < 4) {
    asignaturasARepetir.push(asignaturas[i]);
  }
}
console.log(asignaturasARepetir);
console.log(arrayNotas);

if (asignaturasARepetir.length === 0) {
  console.log(`¡Felicidades! Has aprobado todas las asignaturas`);
} else {
  console.log(`Debes repetir las siguientes asignaturas: `);
  for (let i = 0; i < asignaturasARepetir.length; i++) {
    console.log(asignaturasARepetir[i], arrayNotas[asignaturas]);
  }
}
