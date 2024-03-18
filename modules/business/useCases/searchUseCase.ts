
import { SearchService } from './../../infrastructure/services/searchService';

export class SearchUseCase {
    async SearchList(RequestService: InstanceType<typeof SearchService>){
        const data = await RequestService.searchListService();
        return data;
    }
}
