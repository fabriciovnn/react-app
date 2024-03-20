import { Products as ProductEntity } from '@prisma/client';
import { Product } from '../models/product.model';
import { ResponseDTO } from '../dtos/response.dto';
import database from '../database/prisma.connection';

export class ListProductByCodeRepository {
  public async listByCode(code: string): Promise<ResponseDTO> {
    const productEntity = await database.products.findUnique({
      where: {
        code,
      },
    });

    if (!productEntity) {
      return {
        code: 404,
        ok: false,
        message: 'Produto não encontrado',
      };
    }

    return {
      code: 200,
      ok: true,
      message: 'Produto encontrado',
      data: this.mapToModel(productEntity),
    };
  }

  private mapToModel(entity: ProductEntity): Product {
    return new Product(
      entity.code,
      entity.description,
      Number(entity.value),
      entity.createdAt,
    );
  }
}
