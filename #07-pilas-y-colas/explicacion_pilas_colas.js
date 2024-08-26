
// Pilas/Stack (LIFO)
//Las pilas o stacks siguen el patrón Last In, First Out, es decir, último en entrar es el primero en salir.

let stack = [] //Tengo una pila vacía (en realidad es una lista)
stack.push("Juan","MariaJosé") //Añado cosas a mi stack, el último en entrar es MariaJosé
console.log(stack) //Comprobación de que esto sea realmente así

stack.pop() //Elimina el último elemento, por eso es LIFO
console.log(stack) //Comprobación de que esto sea realmente así
// Claro, esto podemos hacerlo porque las listas son más complejas y cuentan con mecanismos FIFO y LIFO 
//Pero en realidad debería ser así:

delete stack[stack.length-1] //Aquí es más lógico y no estás usando métodos definidos, buscas el último elemento


// Cola /Queue (FIFO)
// En este caso First In, First Out. El primero en entrar es el primero en salir

let queue = []
queue.push(1,2,3)
//Nos va a ocurrir una cosa parecida, si queremos simular un FIFO o queue usaremos:
queue.pop(0) //Le pasamos la primera posición, FIFO
console.log(queue)


