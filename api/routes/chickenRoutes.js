import express from "express";
import chickenController from '../controllers/chickenController.js';

const router = express.Router();

router
    .get("/galinhas", chickenController.getChickens)
    .get("/galinha/:id", chickenController.getChickenById)
    .post("/galinhas", chickenController.createChicken)
    .put("/galinha/:id", chickenController.updateChicken)
    .delete("/galinha/:id", chickenController.deleteChicken)

export default router;