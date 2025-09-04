import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AgeGate from './components/AgeGate.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Terms from './pages/Terms.jsx';
import Privacy from './pages/Privacy.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminPromotions from './pages/AdminPromotions.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import AdminProducts from './pages/AdminProducts.jsx';
import AdminProductForm from './pages/AdminProductForm.jsx';
import Wishlist from './pages/Wishlist.jsx';
import { motion } from 'framer-motion';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Membership from './pages/Membership.jsx';
import Rewards from './pages/Rewards.jsx';
import Orders from './pages/Orders.jsx';

export default function App() {
	return (
		<div className="min-h-full flex flex-col">
			<AgeGate />
			<Header />
			<main className="flex-1">
				<motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.3 }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/shop" element={<Shop />} />
						<Route path="/product/:slug" element={<ProductDetail />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/wishlist" element={<Wishlist />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/terms" element={<Terms />} />
						<Route path="/privacy" element={<Privacy />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/admin/login" element={<AdminLogin />} />
						<Route path="/admin" element={<AdminDashboard />} />
						<Route path="/admin/promotions" element={<AdminPromotions />} />
						<Route path="/admin/products" element={<AdminProducts />} />
						<Route path="/admin/products/:id" element={<AdminProductForm />} />
						<Route path="/membership" element={<Membership />} />
						<Route path="/rewards" element={<Rewards />} />
						<Route path="/orders" element={<Orders />} />
					</Routes>
				</motion.div>
			</main>
			<Footer />
		</div>
	);
}
