//Paso por valor

let x = 12; //Bloque en memoria que tiene el valor 12
let y = 25; //Bloque en memoria que tiene el valor 25

function pasoValor(a, b) {
    return [b, a]
}

let [nuevoValorX, nuevoValorY] = pasoValor(x, y)

console.log(x)
console.log(y)
console.log(nuevoValorX)
console.log(nuevoValorY)

let z = 5;
function cambiarValor(a) {
    a = 20
    return a
}

console.log(cambiarValor(z))
console.log(z) //Aquí se puede ver que z sigue siendo 5 porque sólo modifica la copia del valor original

//Paso por referencia


function pasoPorReferencia(obj1,obj2){
    let temp = obj1.valor;
    obj1.valor= obj2.valor;
    obj2.valor = temp;
}

let objeto1 = {valor:5}
let objeto2 = {valor:80}

//Valores antes de pasar por referencia
console.log(objeto1.valor)
console.log(objeto2.valor)

pasoPorReferencia(objeto1,objeto2)

let objeto3 = {valor:objeto1.valor}
let objeto4 = {valor:objeto2.valor}

//Valores después de pasar por referencia
console.log(objeto3.valor)
console.log(objeto4.valor)


//Valor:
//Tienes una variable, si creas una función que le pases esa variable, ésta trabaja con una copia de la variable original por lo que
//no se modifica el valor de la variable original

//Referencia
//Tienes un objeto(por ejemplo con una propiedad nombre) y le pasas a la función ese objeto (en realidad la referencia) pues esa referencia
//apunta al valor original y los cambios que se hagan dentro de la función sí se modifican al valor original