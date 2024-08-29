export class Empleado{

    constructor(identificador,nombre){
        this.identificador=identificador, //El identificador debe ser un número
        this.nombre=nombre
    }

    getIdentificador(){
        return this.identificador;
    }

    setIdentificador(nuevoIdentificador){
        this.identificador=nuevoIdentificador;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }
}