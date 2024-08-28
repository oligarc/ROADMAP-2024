import { Impresora } from "./impresora.js";
import { Pila } from "./pila.js";

let impresora1 = new Impresora("TurboClean3000",true,400,500);
impresora1.aniadirACola("leoMessi")
impresora1.aniadirACola("andresIniesta")
impresora1.aniadirACola("andresIniesta")
impresora1.aniadirACola("andresIniesta")
impresora1.aniadirACola("andresIniesta")
impresora1.aniadirACola("andresIniesta")
impresora1.aniadirACola("andresIniesta")
impresora1.imprimirTodaLaCola()

console.log(impresora1.getFoliosDisponibles())

let pila1 = new Pila()
pila1.apilarElemento("soad")
pila1.apilarElemento("rammstein")
pila1.apilarElemento("muse")
pila1.apilarElemento("metallica")

let pruebaStack = pila1.elementosRetornados()
for (let element of pruebaStack) {
    console.log(element)
}