import { error } from 'console';
import * as fs from 'fs'; //Importas todas las funciones de filesystem
import { join } from "path";
import readline from 'readline';
import { Producto } from './producto.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function crearArchivo(path, fileName) {

    path = join('C:', 'Users', 'Oliver', 'Downloads', fileName)

    fs.access(path, fs.constants.F_OK, (error) => {

        if (error) {
            console.log("El archivo no existe. Creando archivo...")
            fs.writeFile(path, "", (error) => {
                if (error) {
                    throw error;
                }
                console.log("Archivo creado con éxito.")
            })
        } else {
            console.log(`Ya existe un archivo con el nombre ${fileName}`)
        }
    })

}
export function escribirArchivo(path, newText) {

    fs.appendFile(path, newText, (error) => {
        if (error) {
            throw error;
        }
        console.log("Texto añadido correctamente.")
    })

}

export function leerArchivo(path) {

    fs.readFile(path, (error, data) => { //A la función readFile hay que pasarle la ruta y luego una función callback con el error
        //y data, que es el contenido del archivo
        if (error) {
            throw error;
        }

        console.log(data.toString()) //data hay que pasarlo a String, sino nos manda su buffer
    })
}

export function borrarArchivo(path) {

    fs.unlink(path, (error) => {
        if (error) {
            throw error;
        }

        console.log("El archivo ha sido eliminado con éxito.")
    })
}

export function aniadirProducto(fileName) {

    const path = join('C:', 'Users', 'Oliver', 'Downloads', fileName)

    rl.question("Escribe el nombre del producto: ", (nombreProducto) => {
        rl.question("Indica su precio: ", (precioProducto) => {
            rl.question("Indica la cantidad vendida: ", (cantidadVendida) => {
                let producto = new Producto(nombreProducto, cantidadVendida, precioProducto)
                //Convertimos el objeto a un string en formato JSON
                let productoString = JSON.stringify(producto);

                fs.appendFile(path, productoString + `\n`, (error) => {

                    if (error) {
                        throw error;
                    }

                    console.log("Producto añadido correctamente.")

                })
            })
        })
    })
}

export function consultarProducto(fileName) {

    const path = join('C:', 'Users', 'Oliver', 'Downloads', fileName)

    rl.question("Introduzca el nombre del producto que quiera consultar: ", (nombreProducto) => {

        fs.readFile(path, 'utf8', (error, data) => { //El utf8 se utilzia para explicar a Node que se codifica con utf8 

            if (error) {
                throw error;
            }

            const lineas = data.split('\n'); //Dividimos el archivo data por salto de líneas
            let productoEncontrado = false;

            for (const linea of lineas) { //Recorremos todo el archivo

                if (linea.trim() !== '') { //Ignoramos líneas vacías
                    const producto = JSON.parse(linea); //Cada producto lo parseamos a objeto, ya que en este momento lo tenemos en formato String

                    //Aquí se usa las propiedades en lugar de los  métodos get porque al parsear conseguimos objetos simples y no instancias de la clase Producto
                    if (producto.name.toLowerCase() === nombreProducto.toLowerCase()) {
                        console.log(`Producto: ${producto.name}`)
                        console.log(`Precio: ${producto.precio}`)
                        console.log(`Cantidad Vendida: ${producto.cantidadVendida}`)
                        productoEncontrado = true;
                        process.exit();
                    }
                }

            }

            if (!productoEncontrado) {
                console.log("Producto no encontrado.")
                process.exit();
            }

        })

    })


}

export function actualizarProducto(fileName) { //Método que pasando nombre se actualice precio y cantidad vendida

    const path = join('C:', 'Users', 'Oliver', 'Downloads', fileName)

    rl.question("Introduzca el nombre del producto que quieras actualizar: ", (nombreProducto) => {

        fs.readFile(path, 'utf8', (error, data) => { //El utf8 se utilzia para explicar a Node que se codifica con utf8 

            if (error) {
                throw error;
            }

            const lineas = data.split('\n'); //Dividimos el archivo data por salto de líneas
            let productoEncontrado = false;

            for (const linea of lineas) { //Recorremos todo el archivo

                if (linea.trim() !== '') { //Ignoramos líneas vacías
                    const producto = JSON.parse(linea); //Cada producto lo parseamos a objeto, ya que en este momento lo tenemos en formato String

                    //Aquí se usa las propiedades en lugar de los  métodos get porque al parsear conseguimos objetos simples y no instancias de la clase Producto
                    if (producto.name.toLowerCase() === nombreProducto.toLowerCase()) {
                        rl.question("Introduzca el nuevo precio: ", (nuevoPrecio) => {
                            rl.question("Introduzca la nueva cantidad vendida: ", (nuevaCantidad) => {

                                producto.precio = nuevoPrecio;
                                producto.cantidadVendida = nuevaCantidad;
                                productoEncontrado = true;
                            })
                        })

                    }
                }

            }

            if (!productoEncontrado) {
                console.log("Producto no encontrado.")
            }

        })

    })


}

export function borrarProducto(fileName){

    const path = join('C:', 'Users', 'Oliver', 'Downloads', fileName);

    rl.question("Introduce el nombre del producto que quieras eliminar: ", (nombreProducto) =>{
        


    })

}


export function ventaTotal(fileName) {

    const filePath = join('C:', 'Users', 'Oliver', 'Downloads', fileName);
    let precioTotal = 0;

    fs.readFile(filePath, 'utf8', (error, data) => {
        
        if (error) {
            console.error('Error al leer el archivo:', error);
            return; // Sale de la función si hay un error
        }

        const lineas = data.split('\n');
        for (const linea of lineas) {
            if (linea.trim() !== '') { // Ignoramos líneas vacías
                try {
                    const producto = JSON.parse(linea);
                    precioTotal += (producto.precio * producto.cantidadVendida);
                } catch (jsonError) {
                    console.error('Error al parsear JSON:', jsonError);
                }
            }
        }

        console.log(`El precio de todas las ventas asciende a un total de ${precioTotal} euros.`);
    });
}


