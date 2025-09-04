import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate, Link } from 'react-router-dom';
import api from '../utils/api';

export default function AdminDashboard(){
	const { user } = useAuth();
	const navigate = useNavigate();
	const [data,setData]=useState(null);
	useEffect(()=>{
		if(!user || user.role!=='admin'){ navigate('/admin/login'); return; }
		api.get('/admin/stats').then(r=> setData(r.data));
	},[user,navigate]);
	if(!data) return <div className="container-pad py-8">Loading...</div>;
	return (
		<div className="container-pad py-8 space-y-6">
			<h1 className="font-serif text-3xl">Admin Dashboard</h1>
			<div className="grid md:grid-cols-4 gap-4">
				<div className="p-4 border rounded bg-white"><div className="text-sm text-neutral-500">Orders</div><div className="text-2xl font-semibold">{data.ordersCount}</div></div>
				<div className="p-4 border rounded bg-white"><div className="text-sm text-neutral-500">Products</div><div className="text-2xl font-semibold">{data.productsCount}</div></div>
				<div className="p-4 border rounded bg-white"><div className="text-sm text-neutral-500">Users</div><div className="text-2xl font-semibold">{data.usersCount}</div></div>
				<div className="p-4 border rounded bg-white"><div className="text-sm text-neutral-500">Revenue</div><div className="text-2xl font-semibold">${data.revenue.toFixed(2)}</div></div>
			</div>
			<div className="flex items-center justify-between">
				<h2 className="font-serif text-2xl">Recent Orders</h2>
				<Link to="/admin/products" className="underline">Manage Products</Link>
			</div>
			<div className="border rounded overflow-hidden bg-white">
				<table className="w-full text-sm">
					<thead>
						<tr className="text-left border-b"><th className="py-2 px-3">Order ID</th><th className="px-3">Customer</th><th className="px-3">Total</th><th className="px-3">Status</th><th className="px-3">Date</th></tr>
					</thead>
					<tbody>
						{data.recentOrders.map(o=> (
							<tr key={o._id} className="border-b">
								<td className="py-2 px-3">{o._id.slice(-6)}</td>
								<td className="px-3">{o.customer?.name||'-'}</td>
								<td className="px-3">${o.amounts?.total?.toFixed(2)}</td>
								<td className="px-3">{o.status}</td>
								<td className="px-3">{new Date(o.createdAt).toLocaleDateString()}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}