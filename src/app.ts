import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import routeCars from './routes/car';

const app = express();
app.use(express.json());
app.use(routeCars);

app.use(errorHandler);
export default app;
