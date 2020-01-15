"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router(); // Crear una nueva instancia de Router para utilizar
// Definido una subruta
router.get('/heroes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien'
    });
});
// Subruta con parámetro
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'Todo esta bien',
        id: id
    });
});
exports.default = router;
