import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';
import { ValidateCodeFormatMiddleware } from '../middlewares/validate-code-format.middleware';
import { CreateProductMiddleware } from '../middlewares/create-product.middleware';

export function productRoutes() {
  const router = Router();
  const controller = new ProductController();
  const codeFormat = new ValidateCodeFormatMiddleware();
  const newProduct = new CreateProductMiddleware();

  router.post('/', [newProduct.validate], controller.create);
  router.get('/', controller.listAll);
  router.get('/:code', [codeFormat.validate], controller.listByCode);
  router.put('/:code', [codeFormat.validate], controller.update);
  router.delete('/:code', [codeFormat.validate], controller.delete);

  return router;
}
