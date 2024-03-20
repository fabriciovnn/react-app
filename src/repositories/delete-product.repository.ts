import { Products as ProductEntity } from '@prisma/client';
import { Product } from '../models/product.model';
import { ResponseDTO } from '../dtos/response.dto';
import database from '../database/prisma.connection';

export class DeleteProductRepository {
  public async delete(code: string): Promise<ResponseDTO> {
    const deletedProduct = await database.products.delete({
      where: {
        code,
      },
    });

    return {
      code: 200,
      ok: true,
      message: 'Produto excluído com sucesso',
      data: this.mapToModel(deletedProduct),
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
