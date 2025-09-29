import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';

// Import your logo image
import logoImage from '../assets/relishlogo.jpg'; // Update this path to your actual logo

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
			<div className="container-pad flex items-center justify-between h-20">
				{/* Larger Logo */}
				<Link to="/" className="font-bold tracking-wide flex items-center gap-2">
					<img 
						src={logoImage} 
						alt="Relish66" 
						className="h-14 md:h-16 object-contain" 
					/>
				</Link>
				
				{/* Desktop Navigation with Color Theme */}
				<nav className="hidden md:flex items-center gap-6 md:flex-1 md:justify-center">
					<NavLink 
						to="/" 
						className={({ isActive }) => 
							`relative group font-medium transition-all duration-300 px-3 py-2 ${
								isActive 
									? 'text-[#D42127] font-semibold' 
									: 'text-gray-700 hover:text-[#06507D]'
							}`
						}
					>
						Home
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06507D] to-[#D42127] group-hover:w-full transition-all duration-300 rounded-full"></span>
					</NavLink>
					
					<NavLink 
						to="/about" 
						className={({ isActive }) => 
							`relative group font-medium transition-all duration-300 px-3 py-2 ${
								isActive 
									? 'text-[#D42127] font-semibold' 
									: 'text-gray-700 hover:text-[#06507D]'
							}`
						}
					>
						About Us
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06507D] to-[#D42127] group-hover:w-full transition-all duration-300 rounded-full"></span>
					</NavLink>
					
					<NavLink 
						to="/menu" 
						className={({ isActive }) => 
							`relative group font-medium transition-all duration-300 px-3 py-2 ${
								isActive 
									? 'text-[#D42127] font-semibold' 
									: 'text-gray-700 hover:text-[#06507D]'
							}`
						}
					>
						Menu
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06507D] to-[#D42127] group-hover:w-full transition-all duration-300 rounded-full"></span>
					</NavLink>
					
					<NavLink 
						to="/order-online" 
						className={({ isActive }) => 
							`relative group font-medium transition-all duration-300 px-3 py-2 ${
								isActive 
									? 'text-[#D42127] font-semibold' 
									: 'text-gray-700 hover:text-[#06507D]'
							}`
						}
					>
						Order Online
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06507D] to-[#D42127] group-hover:w-full transition-all duration-300 rounded-full"></span>
					</NavLink>
					
					<NavLink 
						to="/catering" 
						className={({ isActive }) => 
							`relative group font-medium transition-all duration-300 px-3 py-2 ${
								isActive 
									? 'text-[#D42127] font-semibold' 
									: 'text-gray-700 hover:text-[#06507D]'
							}`
						}
					>
						Catering
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06507D] to-[#D42127] group-hover:w-full transition-all duration-300 rounded-full"></span>
					</NavLink>
					
					<NavLink 
						to="/testimonials" 
						className={({ isActive }) => 
							`relative group font-medium transition-all duration-300 px-3 py-2 ${
								isActive 
									? 'text-[#D42127] font-semibold' 
									: 'text-gray-700 hover:text-[#06507D]'
							}`
						}
					>
						Testimonials
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06507D] to-[#D42127] group-hover:w-full transition-all duration-300 rounded-full"></span>
					</NavLink>
					
					<NavLink 
						to="/contact" 
						className={({ isActive }) => 
							`relative group font-medium transition-all duration-300 px-3 py-2 ${
								isActive 
									? 'text-[#D42127] font-semibold' 
									: 'text-gray-700 hover:text-[#06507D]'
							}`
						}
					>
						Contact Us
						<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06507D] to-[#D42127] group-hover:w-full transition-all duration-300 rounded-full"></span>
					</NavLink>
					
					{user && (
						<NavLink 
							to="/orders" 
							className={({ isActive }) => 
								`relative group font-medium transition-all duration-300 px-3 py-2 ${
									isActive 
										? 'text-[#D42127] font-semibold' 
										: 'text-gray-700 hover:text-[#06507D]'
								}`
							}
						>
							Orders
							<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06507D] to-[#D42127] group-hover:w-full transition-all duration-300 rounded-full"></span>
						</NavLink>
					)}
				</nav>
				
				{/* Right Section with Color Theme */}
				<div className="flex items-center gap-4">
					{/* Wishlist with Color Theme */}
					<Link to="/wishlist" className="relative p-2 rounded-full bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 text-[#06507D] hover:bg-[#06507D]/20 transition-all duration-300 group" aria-label="Wishlist">
						<span className="text-xl">❤</span>
						{wishlistCount > 0 && (
							<span className="absolute -top-1 -right-1 bg-gradient-to-br from-[#D42127] to-[#06507D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
								{wishlistCount > 99 ? '99+' : wishlistCount}
							</span>
						)}
					</Link>

					{/* Cart with Color Theme */}
					<Link to="/cart" className="relative p-2 rounded-full bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 text-[#06507D] hover:bg-[#06507D]/20 transition-all duration-300 group" aria-label="Cart">
						<span role="img" aria-label="cart" className="text-xl">🛒</span>
						{cartCount > 0 && (
							<span className="absolute -top-1 -right-1 bg-gradient-to-br from-[#D42127] to-[#06507D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
								{cartCount > 99 ? '99+' : cartCount}
							</span>
						)}
					</Link>
					
					{/* User Actions with Color Theme */}
					{user ? (
					<div className="hidden md:flex items-center gap-3">
						{user.role === 'admin' && (
							<Link 
								to="/admin" 
								className="px-4 py-2 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
							>
								Dashboard
							</Link>
						)}
							<button 
								onClick={() => { logout(); navigate('/'); }} 
								className="px-4 py-2 bg-white border-2 border-[#D42127] text-[#D42127] rounded-full font-semibold text-sm hover:bg-[#D42127] hover:text-white transition-all duration-300 shadow-sm"
							>
								Logout
							</button>
						</div>
					) : (
						<div className="hidden md:flex items-center gap-2">
							<Link 
								to="/login" 
								className="px-4 py-2 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
							>
								Login
							</Link>
						</div>
					)}
					
					{/* Mobile Menu Button with Color Theme */}
					<button 
						className="md:hidden px-3 py-2 bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 text-[#06507D] rounded-full border border-[#06507D]/20 hover:bg-[#06507D]/20 transition-all duration-300" 
						onClick={() => setOpen(v => !v)} 
						aria-label="Toggle Menu"
					>
						☰
					</button>
				</div>
			</div>
			
			{/* Mobile Menu with Color Theme */}
			{open && (
				<div className="md:hidden border-t border-[#06507D]/20 bg-white/95 backdrop-blur-sm">
					<div className="container-pad py-6 flex flex-col gap-2">
						<Link 
							to="/" 
							onClick={() => setOpen(false)}
							className="py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#D42127] hover:bg-gradient-to-r hover:from-[#06507D]/5 hover:to-[#D42127]/5 rounded-xl transition-all duration-300 flex items-center gap-3"
						>
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							Home
						</Link>
						
						<Link 
							to="/about" 
							onClick={() => setOpen(false)}
							className="py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#D42127] hover:bg-gradient-to-r hover:from-[#06507D]/5 hover:to-[#D42127]/5 rounded-xl transition-all duration-300 flex items-center gap-3"
						>
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							About Us
						</Link>
						
						<Link 
							to="/menu" 
							onClick={() => setOpen(false)}
							className="py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#D42127] hover:bg-gradient-to-r hover:from-[#06507D]/5 hover:to-[#D42127]/5 rounded-xl transition-all duration-300 flex items-center gap-3"
						>
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							Menu
						</Link>
						
						<Link 
							to="/order-online" 
							onClick={() => setOpen(false)}
							className="py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#D42127] hover:bg-gradient-to-r hover:from-[#06507D]/5 hover:to-[#D42127]/5 rounded-xl transition-all duration-300 flex items-center gap-3"
						>
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							Order Online
						</Link>
						
						<Link 
							to="/catering" 
							onClick={() => setOpen(false)}
							className="py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#D42127] hover:bg-gradient-to-r hover:from-[#06507D]/5 hover:to-[#D42127]/5 rounded-xl transition-all duration-300 flex items-center gap-3"
						>
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							Catering
						</Link>
						
						<Link 
							to="/testimonials" 
							onClick={() => setOpen(false)}
							className="py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#D42127] hover:bg-gradient-to-r hover:from-[#06507D]/5 hover:to-[#D42127]/5 rounded-xl transition-all duration-300 flex items-center gap-3"
						>
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							Testimonials
						</Link>
						
						<Link 
							to="/contact" 
							onClick={() => setOpen(false)}
							className="py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#D42127] hover:bg-gradient-to-r hover:from-[#06507D]/5 hover:to-[#D42127]/5 rounded-xl transition-all duration-300 flex items-center gap-3"
						>
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							Contact Us
						</Link>
						
						<Link 
							to="/wishlist" 
							onClick={() => setOpen(false)}
							className="py-3 px-4 text-lg font-medium text-gray-700 hover:text-[#D42127] hover:bg-gradient-to-r hover:from-[#06507D]/5 hover:to-[#D42127]/5 rounded-xl transition-all duration-300 flex items-center gap-3"
						>
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							Wishlist
						</Link>
						
						{user ? (
							<>
								{user && user.role === 'admin' && (
									<Link 
										to="/admin" 
										onClick={() => setOpen(false)}
										className="py-3 px-4 text-lg font-semibold bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-2"
									>
										Dashboard
									</Link>
								)}
								<button 
									onClick={() => { 
										logout(); 
										setOpen(false); 
										navigate('/'); 
									}} 
									className="py-3 px-4 text-lg font-medium text-[#D42127] hover:bg-gradient-to-r hover:from-[#06507D]/5 hover:to-[#D42127]/5 rounded-xl transition-all duration-300 text-left"
								>
									Logout
								</button>
							</>
						) : (
							<Link 
								to="/login" 
								onClick={() => setOpen(false)}
								className="py-3 px-4 text-lg font-semibold bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
							>
								Login
							</Link>
						)}
					</div>
				</div>
			)}
		</header>
	);
}