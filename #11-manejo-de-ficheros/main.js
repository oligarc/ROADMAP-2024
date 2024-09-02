/*Desarrolla un programa capaz de crear un archivo que se llame como
 * tu usuario de GitHub y tenga la extensión .txt.
 * Añade varias líneas en ese fichero:
 * - Tu nombre.
 * - Edad.
 * - Lenguaje de programación favorito.
 * Imprime el contenido.
 * Borra el fichero.
*/

import { error } from "console";
import * as fs from 'fs'; //Importas todas las funciones de filesystem
import { join } from "path";
import * as funciones from "./funciones.js";
import { Producto } from "./producto.js";

const filePath = join('C:', 'Users', 'Oliver', 'Downloads', 'texto.txt') //esto es otra opción para pasar la ruta

//funciones.crearArchivo(filePath,"texto.txt")
//funciones.leerArchivo(filePath)

//Inicio programa complicado

/*Desarrolla un programa de gestión de ventas que almacena sus datos en un 
 * archivo .txt.
 * - Cada producto se guarda en una línea del archivo de la siguiente manera:
 *   [nombre_producto], [cantidad_vendida], [precio].
 * - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
 *   actualizar, eliminar productos y salir.
 * - También debe poseer opciones para calcular la venta total y por producto.
 * - La opción salir borra el .txt.
 * 
 * */

//Creamos el archivo gestión de ventas
let path = "C:\Users\Oliver\Downloads\GestionDeVentas.txt"

//funciones.crearArchivo("C:\Users\Oliver\Downloads","GestionDeVentas.txt");

let producto1 = new Producto("Resident Evil HD Remaster",25,2.99); //Producto creado pero sin más porque el ejercicio te pide que lo introduzcas por consola

//funciones.aniadirProducto("GestionDeVentas.txt")
//funciones.consultarProducto("GestionDeVentas.txt")
funciones.ventaTotal("GestionDeVentas.txt")






/*fs.access(filePath,fs.constants.F_OK,(error)=>{ //acess verifica que el archivo exista o no, le pasas ruta
    //fs.constants.F_OK es un modo que comprueba la existencia, si el archivo no existe lanza el error

    if(error){

        //Si salta el error el archivo no existe y se crea uno nuevo
        console.log("El archivo no existe, se creará uno nuevo.")
        fs.writeFile(filePath,"Esto es una prueba",(error) =>{
            if(error){
                throw error;
            }
            console.log("Archivo creado con éxito.")
        })

    }else{

        //Sino, escribimos en él.
        //El problema de este enfoque es que no hace las dos cosas al mismo tiempo
        //Es decir, si no existe lo crea pero no vuelve a escribir.

        fs.appendFile(filePath,"\nMe llamo Faustino\nMi lenguaje favorito es Javascript", (error) =>{
            if(error){
                throw error;
            }

            console.log("Texto añadido correctamente.")
        })

    }
})


*/


/*fs.writeFile("C:\\Users\\Oliver\\Downloads\\texto.txt","Esto es una prueba",(error) =>{ //writeFile primero toma la ubicación de la carpeta, lo último es el nombre del archivo
    //luego el contenido que va a escribir y por último una función callback de error

    if(error){
        throw error;
    }

    console.log("Archivo creado con éxito.")
});

fs.appendFile(filePath,"\nVeamos\nMe llamo Faustino\nMi lenguaje de programación favorito es Java",(error)=>{ //appendFile sirve para añadir más texto al archivo, pasamos la ruta, el contenido y capturamos error

    if(error){
        throw error;
    }

    console.log("Texto añadido correctamente.")

});

*/

/*fs.writeFile(filePath, '\nEste es otro texto añadido.', { flag: 'a' }, (error) => {
    if (error) {
        throw error;
    }
    console.log('Texto añadido al archivo con éxito.');
});

Esto es otra opción, no utilizas appendFile, usas writeFile pero utilizas flag:a para que añada contenido y no lo sobrescriba
*/




