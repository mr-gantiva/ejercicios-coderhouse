//1. Escribir un programa que almacene las asignaturas de un curso (por ejemplo
// Matemáticas, Física, Química, Historia y Lengua) en un array y la muestre por
// pantalla.

const ASIGNATURAS = [
  "Matemáticas",
  "Física",
  "Química",
  "Historia",
  "Lengua",
  "Quimica",
];

function mostrarAsignaturas() {
  for (let i = 0; i < ASIGNATURAS.length; i++) {
    console.log(ASIGNATURAS[i]);
  }
}

mostrarAsignaturas();
