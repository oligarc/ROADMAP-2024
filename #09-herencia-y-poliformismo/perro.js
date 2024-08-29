import { Animal } from "./animal.js";

export class Perro extends Animal{

    constructor(nombre,raza,peso,edad,altura){
        super(nombre,raza,peso,edad,altura)
    }
    
    emitirSonido(){
        console.log("Woof woof")
    }

}