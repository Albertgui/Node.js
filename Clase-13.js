// Ejercicio con promesas

// Creamos una constante que aleatoriamente diga el estatus
const estatusPedido = () => {
    const estatus = Math.random() < 0.5;
    return estatus;
}

// Creamos la petición con los handlers 
const miPedido = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            if (estatusPedido()){
                resolve("Pedido hecho con éxito");
            }
            else {
                reject("Pedido rechazado");
            }
        } catch (error) {
            reject("Ocurrió un error con su pedido");
        }
    }, 3000);
}).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});