import cors from 'cors';
import express from 'express';
import { productRoutes } from './routes/product.routes';

export function createServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.use('/products', productRoutes());

  app.use('/', (_, res) => res.status(200).json({ ok: true }));

  return app;
}
