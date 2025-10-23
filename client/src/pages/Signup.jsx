import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Signup(){
	const { register, status, user } = useAuth();
	const navigate = useNavigate();
	const [name,setName]=useState('');
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const [error,setError]=useState('');
	const submit=async(e)=>{
		e.preventDefault();
		setError('');
		const res = await register({ name, email, password });
		if(res.ok){ navigate('/'); }
		else setError(res.error || 'Register failed');
	};
	if(user) return null;
	return (
		<div className="container-pad py-10 max-w-md">
			<h1 className="font-serif text-3xl mb-4">Sign Up</h1>
			<form onSubmit={submit} className="space-y-3">
				<input className="border rounded px-3 py-2 w-full" value={name} onChange={e=>setName(e.target.value)} placeholder="Name" autoComplete="name" />
				<input className="border rounded px-3 py-2 w-full" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" autoComplete="email" />
				<input type="password" className="border rounded px-3 py-2 w-full" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" autoComplete="new-password" />
				{error? <div className="text-red-600 text-sm">{error}</div> : null}
				<button className="btn-primary" disabled={status==='loading'}>{status==='loading'?'Creating...':'Create account'}</button>
			</form>
			<p className="text-sm mt-3">Have an account? <Link to="/login" className="underline">Log in</Link></p>
		</div>
	);
}