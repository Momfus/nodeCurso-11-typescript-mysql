"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express"); // Esta pensado para usarse en javascript, para que se pueda usar el tipo en typescript se instala npm install @types/express --save
const path = require("path");
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
    }
    // De esta manera se tiene solo una instancia con el puerto dado
    static init(puerto) {
        return new Server(puerto);
    }
    // Establecer la carpeta publica del proyecto
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
    // Comenzar servidor
    start(callback) {
        this.app.listen(this.port, callback());
        this.publicFolder();
    }
}
exports.default = Server;
