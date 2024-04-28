import express from 'express';
import cors from 'cors';

import usuariosRouter from './controllers/usuarios/usuarios';



const app = express();
app.use(express.json());
app.use(cors());

 app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Access-Control-Allow-Headers, Authorization, Accept");
   next();
 });



const dotenv = require('dotenv');
dotenv.config();


//usuariosRouter
app.use('/usuarios',usuariosRouter)



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



