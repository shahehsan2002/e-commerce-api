import express, { Request, Response } from 'express';
import { ProductRoutes } from './modules/products/product.route';
import { OrderRoutes } from './modules/orders/order.route';
const app = express();

// Parser
app.use(express.json());

// Routes
app.use("/api/products", ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export default app;
