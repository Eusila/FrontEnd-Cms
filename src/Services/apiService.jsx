
import axiosInstance from './axiosConfig';

export const apiGet = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const apiPost = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const apiPut = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const apiDelete = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
