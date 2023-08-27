import axios from "axios";
import type { Method, AxiosResponse } from "axios";
import { getSecureLocalStorage } from "./secureLocalStorage";

const token = getSecureLocalStorage('token')

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

const apiCall = async (
  method: Method,
  url: string,
  data?: {}
): Promise<AxiosResponse> => await axios({ method, url, data });

export default apiCall;
