import { httpClient } from "./index";
import { GET_LOGIN } from "./requestType";
export const getSinger = async (phone: string, password: string) => {
  return await httpClient.get(GET_LOGIN, { phone, password });
};
