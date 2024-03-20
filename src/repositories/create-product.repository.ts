import database from '../database/prisma.connection';
import { CreateProductDTO } from '../dtos/create-product.dto';
import { ResponseDTO } from '../dtos/response.dto';
import { Products as ProductEntity } from '@prisma/client';
import { Product } from '../models/product.model';

export class CreateProductRepository {
  public async create({
    description,
    value,
  }: CreateProductDTO): Promise<ResponseDTO> {
    const newProduct = await database.products.create({
      data: {
        description,
        value,
      },
    });

    return {
      code: 201,
      ok: true,
      message: 'Produto cadastrado com sucesso!',
      data: this.mapToModel(newProduct),
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
