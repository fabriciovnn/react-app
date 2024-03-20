import { NextFunction, Request, Response } from 'express';

export class CreateProductMiddleware {
  public validate(req: Request, res: Response, next: NextFunction) {
    const { description, value } = req.body;

    if (!description || !value) {
      return res.status(400).json({
        code: 400,
        ok: false,
        message: 'Faltam campos!',
      });
    }

    if (typeof description !== 'string') {
      return res.status(400).json({
        code: 400,
        ok: false,
        message: 'Descrição do produto inválida',
      });
    }

    if (typeof value !== 'number') {
      return res.status(400).json({
        code: 400,
        ok: false,
        message: 'Valor do produto deve ser do tipo numérico',
      });
    }

    return next();
  }
}
