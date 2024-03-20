import { ResponseDTO } from '../dtos/response.dto';
import { ListProductByCodeRepository } from '../repositories/list-product-by-code.repository';

export class ListProductByCodeUseCase {
  private _listProductByCodeRepo = new ListProductByCodeRepository();

  public async execute(code: string): Promise<ResponseDTO> {
    try {
      const response = await this._listProductByCodeRepo.listByCode(code);

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
