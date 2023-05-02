// Módulo Timers

function mostrarTema(tema){
    console.log(`Estoy aprendiendo: ${tema}`);
}

// setTimeout para ejecutar código luego de un número específico de milisegundos
setTimeout(mostrarTema, 3000, 'Node.js'); // Primero se pasa la función, luego el retraso y por ultimo el argumento

function sumar(a, b){
    console.log(a + b);
}

setTimeout(sumar, 5000, 6, 5);

// setInmediate para ejecutar código asíncrono en la próxima iteración del ciclo de eventos

// setInterval para ejecutar código un número infinito de veces con un retraso especificos de milisegundos 
setInterval(mostrarTema, 1500, 'Módulo Timers'); // Primero se pasa la función, luego el intervalo y por ultimo los argumentos
setInterval(sumar, 2000, 31, 42);