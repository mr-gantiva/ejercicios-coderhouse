/*1. Escribir un programa que pida al usuario una palabra y la muestre por
pantalla 10 veces.*/

/* SOLUCION
let consultaNombre = prompt("Ingrese su nombre");

for (let i = 0; i < 10; i++) {
  console.log(consultaNombre);
}
*/

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

let numEntero = Number(prompt("Ingrese un número entero:"));
let numeros = "";

for (let i = 0; i < numEntero; i++) {
  numeros += i + ",";
}

console.log(numeros);

/*
4. Escribir un programa que pida al usuario un número entero positivo y
muestre por pantalla la cuenta atrás desde ese número hasta cero
separados por comas.*/

/*
5. Escribir un programa que pregunte al usuario una cantidad a invertir, el
interés anual y el número de años, y muestre por pantalla el capital
obtenido en la inversión cada año que dura la inversión.*/

/*
6. Escribir un programa que muestre por pantalla la tabla de multiplicar del
1 al 10.*/

/*
7. Escribir un programa que almacene la cadena de caracteres contraseña
en una variable, pregunte al usuario por la contraseña hasta que
introduzca la contraseña correcta.*/

/*
8. Escribir un programa que pida al usuario un número entero y muestre
por pantalla si es un número primo o no.*/
