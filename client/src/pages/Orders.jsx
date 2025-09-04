import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import api from '../utils/api';

export default function Orders(){
	const { user } = useAuth();
	const [orders,setOrders]=useState([]);
	useEffect(()=>{
		if(!user) return;
		api.get('/orders/my').then(r=> setOrders(r.data));
	},[user]);
	if(!user) return <div className="container-pad py-12">Please log in to view orders.</div>;
	return (
		<div className="container-pad py-12">
			<h1 className="font-serif text-4xl mb-4">Your Orders</h1>
			{orders.length===0 ? (
				<p className="text-neutral-600">No orders yet.</p>
			) : (
				<div className="space-y-4">
					{orders.map(o=> (
						<div key={o._id} className="border rounded p-4">
							<div className="flex justify-between text-sm text-neutral-600 mb-2"><span>#{o._id.slice(-6)}</span><span>{new Date(o.createdAt).toLocaleString()}</span></div>
							<div className="grid md:grid-cols-2 gap-3 text-sm">
								<div>
									<div>Items: {o.items?.length||0}</div>
									<div>Subtotal: ${Number(o.amounts?.subtotal||0).toFixed(2)}</div>
									<div>Discount: -${Number(o.amounts?.discount||0).toFixed(2)}</div>
								</div>
								<div>
									<div>Tax: ${Number(o.amounts?.tax||0).toFixed(2)}</div>
									<div>Delivery: ${Number(o.amounts?.deliveryFee||0).toFixed(2)}</div>
									<div className="font-semibold">Total: ${Number(o.amounts?.total||0).toFixed(2)}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

