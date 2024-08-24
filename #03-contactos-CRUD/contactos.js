export class Contacto{
    constructor(name,telefono){

        if(!/^\d+$/.test(telefono)){ //  ^\d+$ valida que esté compuesta únicamente por números. ^ y $ indican principio y final de la cadena
            // d+ asegura que todos los caracteres sean numéricos
            throw new Error("El número de teléfono debe estar compuesto únicamente por valores numéricos.")
        }
        this.name=name,
        this.telefono=telefono
    }

    getName(){
        return this.name
    }

    getTelefono(){
        return this.telefono
    }

    setName(newName){
        this.name=newName
    }

    setTelefono(newTelephon){
        this.telefono=newTelephon
    }
}