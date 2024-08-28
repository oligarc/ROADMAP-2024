//Operaciones para añadir, eliminar(imprimir), retornar el número de elementos e imprimir todo su contenido

export class Impresora {

    constructor(modelo, aColor, numeroFolios,capacidadMaxima) {
        this.modelo = modelo,
            this.aColor = aColor, //Valor booleano. True significa que es a color
            this.foliosDisponibles = numeroFolios,
            this.capacidadMaxima=capacidadMaxima,
            this.queue = []
    }

    aniadirACola(nombreDocumento) {
        this.queue.push(nombreDocumento);
    }

    imprimir() {

        if (this.queue.length === 0) {
            console.log("La cola de impresión está vacía.")
        } else {
            console.log(this.queue[0])
            this.queue.shift()
            this.foliosDisponibles = this.foliosDisponibles - 1;
        }

    }

    imprimirTodaLaCola(){
        if(this.queue.length === 0){
            console.log("La cola de impresión está vacía.")
        }else{
            for(let i=0;i<this.queue.length;i++){
                console.log(this.queue[i])
                this.queue.shift
                this.foliosDisponibles = this.foliosDisponibles -1
            }
        }
    }

    verContenido() {

        if (this.queue.length === 0) {
            console.log("No tenemos documentos en la cola")
        } else {
            for (let element of this.queue) {
                console.log("Elemento: " + element)
            }
        }

    }

    recargarImpresora(numeroFolios) {

        const espacioDisponible = this.capacidadMaxima-this.foliosDisponibles

        if(numeroFolios<=espacioDisponible){
            this.foliosDisponibles+=numeroFolios
            console.log(`Se ha recargado la impresora con ${numeroFolios}. La impresora cuenta en este momento con un total de ${this.foliosDisponibles} folios.`)
        }else{
            this.foliosDisponibles=this.capacidadMaxima //La cantidad de folios disponibles pasa a ser la de la capacidad máximo
            const foliosSobrantes = numeroFolios - espacioDisponible //Sacas los folios que sobran con el numero de folios a recargar y el espacioDisponible
            console.log(`Se recargaron ${espacioDisponible} folios. La impresora está llena. Sobran ${foliosSobrantes} folios.`)
        }

    }

    getModelo() {
        return this.modelo
    }

    setModelo(newModelo) {
        this.modelo = newModelo
    }

    getAColor() {
        return this.aColor
    }

    setAColor(newBooleanValue) {
        this.aColor = newBooleanValue
    }

    getFoliosDisponibles(){
        return this.foliosDisponibles
    }

}