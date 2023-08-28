/*1. Escribir una función que muestre por pantalla el saludo ¡Hola amiga!
cada vez que se la invoque.
2. Escribir una función a la que se le pase una cadena <nombre> y muestre
por pantalla el saludo ¡hola <nombre>!.
3. Escribir una función que reciba un número entero positivo y devuelva su
factorial.
4. Escribir una función que calcule el total de una factura tras aplicarle el
IVA. La función debe recibir la cantidad sin IVA y el porcentaje de IVA a
aplicar, y devolver el total de la factura. Si se invoca la función sin
pasarle el porcentaje de IVA, deberá aplicar un 21%.
5. Escribir una función que calcule el área de un círculo y otra que calcule el
volumen de un cilindro usando la primera función.
6. Escribir una función que reciba una muestra de números en una lista y
devuelva su media.
7. CREATIVIDAD: escribir una función que resuelva un pequeño problema y
cumpla con las siguientes carácteristicas...
1. Que no reciba parámetros y no devuelva ningún dato.
2. Que reciba parámetros y no devuelva ningún dato.
3. Que no reciba parámetros y devuelva algún dato.
4. Que reciba parámetros y devuelva algún dato.*/

/* SOLUCION CASO 1 */

function saludo() {
  alert("!Hola amiga!");
}

/*saludo()*/

/* SOLUCION CASO 2 */

function saludoNombre(nombre) {
  alert(`!Hola ${nombre}!`);
}

// saludoNombre("Tobby");

/* SOLUCION CASO 3 */
// let numero = Number(prompt("Ingresar un número entero"));
// let factorial = 1;

// function calculoFactorial() {
//   for (let i = 1; i <= numero; i++) {
//     factorial *= i;
//   }
//   alert(`El factorial de ${numero} es ${factorial}`);
// }

// calculoFactorial(numero);

/* SOLUCION CASO 4 */

// let montoNeto = Number(prompt("Ingrese el monto sin IVA"));
// let porcentajeIva = Number(
//   prompt("Ingrese el porcentaje a calcular del IVA (Solo número)")
// );
// let ivaPorDefecto = 21 / 100;
// porcentajeIva = porcentajeIva / 100;

// function calculoIVA(valorNeto, ivaPorCalcular) {
//   if (valorNeto <= 0) {
//     alert("El monto ingresado no tiene generación de IVA");
//     return;
//   }
//   if (ivaPorCalcular == 0 || ivaPorCalcular == "") {
//     resultadoIva = valorNeto * ivaPorDefecto;
//     totalFactura = valorNeto + resultadoIva;
//     alert(
//       `NETO: $${valorNeto}\nIVA${
//         ivaPorCalcular * 100
//       }%: ${resultadoIva}\nTOTAL A PAGAR: $${totalFactura}`
//     );
//     return;
//   } else {
//     resultadoIva = valorNeto * ivaPorCalcular;
//     totalFactura = valorNeto + resultadoIva;
//     alert(
//       `NETO: $${valorNeto}\nIVA${
//         ivaPorCalcular * 100
//       }%: $${resultadoIva}\nTOTAL A PAGAR: $${totalFactura}`
//     );
//     return;
//   }
// }

// calculoIVA(montoNeto, porcentajeIva);

/* SOLUCION CASO 5 */

// let perimetroCirculo = parseFloat(prompt("Ingrese el radio del circulo"));
// const radioCirculo = 3.1416;

// function calculoAreaCirculo(perimetro, radio) {
//   let areaCirculo = radio * Math.pow(perimetro, 2);
//   alert(`El área del circulo es: ${areaCirculo.toFixed(2)}`);
// }

// calculoAreaCirculo(perimetroCirculo, radioCirculo);
let radioCirculo = parseFloat(prompt("Ingrese el radio del circulo"));

function calculoAreaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

alert(`El área del circulo es: ${calculoAreaCirculo(radioCirculo).toFixed(2)}`);

let alturaCilindro = parseFloat(prompt("Ingrese la altura del cilindro"));

function calculoAreaCilindro(radio, altura) {
  const areaBase = calculoAreaCirculo(radio);
  const volumen = areaBase * altura;
  return volumen;
}

alert(
  `El volumen del cilindro es: ${calculoAreaCilindro(
    radioCirculo,
    alturaCilindro
  ).toFixed(2)}`
);
