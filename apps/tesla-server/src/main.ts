/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helment from "helmet";
import morgan from "morgan";

/* ROUTE IMPORTS */
import carRoutes from './routes/cars';

/* CONFIGS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helment());
app.use(helment.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use("/cars", carRoutes);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to tesla-server!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
