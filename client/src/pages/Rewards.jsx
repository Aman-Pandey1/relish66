import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Rewards(){
	const { user } = useAuth();
	const isMember = Boolean(user?.membership?.active);
	const points = typeof user?.rewardPoints === 'number' ? user.rewardPoints : 0;
	return (
		<div className="container-pad py-12">
			<h1 className="font-serif text-4xl mb-4">Rewards</h1>
			{!user ? (
				<div className="border rounded p-6">
					<p className="mb-3">Please log in to see your rewards.</p>
					<Link to="/login" className="btn-primary">Login</Link>
				</div>
			) : (
				<div className="grid md:grid-cols-2 gap-6">
					<section className="border rounded p-6">
						<h3 className="font-semibold text-xl mb-2">Your Points</h3>
						<div className="text-3xl font-bold text-burnt-700">{points} pts</div>
						<p className="text-neutral-600 mt-2">Earn 1 reward point for every $1 spent (before taxes). Points accumulate on each order while your membership is active.</p>
					</section>
					<section className="border rounded p-6">
						<h3 className="font-semibold text-xl mb-2">Membership Status</h3>
						{isMember ? (
							<p className="text-green-700">Active — enjoy free delivery and 10% off every order.</p>
						) : (
							<div>
								<p className="mb-3">No active membership. Join to unlock free delivery, 10% off, and rewards.</p>
								<Link to="/membership" className="btn-primary">Get Membership</Link>
							</div>
						)}
					</section>
				</div>
			)}
		</div>
	);
}

