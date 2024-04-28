"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuarios_1 = __importDefault(require("./controllers/usuarios/usuarios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Access-Control-Allow-Headers, Authorization, Accept");
    next();
});
const dotenv = require('dotenv');
dotenv.config();
//usuariosRouter
app.use('/usuarios', usuarios_1.default);
process.on('uncaughtException', (error) => {
    console.error(error);
    process.exit(1);
});
process.on('unhandledRejection', (error) => {
    console.error(error);
});
app.disable('x-powered-by');
app.listen(3000, () => {
    console.log(`Servidor iniciado en http://localhost:3000`);
});
