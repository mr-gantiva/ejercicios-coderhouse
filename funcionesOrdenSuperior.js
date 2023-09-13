let productos = [
  {
    id: 2,
    nombre: "pelota de futbol",
    categoria: "deportes",
    stock: 2,
    precio: 5000,
  },
  {
    id: 5,
    nombre: "gorra 1",
    categoria: "indumentaria",
    stock: 7,
    precio: 2650,
  },
  {
    id: 7,
    nombre: "remera mangas cortas",
    categoria: "indumentaria",
    stock: 4,
    precio: 4500,
  },
  {
    id: 9,
    nombre: "pelota de voley",
    categoria: "deportes",
    stock: 1,
    precio: 2800,
  },
  {
    id: 12,
    nombre: "remera mangas largas",
    categoria: "indumentaria",
    stock: 3,
    precio: 7300,
  },
  {
    id: 15,
    nombre: "short de basquet",
    categoria: "indumentaria",
    stock: 8,
    precio: 5600,
  },
  {
    id: 17,
    nombre: "gorra 2",
    categoria: "indumentaria",
    stock: 7,
    precio: 2650,
  },
];

productos.forEach((producto) => {
  console.log(producto.nombre);
});
