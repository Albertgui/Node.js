function saludar(nombre){
    return `Hola ${nombre}`;
}

function resumen(nombre, edad){
    return `Hola ${nombre}, tienes ${edad} años`;
}

function sumar(desc ,n1, n2){
    return `${desc}= ${n1 + n2}`;
}

function restar(desc ,n1, n2){
    return `${desc}= ${n1 - n2}`;
}

// Exportar función
module.exports.saludar = saludar; /* <- Objeto */ 
module.exports.resumen = resumen; /* <- Objeto */ 
module.exports.sumar = sumar; /* <- Objeto */


// Otra forma de exportar
module.exports = {
    saludar: saludar,
    resumen: resumen,
    sumar: sumar,
    restar: restar
}