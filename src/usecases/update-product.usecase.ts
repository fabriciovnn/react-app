import { ResponseDTO } from '../dtos/response.dto';
import { UpdateProductDTO } from '../dtos/update-product.dto';
import { ListProductByCodeRepository } from '../repositories/list-product-by-code.repository';
import { UpdateProductRepository } from '../repositories/update-product.repository';

export class UpdateProductUseCase {
  private _updateProductRepo = new UpdateProductRepository();
  private _listProductByCodeRepo = new ListProductByCodeRepository();

  public async execute(data: UpdateProductDTO): Promise<ResponseDTO> {
    try {
      const productExistResponse = await this._listProductByCodeRepo.listByCode(
        data.code,
      );

      if (!productExistResponse.ok) {
        return productExistResponse;
      }

      const response = await this._updateProductRepo.update(data);

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
