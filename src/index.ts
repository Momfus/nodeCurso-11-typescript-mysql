// Será el primer archivo que se ejecutará cada vez que arranque el proyecto de node

/* Existen paquetes como ts-node que te permiten escribir typescript directamente en node, aca se usará el convertir el código (más indirecto) con el 
comando tsc para que vaya a una carpeta dist (configurado en tsconfig.json) */

//----------------------------------

import Server from './server/server';


const server = Server.init( 3000 );

server.start( () => {

    console.log('Servidor corriendo en el puerto 3000');
    
});
