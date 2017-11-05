document.addEventListener('DOMContentLoaded', () => {
  console.log("Script cargado");

  var modelo = [
    {
      select: "nombres",
      data_target: undefined,
      active: false
    },
    {
      select: "colores",
      data_target: undefined,
      active: false
    },
    {
      select: "booleano",
      data_target: undefined,
      active: false
    }
  ]

  // Funcion que setea el modelo a los valores originales previo a su mutacion.
  function setupModelo(m, obj){
    // Si se selecciona la opcion Nombre volver todo el modelo a su estado inicial
    m.forEach((elemento) => {
      elemento.data_target = undefined
       elemento.active = false;
    })
    // else{
    //   m.forEach((elemento) => {
    //     elemento.data_target = undefined
    //     elemento.active = false
    //   })
    // }
    return m;
  }

  // NOTE: funcion que recibe un modelo y un objeto y cambia el estado.
  // El estado refleja en terminos teoricos la actual seleccion hecha.
  function changeOnOption(m, object){
    let new_modelo = m;
    //console.log(new_modelo)
    if(object.data_target === "Nombre" || object.data_target === "Color" || object.data_target === "Booleano"){
      return new_modelo
    }
    else{
      new_modelo.forEach((elem) => {
      if(elem.select === object.select && object.active){
        elem.data_target = object.data_target
        elem.active = object.active
        }
      })
    }
    return new_modelo;

  }

  // Generamos el evento.
  // var select_nombres = document.querySelector('#nombres');
  // select_nombres.addEventListener('change', (e) => {
  //   let modelo_interno = modelo
  //   // Objeto que le pasamos a la funcion changeOnOption
  //   var obj = {
  //     nombre: undefined,
  //     active: undefined
  //   }
  //   obj["nombre"] = e.target.value;
  //   obj["active"] = true;
  //   modelo_interno = setupModelo(modelo_interno, obj)
  //   // La funcion devuelve el nuevo modelo con la opcion active marcada para aquella que fue seleccionada
  //   let m = changeOnOption(modelo_interno, obj)
  //   //console.table(m)
  //   escribeEnElDom(m)
  //   // PARTE 3 => filtrar los contenidos.
  //   // 1 => seleccionar todos los elementos.
  //   var nombres = document.querySelectorAll('li[data-tipo="lista"]')
  //   //console.log(nombres)
  //   // 2 => crear una función que se complemente con el evento change.
  //   filtra_y_muestra(nombres, m);
  // })

  // Implementacion de escuchador de eventos mas generica.
  var selects = document.querySelectorAll('select');
  selects.forEach((select) => {
    select.addEventListener('change', (e) => {
      //console.table({"procedencia": e.target.id, "valor seleccionado": e.target.value})
      let modelo_interno = modelo
      let obj = {
        select: undefined,
        data_target: undefined,
        active: false
      }
      obj.select = e.target.id
      obj.data_target = e.target.value
      obj.active = true
      //console.table(obj)
      // seteamos algunas de las propiedades del obj dependiendo de donde venga el evento.
      modelo_interno = setupModelo(modelo_interno, obj)
      //console.table(modelo_interno)

      // NOTE: aca hay que tomar la decision de que si el target es Nombre o Color, que setee el modelo.
      let modelo_modificado = changeOnOption(modelo_interno, obj)
      console.table(modelo_modificado)
      //escribeEnElDom(modelo_modificado)

    })
  })
  //console.log(selects)

  function filtra_y_muestra(nombres, modelo){
    console.table(modelo)
    // 3 => iterar sobre el modelo. Si uno de los elementos tiene active true, entonces por ese elemnto se filtra.
    modelo.forEach((elemento) => {
      if(elemento.active){
        nombres.forEach((e) => {
          console.log(e.id)
          if(e.id !== elemento.nombre){
            e.style.display = "none"
          }
        })
      }
    })
  }

  // Funcion que escribe en el DOM
  function escribeEnElDom(new_modelo){
    var contenido = document.querySelector('#nombre')
    new_modelo.forEach((elem) => {
      if(elem.active){
        contenido.innerHTML = elem.data_target
      }
    })
  }

  // PARTE 2 => modifcaciones en el codigo modifican la vista.
  var boton = document.querySelector('#estado_actual_modelo')
  boton.addEventListener('click', (e) => {
    estadoActualModelo({b:"b"})
  })

  function estadoActualModelo(obj){
    // PASO 1 => funcion que muestra el estado actual del modelo.
    console.table(modelo)
    // PASO 2 => funcion que pasandole argumentos, cambia el estado actual del modelo
  }
})
