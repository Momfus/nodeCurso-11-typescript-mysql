"use strict";
// Será el primer archivo que se ejecutará cada vez que arranque el proyecto de node
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Existen paquetes como ts-node que te permiten escribir typescript directamente en node, aca se usará el convertir el código (más indirecto) con el
comando tsc para que vaya a una carpeta dist (configurado en tsconfig.json) */
//----------------------------------
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
const server = server_1.default.init(3000);
server.app.use(router_1.default);
// Para hacer la conexión sin uso del singleton
// const mysql = new MySQL(); // Instancia de la base de datos a conectar
// Conexión con singleton
// MySQL.instance; // No hace falta ya que en caso de no exisitr, se crea..sino se usa la que esta por como se definió
server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
});
