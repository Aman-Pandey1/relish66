import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login(){
	const { login, status, user } = useAuth();
	const navigate = useNavigate();
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const [error,setError]=useState('');
	const submit=async(e)=>{
		e.preventDefault();
		setError('');
		const res = await login({ email, password });
		if(res.ok){
			// If user is admin, send to admin panel, else to home
			setTimeout(() => {
				try {
					const cached = JSON.parse(localStorage.getItem('kh_user')||'null');
					if (cached?.role === 'admin') navigate('/admin'); else navigate('/');
				} catch { navigate('/'); }
			}, 0);
		}
		else setError(res.error || 'Login failed');
	};
	if(user) return null;
	return (
		<div className="container-pad py-10 max-w-md">
			<h1 className="font-serif text-3xl mb-4">Login</h1>
			<form onSubmit={submit} className="space-y-3">
				<input className="border rounded px-3 py-2 w-full" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
				<input type="password" className="border rounded px-3 py-2 w-full" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
				{error? <div className="text-red-600 text-sm">{error}</div> : null}
				<button className="btn-primary" disabled={status==='loading'}>{status==='loading'?'Logging in...':'Login'}</button>
			</form>
			<p className="text-sm mt-3">No account? <Link to="/signup" className="underline">Sign up</Link></p>
		</div>
	);
}