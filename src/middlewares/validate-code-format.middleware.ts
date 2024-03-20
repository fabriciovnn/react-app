import { NextFunction, Request, Response } from 'express';

export class ValidateCodeFormatMiddleware {
  public async validate(req: Request, res: Response, next: NextFunction) {
    const { code } = req.params;

    if (code.length !== 36) {
      return res.status(400).json({
        code: 400,
        ok: false,
        message: 'Formato do Code Inválido',
      });
    }

    return next();
  }
}
