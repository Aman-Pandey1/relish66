import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// AgeGate removed per requirements
import Home from './pages/Home.jsx';
import OrderOnline from './pages/OrderOnline.jsx';
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
// Membership and Rewards removed
import Menu from './pages/Menu.jsx';
import Orders from './pages/Orders.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Catering from './pages/Catering.jsx';

export default function App() {
	return (
		<div className="min-h-full flex flex-col">
			{/* AgeGate removed */}
			<Header />
			<main className="flex-1">
				<motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.3 }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/order-online" element={<OrderOnline />} />
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
						<Route path="/menu" element={<Menu />} />
						<Route path="/testimonials" element={<Testimonials />} />
						<Route path="/catering" element={<Catering />} />
						<Route path="/orders" element={<Orders />} />
					</Routes>
				</motion.div>
			</main>
			<Footer />
		</div>
	);
}
