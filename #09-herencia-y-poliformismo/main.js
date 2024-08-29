import { Animal } from "./animal.js";
import { Gato } from "./gato.js";
import { Perro } from "./perro.js";
import { Empleado } from "./empleado.js";
import { Gerente } from "./gerente.js";
import { GerenteProyecto } from "./gerente-de-proyecto.js";
import { Programador } from "./programador.js";


let animal1 = new Animal("Chiquirritrifusquis","Cipriano",8.5,4,0.8)
animal1.emitirSonido();

let perro1 = new Perro("Coco","Teckel",9,4,0.5)
perro1.emitirSonido();
console.log(perro1.getNombre())

let gato1 = new Gato("Petinto","Ni idea",4,12,0.75)
gato1.emitirSonido();
console.log(gato1.getNombre())

let gerente1 = new Gerente(1,"Juan");
let gerenteProyecto1 = new GerenteProyecto(4,"Francisco")
let programador1 = new Programador(2,"Pepe");
let programador2 = new Programador(3,"Mariano");
let programador3 = new Programador(5,"Emilio","Ruby");
let programador4 = new Programador(6,"Emiliano","PL/SQL");
let programador5 = new Programador(7,"Maximiliano","Python");
let programador6 = new Programador(8,"Maria","Typescript");
let programador7 = new Programador(9,"Mario","C++");
let programador8 = new Programador(10,"Marito","Javascript");

gerente1.aniadirEmpleados(programador1);
gerente1.aniadirEmpleados(programador2);
gerente1.aniadirEmpleados(programador3);
gerente1.aniadirEmpleados(programador4);
gerente1.aniadirEmpleados(programador5);
gerenteProyecto1.aniadirEmpleados(programador6);
gerenteProyecto1.aniadirEmpleados(programador7);
gerenteProyecto1.aniadirEmpleados(programador8);

gerente1.verEmpleadosACargo()
console.log("-------------------")
gerenteProyecto1.verEmpleadosACargo()


