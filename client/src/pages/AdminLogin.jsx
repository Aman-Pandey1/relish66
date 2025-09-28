import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function AdminLogin(){
	const { login, status, user } = useAuth();
	const navigate = useNavigate();
	const [email,setEmail]=useState('admin@relish66.com');
	const [password,setPassword]=useState('Admin123!');
	const [error,setError]=useState('');
	const submit=async(e)=>{
		e.preventDefault();
		setError('');
		const res = await login({ email, password });
		if(res.ok){ navigate('/admin/products'); }
		else setError(res.error || 'Login failed');
	};
	return (
		<div className="container-pad py-10">
			<h1 className="font-serif text-3xl mb-4">Admin Login</h1>
			{user? <div>Logged in as {user.email}</div> : (
				<form onSubmit={submit} className="space-y-3 max-w-sm">
					<input className="border rounded px-3 py-2 w-full" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
					<input type="password" className="border rounded px-3 py-2 w-full" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
					{error? <div className="text-red-600 text-sm">{error}</div> : null}
					<button className="btn-primary" disabled={status==='loading'}>{status==='loading'?'Logging in...':'Login'}</button>
				</form>
			)}
		</div>
	);
}