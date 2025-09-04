import { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import api from '../utils/api';

export default function Membership(){
	const { user, status, updateUser } = useAuth();
	const [buying,setBuying]=useState(false);
	const isMember = Boolean(user?.membership?.active);
	const purchase = async()=>{
		try{
			setBuying(true);
			const { data } = await api.post('/auth/membership/purchase');
			updateUser(data.user);
			alert('Membership activated. Enjoy your benefits!');
		}catch(e){ alert('Purchase failed'); }
		finally{ setBuying(false); }
	};
	return (
		<div className="container-pad py-12">
			<h1 className="font-serif text-4xl mb-4">Membership</h1>
			<p className="text-neutral-700 mb-6">Become a member and enjoy free delivery, 10% off every order, and reward points on your purchases.</p>
			{isMember ? (
				<div className="border rounded p-4 bg-green-50">Your membership is active. Enjoy free delivery and 10% off.</div>
			) : (
				<div className="border rounded p-6 max-w-lg">
					<h3 className="font-semibold mb-2">Annual Membership</h3>
					<p className="mb-4">Free delivery + 10% off all orders + 1 reward point per $1.</p>
					<button disabled={buying||status==='loading'} className="btn-primary" onClick={purchase}>{buying? 'Processing...' : 'Purchase $49/year'}</button>
				</div>
			)}
		</div>
	);
}

