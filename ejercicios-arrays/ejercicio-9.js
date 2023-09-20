// 9. Escribir un programa que almacene en un array los siguientes precios, 50, 75, 46,
// 22, 80, 65, 8, y muestre por pantalla el menor y el mayor de los precios.

let preciosArray = [50, 75, 46, 22, 80, 65, 8];

let precioMenor = Math.min(...preciosArray);
let precioMayor = Math.max(...preciosArray);

console.log(`Precio menor: ${precioMenor}\nPrecio mayor: ${precioMayor}`);
