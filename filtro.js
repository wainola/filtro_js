console.log("Filtro");

var estado = {
  nombre: {
    estado: undefined,
    active: false
  },
  color: {
    estado: undefined,
    active: false
  },
  booleano: {
    estado: undefined,
    active: false
  }
}

// Datos.
var datos = [
  {
    id: "nicolas",
    nombre: "Nicolas",
    data_tipo: "lista",
    data_color: "rojo",
    data_booleano: false
  },
  {
    id: "nicolas",
    nombre: "Nicolas",
    data_tipo: "lista",
    data_color: "rojo",
    data_booleano: false
  },
  {
    id: "nicolas",
    nombre: "Nicolas",
    data_tipo: "lista",
    data_color: "rojo",
    data_booleano: true
  },
  {
    id: "nicolas",
    nombre: "Nicolas",
    data_tipo: "lista",
    data_color: "rojo",
    data_booleano: false
  },
  {
    id: "nicolas",
    nombre: "Nicolas",
    data_tipo: "lista",
    data_color: "rojo",
    data_booleano: true
  },
  {
    id: "nicolas",
    nombre: "Nicolas",
    data_tipo:"lista",
    data_color: "rojo",
    data_booleano: false
  },
  {
    id: "nicolas",
    nombre: "Nicolas",
    data_tipo:"lista",
    data_color: "azul",
    data_booleano: false
  },
  {
    id: "nicolas",
    nombre: "Camilo",
    data_tipo:"lista",
    data_color: "azul",
    data_booleano: true
  },
  {
    id: "camilo",
    nombre: "Camilo",
    data_tipo:"lista",
    data_color: "amarillo",
    data_booleano: false
  },
  {
    id: "camilo",
    nombre: "Camilo",
    data_tipo:"lista",
    data_color: "amarillo",
    data_booleano: true
  },
  {
    id: "camilo",
    nombre: "Camilo",
    data_tipo:"lista",
    data_color: "verde",
    data_booleano: false
  },
  {
    id: "camilo",
    nombre: "Camilo",
    data_tipo:"lista",
    data_color: "amarillo",
    data_booleano: true
  },
  {
    id: "francisca",
    nombre: "Francisca",
    data_tipo:"lista",
    data_color: "verde",
    data_booleano: true
  },
  {
    id: "francisca",
    nombre: "Francisca",
    data_tipo:"lista",
    data_color: "verde",
    data_booleano: false
  },
  {
    id: "francisca",
    nombre: "Francisca",
    data_tipo:"lista",
    data_color: "amarillo",
    data_booleano: true
  },
  {
    id: "francisca",
    nombre: "Francisca",
    data_tipo:"lista",
    data_color: "azul",
    data_booleano: true
  },
  {
    id: "francisca",
    nombre: "Francisca",
    data_tipo:"lista",
    data_color: "amarillo",
    data_booleano: false
  }
]

function inyectData(datos){
  let contenedor = document.getElementById('contenido');
  let lista_ordenada = document.createElement('ol')
  contenedor.appendChild(lista_ordenada)
  for(let i = 0; i < datos.length; i++){
    let li = document.createElement('li')
    li.textContent = datos[i].nombre
    li.setAttribute('data_tipo', datos[i].data_tipo)
    li.setAttribute('id', datos[i].id)
    li.setAttribute('data_color', datos[i].data_color)
    li.setAttribute('data_booleano', datos[i].data_booleano)
    lista_ordenada.appendChild(li)
  }
}

function changeOptions(new_estado, datos, arr){
  console.table(new_estado)
  console.log("Arreglo");
  console.log(arr);
  if(arr.length > 0){
    arr = arr.filter((e) => new_estado.booleano.estado === e.data_booleano)
  }
  else if (arr.length === 0){
    arr = datos.filter((elemento) => new_estado.color.estado === elemento.data_color || new_estado.booleano.estado === elemento.data_booleano)
  }
  return arr
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("Script cuando carga el contenido");
  inyectData(datos);

  let selects = document.querySelectorAll('select');
  selects.forEach((elem) => {
    new_data = datos
    let arr = []
    elem.addEventListener('change', (evento) => {
      let new_estado = estado
      if(evento.target.id === "nombres"){
        new_estado.nombre.estado = evento.target.value.toLowerCase()
        new_estado.nombre.active = true
      }
      else if (evento.target.id === "colores"){
        new_estado.color.estado = evento.target.value.toLowerCase()
        new_estado.color.active = true
      }
      else if (evento.target.id === "booleano"){
        new_estado.booleano.estado = evento.target.value === "True" ? true : false
        new_estado.booleano.active = true
      }
      //console.table(new_estado)
      new_data = changeOptions(new_estado, datos, arr)
      console.table(new_data)
    })
  })
})
