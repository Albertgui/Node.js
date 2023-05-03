// Promesas en JavaScript

/* Una promesa en JavaScript es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. Las promesas se utilizan para manejar operaciones asíncronas en JavaScript, como solicitudes de red, operaciones de entrada/salida, etc.

Una promesa tiene tres estados posibles:

Pendiente (pending): Cuando una promesa se crea, su estado es pendiente. Esto significa que la operación asincrónica aún no se ha completado.
Resuelta (fulfilled): Una promesa se resuelve cuando la operación asincrónica se completa con éxito. En este caso, la promesa devuelve el resultado de la operación.
Rechazada (rejected): Una promesa se rechaza cuando ocurre un error o excepción durante la operación asincrónica. La promesa devuelve el motivo del error o excepción.
Las promesas permiten manejar operaciones asincrónicas de manera más fácil y legible en JavaScript, evitando el anidamiento excesivo de funciones de devolución de llamada (callback hell). Además, las promesas también permiten encadenar múltiples operaciones asincrónicas de manera más sencilla y controlar los errores de manera más efectiva */

let promesaCumplida = false;

// Declaramos la promesa y manejamos el resolve o reject
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (promesaCumplida){
            resolve('Promesa cumplida');
        }
        else{
            reject('Promesa rechazada');
        }
    }, 3000);
}).then((valor) => {
    console.log(valor);
}).catch((valor) => {
    console.log(valor);
});