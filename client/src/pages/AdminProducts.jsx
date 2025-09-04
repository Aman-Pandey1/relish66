import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext.jsx';

export default function AdminProducts(){
	const { user } = useAuth();
	const navigate = useNavigate();
	const [items,setItems]=useState([]);
	const [q,setQ]=useState('');
	const [page,setPage]=useState(1);
	const pageSize=10;
	const [file,setFile]=useState(null);
	const [importMsg,setImportMsg]=useState('');
	useEffect(()=>{
		if(!user || user.role!=='admin'){ navigate('/admin/login'); return; }
		api.get('/products').then(r=>setItems(r.data));
	},[user,navigate]);
	const doImport=async(e)=>{
		e.preventDefault();
		if(!file) return;
		const fd=new FormData();
		fd.append('file', file);
		const { data } = await api.post('/products/import', fd, { headers:{ 'Content-Type':'multipart/form-data' } });
		setImportMsg(`Imported ${data.inserted} products`);
		const r=await api.get('/products'); setItems(r.data);
	};
	const filtered = items.filter(p=>{
		const okQ = q? (p.title?.toLowerCase().includes(q.toLowerCase())) : true;
		return okQ;
	});
	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const pageItems = filtered.slice((page-1)*pageSize, page*pageSize);

	return (
		<div className="container-pad py-8">
			<div className="flex items-center justify-between mb-4">
				<h1 className="font-serif text-3xl">Admin: Products</h1>
				<div className="flex items-center gap-3">
					<button className="btn-outline" onClick={async()=>{ const res=await api.get('/admin/excel-template/products', { responseType:'blob' }); const url=URL.createObjectURL(res.data); const a=document.createElement('a'); a.href=url; a.download='products_template.xlsx'; a.click(); URL.revokeObjectURL(url); }}>Download Template</button>
					<Link to="/admin/products/new" className="btn-primary">New Product</Link>
				</div>
			</div>
			<div className="flex items-center gap-3 mb-4">
				<input className="border rounded px-3 py-2" placeholder="Search products" value={q} onChange={(e)=>{ setQ(e.target.value); setPage(1); }} />
			</div>
			<form onSubmit={doImport} className="flex items-center gap-3 mb-6">
				<input type="file" accept=".xlsx,.xls" onChange={(e)=>setFile(e.target.files?.[0]||null)} />
				<button className="px-3 py-2 border rounded">Import Excel</button>
				{importMsg && <span className="text-sm text-neutral-600">{importMsg}</span>}
			</form>
			<table className="w-full text-sm">
				<thead>
					<tr className="text-left border-b"><th className="py-2">Title</th><th>Price</th><th>Category</th><th></th></tr>
				</thead>
				<tbody>
					{pageItems.map(p=> (
						<tr key={p._id} className="border-b">
							<td className="py-2">{p.title}</td>
							<td>${p.price.toFixed(2)}</td>
							<td>{p.category?.name}</td>
							<td className="text-right">
								<Link to={`/admin/products/${p._id}`} className="underline mr-3">Edit</Link>
								<button className="text-red-600" onClick={async()=>{ await api.delete(`/products/${p._id}`); setItems(items.filter(i=>i._id!==p._id)); }}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex items-center justify-between mt-3 text-sm">
				<span>Page {page} of {totalPages}</span>
				<div className="flex gap-2">
					<button disabled={page<=1} className="px-3 py-1 border rounded disabled:opacity-50" onClick={()=>setPage(p=>Math.max(1,p-1))}>Prev</button>
					<button disabled={page>=totalPages} className="px-3 py-1 border rounded disabled:opacity-50" onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>Next</button>
				</div>
			</div>
		</div>
	);
}