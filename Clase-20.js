// Routing en Node.js

// Routing es manejar las solicitudes del clientes en base a ciertos criterios principales que son el método y la ruta

const http = require('http');
const cursos = require('./Clase-20v2.js');      // Importamos los cursos

// Creamos el servidor
const servidor = http.createServer((req, res) => {
    const {method} = req;

    switch (method) {

        // En caso de ser una petición GET retornamos la función
        case 'GET':
            return manejarGET(req, res);

        // En caso de ser una petición POST retornamos la función 
        case 'POST':    
            return manejarPOST(req, res);

         // En caso de ser una petición PUT retornamos la función
        case 'PUT': 
            return manejarPUT(req, res);
        
        // En caso de ser una petición DELETE retornamos la función
        case 'DELETE': 
            return manejarDELETE(req, res);

        // En caso de no poder manejar la petición
        default:
            res.statusCode = 501;
            res.end(`El método usado no puede ser manejado por el servidor: ${method}`);
    }

});

// Creamos una función para manejar la solicitud GET
function manejarGET(req, res){

    // Guardamos la URL
    const path = req.url;

    // Creamos las rutas
    if (path === '/') {
        res.statusCode = 200;
        return res.end('Bienvenido a mi primer servidor y API creado con Node.js');
    }
    else if (path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    }
    else if (path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }
    else if (path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));
    }
    else {
        res.statusCode = 404;
        return res.end("ERROR: Petición GET rechazada");
    }

}

// Creamos una función para manejar la solicitud POST
function manejarPOST(req, res){

    // Guardamos la URL
    const path = req.url;

    // Hacemos la petición si la ruta coincide
    if(path === '/cursos/programacion'){
        res.statusCode = 200;
        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });
        req.on('end', () => {
            console.log(cuerpo);
            cuerpo = JSON.parse(cuerpo);
            res.end("El servidor recibió la petición POST para la ruta /cursos/programacion");
        });

        //return res.end("El servidor recibió la petición POST para la ruta /cursos/programacion");
    }
    else {
        res.statusCode = 404;
        return res.end("ERROR: Petición POST rechazada");
    }

}

// Creamos una función para manejar la solicitud PUT
function manejarPUT(req, res){

    // Guardamos la URL
    const path = req.url;

    // Hacemos la petición si la ruta coincide
    if (path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end("Petición PUT hecha con éxito");
    }
    /*else {
        res.statusCode = 404;
        return res.end("ERROR: Petición PUT rechazada"); 
    }*/

}

// Creamos una función para manejar la solicitud DELETE
function manejarDELETE(req, res){

    // Guardamos la URL
    const path = req.url;

    // Hacemos la petición si la ruta coincide
    if (path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end("Petición DELETE hecha con éxito");
    }
    else if (path === '/cursos/matematicas'){
        res.statusCode = 404;
        return res.end("ERROR: Petición DELETE rechazada para la ruta cursos/matematicas");
    }
    else {
        res.statusCode = 404;
        return res.end("ERROR: Petición DELETE rechazada");
    }
}

// Escuchamos el puerto
const PORT = 3002;
servidor.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
