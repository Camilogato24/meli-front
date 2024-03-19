import { useQuery } from "@tanstack/react-query";
import { DetailProductResponse } from "../interfaces/response";
import { DetailProductController } from "./../../modules/infrastructure/controllers/detailProductController";

const detailProductController = new DetailProductController();
const requestLogin = async (id: string) => {
    const response = await detailProductController.detailProductController(id);
    return { success: response.status == 200 ? true : false, data: response.data } as DetailProductResponse;
};

export const useDetailProduct = (id: string | undefined) => {
    if (!id) {
        return { resultSearch: { isSuccess: false, data: null, error: 'ID is undefined' } };
    }
    const detailProduct = useQuery(
        { queryKey: ['detailProductFetch'], queryFn: () => requestLogin(id) }
    )
    return { detailProduct };
};

