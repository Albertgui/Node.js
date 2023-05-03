// Primer servidor con Node.js

const http = require('http');

// Creamos el servidor
const servidor = http.createServer((req, res) => {
    // Proceso
    console.log('Solicitud nueva en el servidor');
    res.end('Hola mundo');
});

// Le pasamos el puerto donde se va a escuchar
const port = 3000;
servidor.listen(port, () => {
    console.log(`Servidor escuchando en el puerto: ${port}`);
});