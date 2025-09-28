import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || '/api',
	withCredentials: true,
});

// Attach JWT from localStorage on every request to avoid race conditions on app load
api.interceptors.request.use((config) => {
    try {
        const token = localStorage.getItem('kh_token');
        if (token) {
            config.headers = config.headers || {};
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
    } catch {}
    return config;
});

export default api;