import readline from 'readline';
import { Contacto } from './contactos.js';

// Crear la interfaz readline
//Cuando en un mismo programa uses más de una vez la interfaz readline, sólo la tienes que declarar en un fichero.
//Si por ejemplo lo duplicáramos en el main.js, al pedir los datos por teclado, los caracteres se duplicarian
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let setPrueba = new Set()

export function mostrarMenu() {
    console.log("\nElige una de las siguientes opciones.");
    console.log("1: Inserta un nuevo contacto.");
    console.log("2: Borra un contacto.");
    console.log("3: Busca un contacto.");
    console.log("4: Actualiza un contacto.");
    console.log("5: Mostrar todos los contactos.")
    console.log("6: Borrar toda la agenda.")
    console.log("7: Salir.");
}

export function pedirOpcion() {
    mostrarMenu();
    rl.question("Ingresa el número de opción: ", (opcion) => { //Esta es la forma de declarar un rl.question
        //La variable, en este caso opcion tiene que ir entre parentesis y no hace falta declararla antes
        if (opcion >= '1' && opcion <= '7') {
            switch (opcion) {
                case '1': ingresarContacto(); 
                break;
                case '2': borrarContacto(); 
                break;
                case '3': buscarContacto();
                break;
                case '4': actualizarContacto();
                break;
                case '5': mostrarAgendaCompleta();
                break;
                case '6': borrarAgendaCompleta();
                break;
                case '7': salir(); 
                break;
                default: console.log("Opción no válida."); 
                pedirOpcion(); 
                break;
            }
        } else {
            console.log("Opción no válida. Por favor elige un número de opción válida.");
            pedirOpcion();
        }
    });
}

export function ingresarContacto() {
    rl.question("Ingrese el nombre del contacto: ", (nombre) => {
        rl.question("Ingrese el teléfono del contacto: ", (telefono) => {
            try {
                let contacto = new Contacto(nombre, telefono);
                setPrueba.add(contacto);
                console.log(`Contacto agregado: ${contacto.getName()}, ${contacto.getTelefono()}`);
            } catch (error) {
                console.error(error.message);
            }
            pedirOpcion(); // Volver al menú después de agregar
        });
    });
}

export function borrarContacto() {
    rl.question("Ingrese el nombre del contacto a eliminar: ", (nombre) => {
        rl.question("Ingrese el número de teléfono del contacto a eliminar: ", (telefono) => {
            let contactoEncontrado = false;
            for (let contacto of setPrueba) {
                if (contacto.getName() === nombre && contacto.getTelefono() === telefono) {
                    setPrueba.delete(contacto);
                    console.log("Contacto eliminado:", contacto);
                    contactoEncontrado = true;
                    break; // Salir del bucle después de eliminar
                }
            }
            if (!contactoEncontrado) {
                console.log("Contacto no encontrado.");
            }
            pedirOpcion(); // Volver al menú después de intentar eliminar
        });
    });
}

export function buscarContacto(){
    rl.question("Ingrese el número de teléfono: ", (telefono) =>{
        let contactoEncontrado=false;
        for (let contacto of setPrueba) {
            if(contacto.getTelefono() === telefono){
                console.log(`El teléfono ${telefono} pertenece a ${contacto.getName()}`)
                contactoEncontrado=true;
                break;
            }
        }

        if(!contactoEncontrado){
            console.log("No tenemos a nadie con el teléfono " +telefono)
        }

        pedirOpcion();
    })
}

export function actualizarContacto(){
    rl.question("Ingresa el nombre del contacto: ", (nombre) =>{
        let contactoEncontrado = false;
        for (let contacto of setPrueba) {
            if(contacto.getName() === nombre){
                rl.question("Ingresa el nuevo número de teléfono: ", (telefono) => {
                    contacto.setTelefono(telefono);
                    console.log(`Se ha actualizado el contacto. Nombre ${nombre} y nuevo número de teléfono ${telefono}`)
                    contactoEncontrado=true;
                    pedirOpcion();
                });
                return;
            }
        }

        if(!contactoEncontrado){
            console.log(`No tenemos en la agenda nadie con el nombre ${nombre}`)
            pedirOpcion();
        }

        pedirOpcion();
    })
}

export function borrarAgendaCompleta(){
    setPrueba.clear()
    pedirOpcion()
}

export function mostrarAgendaCompleta(){
    for (let contacto of setPrueba) {
        console.log(`Nombre: ${contacto.getName()}, teléfono: ${contacto.getTelefono()}`)
    }

    pedirOpcion()
}

export function salir(){
    console.log("Saliendo del programa")
    process.exit()
}