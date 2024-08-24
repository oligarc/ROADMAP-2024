//Palíndromo, palabra que se lee igual de izquierda a derecha y de derecha a izquierda
//Por ejemplo, oso, salas y radar

//Primero lo hago a modo de función simple, sin pedir entrada de datos al usuario

export function palabraPalindroma(palabra){

    let nuevaPalabra = ""

    for(let i=palabra.length-1;i>=0;i--){
        nuevaPalabra+=palabra[i]
    }

    if(nuevaPalabra === palabra){
        return true;
    }else{
        return false;
    }

}

let palabraEjemplo = "salas"
let esPalindroma = palabraPalindroma(palabraEjemplo)
console.log(esPalindroma)

//Ahora con entrada de datos al usuario

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function palabraPalindromaEntradaUsuario(){

    rl.question("Por favor, ingrese la palabra que quiera evaluar: ", (palabraUsuario) => {

        let nuevaPalabra = ""
        for(let i=palabraUsuario.length-1;i>=0;i--){
            nuevaPalabra+=palabraUsuario[i]
        }

        if(nuevaPalabra === palabraUsuario){
            console.log(`La palabra ${palabraUsuario} es palíndroma.`)
        }else{
            console.log(`La palabra ${palabraUsuario} no es palíndroma.`)
        }
    })
}

//Un anagrama es una palabra que se forma con la combinación de las silabas
//No hace falta que exista en el diccionario la palabra
//Se piden dos palabras y a ver si es posible que de una a otra se pueda crear. Por ejemplo perro y gato (no se podría)

export function sonAnagramas(palabra1,palabra2){

    palabra1 = palabra1.toLowerCase();
    palabra2 = palabra2.toLowerCase();

    if(palabra1.length !== palabra2.length){
        return false
    }

    let palabraOrdenada1 = palabra1.split('').sort().join('');
    let palabraOrdenada2 = palabra2.split('').sort().join('');

    return palabraOrdenada1 === palabraOrdenada2
}

//Ahora pidiendo las dos palabras al usuario

export function sonAnagramasPedidoAlUsuario(){
    rl.question("Ingrese la primera palabra: ", (palabra1) =>{
    rl.question("Ingrese la segunda palabra: ", (palabra2) => {

        let esAnagrama = true
        if(palabra1.length !== palabra2.length){
            esAnagrama = false;
        }

        let palabraOrdenada1 = palabra1.split('').sort().join('');
        let palabraOrdenada2 = palabra2.split('').sort().join('');

        if(palabraOrdenada1 === palabraOrdenada2){
            esAnagrama = true
        }else{
            esAnagrama = false
        }

        if(esAnagrama){
            console.log(`Las palabras ${palabra1} y ${palabra2} son anagramas.`)
        }else{
            console.log(`Las palabras ${palabra1} y ${palabra2} no son anagramas.`)
        }

    })
    })
}

//Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces

export function esIsograma(palabra){

    let contadorLetras={}; //Objeto vacío que almacena cada letra como clave y número de veces que aparece como valor
    for(let i=0;i<palabra.length;i++){

        let letra = palabra[i].toLowerCase();

        //Si la letra ya existe, incrementamos
        if (contadorLetras[letra]) {
            contadorLetras[letra]++;
        } else {
            // Si no está, la inicializamos con 1
            contadorLetras[letra] = 1;
        }
    }

    let ocurrenciasReferencia = contadorLetras[palabra[0].toLowerCase()]; //Tomas como referencia el numero de ocurrencias de la primera letra

    // Verificamos si todas las letras tienen el mismo número de ocurrencias
    for (let letra in contadorLetras) {
        if (contadorLetras[letra] !== ocurrenciasReferencia) {
            return false; // Si alguna letra tiene diferente número de ocurrencias, no es un isograma
        }
    }

    return true; // Si todas las letras tienen el mismo número de ocurrencias, es un isograma
}

export function esIsogramaPedidoAlUsuario(){

    let esIsograma=true;
    rl.question("Ingrese la palabra o frase que quiera evaluar: ", (palabra) =>{

        let contadorLetras = {};

        for(let i=0;i<palabra.length;i++){
            let letra = palabra[i].toLowerCase();

            if(contadorLetras[letra]){
                contadorLetras[letra]++;
            }else{
                contadorLetras[letra] = 1;
            }
        }

        let ocurrenciasReferencia = contadorLetras[palabra[0].toLowerCase()];
        for (let letra in contadorLetras) {
            if (contadorLetras[letra] !== ocurrenciasReferencia) {
                esIsograma=false
                break;
            }
        }

        if(!esIsograma){
            console.log(`La palabra ${palabra} no es un isograma.`)
        }else{
            console.log(`La palabra ${palabra} es un isograma.`)
        }

    })
}

esIsogramaPedidoAlUsuario()

