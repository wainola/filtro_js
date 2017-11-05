// Ejemplo de generador al cual le podemos pasar datos.

function* GeneradorNinja(accion){
  let impostor = yield (`nombre: Hattori accion: ${accion}`)
  var z = yield (`el impostor es  ${impostor}`)
  yield `el valor enviado es ${z}`
  return `${accion} y ademas ${z} con el impostor ${impostor}`
}

// Generamos el objeto para poder comenzar la inicialización del generador.
const ninjaIterador = GeneradorNinja("Asesinar")
const r1 = ninjaIterador.next().value // Esto inicializa el iterador
console.log(r1);
const r2 = ninjaIterador.next("Hanzo").value
console.log(r2);
const r3 = ninjaIterador.next("Nicolas").value
console.log(r3);
const r4 = ninjaIterador.next("Camilo").value
console.log(r4);

function* foo(x){
  var y = 2 * (yield (x+1))
  var z = yield(y/3)
  return (x+y+z)
}

var it = foo(5)

console.log(it.next()); // resuelve x+1 y queda esperando
console.log(it.next(12)); // recibe 12, resuelve 12*2 y asigna a y. 24 lo resuelve en y/3
console.log(it.next(13)); // y = 24 + z = 13. Total = 37 + 5 = 42



// Promesas.
const ninjaPromise = new Promise((resolve, reject) => {
  resolve(`Nicolas ninja javascript`)
  reject(`Un error ocurrio amigo`)
})

console.log(ninjaPromise.then(ninja => {
  console.log(ninja);
}, err => {
  console.log(err);
}));

function saludo(){
  console.log("hola");
}

function* exec(){
  while(true){
    yield saludo()
  }
}

let f = exec()
f.next().value
f.next().value
f.next().value

function dobles(data){
  let n_d = []
  data.forEach((e) =>{
    n_d.push(e*2)
  })
  console.log(n_d);
}

function* exec1(data_rec){
  while(true){
    yield dobles(data_rec)
  }
}

let n = [1,2,3]
let q = exec1(n)
q.next()
q.next()
