import { useEffect, useState } from 'react';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import api from '../utils/api';

export default function Wishlist(){
	const { items, toggle } = useWishlist();
	const { add } = useCart();
	const [products,setProducts]=useState([]);
	useEffect(()=>{ if(items.length===0){ setProducts([]); return; }
		api.get('/products').then(r=>{
			setProducts(r.data.filter(p=> items.includes(p._id)));
		});
	},[items]);
	return (
		<div className="container-pad py-8">
			<h1 className="font-serif text-3xl mb-4">Wishlist</h1>
			{products.length===0? <div>No items in wishlist.</div> : (
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{products.map(p=> (
						<div key={p._id} className="border rounded overflow-hidden flex flex-col">
							{p.thumbnail && <img src={p.thumbnail} alt={p.title} className="w-full h-40 object-cover" />}
							<div className="p-3 flex-1 flex flex-col gap-1">
								<div className="font-medium">{p.title}</div>
								<div className="text-burnt-600 font-semibold mt-auto">${p.price.toFixed(2)}</div>
							</div>
							<div className="flex gap-2 p-3">
								<button className="btn-primary flex-1" onClick={()=>add({ slug:p.slug, title:p.title, price:p.price, thumbnail:p.thumbnail })}>Add to Cart</button>
								<button className="px-3 py-2 border rounded" onClick={()=>toggle(p._id)}>Remove</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}