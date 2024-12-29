import axios from 'axios';

const API_URL = 'http://localhost:8088/api/auth';

// 注册请求
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// 登录请求
export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
