// Módulo URL

const miUrl = new URL('https://www.ejemplo.org/cursos/programacion?ordernar=vistas&nivel=1');

console.log(miUrl);
console.log(miUrl.hostname);                        // www.ejemplo.org
console.log(miUrl.pathname);                        // cursos/programacion
console.log(miUrl.searchParams);                    // { 'ordernar' => 'vistas', 'nivel' => '1' }
console.log(miUrl.searchParams.get('ordernar'));    // vistas
console.log(miUrl.searchParams.get('nivel'));       // 1  