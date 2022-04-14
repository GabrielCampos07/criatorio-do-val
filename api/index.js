import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use(bodyParser.json());

export default app;