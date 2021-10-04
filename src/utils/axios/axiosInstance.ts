import axios from "axios";
import { getLocalAccessToken, getLocalRefreshToken } from "../localStorage";

const axiosInstance = axios.create({
  baseURL: "https://afrifex-backend.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await refreshToken();
          const { accessToken } = rs.data;
          window.localStorage.setItem("accessToken", accessToken);
          axiosInstance.defaults.headers.common["x-access-token"] = accessToken;

          return axiosInstance(originalConfig);
        } catch (_error) {
          //@ts-ignore
          if (_error?.response && _error.response.data) {
            //@ts-ignore
            return Promise.reject(_error.response.data);
          }

          return Promise.reject(_error);
        }
      }

      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  }
);

function refreshToken() {
  return axiosInstance.post("/auth/refreshtoken", {
    refreshToken: getLocalRefreshToken(),
  });
}

export { axiosInstance };
