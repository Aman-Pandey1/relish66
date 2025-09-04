import { useEffect, useState } from 'react';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext.jsx';

export default function AdminPromotions(){
	const { user } = useAuth();
	const [promos,setPromos]=useState([]);
	const [form,setForm]=useState({title:'',subtitle:'',image:'',ctaText:'',ctaLink:'',active:true,order:0});
	const load=async()=>{ const { data } = await api.get('/promotions'); setPromos(data); };
	useEffect(()=>{ load(); },[]);
	const save=async(e)=>{e.preventDefault(); await api.post('/promotions', form); setForm({title:'',subtitle:'',image:'',ctaText:'',ctaLink:'',active:true,order:0}); await load(); };
	const remove=async(id)=>{ await api.delete(`/promotions/${id}`); await load(); };
	return (
		<div className="container-pad py-10">
			<h1 className="font-serif text-3xl mb-4">Manage Promotions</h1>
			{user?.role!=='admin' ? (
				<div>Admin access required.</div>
			) : (
				<>
					<form onSubmit={save} className="grid md:grid-cols-2 gap-3 mb-6">
						<input className="border rounded px-3 py-2" placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}/>
						<input className="border rounded px-3 py-2" placeholder="Subtitle" value={form.subtitle} onChange={(e)=>setForm({...form,subtitle:e.target.value})}/>
						<input className="border rounded px-3 py-2 md:col-span-2" placeholder="Image URL" value={form.image} onChange={(e)=>setForm({...form,image:e.target.value})}/>
						<input className="border rounded px-3 py-2" placeholder="CTA Text" value={form.ctaText} onChange={(e)=>setForm({...form,ctaText:e.target.value})}/>
						<input className="border rounded px-3 py-2" placeholder="CTA Link" value={form.ctaLink} onChange={(e)=>setForm({...form,ctaLink:e.target.value})}/>
						<input type="number" className="border rounded px-3 py-2" placeholder="Order" value={form.order} onChange={(e)=>setForm({...form,order:Number(e.target.value)})}/>
						<label className="flex items-center gap-2"><input type="checkbox" checked={form.active} onChange={(e)=>setForm({...form,active:e.target.checked})}/> Active</label>
						<button className="btn-primary">Add Promotion</button>
					</form>
					<div className="grid md:grid-cols-3 gap-4">
						{promos.map(p=> (
							<div key={p._id} className="border rounded overflow-hidden">
								{p.image && <img src={p.image} className="w-full h-32 object-cover"/>}
								<div className="p-3">
									<div className="font-medium">{p.title}</div>
									<div className="text-sm text-neutral-500">{p.subtitle}</div>
									<button className="text-red-600 mt-2" onClick={()=>remove(p._id)}>Delete</button>
								</div>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
}