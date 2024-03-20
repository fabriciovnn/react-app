import { Products as ProductEntity } from '@prisma/client';
import database from '../database/prisma.connection';
import { ResponseDTO } from '../dtos/response.dto';
import { Product } from '../models/product.model';

export class ListAllProductsRepository {
  public async listAll(): Promise<ResponseDTO> {
    const productsEntity = await database.products.findMany();

    if (!productsEntity.length) {
      return {
        code: 404,
        ok: false,
        message: 'Não foram encontrados produtos.',
      };
    }

    return {
      code: 200,
      ok: true,
      message: 'Produtos listados com sucesso',
      data: productsEntity.map((p) => this.mapToModel(p)),
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
