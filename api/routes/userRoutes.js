import express from "express";
import userController from '../controllers/userController.js';

const router = express.Router();

router
    .get("/usuarios", userController.getUsers)
    .get("/usuario/:id", userController.getUserById)
    .post("/usuarios", userController.createUser)
    .put("/usuario/:id", userController.updateUser)
    .delete("/usuario/:id", userController.deleteUser)

export default router;