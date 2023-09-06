// 2. Escribir un programa que almacene las asignaturas de un curso (por ejemplo
//     Matemáticas, Física, Química, Historia y Lengua) en un array y la muestre por
//     pantalla el mensaje Yo estudio <asignatura>, donde <asignatura> es cada una de
//     las asignaturas del array.

const ASIGNATURAS = [
  "Matemáticas",
  "Física",
  "Química",
  "Historia",
  "Lengua",
  "Quimica",
];

let element = "";
for (let i = 0; i < ASIGNATURAS.length; i++) {
  element += ASIGNATURAS[i] + ", ";
}

console.log(`Yo estudio ${element}`);
