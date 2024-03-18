import { IServiceParams, ResponseFetchModel } from "../../domain/models/searchModel";

  export class RequestServiceV1 {
  
    public get = async <T>(params: IServiceParams): Promise<ResponseFetchModel<T>> => {
      try {
        const requestOptions: RequestInit = {
          method: 'GET',
          headers: params.headers,
        };
  
        const response = await fetch(params.url, requestOptions);
  
        if (!response.ok) {
          throw new Error('The request could not be completed.');
        }
        const responseData: T = await response.json();
  
        return {
          data: responseData,
          status: response.status,
          message: 'Request made successfully!',
        };
      } catch (error) {
        console.error('Error when making request:', error);
        throw error;
      }
    };
  }
  