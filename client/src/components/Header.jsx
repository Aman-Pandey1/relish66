import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
	const [shopOpen,setShopOpen]=useState(false);
	const [generalOnly,setGeneralOnly]=useState(false);
	useEffect(()=>{ try{ setGeneralOnly(localStorage.getItem('kh_age_general_only')==='1'); }catch{} },[]);
	return (
		<header className="border-b sticky top-0 bg-white/90 backdrop-blur z-20">
			<div className="container-pad flex items-center justify-between h-16">
				<Link to="/" className="font-serif text-2xl font-bold tracking-wide">
					<span className="text-black">Kicking Horse</span>{' '}
					<span className="text-burnt-600">General Store</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6">
					<div className="relative" onMouseLeave={()=>setShopOpen(false)}>
						<button aria-haspopup="menu" aria-expanded={shopOpen} className="inline-flex items-center gap-1 text-neutral-700 hover:text-burnt-600" onClick={()=>setShopOpen(v=>!v)}>
							<span>Shop</span>
							<span className={`transition-transform ${shopOpen? 'rotate-180' : ''}`}>▾</span>
						</button>
						{shopOpen && (
							<div className="absolute left-0 mt-2 min-w-[12rem] bg-white border rounded-xl shadow-xl z-50 py-2">
								{!generalOnly && (
									<Link to="/shop?service=liquor" onClick={()=>setShopOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-50">
										<span>🍷</span>
										<span>Liquor</span>
									</Link>
								)}
								<Link to="/shop?service=general" onClick={()=>setShopOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-50">
									<span>🛍️</span>
									<span>General Store</span>
								</Link>
							</div>
						)}
					</div>
					<NavLink to="/about" className={({ isActive }) => (isActive ? 'text-burnt-600' : 'text-neutral-700')}>About</NavLink>
					<NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-burnt-600' : 'text-neutral-700')}>Contact</NavLink>
					<NavLink to="/membership" className={({ isActive }) => (isActive ? 'text-burnt-600' : 'text-neutral-700')}>Membership</NavLink>
					<NavLink to="/rewards" className={({ isActive }) => (isActive ? 'text-burnt-600' : 'text-neutral-700')}>Rewards</NavLink>
					{user && <NavLink to="/orders" className={({ isActive }) => (isActive ? 'text-burnt-600' : 'text-neutral-700')}>Orders</NavLink>}
					<form className="ml-4" onSubmit={(e)=>{ e.preventDefault(); const q=e.currentTarget.elements.q.value.trim(); if(q) navigate(`/shop?q=${encodeURIComponent(q)}`); setShopOpen(false); }}>
						<input name="q" className="border rounded px-3 py-1.5 text-sm" placeholder="Search products..." />
					</form>
				</nav>
				<div className="flex items-center gap-3">
					<Link to="/wishlist" className="relative text-2xl" aria-label="Wishlist">❤
						{wishlistCount>0 && <span className="absolute -top-2 -right-2 bg-burnt-600 text-white text-xs rounded-full px-1.5">{wishlistCount}</span>}
					</Link>
					{user?.membership?.active && (
						<span className="hidden md:inline-flex items-center gap-2 bg-burnt-50 text-burnt-700 border border-burnt-200 rounded-full px-3 py-1 text-xs">
							<span className="font-semibold">Member</span>
							{typeof user.rewardPoints === 'number' && <span className="opacity-80">{user.rewardPoints} pts</span>}
						</span>
					)}
					<Link to="/cart" className="relative text-2xl" aria-label="Cart">
						<span role="img" aria-label="cart">🛒</span>
						{cartCount > 0 && (
							<span className="absolute -top-2 -right-2 bg-burnt-600 text-white text-xs rounded-full px-1.5">
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
