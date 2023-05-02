// Módulo Process 

// Process para ver los argumentos que se pasan en consola mediante un array
for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);  
}

// Process para ver cuanta memoria se usa
console.log(process.memoryUsage());