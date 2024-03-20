import { Request, Response } from 'express';
import { CreateProductUseCase } from '../usecases/create-product.usecase';
import { ListAllProductsUseCase } from '../usecases/list-all-products.usecase';
import { ListProductByCodeUseCase } from '../usecases/list-product-by-code.usecase';
import { DeleteProductUseCase } from '../usecases/delete-product.usecase';
import { UpdateProductUseCase } from '../usecases/update-product.usecase';

export class ProductController {
  public async create(req: Request, res: Response) {
    try {
      const { description, value } = req.body;
      const usecase = new CreateProductUseCase();

      const result = await usecase.execute({ description, value });

      return res.status(result.code).json(result);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async listAll(_: Request, res: Response) {
    try {
      const usecase = new ListAllProductsUseCase();
      const result = await usecase.execute();

      return res.status(result.code).json(result);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        message: error.toString(),
      });
    }
  }

  public async listByCode(req: Request, res: Response) {
    try {
      const { code } = req.params;
      const usecase = new ListProductByCodeUseCase();
      const result = await usecase.execute(code);

      return res.status(result.code).json(result);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        mensagem: error.toString(),
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { code } = req.params;
      const { description, value } = req.body;
      const usecase = new UpdateProductUseCase();
      const result = await usecase.execute({ code, description, value });

      return res.status(result.code).json(result);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        mensagem: error.toString(),
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { code } = req.params;
      const usecase = new DeleteProductUseCase();
      const result = await usecase.execute(code);

      return res.status(result.code).json(result);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        mensagem: error.toString(),
      });
    }
  }
}
