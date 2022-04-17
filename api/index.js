import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database.js';
import routes from './routes/index.js'

sequelize.sync().then(() => console.log('db is ready'));


const app = express();

routes(app);

app.use(bodyParser.json());

export default app;