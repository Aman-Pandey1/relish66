import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import api from '../utils/api';
import ProductImageZoom from '../components/ProductImageZoom.jsx';
import { toast } from 'react-hot-toast';

export default function ProductDetail() {
	const { slug } = useParams();
	const { add } = useCart();
	const { items: wishlistItems, toggle } = useWishlist();
	const [product, setProduct] = useState(null);
	const [related, setRelated] = useState([]);
	const [qty, setQty] = useState(1);

	useEffect(() => {
		api.get(`/products/${slug}`).then((res) => {
			setProduct(res.data);
			api.get('/products', { params: { category: res.data.category?.slug } }).then((r) => setRelated(r.data.filter((p) => p.slug !== slug).slice(0, 4)));
		});
	}, [slug]);

	if (!product) return <div className="container-pad py-10">Loading...</div>;
	const inWishlist = product && wishlistItems.includes(product._id);
	const priceNumber = Number(product.price || 0);

	return (
		<div className="container-pad py-8">
			<div className="grid md:grid-cols-2 gap-8">
				<div>
					{product.thumbnail && (
						<ProductImageZoom src={product.thumbnail} alt={product.title} />
					)}
				</div>
				<div>
					<h1 className="font-serif text-3xl mb-2">{product.title}</h1>
					<p className="text-neutral-600 mb-4">{product.description}</p>
					<div className="text-navy-700 text-2xl font-semibold mb-4">${priceNumber.toFixed(2)}</div>
					<div className="flex items-center gap-2 mb-4">
						<label>Qty</label>
						<input type="number" className="border rounded px-3 py-2 w-20" min={1} value={qty} onChange={(e) => setQty(Number(e.target.value))} />
					</div>
					<div className="flex gap-3">
						<button className="btn-primary" onClick={() => { add({ slug: product.slug, title: product.title, price: priceNumber, thumbnail: product.thumbnail, quantity: qty }); toast.success('Added to cart'); }}>Add to Cart</button>
						<button className="px-4 py-2 border rounded" onClick={() => { toggle(product._id); toast.success(inWishlist? 'Removed from wishlist':'Added to wishlist'); }}>{inWishlist? 'Remove from Wishlist' : 'Add to Wishlist'}</button>
					</div>
				</div>
			</div>

			<div className="mt-12 grid md:grid-cols-3 gap-6">
				<div className="md:col-span-2 space-y-6">
					<section className="p-5 border rounded bg-white">
						<h3 className="font-semibold mb-2">Details</h3>
						<p className="text-neutral-700">{product.description || 'A great choice for any occasion.'}</p>
					</section>
					<section className="p-5 border rounded bg-white">
						<h3 className="font-semibold mb-2">Specifications</h3>
						<ul className="text-neutral-700 text-sm space-y-1">
							{product.attributes?.abv && <li><span className="text-neutral-500">ABV:</span> {product.attributes.abv}</li>}
							{product.attributes?.volumeMl && <li><span className="text-neutral-500">Volume:</span> {product.attributes.volumeMl} ml</li>}
							{product.attributes?.origin && <li><span className="text-neutral-500">Origin:</span> {product.attributes.origin}</li>}
							{product.attributes?.flavourNotes && <li><span className="text-neutral-500">Notes:</span> {product.attributes.flavourNotes}</li>}
						</ul>
					</section>
					<section className="p-5 border rounded bg-white">
						<h3 className="font-semibold mb-2">Customer Reviews</h3>
						<p className="text-neutral-700 text-sm">Reviews coming soon.</p>
					</section>
				</div>
				<aside className="space-y-4">
					<section className="p-5 border rounded bg-white">
						<h3 className="font-semibold mb-2">Related</h3>
						<div className="grid grid-cols-2 gap-3">
							{related.map((p) => (
								<Link key={p._id} to={`/product/${p.slug}`} className="border rounded overflow-hidden hover:shadow">
									{p.thumbnail && <img src={p.thumbnail} alt={p.title} className="w-full h-24 object-cover" />}
									<div className="p-2 text-sm">
										<div className="font-medium line-clamp-1">{p.title}</div>
										<div className="text-navy-700 font-semibold">${Number(p.price||0).toFixed(2)}</div>
									</div>
								</Link>
							))}
						</div>
					</section>
				</aside>
			</div>
		</div>
	);
}