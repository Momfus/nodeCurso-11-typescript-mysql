/// Para los tipos se usa npm install @types/mysql --save-dev y phpAdmin de xampp

import mysql = require('mysql');


export default class MySQL {

    // Patron singleton para tener solo una instancia de conexión a la BD
    private static _instance: MySQL;

    conexion: mysql.Connection;
    conectado: boolean = false;

    constructor(  ) {

        console.log('Clase inicializada');

        this.conexion =  mysql.createConnection({
                            host     : 'localhost',
                            user     : 'node_user',
                            password : '123456',
                            database : 'node_db'
                        });
        
        

        this.conectarDB();

    }

    // Getters
    public static get instance() {

        return  this._instance || ( this._instance = new this() ); // Si la instnacia existe (porque comienza siendo null, sino se crea en ese momento para que sea única)

    }

    // Realizar consulta (query) para cualquier tipo
    static ejecutarQuery( query: string, callback: Function ) { // Callback la función que se quiere ejecutar luego

        // Al ser un método estático necesito usar una instancia creada (con el uso del get señalado antes)
        this.instance.conexion.query( query, (err, results: Object[], fields) => {

            // Confirmar si sucede algun error
            if( err ) {

                console.log('Error en query');
                console.log(err);

                return callback( err );

            }

            // Corroborar si el arreglo de results es vacio
            if( results.length === 0 ) {
                
                return callback('El registro solicitado no existe');

            } else {

                // En caso de no haber error alguno
                return callback( null, results); // Null porque no habría error

            }


        });

    }

    // Para tratar la conexion por si hay errores del mismo
    private conectarDB() {

        this.conexion.connect( (err: mysql.MysqlError ) => {

            // Salir si hay un error y mostrarlo
            if( err ) {
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log('Base de Datos Online');
            

        });

    }

}