import { error } from 'console';
import * as fs from 'fs'; //Importas todas las funciones de filesystem
import { join } from "path";

export function crearArchivo(path,fileName){

    path = join('C:', 'Users', 'Oliver', 'Downloads', fileName)

    fs.access(path,fs.constants.F_OK,(error)=>{

        if(error){
            console.log("El archivo no existe. Creando archivo...")
            fs.writeFile(path,"",(error) =>{
                if(error){
                    throw error;
                }
                console.log("Archivo creado con éxito.")
            })
        }else{
            console.log(`Ya existe un archivo con el nombre ${fileName}`)
        }
    })

}
export function escribirArchivo(path,newText){

    fs.appendFile(path,newText,(error)=>{
        if(error){
            throw error;
        }
        console.log("Texto añadido correctamente.")
    })

}

export function leerArchivo(path){

    fs.readFile(path,(error,data) =>{ //A la función readFile hay que pasarle la ruta y luego una función callback con el error
        //y data, que es el contenido del archivo
        if(error){
            throw error;
        }

        console.log(data.toString()) //data hay que pasarlo a String, sino nos manda su buffer
    })
}

export function borrarArchivo(path){

    fs.unlink(path,(error) =>{
        if(error){
            throw error;
        }

        console.log("El archivo ha sido eliminado con éxito.")
    })
}