/*1. Escribir un programa que pida al usuario una palabra y la muestre por
pantalla 10 veces.*/

/* SOLUCION;*/
let consultaNombre = prompt("Ingrese su nombre");

for (let i = 0; i < 10; i++) {
  console.log(`${i + 1} - ${consultaNombre}`);
}

/*
2. Escribir un programa que pregunte al usuario su edad y muestre por
pantalla todos los años que ha cumplido (desde 1 hasta su edad).*/

/*
let consultaEdad = Number(prompt("Ingrese su edad"));

for (let i = 0; i < consultaEdad; i++) {
  console.log(i + 1);
}*/

/*
3. Escribir un programa que pida al usuario un número entero positivo y
muestre por pantalla todos los números desde 1 hasta ese número
separados por comas.*/
/*
let numEntero = Number(prompt("Ingrese un número entero:"));
let numeros = "";

for (let i = 0; i < numEntero; i++) {
  numeros += i + 1 + ",";
}
console.log(numeros.slice(0));
*/
/*
4. Escribir un programa que pida al usuario un número entero positivo y
muestre por pantalla la cuenta atrás desde ese número hasta cero
separados por comas.*/

/* SOLUCION
let numConteo = Number(prompt("Ingrese un número entero:"));
let num = "";

for (let i = numConteo; i >= 1; i--) {
  num = num + i + ",";
}
console.log(num);
*/
/*
let num = "";
for (let i = 0; i <= 20; i++) {
  num = num + i + ",";
}

console.log(num);
*/

/*
5. Escribir un programa que pregunte al usuario una cantidad a invertir, el
interés anual y el número de años, y muestre por pantalla el capital
obtenido en la inversión cada año que dura la inversión.*/

/*
let cantidadInvertir = Number(prompt("Monto a invertir: "));
let interesAnual = Number(prompt("Interes anual ofrecido: "));
let tiempoInversion = Number(prompt("Cantidad de años: "));
let capitalObtenido = "";

interesAnual = interesAnual / 100;
calculoInteres =
  cantidadInvertir * Math.pow(1 + interesAnual / 1, tiempoInversion);

for (let i = 0; i < tiempoInversion; i++) {
  capitalObtenido = calculoInteres - cantidadInvertir;
  console.log(`Año ${i + 1}: ${capitalObtenido.toFixed(2)}`);
}
*/
/*
6. Escribir un programa que muestre por pantalla la tabla de multiplicar del
1 al 10.*/

/* SOLUCION
for (let i = 1; i <= 10; i++) {
  console.log(`Tabla del ${i}`);
  for (let j = 1; j <= 10; j++) {
    let resultado = i * j;
    console.log(`${i} * ${j} = ${resultado}`);
  }
}
*/
/*
7. Escribir un programa que almacene la cadena de caracteres contraseña
en una variable, pregunte al usuario por la contraseña hasta que
introduzca la contraseña correcta.*/
/* SOLUCION
let password = "contraseña";
let consultaPassword = "";
do {
  consultaPassword = prompt("Ingrese la contraseña");
  if (consultaPassword === password) {
    alert("Contraseña ingresada correctamente");
    break;
  } else {
    alert("Contraseña no corresponde, volver a intentar");
  }
} while (consultaPassword != password);
*/
/*
8. Escribir un programa que pida al usuario un número entero y muestre
por pantalla si es un número primo o no.*/
/*
let consultaNumeroPrimo = Number(
  prompt("PROGRAMA PARA VALIDAR NÚMEROS PRIMOS\nIngresa un número entero")
);

let contador = 0;

for (let i = 1; i <= consultaNumeroPrimo; i++) {
  let resultadoPrimo = consultaNumeroPrimo % i;
  console.log(`${consultaNumeroPrimo} / ${i} = ${resultadoPrimo} `);
  if (resultadoPrimo === 0) {
    contador++;
  }
}
if (contador > 2 || consultaNumeroPrimo === 0 || consultaNumeroPrimo === 1) {
  alert(
    `El número ${consultaNumeroPrimo} no es primo, tiene ${contador} números por los cuales es divisible`
  );
} else {
  alert(
    `El número ${consultaNumeroPrimo} es primo, tiene ${contador} números por los cuales es divisible`
  );
}
*/
