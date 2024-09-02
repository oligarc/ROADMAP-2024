export class Producto{

    constructor(name,cantidadVendida,precio) {
        this.name=name,
        this.cantidadVendida=cantidadVendida,
        this.precio=precio

    }

    getName(){
        return this.name;
    }
    
    setName(newName){
        this.name=newName;
    }

    getCantidadVendida(){
        return this.cantidadVendida;
    }

    setCantidadVendida(newCantidad){
        this.cantidadVendida=newCantidad;
    }

    getPrecio(){
        return this.precio;
    }

    setPrecio(newPrecio){
        this.precio=newPrecio;
    }
}