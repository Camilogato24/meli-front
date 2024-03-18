import { useQuery } from "@tanstack/react-query";
import { SearchResponse } from "../interfaces/response";

const requestLogin = async (search: string) => {
    const response = await searchController.loginController(search);
    return { success: response.status, items: response.data.token } as SearchResponse;
};

export const useSearch = (search: string) => {
    const resultSearch = useQuery(
        { queryKey: ['searchFetch'], queryFn: () => requestLogin(search) }
    )

    return { resultSearch };
};
