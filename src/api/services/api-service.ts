import { AxiosResponse } from "axios";

export const parseApiData = async (data: Promise<AxiosResponse>) => {
    return (await data).data;
};
