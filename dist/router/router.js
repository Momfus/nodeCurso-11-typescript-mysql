"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("../mysql/mysql"));
const express_1 = require("express");
const router = express_1.Router(); // Crear una nueva instancia de Router para utilizar
// Definido una subruta
router.get('/heroes', (req, res) => {
    const query = `
        SELECT *
        FROM heroes`;
    mysql_1.default.ejecutarQuery(query, (err, heroes) => {
        // Si hay un error en la consulta
        if (err) {
            res.status(400).json({
                ok: true,
                error: err
            });
        }
        else {
            // De no haber errores
            res.json({
                ok: true,
                heroes: heroes // O ponerse solo heroes que en ES6 si es igual los nombres es redundante
            });
        }
    });
});
// Subruta con parámetro
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    // Corroborar que el id este bien y no tenga caracteres raros (o una inyección de un query)
    const escapeId = mysql_1.default.instance.conexion.escape(id);
    const query = `
        SELECT *
        FROM heroes
        WHERE id = ${escapeId}`; // Se hace la corroboración de no tener una inyección antes, sino iría el id directamente acá.
    mysql_1.default.ejecutarQuery(query, (err, heroe) => {
        // Si hay un error en la consulta
        if (err) {
            res.status(400).json({
                ok: true,
                error: err
            });
        }
        else {
            // De no haber errores
            res.json({
                ok: true,
                heroe: heroe[0]
            });
        }
    });
});
exports.default = router;
