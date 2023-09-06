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
  "Quimica",
];

const aprobadas = [];
const perdidas = [];
const calificaciones = [];

function solicitarNotasAlUsuario() {
  for (let i = 0; i < asignaturas.length; i++) {
    let consultaNota = Number(
      prompt(`Ingrese la calificación de   ${asignaturas[i].toUpperCase()}  :`)
    );

    // console.log(ASIGNATURAS[i]);
    console.log(
      `En la asignatura ${asignaturas[i]} has sacado ${calificaciones[i]}`
    );
  }
}

solicitarNotasAlUsuario();
