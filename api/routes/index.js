import express from 'express';
import state from './stateRoutes.js';
import user from './userRoutes.js';
import breed from './breedChickenRoutes.js';
import chicken from './chickenRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Bem-vindo!" });
    });

    app.use(
        express.json(),
        breed,
        chicken,
        user,
        state
    );
}

export default routes;
