
//Programa que simule mecanismo adelante/atrás de diversas webs.
//Usuario podrá elegir qué hacer, añadir url, ir adelante, ir para atrás o salir del proceso
//Podría hacer un while true y un switch con opciones (una opción salir que salga del proceso)
//Continuar después de trabajar
//Al final opté por hacer funciones, me resulta más claro en el main

import readline from 'readline';
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stack = []
let posicionActual = -1;

export function mostrarOpciones(){

    console.log("1: Añadir una URL.")
    console.log("2: Ir hacia delante.")
    console.log("3: Ir hacia detrás.")
    console.log("4: Salir del programa.")
}

export function pedirOpciones(){

    mostrarOpciones();
    rl.question("Por favor, introduce la opción que quieras entre la 1 y 4: ", (opcion) => {

        if(opcion>=1 && opcion<=4){

        switch (opcion) {
            case '1':
                aniadirURL();
                break;
            case '2': irAdelante();
                break;
            case '3': irHaciaDetras();
                break;
            case '4': salir();
                break;
        }
    }else{
        console.log("Opción no válida.");
        pedirOpciones();
    }
    });
}

export function irAdelante(){

    if(posicionActual< stack.length-1){ //Si la posición actual es menor que el tamaño del stack -1, incrementamos la posición actual
        posicionActual++;
        console.log("Viajando a " +stack[posicionActual])
    }else{
            console.log("No hay más páginas hacia delante.")
    }

    pedirOpciones();

}

export function irHaciaDetras(){

    if(posicionActual<0){
        console.log("No existen más páginas en el buffer.")
    }else{
        posicionActual--;
        console.log("Viajando a " +stack[posicionActual]);
    }

    pedirOpciones();

}

export function aniadirURL(){
    rl.question("Por favor, ingrese la nueva URL: ", (url) =>{
        stack.push(url);
        console.log("Url añadida correctamente.");
        posicionActual = stack.length-1; //Cuando añades una URL la posición actual debe apuntar al último elemento
        pedirOpciones();
    });
}

export function salir(){
    console.log("Saliendo del programa...");
    process.exit();
}
