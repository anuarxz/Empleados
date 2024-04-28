import express, { Request, Response } from 'express';
import db from '../../db/db';
import { RowDataPacket } from 'mysql2';


const router = express.Router();


// GET
router.get("/", (req, res) => {
  const query = "SELECT * FROM usuarios";
  db.query(query,(error, results:any) => {
    if (error) {
      console.error("Error :", error);
      res.status(500).send("Error al obtener los usuarios");
      return;
    }
    res.json(results);
  });
});


//POST
router.post("/", (req, res) => {
  const { name, surname1, surname2, email } = req.body;

  if (!name || !surname1 || !email) {
    return res.status(400).json({ error: "Nombre, apellido y correo electrónico son campos requeridos" });
  }
  const query = "INSERT INTO usuarios (name, surname1, surname2, email) VALUES (?, ?, ?, ?)";
  const values = [name, surname1, surname2, email];

  db.query(query, values, (error, results:any) => {
    if (error) {
      console.error("Error :", error);
      res.status(500).send("Error al agregar el usuario");
      return;
    }
    res.json({ message: "Usuario agregado correctamente", userId: results.insertId });
  });
});


//PUT
router.put("/:id", (req, res) => {
  const userId = req.params.id;
  const { name, surname1, surname2, email } = req.body;

  if (!name || !surname1 || !email) {
    return res.status(400).json({ error: "Nombre, apellido y correo electrónico son campos requeridos" });
  }
  const query = "UPDATE usuarios SET name=?, surname1=?, surname2=?, email=? WHERE id=?";
  const values = [name, surname1, surname2, email, userId];

  db.query(query, values, (error) => {
    if (error) {
      console.error("Error :", error);
      res.status(500).send("Error al actualizar el usuario");
      return;
    }
    res.json({ message: "Usuario actualizado correctamente", userId });
  });
});


// DELETE
router.delete("/:id", (req, res) => {
  const userId = req.params.id;

  const query = "DELETE FROM usuarios WHERE id=?";
  const values = [userId];

  db.query(query, values, (error) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).send("Error al eliminar el usuario");
      return;
    }
    res.json({ message: "Usuario eliminado correctamente", userId });
  });
});


export default router;