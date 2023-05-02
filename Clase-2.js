// Importar todos los módulos
const saludo = require('./Clase-1.js'); // Importar función

// Importar algunos de los módulos
const { restar } = require('./Clase-1.js');

// Al importar trae una función y se debe acceder a ella
console.log(saludo.saludar('Albert'));
console.log(saludo.resumen('Albert', 23));
console.log(saludo.sumar('La suma da un total de ', 2, 6));

// Importación destructurada
console.log(restar('La resta da un total de ', 2, 6));

