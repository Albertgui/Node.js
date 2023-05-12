// Express

// Es un framework de Node.js para crear aplicaciones web y APIs de manera rápida y eficiente, y con una gran flexibilidad para adaptarse a diferentes necesidades

// CRUD: Operaciones básicas que se pueden realizar con información almacenada en una base de datos

// API: Es un tipo de interfaz de software que permite que 2 o más programas se comuniquen entre si 

const express = require('express');

// Creamos la aplicación de Express
const app = express();
const {infoCursos} = require('./Cursos.js');

//Routers
const routerProg = express.Router();
app.use('/api/cursos/programacion', routerProg);

// Routing
app.get('/', (req, res) =>{
    res.send('Mi primer servidor con Node.js y Express');
});

// Info general
app.get('/api/cursos', (req, res) => {
    res.send(infoCursos);
});

// Info programación
routerProg.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

// Info matematicas
app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});

// Query params programación
routerProg.get('/:lenguaje', (req, res) => {
    
    let lenguaje = req.params.lenguaje;
    let resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados.length === 0) {
        return res.status(404).send(`No se encontró el curso: ${lenguaje}`);
    }

    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)))
    }

    res.send(JSON.stringify(resultados));

});

// Query params mátematicas
app.get('/api/cursos/matematicas/:tema', (req, res) => {

    let tema = req.params.tema;
    let resultado = infoCursos.matematicas.filter(temas => temas.tema === tema);

    if(resultado.length === 0) {
        return res.status(404).send(`No se encontró el curso: ${tema}`);
    }

    res.send(JSON.stringify(resultado));

});

// Query params por nivel accedemos a los campos para buscar
routerProg.get('/:lenguaje/:nivel', (req, res) => {

    let lenguaje   = req.params.lenguaje;
    let nivel = req.params.nivel;
    let resultado = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultado.length === 0) {
        return res.status(404).send(`No se encontró el curso: ${lenguaje} en el nivel buscado: ${nivel}`);
    }

    res.send(JSON.stringify(resultado));

});

// Asignamos el puerto
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});

