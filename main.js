//1. Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.
console.log("¡Hola Mundo!");

/*
2. Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por
pantalla el contenido de la variable.
*/

let saludo = "¡Hola Mundo!";
console.log(saludo);

/*
3. Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo
introduzca muestre por pantalla la cadena ¡Hola <nombre>!, donde <nombre> es el nombre que el
usuario haya introducido.
*/
let nombre = prompt("¿Cual es tu nombre? ");
let respuestaNombre = nombre;
console.log(`¡Hola ${respuestaNombre}!`);

//4. Escribir un programa que muestre por pantalla el resultado de la siguiente operación aritmética
let numerador = 3 + 2;
let denominador = 2 * 5;
let operacion = Math.pow(numerador / denominador, 2);
console.log(operacion);

/*
5. Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora.
Después debe mostrar por pantalla la paga que le corresponde.
*/
let horasTrabajadas = prompt("Indique cantidad de horas trabajadas: ");
let valorHora = prompt("Indique el valor de la hora trabajada: ");

let valorAPagar = horasTrabajadas * valorHora;
console.log(`El valor de horas trabajadas es de ${valorAPagar}`);

/*
6. Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de
masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu índice de masa corporal
es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales.
*/

let peso = prompt("CALCULO DE IMC\nIngrese su peso (en kg): ");
let estatura = prompt("Ingrese su estatuta (en metros): ");

let calculoImc = Number((peso / Math.pow(estatura, 2)).toFixed(2));
console.log(calculoImc);

/*
7. Escribir un programa que pida al usuario dos números enteros y muestre por pantalla la <n> entre <m>
da un cociente <c> y un resto <r> donde <n> y <m> son los números introducidos por el usuario, y <c>
y <r> son el cociente y el resto de la división entera respectivamente.
*/
let n = prompt("Ingrese el divisor: ");
let m = prompt("Ingrese el dividendo: ");
let c = Number(Math.trunc(n / m));
let r = n % m;

alert(`División: ${n} / ${m}\nCociente: ${c}\nResto: ${r}`);

/*
8. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de
años, y muestre por pantalla el capital obtenido en la inversión.
*/
consultaInvertir = prompt("Ingrese la cantidad que desea invertir: ");
consultaInteresAnual = prompt(
  "Ingrese el interes anual (Solo ingrese el número):"
);
cantidadAnhos = prompt(
  "Ingrese la cantidad de años que desea mantener la inversión:"
);

let montoInversion = consultaInvertir;
let interesAnual = consultaInteresAnual / 100;
let tiempoInversion = cantidadAnhos;

let capitalObtenido = montoInversion * interesAnual;

console.log(
  `${montoInversion} ${interesAnual} ${tiempoInversion} ${capitalObtenido}`
);
alert(
  `Monto invertido: $${montoInversion}\nPlazo: ${tiempoInversion} año(s)\nCapital obtenido: ${capitalObtenido}`
);

/*
9. Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por
correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los
payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75g. 
Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y
calcule el peso total del paquete que será enviado.
*/

let pesoPayaso = 112;
let pesoMunheca = 75;
let cantidadPayaso = prompt("Ingrese cantidad de payasos vendidos: ");
let cantidadMunheca = prompt("Ingrese cantidad de muñecas vendidos: ");

letTotalPesoPayaso = pesoPayaso * cantidadPayaso;
letTotalPesoMunheca = pesoMunheca * cantidadMunheca;

let pesoPaquete = letTotalPesoPayaso + letTotalPesoMunheca;
alert(
  `Cantidad de payasos vendidos: ${cantidadPayaso}\nCantidad de nuñecas vendidas: ${cantidadMunheca}\nEl peso total del paquete es de ${pesoPaquete} Kgs`
);

/*
10. Una panadería vende barras de pan a 3.49€ cada una. El pan que no es el día tiene un descuento del
60%. Escribir un programa que comience leyendo el número de barras vendidas que no son del día.
Después el programa debe mostrar el precio habitual de una barra de pan, el descuento que se le hace
por no ser fresca y el coste final total.*/

let precioBarrasPan = 3.49;
let descuento = 60;

let cantidadBarrasVendidas = prompt(
  "Ingresar cantidad de barras de pan del día anterior vendidas: "
);
let costeTotal = (
  precioBarrasPan -
  precioBarrasPan * (descuento / 100)
).toFixed(2);
alert(
  `Cantidad de barras: ${cantidadBarrasVendidas} Precio normal: ${precioBarrasPan}\nDescuento aplicado ${descuento}%\nValor a pagar: ${costeTotal}`
);
