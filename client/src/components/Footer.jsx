import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import api from "../utils/api";

export default function Footer() {
	return (
		<footer className="bg-black text-white relative overflow-hidden">
			{/* Animated background */}
			<div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#1E3A8A_0,transparent_40%),radial-gradient(circle_at_80%_30%,#B91C1C_0,transparent_35%),radial-gradient(circle_at_60%_80%,#1E40AF_0,transparent_35%)] animate-[footerGlow_12s_ease-in-out_infinite_alternate]" />

			{/* Main Footer Content */}
			<div className="container-pad py-16 md:py-20 grid md:grid-cols-3 gap-8 text-sm relative z-10">
				{/* Store Info */}
				<div>
					<h3 className="font-serif text-xl mb-2">Relish66</h3>
					<p className="text-gray-400">123 Mountain Rd, Golden, BC</p>
					<p className="text-gray-400">(604) 555-0123 • hello@relish66.com</p>
					<div className="flex gap-4 mt-3 text-xl">
						<a
							href="#"
							aria-label="Instagram"
							className="text-gray-400 hover:text-white transition-colors"
						>
							<FaInstagram />
						</a>
						<a
							href="#"
							aria-label="Facebook"
							className="text-gray-400 hover:text-white transition-colors"
						>
							<FaFacebookF />
						</a>
						<a
							href="#"
							aria-label="Twitter"
							className="text-gray-400 hover:text-white transition-colors"
						>
							<FaTwitter />
						</a>
					</div>
				</div>

				{/* Shop Links */}
				<div>
					<h4 className="font-semibold mb-2">Shop</h4>
					<ul className="space-y-1">
						<li>
							<a href="/shop" className="text-gray-400 hover:text-white transition-colors">
								All Products
							</a>
						</li>
						<li>
							<a href="/menu" className="text-gray-400 hover:text-white transition-colors">Menu</a>
						</li>
					</ul>
				</div>

				{/* Company Links */}
				<div>
					<h4 className="font-semibold mb-2">Company</h4>
					<ul className="space-y-1">
						<li>
							<a href="/about" className="text-gray-400 hover:text-white transition-colors">
								About
							</a>
						</li>
						<li>
							<a href="/contact" className="text-gray-400 hover:text-white transition-colors">
								Contact
							</a>
						</li>
						<li>
							<a href="/terms" className="text-gray-400 hover:text-white transition-colors">
								Terms
							</a>
						</li>
						<li>
							<a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
								Privacy
							</a>
						</li>
					</ul>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="font-semibold mb-2">Quick Links</h4>
					<ul className="space-y-1">
						<li><a href="/menu" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
						<li><a href="/shop" className="text-gray-400 hover:text-white transition-colors">Order Online</a></li>
					</ul>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="text-center text-xs text-gray-500 py-6 border-t border-gray-700 relative z-10">
				© 2025 Relish66 — Crafted with care.
			</div>
		</footer>
	);
}
