const arreglo = [] // arreglo declarado como constante. No podemos reasignar pero si podemos insertar valores al interior.
console.log(arreglo.length);

arreglo.push("Nicolas")
arreglo.push("Francisca")
arreglo.push({titulo: "Aleph", autor: "Borges"})
console.log(arreglo.length);
console.log(arreglo);


// NOTE: VAR, LET, const

var global_var = "Programador 1"

function reporte_actividad(){
  var actividad = "Codear"

  for(var i = 1; i < 3; i++){
    var mensaje = `${global_var} lo que hace es ${actividad}`
    if(global_var === "Programador 1"){
      console.log(`${mensaje}\n`);
      console.log(`contador ${i}`);
    }
  }
  // NOTE: podemos accesar la variable interna del loop aca.
  // Esto es posible debido a que cuando se declaran variable con var, se registra en el ambiente lexico mas cercano, ya sea el global o el
  // funcional. En este caso var i esta asociada ambiente lexico de la funcion declarada.
  console.log(`fuera del loop contador ${i}`);
}

reporte_actividad()

const PROGRMADOR_GLOBAL = "Programador 2"

function reportea_actividad_2(){
  const funcion = "programar javascript"

  for(let i = 0; i < 2; i++){
    let mensaje = `${PROGRMADOR_GLOBAL} lo que hace es ${funcion}`
    if(mensaje === "Programador 2 lo que hace es programar javascript"){
      console.log(mensaje);
    }
  }
}

reportea_actividad_2()


// NOTE: GENERADORES Y PROMESAS.

function* generadorData(data_recibida){
  let data_retornar = data_recibida
  let new_data = data_retornar.map((e) => {
    return e * 2
  })
  yield new_data
}

var datos = [1,2,3]
var datos_2 = generadorData(datos)
//var it = datos_2.next()
console.log(datos_2.next())


function* nombres(){
  yield "Nicolas"
  yield "Camilo"
  yield "Sylvia"
  yield "Francisca"
  yield "Jorge"
}

var nombres = nombres()
console.log(nombres.next());
console.log(nombres.next());
console.log(nombres.next());
console.log(nombres.next());
console.log(nombres.next());
console.log(nombres.next());


function* x_2(data){
  yield data.map((e) => { e*2})
  yield data.map((e) => { e*2})
}

var d = [1,2,3]
var gene = x_2(d)
console.log(gene.next());
console.log(gene.next());

function* numeros(){
  yield 1
  yield 2
  yield 3
  yield 4
}

var z = numeros()
let item
while(!(item = z.next()).done){
  console.log(item.value);
}

function* casas(){
  yield "casa 1"
  yield "casa 2"
}

function data_proceso(data){
  let d = data
  d.map((e) => e*2)
  let c = contador()
  return {data: d, contador: c.next().value }
}

function* contador(){
  let c = 0
  yield ++c
}

var numeros = [1,2,3,4]
let n = data_proceso(numeros)
console.log(n);
let n1 = data_proceso(numeros)
console.log(n1);

function* idGen(){
  let id = 0;
  while(true){
    yield ++id
  }
}

let idGenerator = idGen()

let id1 = idGenerator.next().value
let id2 = idGenerator.next().value
let id3 = idGenerator.next().value

console.log(id1);
console.log(id2);
console.log(id3);
