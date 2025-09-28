import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || '/api',
	withCredentials: true,
});

// Ensure Authorization header is present for every request using latest token
api.interceptors.request.use((config) => {
	if (typeof window !== 'undefined') {
		const token = window.localStorage.getItem('kh_token');
		if (token) {
			config.headers = config.headers || {};
			if (config.headers['Authorization'] !== `Bearer ${token}`) {
				config.headers['Authorization'] = `Bearer ${token}`;
			}
		} else if (config.headers && config.headers['Authorization']) {
			delete config.headers['Authorization'];
		}
	}
	return config;
});

// Handle 401s globally: clear session and redirect to login
api.interceptors.response.use(
	(response) => response,
	(error) => {
		const status = error?.response?.status;
		const url = error?.config?.url || '';
		if (status === 401 && !url.includes('/auth/login') && !url.includes('/auth/register')) {
			if (typeof window !== 'undefined') {
				window.localStorage.removeItem('kh_token');
				window.localStorage.removeItem('kh_user');
				// Route to appropriate login screen
				if (url.startsWith('/admin')) {
					window.location.href = '/admin/login';
				} else {
					window.location.href = '/login';
				}
			}
		}
		return Promise.reject(error);
	}
);

export default api;