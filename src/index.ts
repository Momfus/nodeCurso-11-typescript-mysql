// Será el primer archivo que se ejecutará cada vez que arranque el proyecto de node

/* Existen paquetes como ts-node que te permiten escribir typescript directamente en node, aca se usará el convertir el código (más indirecto) con el 
comando tsc para que vaya a una carpeta dist (configurado en tsconfig.json) */

//----------------------------------

import Server from './server/server';
import router from './router/router'
import MySQL from './mysql/mysql';

const server = Server.init( 3000 );
server.app.use( router );


// Para hacer la conexión sin uso del singleton
// const mysql = new MySQL(); // Instancia de la base de datos a conectar

// Conexión con singleton
// MySQL.instance; // No hace falta ya que en caso de no exisitr, se crea..sino se usa la que esta por como se definió

server.start( () => {

    console.log('Servidor corriendo en el puerto 3000');
    
});
