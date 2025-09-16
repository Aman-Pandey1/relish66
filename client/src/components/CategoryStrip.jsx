import { useEffect, useState } from 'react';
import api from '../utils/api';
import { Link } from 'react-router-dom';
import CategoryIcon from './CategoryIcon.jsx';

export default function CategoryStrip(){
	const [cats,setCats]=useState([]);
	useEffect(()=>{ api.get('/categories').then(r=>setCats(r.data)); },[]);
	if(!cats.length) return null;
	return (
		<div className="container-pad py-6">
			<h3 className="font-serif text-2xl mb-3">Shop by Category</h3>
			{/* Mobile: horizontal scroll with snap; Desktop: grid */}
			<div className="-mx-4 px-4 md:mx-0 md:px-0">
				<div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
					{cats.map(c=> (
						<Link key={c._id} to={`/order-online?category=${c.slug}`} className="snap-start min-w-[9rem] flex-1 group border rounded-2xl p-4 text-center hover:shadow-lg transition bg-white">
							<div className="w-16 h-16 mx-auto mb-2 rounded-2xl bg-gradient-to-br from-brandBlue/10 to-white border border-brandBlue/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
								<CategoryIcon slug={c.slug} />
							</div>
							<div className="text-sm font-medium group-hover:text-brandBlue">{c.name}</div>
						</Link>
					))}
				</div>
				<div className="hidden md:grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
					{cats.map(c=> (
						<Link key={c._id} to={`/order-online?category=${c.slug}`} className="group border rounded-2xl p-5 text-center hover:shadow-lg transition bg-white">
							<div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-brandBlue/10 to-white border border-brandBlue/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
								<CategoryIcon slug={c.slug} />
							</div>
							<div className="font-medium group-hover:text-brandBlue">{c.name}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}