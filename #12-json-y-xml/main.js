/*- Nombre
 * - Edad
 * - Fecha de nacimiento
 * - Listado de lenguajes de programación
 * Muestra el contenido de los archivos.
 * Borra los archivos.
*/

async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:5500/%2312-json-y-xml/normal.json")
    const json = await response.text(); //Aquí devuelves la información en formato texto

    console.log(JSON.parse(json)) //Conviertes el texto plano a objetos JSON
}

obtenerDatos();