// Encadenar promesas y async await

// Asíncrona
function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto}`);
        setTimeout(() => {
            if (producto === 'taza'){
                resolve('Ordenando -> taza');
            }
            else{
                reject('Este producto no está disponible');
            }
        }, 2000);
    });
}

// Función asíncrona que espera que haya el producto
function procesarPedido(respuesta){
    return new Promise(resolve => {
        console.log(`Procesando: ${respuesta}`);   
        setTimeout(() => {
            resolve('Gracias por su compra');
        }, 4000); 
    });
}

// Ver resultado de manera síncrona
ordenarProducto('taza').then(res => {
    console.log('Respuesta recibida, ' + res);
    return procesarPedido(res);
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

// Resultado de manera async/await
async function realizarPedido(producto){
    try {
        const respuesta = await ordenarProducto(producto);
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('taza');