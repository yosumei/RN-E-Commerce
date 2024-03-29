import axios from "axios";
import { BASE_URL } from "./urls";

const axiosClient=axios.create()
axiosClient.defaults.baseURL=BASE_URL;

axiosClient.defaults.headers={
    "Content-Type":"application/json",
    Accept:"application/json"
}

axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  export {axiosClient}