import express  from "express"

import { MovieControllers } from "./product.controller";


const router = express.Router()

router.post("/", MovieControllers.createProduct);


export const ProductRoutes =  router;













