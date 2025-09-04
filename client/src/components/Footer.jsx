import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import api from "../utils/api";

export default function Footer() {
	return (
		<footer className="bg-black text-white relative overflow-hidden">
			{/* Animated background */}
			<div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#7A1E1E_0,transparent_40%),radial-gradient(circle_at_80%_30%,#A64E4E_0,transparent_35%),radial-gradient(circle_at_60%_80%,#5E1717_0,transparent_35%)] animate-[footerGlow_12s_ease-in-out_infinite_alternate]" />

			{/* Main Footer Content */}
			<div className="container-pad py-16 md:py-20 grid md:grid-cols-4 gap-8 text-sm relative z-10">
				{/* Store Info */}
				<div>
					<h3 className="font-serif text-xl mb-2">Kicking Horse General Store</h3>
					<p className="text-gray-400">123 Mountain Rd, Golden, BC</p>
					<p className="text-gray-400">(604) 555-0123 • hello@kickinghorse.store</p>
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
							<a
								href="/shop?category=beer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Beer
							</a>
						</li>
						<li>
							<a
								href="/shop?category=wine"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Wine
							</a>
						</li>
						<li>
							<a
								href="/shop?category=spirits"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Spirits
							</a>
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

				{/* Newsletter */}
				<div>
					<h4 className="font-semibold mb-2">Newsletter</h4>
					<form
						className="flex gap-2"
						onSubmit={async (e) => {
							e.preventDefault();
							const email = e.currentTarget.elements.email.value;
							await api.post("/newsletter/subscribe", { email, source: "footer" });
							e.currentTarget.reset();
						}}
					>
						<input
							name="email"
							type="email"
							required
							className="border border-gray-600 bg-black text-white placeholder-gray-400 px-3 py-2 rounded w-full"
							placeholder="Email address"
						/>
						<button
							type="submit"
							className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded transition-colors"
						>
							Subscribe
						</button>
					</form>
					<p className="text-gray-500 text-xs mt-2">
						By subscribing you agree to our terms.
					</p>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="text-center text-xs text-gray-500 py-6 border-t border-gray-700 relative z-10">
				© 2025 Kicking Horse General Store — Crafted with care.
			</div>
		</footer>
	);
}
