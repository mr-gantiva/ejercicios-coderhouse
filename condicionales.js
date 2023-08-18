/*
1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
mayor de edad o no.
*/

let edad = prompt("¿Ingresa tu edad: ");
let mayorEdad = 18;
if (isNaN(edad)) {
  alert(`Oops! El valor ingresado debe ser númerico`);
} else if (edad >= mayorEdad) {
  alert("Eres mayor de edad");
} else {
  alert("Aún no eres mayor de edad");
}

/*
2. Escribir un programa que almacene la cadena de caracteres contraseña en una
variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña
introducida por el usuario coincide con la guardada en la variable sin tener en cuenta
mayúsculas y minúsculas.
*/

let password = "contraseña";

let inputPassword = prompt("Ingrese contraseña: ");

if (password.toLocaleLowerCase() == inputPassword.toLocaleLowerCase()) {
  alert("La contraseña ingresada coincide");
} else {
  alert("Contraseña no coincide, vuelve a intentarlo");
}

/*
3. Escribir un programa que pida al usuario dos números y muestre por pantalla su
división. Si el divisor es cero el programa debe mostrar un error.
*/

let dividendo = prompt("DIVISIÓN DE DOS NÚMEROS\nIngrese el dividendo:");
let divisor = prompt("Ingrese el divisor:");
let resultado = dividendo / divisor;

if (divisor == 0) {
  alert(`Oops! El divisor no puede ser cero!`);
} else if (isNaN(divisor) || isNaN(dividendo)) {
  alert(`Oops! El valor ingresado debe ser númerico`);
} else {
  alert(
    `El resultado de la división entre ${dividendo} y ${divisor} es ${resultado}`
  );
}

/*
4. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es
par o impar.
*/

let consultaNumero = Number(Math.trunc(prompt("Ingrese un número: ")));

if (consultaNumero % 2 == 0) {
  alert(`El número ${consultaNumero} es par`);
} else {
  alert(`El número ${consultaNumero} es impar`);
}

/*
5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte
al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene
que tributar o no.
*/

let edadTributar = prompt("Ingresar edad");
let ingresoMensual = prompt("Indique sus ingresos mensuales");

if (isNaN(edadTributar) || isNaN(ingresoMensual)) {
  alert("Valores ingresados no validos");
} else {
  if (edadTributar > 16 && ingresoMensual > 1000) {
    alert("Debe tributar impuestos, realicelo pronto para evitar sanciones");
  } else {
    alert("No debe tributar impuesto, edad o ingreso menor al requerido");
  }
}

/*
6. Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el
nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los
hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa
que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le
corresponde.
*/

let nombreAlumno = prompt("Ingrese su nombre");
let sexoAlumno = prompt("Ingrese su sexo\n1 - Mujer\n2 - Hombre");

for (let i = 0; i < nombreAlumno.length; i++) {
  const letra = nombreAlumno.charAt(0);
  console.log(letra);
}

if ((letra < "M" && sexoAlumno == 1) || (letra > "N" && sexoAlumno == 2)) {
  alert("Perteneces al grupo A");
} else {
  alert("Perteneces al grupo B");
}

/*
7. Los tramos impositivos para la declaración de la renta en un determinado país son los
siguientes:

--------------------------------------------------------
|           Renta               |   Tipo impositivo    |
--------------------------------------------------------
|   Menos de 10000 Euros        |           5%         |
--------------------------------------------------------
|   Entre 10000 y 20000 Euros   |           15%        |
--------------------------------------------------------
|   Entre 20000 y 35000 Euros   |           20%        |
--------------------------------------------------------
|   Entre 35000 y 60000 Euros   |           30%        |
--------------------------------------------------------
|   Más de 60000 Euros          |           45%        |
--------------------------------------------------------

Escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el
tipo impositivo que le corresponde.
*/

/*
8. Escribir un programa para una empresa que tiene salas de juegos para todas las
edades y quiere calcular de forma automática el precio que debe cobrar a sus clientes
por entrar. El programa debe preguntar al usuario la edad del cliente y mostrar el
precio de la entrada. Si el cliente es menor de 4 años puede entrar gratis, si tiene entre
4 y 12 años debe pagar 5€, si tiene entre 13 y 17 debe pagar 8€ y si es mayor de 18
años, 10€.
*/
