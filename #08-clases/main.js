import { Impresora } from "./impresora.js";

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