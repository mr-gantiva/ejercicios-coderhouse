// 3. Escribir un programa que almacene las asignaturas de un curso (por ejemplo
//     Matemáticas, Física, Química, Historia y Lengua) en un array, pregunte al usuario
//     la nota que ha sacado en cada asignatura, y después las muestre por pantalla con
//     el mensaje En <asignatura> has sacado <nota> donde <asignatura> es cada una
//     des las asignaturas del array y <nota> cada una de las correspondientes notas
//     introducidas por el usuario.

const ASIGNATURAS = [
  "Matemáticas",
  "Física",
  "Química",
  "Historia",
  "Lengua",
  "Quimica",
];

let calificaciones = [];

function solicitarNotasAlUsuario() {
  for (let i = 0; i < ASIGNATURAS.length; i++) {
    calificaciones.push(
      Number(
        prompt(
          `Ingrese la calificación de   ${ASIGNATURAS[i].toUpperCase()}  :`
        )
      )
    );
    // console.log(ASIGNATURAS[i]);
    console.log(
      `En la asignatura ${ASIGNATURAS[i]} has sacado ${calificaciones[i]}`
    );
  }
}

solicitarNotasAlUsuario();
