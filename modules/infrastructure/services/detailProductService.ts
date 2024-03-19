import { RequestServiceV1 } from "../methods/methods";
import { configVars } from "./../../../config"
import { ResponseFetchModel } from "../../domain/models/searchModel";
import { ItemMinified } from "../../domain/models/detailProductModel";
  
export class DetailProductService {
  private searchParam: string;

  constructor(searchParam: string) {
    this.searchParam = searchParam;
  }
  async detailProductService() {
    const REQUEST_SERVICE = new RequestServiceV1();
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const url = `${configVars.ENDPOINT_SEARCH}/${this.searchParam}`;
      const data: ResponseFetchModel<ItemMinified> = await REQUEST_SERVICE.get({ headers, url});
      return data;
    } catch (error) {
      throw error;
    }
  }
}
