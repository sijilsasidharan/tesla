import express from 'express';
import { getAllCarModels, getAllCarVariants, getCarModel } from '../controllers/cars';

const routes = express.Router();

routes.get("/models", getAllCarModels);
routes.post("/variants", getAllCarVariants);
routes.post("/model", getCarModel);

export default routes;
