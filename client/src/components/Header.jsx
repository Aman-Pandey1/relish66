import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';

export default function Header() {
	const { items: cartItems } = useCart();
	const { items: wishlistItems } = useWishlist();
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	const cartCount = cartItems.reduce((s,it)=> s + (it.quantity||1), 0);
	const wishlistCount = wishlistItems.length;
	const [open,setOpen]=useState(false);

	return (
		<header className="border-b sticky top-0 bg-white/90 backdrop-blur z-20">
			<div className="container-pad flex items-center justify-between h-16">
				<Link to="/" className="font-serif text-2xl font-bold tracking-wide">
					<span className="text-black">Relish66</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6">
					<NavLink to="/shop" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-neutral-700')}>Shop</NavLink>
					<NavLink to="/menu" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-neutral-700')}>Menu</NavLink>
					<NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-neutral-700')}>About</NavLink>
					<NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-neutral-700')}>Contact</NavLink>
					{user && <NavLink to="/orders" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-neutral-700')}>Orders</NavLink>}
					<form className="ml-4" onSubmit={(e)=>{ e.preventDefault(); const q=e.currentTarget.elements.q.value.trim(); if(q) navigate(`/shop?q=${encodeURIComponent(q)}`); }}>
						<input name="q" className="border rounded px-3 py-1.5 text-sm" placeholder="Search products..." />
					</form>
				</nav>
				<div className="flex items-center gap-3">
					<Link to="/wishlist" className="relative text-2xl" aria-label="Wishlist">❤
						{wishlistCount>0 && <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs rounded-full px-1.5">{wishlistCount}</span>}
					</Link>

					<Link to="/cart" className="relative text-2xl" aria-label="Cart">
						<span role="img" aria-label="cart">🛒</span>
						{cartCount > 0 && (
							<span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs rounded-full px-1.5">
								{cartCount}
							</span>
						)}
					</Link>
					{user? (
						<div className="hidden md:flex items-center gap-2">
							{user.role==='admin' && <Link to="/admin" className="px-3 py-2 border rounded">Dashboard</Link>}
							<button onClick={()=>{ logout(); navigate('/'); }} className="px-3 py-2 border rounded">Logout</button>
						</div>
					) : (
						<div className="hidden md:flex items-center gap-2">
							<Link to="/login" className="px-3 py-2 border rounded">Login</Link>
							<Link to="/signup" className="btn-primary">Sign Up</Link>
						</div>
					)}
					<button className="md:hidden px-3 py-2 border rounded" onClick={()=>setOpen(v=>!v)} aria-label="Toggle Menu">☰</button>
				</div>
			</div>
			{open && (
				<div className="md:hidden border-t bg-white">
					<div className="container-pad py-3 flex flex-col gap-2">
						<Link to="/shop" onClick={()=>setOpen(false)}>Shop</Link>
						<Link to="/about" onClick={()=>setOpen(false)}>About</Link>
						<Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
						<Link to="/wishlist" onClick={()=>setOpen(false)}>Wishlist</Link>
						{user? (
							<>
								{user.role==='admin' && <Link to="/admin" onClick={()=>setOpen(false)}>Dashboard</Link>}
								<button onClick={()=>{ logout(); setOpen(false); navigate('/'); }} className="text-left">Logout</button>
							</>
						) : (
							<>
								<Link to="/login" onClick={()=>setOpen(false)}>Login</Link>
								<Link to="/signup" onClick={()=>setOpen(false)}>Sign Up</Link>
							</>
						)}
					</div>
				</div>
			)}
		</header>
	);
}
