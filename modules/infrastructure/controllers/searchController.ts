import { SearchService } from './../services/searchService';
import { SearchUseCase } from './../../business/useCases/searchUseCase';

export class SearchController {
  private searchService!: SearchService;
  private searchUseCase!: SearchUseCase;

	searchController(search: string) {
		this.searchService = new SearchService(search);
		this.searchUseCase = new SearchUseCase();
		return this.searchUseCase.SearchList(this.searchService);
        
	}
}
