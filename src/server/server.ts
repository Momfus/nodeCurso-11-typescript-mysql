import express = require('express'); // Esta pensado para usarse en javascript, para que se pueda usar el tipo en typescript se instala npm install @types/express --save
import path = require('path');

export default class Server { // Puede ser usado en otros archivos y default señala que por defecto se usa esta clase

    public app: express.Application;
    public port: number;    

    constructor( puerto: number) {

        this.port = puerto;
        this.app = express();

    }

    // De esta manera se tiene solo una instancia con el puerto dado
    static init( puerto: number ) {

        return new Server( puerto );

    }

    // Establecer la carpeta publica del proyecto
    private publicFolder() {

        const publicPath = path.resolve( __dirname, '../public' );

        this.app.use( express.static( publicPath ) );

    }

    // Comenzar servidor
    start( callback: Function ) {

        this.app.listen( this.port, callback() );
        this.publicFolder();

    }

}