// Nodemon

// Es una herramienta que reinicia la aplicación de Node.js cuando detecta algún cambio

const http = require('http');
const server = http.createServer((req, res) =>{
    res.end('Hola, server')
});

const PORT = 3003;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});