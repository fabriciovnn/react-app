import { CreateProductDTO } from '../dtos/create-product.dto';
import { ResponseDTO } from '../dtos/response.dto';
import { CreateProductRepository } from '../repositories/create-product.repository';

export class CreateProductUseCase {
  private _createProductRepo = new CreateProductRepository();

  public async execute({
    description,
    value,
  }: CreateProductDTO): Promise<ResponseDTO> {
    try {
      const response = await this._createProductRepo.create({
        description,
        value,
      });

      return response;
    } catch (error: any) {
      return {
        code: 500,
        ok: false,
        message: error.toString(),
      };
    }
  }
}
