import express from 'express';
import routeCars from './routes/car';

const app = express();
app.use(express.json());
app.use('/cars', routeCars);

export default app;
