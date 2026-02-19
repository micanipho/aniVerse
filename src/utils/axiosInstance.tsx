import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.BACKEND_API_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('auth_token');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export const getPublicAxiosInstance = (): AxiosInstance => {
    const publicInstance: AxiosInstance = axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
    });

    publicInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error: AxiosError) => {
            console.error('Public API Error:', error);
            return Promise.reject(error);
        }
    );

    return publicInstance;
};

export default axiosInstance;