// 4. Escribir un programa que pregunte al usuario los números ganadores de la lotería
// primitiva, los almacene en un array y los muestre por pantalla ordenados de menor
// a mayor.

alert(
  "El sorteo de la loteria primitiva consta de 8 números.\nA continuación ingresa los números ganadores:"
);

const arraySorteo = [];
const cantidadNumeros = 8;
function guardarNumerosLoteria() {
  for (let i = 0; i < cantidadNumeros; i++) {
    arraySorteo.push(Number(prompt(`Ingrese el número ${i + 1}`)));
    arraySorteo.sort(function (a, b) {
      return a - b;
    });
  }

  let numerosSorteoString = arraySorteo.join(", ");
  alert(`Los números ingresados son: ${numerosSorteoString} `);
}

guardarNumerosLoteria();
