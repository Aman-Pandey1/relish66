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
    const [form,setForm]=useState({ title:'', slug:'', description:'', price:'', categorySlug:'', imageUrl:'', isFeatured:false });
	const [error,setError]=useState('');
	const [progress,setProgress]=useState(0);
	useEffect(()=>{ if(!user||user.role!=='admin'){ navigate('/admin/login'); return; } api.get('/categories').then(r=>setCategories(r.data)); },[user,navigate]);
	useEffect(()=>{ if(!isNew && user && user.role==='admin'){
		api.get('/products').then(r=>{
			const p=r.data.find(x=>x._id===id);
			if(p) setForm({ title:p.title, slug:p.slug, description:p.description||'', price:p.price, categorySlug:p.category?.slug||'', imageUrl:p.thumbnail||'' });
		});
	}},[id,isNew,user]);
    // Helper to keep slug consistent with server
    const toSlug=(value)=> String(value||'')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g,'-')
        .replace(/(^-|-$)/g,'');

    // URL-based image only
    const submit=async(e)=>{
		e.preventDefault();
        setError('');
        const title = String(form.title||'').trim();
        const slug = String(form.slug||'').trim();
        const categorySlug = String(form.categorySlug||'').trim();
        const priceNum = Number(form.price);
        if(!title){ setError('Title is required'); return; }
        if(!slug){ setError('Slug is required'); return; }
        if(!categorySlug){ setError('Category is required'); return; }
        if(!Number.isFinite(priceNum) || priceNum < 0){ setError('Valid price is required'); return; }

        const payload = { ...form, title, slug, categorySlug, price: priceNum };
		setProgress(0);
        try{
            if(isNew){ await api.post('/products', payload); }
            else { await api.put(`/products/${id}`, payload); }
            navigate('/admin/products');
        }catch(err){
            const msg = err?.response?.data?.message || 'Failed to save product';
            setError(msg);
        }
	};
	return (
		<div className="container-pad py-8">
			<h1 className="font-serif text-3xl mb-4">{isNew? 'New' : 'Edit'} Product</h1>
			<form className="grid gap-3 max-w-2xl" onSubmit={submit}>
                <input className="border rounded px-3 py-2" placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} onBlur={()=> setForm(f=>({...f, slug: f.slug || toSlug(f.title)})) }/>
                <input className="border rounded px-3 py-2" placeholder="Slug" value={form.slug} onChange={(e)=>setForm({...form,slug:e.target.value})} onBlur={()=> setForm(f=>({...f, slug: toSlug(f.slug)})) }/>
				<textarea className="border rounded px-3 py-2" rows="4" placeholder="Description" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})}/>
				<div className="grid grid-cols-2 gap-3">
                    <input className="border rounded px-3 py-2" type="number" step="0.01" placeholder="Price" value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})}/>
					<select className="border rounded px-3 py-2" value={form.categorySlug} onChange={(e)=>setForm({...form,categorySlug:e.target.value})}>
						<option value="">Select Category</option>
						{categories.map(c=> <option key={c._id} value={c.slug}>{c.emoji} {c.name}</option>)}
					</select>
				</div>
				<input className="border rounded px-3 py-2" placeholder="Image URL (https://...)" value={form.imageUrl} onChange={(e)=>setForm({...form,imageUrl:e.target.value})}/>
				<label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isFeatured} onChange={(e)=>setForm({...form,isFeatured:e.target.checked})}/> Featured product</label>
				{error && <div className="text-red-600 text-sm">{error}</div>}
				{progress>0 && progress<100 && <div className="text-sm text-neutral-600">Uploading... {progress}%</div>}
				<button className="btn-primary w-max">{isNew? 'Create' : 'Save Changes'}</button>
			</form>
		</div>
	);
}