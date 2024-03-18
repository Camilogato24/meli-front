import { useQuery } from "@tanstack/react-query";
import { SearchResponse } from "../interfaces/response";
import { SearchController } from "./../../modules/infrastructure/controllers/searchController";

const searchController = new SearchController();
const requestLogin = async (search: string) => {
    const response = await searchController.searchController(search);
    return { success: response.status == 200 ? true : false, items: response.data?.items, categories: response.data?.categories } as SearchResponse;
};

export const useSearch = (search: string) => {
    const resultSearch = useQuery(
        { queryKey: ['searchFetch'], queryFn: () => requestLogin(search) }
    )

    return { resultSearch };
};
