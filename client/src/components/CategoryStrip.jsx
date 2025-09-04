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
			<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
				{cats.map(c=> (
					<Link key={c._id} to={`/shop?category=${c.slug}`} className="group border rounded-2xl p-5 text-center hover:shadow-lg transition bg-white">
						<div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-burnt-50 to-white border border-burnt-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
							<CategoryIcon slug={c.slug} />
						</div>
						<div className="font-medium group-hover:text-burnt-600">{c.name}</div>
					</Link>
				))}
			</div>
		</div>
	);
}