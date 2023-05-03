// Módulo Events

const EventEmitter = require('events');

// Para crear una nueva clase para emitir eventos
const emisorProductos = new EventEmitter();

// Asociamos "Compra" con el evento si existe
emisorProductos.on('Compra', (total, num)=> {
    console.log(`Se realizó una compra por: ${total}$ en ${num} productos`);
});

// Emite el evento
emisorProductos.emit('Compra', 200, 5);
