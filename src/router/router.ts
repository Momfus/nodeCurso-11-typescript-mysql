import MySQL from '../mysql/mysql';
import {    Router, // Definir las rutas que tiene el proyecto
            Request, // Para definir lo requerido
            Response  // Para definir la respuesta
        } from 'express';

const router = Router(); // Crear una nueva instancia de Router para utilizar

// Definido una subruta
router.get('/heroes', (req: Request, res: Response ) => { 

    const query = `
        SELECT *
        FROM heroes`;

    MySQL.ejecutarQuery( query, ( err: any, heroes: Object[] ) => {

        // Si hay un error en la consulta
        if( err ) {

            res.status(400).json({

                ok: true,
                error: err

            });

        } else {

            // De no haber errores
            res.json({

                ok: true,
                heroes: heroes // O ponerse solo heroes que en ES6 si es igual los nombres es redundante

            })

        }

    } );

});

// Subruta con parámetro
router.get('/heroes/:id', (req: Request, res: Response ) => { 

    const id = req.params.id;

    // Corroborar que el id este bien y no tenga caracteres raros (o una inyección de un query)
    const escapeId = MySQL.instance.conexion.escape( id );

    const query = `
        SELECT *
        FROM heroes
        WHERE id = ${ escapeId }`; // Se hace la corroboración de no tener una inyección antes, sino iría el id directamente acá.

    MySQL.ejecutarQuery( query, ( err: any, heroe: Object[] ) => {

        // Si hay un error en la consulta
        if( err ) {

            res.status(400).json({

                ok: true,
                error: err

            });

        } else {

            // De no haber errores
            res.json({

                ok: true,
                heroe: heroe[0]

            })

        }

    } );

});



export default router;