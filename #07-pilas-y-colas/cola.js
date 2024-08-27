//Simular mecanismo impresora que recibe documentos y la palabra imprimir imprime un elemento de la cola, el resto se interpreta como
//nombre de documentos

//First In, First Out.
//Cuando se imprima el primero habrá que popearlo
import { rl } from "./pila.js";

let queue = []

export function preguntar() {
    rl.question("Introduce nombre de elemento, imprimir, ver o salir: ", (palabra) => {

        if (palabra.toLowerCase() === "imprimir") {
            if (queue.length > 0) {
                console.log(queue[0]);
                queue.shift();
            } else {
                console.log("No hay elementos en la cola.");
            }
        } else if (palabra.toLowerCase() === "salir") {
            process.exit();
        } else if(palabra.toLowerCase() === "ver"){
            console.log(queue);
        }else {
            queue.push(palabra);
        }

        preguntar();
    });
}

preguntar();

