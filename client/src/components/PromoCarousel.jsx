import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function PromoCarousel(){
	const [promos,setPromos]=useState([]);
	const [idx,setIdx]=useState(0);
	useEffect(()=>{ api.get('/promotions').then(r=>setPromos(r.data)); },[]);
	useEffect(()=>{
		if(promos.length<2) return;
		const t=setInterval(()=> setIdx((i)=> (i+1)%promos.length ),5000);
		return ()=> clearInterval(t);
	},[promos]);
	if(promos.length===0) return null;
	const p=promos[idx];
	return (
		<div className="relative overflow-hidden rounded bg-neutral-100">
			{p.image && <img src={p.image} alt={p.title} className="w-full h-56 object-cover"/>}
			<div className="absolute inset-0 bg-black/30"/>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
				<h3 className="font-serif text-3xl">{p.title}</h3>
				{p.subtitle && <p className="mt-1">{p.subtitle}</p>}
				{p.ctaLink && <a href={p.ctaLink} className="btn-primary mt-4">{p.ctaText||'Shop Now'}</a>}
			</div>
		</div>
	);
}