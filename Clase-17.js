// Servidor: req y res

// Importamos el módulo HTTP
const http = require('http');

// Creamos el servidor
const servidor = http.createServer((req, res) => {
    // Mostramos las peticiones
    console.log('request -> ', req.url);            // Nos muestra la ruta de servidor
    console.log('request -> ', req.method);         // Nos muestra el método
    console.log('request -> ', req.headers);        // Nos muestra los headers
    
    // Mostramos las respuestas
    console.log('response -> ', res.statusCode);    // Nos muestra el código de la petición
    res.setHeader('Content-Type', 'application/json');
    console.log(res.getHeaders());                  // Nos muestra la cabecera  
    res.end('Servidor: 2');
});

// Configuramos el servidor
const port = 3001;
servidor.listen(port, () => {
    console.log(`Servidor escuchando en el puerto: ${port}`);
});