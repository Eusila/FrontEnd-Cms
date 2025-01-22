import axios from 'axios';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://mock-api.com', // Replace with your API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add Authorization header if token is present
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Adjust based on your auth logic
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API call error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
