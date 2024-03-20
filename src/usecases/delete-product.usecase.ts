import { ResponseDTO } from '../dtos/response.dto';
import { DeleteProductRepository } from '../repositories/delete-product.repository';
import { ListProductByCodeRepository } from '../repositories/list-product-by-code.repository';

export class DeleteProductUseCase {
  private _deleteProductRepo = new DeleteProductRepository();
  private _listProductByCodeRepo = new ListProductByCodeRepository();

  public async execute(code: string): Promise<ResponseDTO> {
    try {
      const productExistResponse = await this._listProductByCodeRepo.listByCode(
        code,
      );

      if (!productExistResponse.ok) {
        return productExistResponse;
      }
      const response = await this._deleteProductRepo.delete(code);

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
