import { Empleado } from "./empleado.js";

export class Programador extends Empleado{

    constructor(identificador,nombre,lenguaje= "Java"){ //Por defecto Java es el lenguaje de los programadores
        super(identificador,nombre)
        this.lenguaje=lenguaje;
    }

    getLenguaje(){
        return this.lenguaje;
    }

    setLenguaje(nuevoLenguaje){
        this.lenguaje=nuevoLenguaje;
    }

    programar(){
        console.log(`El cabrón de ${this.nombre} está usando CHATGPT`)
    }

    


}