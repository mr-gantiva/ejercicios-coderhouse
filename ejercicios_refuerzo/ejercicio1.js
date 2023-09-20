// 1. Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.

// function saludar() {
//   return "Hola mundo";
// }

// console.log(saludar());

// Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo
// introduzca muestre por pantalla la cadena ¡Hola <nombre>!, donde <nombre> es el nombre que el
// usuario haya introducido.

// function saludoConTuNombre() {
//   let nombre = prompt("Ingresa tu nombre");
//   let saludo = `Hola ${nombre}`;
//   console.log(saludo);
// }

// saludoConTuNombre();

// Escribir un programa que muestre por pantalla el resultado de la siguiente operación aritmética ((3 + 2)/(2.5))2

// function calculoOperacion(sumando1, sumando2, divisor, exponente) {
//   return Math.pow((sumando1 + sumando2) / divisor, exponente);
// }

// console.log(calculoOperacion(3, 2, 2.5, 2));

// Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora.
// Después debe mostrar por pantalla la paga que le corresponde.

// let consultaHorasTrabajadas;
// let costeHora;

// consultaUsuario();

// let montoPago = calculoPagoPorHoras(consultaHorasTrabajadas, costeHora);
// console.log(montoPago);

// function consultaUsuario() {
//   consultaHorasTrabajadas = Number(
//     prompt("Ingrese la cantidad de horas trabajadas")
//   );
//   costeHora = Number(prompt("Ingrese el valor de la hora"));
// }

// function calculoPagoPorHoras(horasTrabajadas, valorHora) {
//   return horasTrabajadas * valorHora;
// }

// Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de
// masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu índice de masa corporal
// es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales.

// peso en kg / (estatura)2

// let solicitarPeso = prompt("Ingrese su peso (en kg)");
// let solicitarEstatura = prompt("Ingrese su estatura (en metros)");

// function calcularImc(peso, estatura) {
//   return peso / Math.pow(estatura, 2);
// }

// let resultadoImc = calcularImc(solicitarPeso, solicitarEstatura);
// console.log(resultadoImc);
