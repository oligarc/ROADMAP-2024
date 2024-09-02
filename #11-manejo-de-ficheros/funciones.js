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

            const lineas = data.split('\n'); //Dividimos el archivo data por salto de líneas (devuelve un array)
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

export function actualizarProducto(fileName) { 
    const filePath = join('C:', 'Users', 'Oliver', 'Downloads', fileName);

    rl.question("Introduzca el nombre del producto que quieras actualizar: ", (nombreProducto) => {
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                throw error;
            }

            const lineas = data.split('\n');
            let productoEncontrado = false;
            const nuevasLineas = [];

            // Filtrar las líneas, actualizando el producto deseado
            for (const linea of lineas) {
                if (linea.trim() !== '') {
                    const producto = JSON.parse(linea);

                    if (producto.name.toLowerCase() === nombreProducto.toLowerCase()) {
                        productoEncontrado = true;
                        
                        rl.question("Introduzca el nuevo precio: ", (nuevoPrecio) => {
                            rl.question("Introduzca la nueva cantidad vendida: ", (nuevaCantidad) => {
                                // Actualizamos el producto
                                producto.precio = parseFloat(nuevoPrecio);
                                producto.cantidadVendida = parseInt(nuevaCantidad);

                                // Convertimos el producto actualizado a string JSON
                                nuevasLineas.push(JSON.stringify(producto));

                                // Añadimos las líneas restantes
                                nuevasLineas.push(...lineas.slice(lineas.indexOf(linea) + 1));

                                // Sobrescribimos el archivo con las líneas actualizadas
                                fs.writeFile(filePath, nuevasLineas.join('\n'), 'utf8', (error) => {
                                    if (error) {
                                        throw error;
                                    }
                                    console.log(`El producto "${nombreProducto}" ha sido actualizado.`);
                                    rl.close();
                                });
                            });
                        });
                    } else {
                        nuevasLineas.push(linea); // Mantenemos la línea si no coincide
                    }
                }
            }

            if (!productoEncontrado) {
                console.log("Producto no encontrado.");
                rl.close();
            }
        });
    });
}

export function borrarProducto(fileName) {

    const filePath = join('C:', 'Users', 'Oliver', 'Downloads', fileName);

    rl.question("Introduce el nombre del producto que quieras eliminar: ", (nombreProducto) => {

        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                throw error;
            }

            // Dividimos en líneas y filtramos el producto a eliminar
            const nuevasLineas = data.split('\n').filter(linea => {
                //Creamos un array separando por cada salto de línea y luego filter es un método de arrayas
                //en JS que crea un nuevo array con los elementos que cumplen la condición que pongamos
                if (linea.trim() !== '') {
                    const producto = JSON.parse(linea);
                    return producto.name.toLowerCase() !== nombreProducto.toLowerCase(); //Si esto es diferente (es decir, no coinciden, se envía al array los demás valores)
                }
                return false;
            }).join('\n'); //Unimos las líneas después del filtro y las vuelve a unir en un solo string separadas por un salto de línea

            // Sobrescribimos el archivo con las líneas restantes
            fs.writeFile(filePath, nuevasLineas, 'utf8', (error) => {
                if (error) {
                    throw error;
                }
                console.log(`Si existía, el producto "${nombreProducto}" ha sido eliminado.`);
                rl.close();
            });
        });
    });
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

export function ventaTotalPorProducto(fileName) {

    const filePath = join('C:', 'Users', 'Oliver', 'Downloads', fileName);
    let precioTotal = 0;

    fs.readFile(filePath, 'utf8', (error, data) => {

        if (error) {
            console.error('Error al leer el archivo:', error);
            return; // Sale de la función si hay un error
        }

        rl.question("Introduce el nombre del producto a buscar: ", (nombreProducto) => {

            const lineas = data.split('\n')

            for (const linea of lineas) {
                if (linea.trim() !== '') {
                    try {
                        const producto = JSON.parse(linea);

                        if (producto.name.toLowerCase() === nombreProducto.toLowerCase()) {
                            precioTotal = producto.precio * producto.cantidadVendida;
                            break;
                        }

                    } catch (jsonError) {
                        console.error('Error al parsear JSON:', jsonError);
                    }
                }
            }

            console.log("El total de las ventas del producto " + nombreProducto + " es de " + precioTotal + " euros.")

        })

    })

}


