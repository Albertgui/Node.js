// Introducción al formato JSON

const curso = require('./Clase-8.json');

// Un JSON se comporta como un objeto, se puede referir a su contenido
console.log(curso);
console.log(typeof(curso));
console.log(curso.aprobado);

// JSON de prueba
let info = {
    "titulo": "Aprendiendo JSON",
    "clase": "8",
    "temas": [
        "Javascript",
        "Node.js",
        "JSON"
    ],
    "aprobado": true
}

// Pasar de JSON a string
let infoString = JSON.stringify(info);
console.log(infoString);
console.log(infoString.titulo); // No dará el valor porque es un string 
console.log(typeof(infoString));

// Pasar de string a JSON
let infoJSON = JSON.parse(infoString);
console.log(infoJSON);
console.log(typeof(infoJSON));