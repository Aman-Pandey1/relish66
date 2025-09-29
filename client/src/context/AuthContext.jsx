import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import api from '../utils/api';

const AuthContext = createContext(null);

const TOKEN_KEY = 'kh_token';
const USER_KEY = 'kh_user';

export function AuthProvider({ children }){
	const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
	const [user, setUser] = useState(() => {
		try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch { return null; }
	});
	const [status, setStatus] = useState('idle');

	useEffect(() => {
		if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		else delete api.defaults.headers.common['Authorization'];
	}, [token]);

	// When token changes, refresh user from server to capture latest role
	useEffect(() => {
		let cancelled = false;
		const refresh = async () => {
			if (!token) return;
			try {
				const { data } = await api.get('/auth/me');
				if (!cancelled) {
					setUser(data);
					localStorage.setItem(USER_KEY, JSON.stringify(data));
				}
			} catch {}
		};
		refresh();
		return () => { cancelled = true; };
	}, [token]);

	const saveSession = (newToken, newUser) => {
		setToken(newToken);
		setUser(newUser);
		localStorage.setItem(TOKEN_KEY, newToken || '');
		localStorage.setItem(USER_KEY, JSON.stringify(newUser || null));
	};

	const updateUser = (nextUser) => {
		setUser(nextUser);
		localStorage.setItem(USER_KEY, JSON.stringify(nextUser || null));
	};

	const login = async (payload) => {
		setStatus('loading');
		try {
			const { data } = await api.post('/auth/login', payload);
			saveSession(data.token, data.user);
			// Fetch fresh user with current role
			try { const me = await api.get('/auth/me'); updateUser(me.data); } catch {}
			setStatus('succeeded');
			return { ok: true };
		} catch (e) {
			setStatus('failed');
			return { ok: false, error: e?.response?.data?.message || 'Login failed' };
		}
	};

	const register = async (payload) => {
		setStatus('loading');
		try {
			const { data } = await api.post('/auth/register', payload);
			saveSession(data.token, data.user);
			setStatus('succeeded');
			return { ok: true };
		} catch (e) {
			setStatus('failed');
			return { ok: false, error: e?.response?.data?.message || 'Register failed' };
		}
	};

	const logout = () => {
		saveSession(null, null);
		localStorage.removeItem(TOKEN_KEY);
		localStorage.removeItem(USER_KEY);
	};

	const value = useMemo(() => ({ token, user, status, login, register, logout, updateUser }), [token, user, status]);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(){
	const ctx = useContext(AuthContext);
	if(!ctx) throw new Error('useAuth must be used within AuthProvider');
	return ctx;
}