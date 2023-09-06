// 5. Escribir un programa que almacene en un array los números del 1 al 10 y los
// muestre por pantalla en orden inverso separados por comas.

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarMayorAMenor() {
  arrayNumeros.sort(function (a, b) {
    return b - a;
  });
  let numerosString = arrayNumeros.join(", ");
  alert(numerosString);
}

mostrarMayorAMenor();
