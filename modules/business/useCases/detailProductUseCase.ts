
import { DetailProductService } from './../../infrastructure/services/detailProductService';

export class DetailProductUseCase {
    async DetailProduct(RequestService: InstanceType<typeof DetailProductService>){
        const data = await RequestService.detailProductService();
        return data;
    }
}
