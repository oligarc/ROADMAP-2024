export class Animal{

    constructor(nombre,raza,peso,edad,altura){
        this.nombre=nombre,
        this.raza=raza,
        this.peso=peso,
        this.edad=edad,
        this.altura=altura
    }

    emitirSonido(){
        console.log("Sonido genérico de animal")
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }

    getRaza(){
        return this.raza;
    }

    setRaza(nuevaRaza){
        this.raza=nuevaRaza;
    }

    getPeso(){
        return this.peso;
    }

    setPeso(nuevoPeso){
        this.peso=nuevoPeso;
    }

    getEdad(){
        return this.edad;
    }

    setEdad(nuevaEdad){
        this.edad=nuevaEdad;
    }

    getAltura(){
        return this.altura;
    }

    setAltura(nuevaAltura){
        this.altura=nuevaAltura;
    }
}