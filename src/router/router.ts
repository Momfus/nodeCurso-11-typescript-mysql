import {    Router, // Definir las rutas que tiene el proyecto
            Request, // Para definir lo requerido
            Response  // Para definir la respuesta
        } from 'express';

const router = Router(); // Crear una nueva instancia de Router para utilizar

// Definido una subruta
router.get('/heroes', (req: Request, res: Response ) => { 

    res.json({

        ok: true,
        mensaje: 'Todo esta bien'

    });

});

// Subruta con parámetro
router.get('/heroes/:id', (req: Request, res: Response ) => { 

    const id = req.params.id;

    res.json({

        ok: true,
        mensaje: 'Todo esta bien',
        id: id

    });

});



export default router;