import { Products as ProductEntity } from '@prisma/client';
import { Product } from '../models/product.model';
import { UpdateProductDTO } from '../dtos/update-product.dto';
import { ResponseDTO } from '../dtos/response.dto';
import database from '../database/prisma.connection';

export class UpdateProductRepository {
  public async update(data: UpdateProductDTO): Promise<ResponseDTO> {
    const updatedProduct = await database.products.update({
      where: {
        code: data.code,
      },
      data: {
        description: data.description,
        value: data.value,
      },
    });

    return {
      code: 200,
      ok: true,
      message: 'Produto atualizado com sucesso',
      data: this.mapToModel(updatedProduct),
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
