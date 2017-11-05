var estado = {
  color: "rojo",
  forma: "cuadrada"
}

var datos = [
  {
    id: 1,
    color: "rojo",
    forma: "cuadrada"
  },
  {
    id: 2,
    color: "azul",
    forma: "circular"
  },
  {
    id: 3,
    color: "rojo",
    forma: "cuadrada"
  },
  {
    id: 4,
    color: "rojo",
    forma: "circular"
  }
]

function Filtro(estado, datos){
  let new_datos = datos.filter((item) => item.color === estado.color || item.forma === estado.forma)
  return new_datos;
}

console.log(Filtro(estado, datos))
let a = "s"
console.log(typeof a === "string");
