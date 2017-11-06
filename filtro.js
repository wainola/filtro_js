console.log("Filtro");

var estado = [
  {
    identificador: "nombres",
    valor: undefined,
    activado: false
  },
  {
    identificador: "colores",
    valor: undefined,
    activado:false
  },
  {
    identificador: "booleano",
    valor: undefined,
    activado: false
  }
]

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
    id: "camilo",
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
  let contenedor = document.querySelector('#contenido')
  let parrafo = document.querySelector('#p_texto')
  if(parrafo !== null){
    //console.log(parrafo);
    parrafo.remove()
  }
  // inspeccionar el contenedor
  let lista_ordenada = document.createElement('ol')
  contenedor.appendChild(lista_ordenada)
  for(let i = 0; i < datos.length; i++){
    let li = document.createElement('li')
    li.textContent = `nombre : ${datos[i].nombre.toLowerCase()} - color: ${datos[i].data_color.toLowerCase()} - booelano: ${datos[i].data_booleano}`
    li.dataset["tipo"] =  datos[i].data_tipo
    li.setAttribute('id', datos[i].id)
    li.dataset["color"] = datos[i].data_color
    li.dataset["booleano"] = datos[i].data_booleano
    li.dataset["nombre"] = datos[i].nombre.toLowerCase()
    lista_ordenada.appendChild(li)
  }
  console.log(contenedor.children.length);
}

function resetFiltros(){
  let selects = document.querySelectorAll('select')
  //console.log(selects);
  for(let i = 0; i < selects.length; i++){
    selects[i].selectedIndex = 0;
  }
  //new_estado = ["Nombre", "Color", "Booleano"]
  let ol = document.querySelector('ol')
  ol.remove();
  inyectData(datos)
}


document.addEventListener('DOMContentLoaded', () => {
  console.log("Script cuando carga el contenido");
  inyectData(datos);

  let new_data = datos
  let new_estado = ["Nombre", "Color", "Booleano"]

  let selects = document.querySelectorAll('select');
  for(let i = 0; i < selects.length; i++){
    selects[i].addEventListener('change', (e) => {
      new_estado[Number(selects[i].dataset["numero"])-1] = e.target.value.toLowerCase()
      // console.log(new_estado);
      let elementos = document.querySelectorAll('li')
      let cantidad = elementos.length
      for(let i = 0; i < elementos.length; i++){
        //console.log(i);
        let elemento = elementos[i]
        let nombre = elemento.dataset["nombre"]
        let color = elemento.dataset["color"]
        let booleano = elemento.dataset["booleano"]
        // console.log(new_estado);
        if((nombre === new_estado[0] || new_estado[0] === "Nombre") && (color === new_estado[1] || new_estado[1] === "Color") && (booleano === new_estado[2] || new_estado[2] === "Booleano")){
          elemento.style.display = "block"
        }
        else if (document.querySelectorAll('li[style="display: none;"]').length === cantidad){
          // resetFiltros()
          let contenido = document.querySelector('#contenido')
          let parrafo = document.createElement('p')
          parrafo.setAttribute('id', "p_texto")
          parrafo.textContent = "No hay mas elementos que mostrar. Click en Reset!";
          contenido.appendChild(parrafo)
          new_estado = ["Nombre", "Color", "Booleano"]
          console.log(new_estado);
          break;
        }
        else{
          elemento.style.display = "none"
        }
      }
    })
  }

  let boton = document.querySelector('#reset_filtro')
  boton.addEventListener('click', (e) => {
    resetFiltros()
    new_estado = ["Nombre", "Color", "Booleano"]
    console.log(new_estado);
  })
})
