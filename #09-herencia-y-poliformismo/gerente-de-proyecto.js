import { Empleado } from "./empleado.js";

export class GerenteProyecto extends Empleado {

    constructor(identificador, nombre) {
        super(identificador, nombre)
        this.empleadosACargo = []
    }

    aniadirEmpleados(empleado) {
        this.empleadosACargo.push(empleado)
    }

    verEmpleadosACargo() {
        console.log(`Empleados a cargo de ${this.nombre} : `)
        for (let i = 0; i < this.empleadosACargo.length; i++) {
            console.log(this.empleadosACargo[i])
        }
    }

}