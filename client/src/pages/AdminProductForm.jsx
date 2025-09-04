import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext.jsx';

export default function AdminProductForm(){
	const { id } = useParams();
	const navigate = useNavigate();
	const isNew = id === 'new';
	const { user } = useAuth();
	const [categories,setCategories]=useState([]);
	const [form,setForm]=useState({ title:'', slug:'', description:'', price:'', categorySlug:'', service:'liquor', imageUrl:'', isFeatured:false });
	const [error,setError]=useState('');
	const [progress,setProgress]=useState(0);
	useEffect(()=>{ if(!user||user.role!=='admin'){ navigate('/admin/login'); return; } api.get('/categories').then(r=>setCategories(r.data)); },[user,navigate]);
	useEffect(()=>{ if(!isNew && user && user.role==='admin'){
		api.get('/products').then(r=>{
			const p=r.data.find(x=>x._id===id);
			if(p) setForm({ title:p.title, slug:p.slug, description:p.description||'', price:p.price, categorySlug:p.category?.slug||'', image:null });
		});
	}},[id,isNew,user]);
	// Switch to URL-based image for single uploads
	const submit=async(e)=>{
		e.preventDefault();
		const payload = { ...form };
		setProgress(0);
		if(isNew){ await api.post('/products', payload); }
		else { await api.put(`/products/${id}`, payload); }
		navigate('/admin/products');
	};
	return (
		<div className="container-pad py-8">
			<h1 className="font-serif text-3xl mb-4">{isNew? 'New' : 'Edit'} Product</h1>
			<form className="grid gap-3 max-w-2xl" onSubmit={submit}>
				<input className="border rounded px-3 py-2" placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}/>
				<input className="border rounded px-3 py-2" placeholder="Slug" value={form.slug} onChange={(e)=>setForm({...form,slug:e.target.value})}/>
				<textarea className="border rounded px-3 py-2" rows="4" placeholder="Description" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})}/>
				<div className="grid grid-cols-2 gap-3">
					<input className="border rounded px-3 py-2" type="number" step="0.01" placeholder="Price" value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})}/>
					<select className="border rounded px-3 py-2" value={form.categorySlug} onChange={(e)=>setForm({...form,categorySlug:e.target.value})}>
						<option value="">Select Category</option>
						{categories.map(c=> <option key={c._id} value={c.slug}>{c.emoji} {c.name}</option>)}
					</select>
				</div>
				<select className="border rounded px-3 py-2" value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})}>
					<option value="liquor">Liquor</option>
					<option value="general">General Store</option>
				</select>
				<input className="border rounded px-3 py-2" placeholder="Image URL (https://...)" value={form.imageUrl} onChange={(e)=>setForm({...form,imageUrl:e.target.value})}/>
				<label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isFeatured} onChange={(e)=>setForm({...form,isFeatured:e.target.checked})}/> Featured product</label>
				{error && <div className="text-red-600 text-sm">{error}</div>}
				{progress>0 && progress<100 && <div className="text-sm text-neutral-600">Uploading... {progress}%</div>}
				<button className="btn-primary w-max">{isNew? 'Create' : 'Save Changes'}</button>
			</form>
		</div>
	);
}