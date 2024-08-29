import { Animal } from "./animal.js";

export class Gato extends Animal{

    constructor(nombre,raza,peso,edad,altura){
        super(nombre,raza,peso,edad,altura)
    }
    
    emitirSonido(){
        console.log("Miau miau")
    }
}