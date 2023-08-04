import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosinstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "66f4cb8d699240f6b16b4e196957a01b",
  },
});

class APIClient<T> {
  enpoint: string;

  constructor(enpoint: string) {
    this.enpoint = enpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosinstance
      .get<FetchResponse<T>>(this.enpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
