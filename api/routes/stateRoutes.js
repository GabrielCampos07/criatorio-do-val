import express from "express";
import stateController from '../controllers/stateController.js';

const router = express.Router();

router
    .get("/estados", stateController.getStates)
    .get("/estado/:id", stateController.getStateById)
    .post("/estados", stateController.createState)
    .put("/estado/:id", stateController.updateState)
    .delete("/estado/:id", stateController.deleteState)

export default router;