import { ResponseDTO } from '../dtos/response.dto';
import { ListAllProductsRepository } from '../repositories/list-all-products.repository';

export class ListAllProductsUseCase {
  private _listAllProductsRepo = new ListAllProductsRepository();

  public async execute(): Promise<ResponseDTO> {
    try {
      const response = await this._listAllProductsRepo.listAll();

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
