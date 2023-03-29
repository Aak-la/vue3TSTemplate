import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from "axios";
class HttpClient {
  private axiosInstance: AxiosInstance;
  constructor(baseURL: string, timeout: number = 10000) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout,
    });
    this.setupInterceptors();
  }
  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      // @ts-ignore
      (config: AxiosRequestConfig) => {
        // Add any common request headers here
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Process successful response
        return response;
      },
      (error: AxiosError) => {
        // Process error response
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(url: string, params?: any): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, { params });
    return response.data;
  }

  public async post<T>(url: string, data: any): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data);
    return response.data;
  }

  public async put<T>(url: string, data: any): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data);
    return response.data;
  }

  public async delete<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url);
    return response.data;
  }

  public async request<T>(config: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.request<T>(config);
    return response.data;
  }

  public async cancelRequest(message?: string) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    source.cancel(message);
  }
}
const baseURL: string = "http://api.sanjings.com/music";

export const httpClient = new HttpClient(baseURL);
