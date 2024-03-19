import { DetailProductService } from './../services/detailProductService';
import { DetailProductUseCase } from './../../business/useCases/detailProductUseCase';

export class DetailProductController {
  private detailProductService!: DetailProductService;
  private detailProductUseCase!: DetailProductUseCase;

	detailProductController(id: string) {
		this.detailProductService = new DetailProductService(id);
		this.detailProductUseCase = new DetailProductUseCase();
		return this.detailProductUseCase.DetailProduct(this.detailProductService)
        
	}
}
