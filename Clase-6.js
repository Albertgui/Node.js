// Módulo fs

const fs = require('fs');

// readFile paara leer un archivo
console.log('Antes de leer el archivo');
fs.readFileSync('Clase-6.html', 'utf-8', (contenido, error) => {
    if (error) {
        throw error;
    }
    else {
        console.log(contenido)
    }
});
console.log('Despues de leer el archivo');

// rename para cambiar el nombre de un archivo
console.log('Antes de renombrar el archivo');
fs.renameSync('Clase-6.html', 'Clase-6v2.html', (error) => {
    if (error) {
        throw error;
    }
    else{
        console.log('Nombre cambiado exitosamente');
    }
});
console.log('Despues de renombrar el archivo');

// appendFile para agregar contenido al final de un archivo
console.log('Antes de actualizar el archivo');
fs.appendFileSync('Clase-6v2.html', '<p>Texto agregado</p>', (error) => {
    if (error) {
        throw error;
    } else {
        console.log('Archivo actualizado');
    }
});
console.log('Despues de actualizar el archivo');

// writeFile para reemplazar todo el contenido del archivo
console.log('Antes de reemplazar el archivo');
fs.writeFileSync('Clase-6v2.html', 'Contenido nuevo', (error) => {
    if (error) {
        throw error;
    } else {
        console.log('Contenido reemplazado con éxito');
    }
});
console.log('Despues de reemplazar el archivo');

// unlink para eliminar archivos
console.log('Antes de eliminar el archivo');
fs.unlinkSync('Prueba.html', (error) => {
    if (error) {
        throw error;
    } else {
        console.log('Archvo eliminado');
    }
});
console.log('Despues de eliminar el archivo');
