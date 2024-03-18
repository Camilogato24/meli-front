import { RequestServiceV1 } from "../methods/methods";
import { configVars } from "./../../../config"
import { ResponseFetchModel, SearchMinified } from "../../domain/models/searchModel";
  
export class SearchService {
  private searchParam: string;

  constructor(searchParam: string) {
    this.searchParam = searchParam;
  }
  async searchListService() {
    const REQUEST_SERVICE = new RequestServiceV1();
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const url = `${configVars.ENDPOINT_SEARCH}?q=${this.searchParam}`;
      const data: ResponseFetchModel<SearchMinified> = await REQUEST_SERVICE.get({ headers, url});
      return data;
    } catch (error) {
      throw error;
    }
  }
}
