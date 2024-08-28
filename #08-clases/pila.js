export class Pila{

    constructor(){
        this.stack=[]
    }

    apilarElemento(nombreElemento){
        this.stack.push(nombreElemento)
    }

    desapilarElemento(){
        this.stack.pop(this.stack.length-1)
    }

    verContenidoStack(){

        if(this.stack.length === 0){
            console.log("No hay naita")
        }else{
            for (let element of this.stack) {
                console.log("Elemento : " +element)
            }
        }
    }

    elementosRetornados(){

        let nuevoStack = []

        for(let i=0;i<this.stack.length;i++){
            nuevoStack[i] = this.stack[i]
        }

        return nuevoStack;
    }
}