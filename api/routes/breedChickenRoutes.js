import express from "express";
import BreedChickenController from '../controllers/breedChickeController.js';

const router = express.Router();

router
    .get("/racas", BreedChickenController.getBreedChickens)
    .get("/raca/:id", BreedChickenController.getBreedChickenById)
    .post("/racas", BreedChickenController.createBreedChicken)
    .put("/raca/:id", BreedChickenController.updateBreedChicken)
    .delete("/raca/:id", BreedChickenController.deleteBreedChicken)

export default router;