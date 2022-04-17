import express from 'express';
import user from './userRoutes.js';

import chicken from './chickenRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Bem-vindo!" });
    });

    app.use(
        express.json(),
        chicken,
        user,
    );
}

export default routes;
