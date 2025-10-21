import { FaInstagram } from "react-icons/fa";
import api from "../utils/api";

export default function Footer() {
	return (
		<footer className="bg-black text-white relative overflow-hidden">
			{/* Animated background */}
			<div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#001F3F_0,transparent_40%),radial-gradient(circle_at_80%_30%,#B91C1C_0,transparent_35%),radial-gradient(circle_at_60%_80%,#243B53_0,transparent_35%)] animate-[footerGlow_12s_ease-in-out_infinite_alternate]" />

			{/* Main Footer Content */}
			<div className="container-pad py-16 md:py-20 grid md:grid-cols-4 gap-8 text-sm relative z-10">
				{/* Store Info */}
				<div>
					<h3 className="font-serif text-xl mb-2">Relish66</h3>
					<p className="text-gray-400">6933 Ellerslie Road SW, Edmonton, AB T6X 2A1</p>
					<p className="text-gray-400">+17806905888 • Info.relishon66@gmail.com</p>
					<div className="mt-3">
						<h4 className="font-semibold mb-1">Hours</h4>
						<ul className="text-gray-400 space-y-0.5">
							<li>Mon–Thu: 11am – 9pm</li>
							<li>Fri–Sat: 11am – 10pm</li>
							<li>Sun: 11am – 8pm</li>
						</ul>
					</div>
					<div className="flex gap-4 mt-3 text-xl">
						<a
							href="https://www.instagram.com/relishon66?igsh=MTQwa3F3MWVvNW42dQ=="
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="text-gray-400 hover:text-white transition-colors"
						>
							<FaInstagram />
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="font-semibold mb-2">Explore</h4>
					<ul className="space-y-1">
						<li>
							<a href="/order-online" className="text-gray-400 hover:text-white transition-colors">
								Order Online
							</a>
						</li>
						<li>
							<a href="/menu" className="text-gray-400 hover:text-white transition-colors">Menu</a>
						</li>
						<li>
							<a href="/catering" className="text-gray-400 hover:text-white transition-colors">Catering</a>
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

				{/* Newsletter + Payments */}
				<div>
					<h4 className="font-semibold mb-2">Stay in the loop</h4>
					<form className="flex gap-2">
						<input type="email" placeholder="Your email" className="bg-neutral-900 text-white placeholder:text-neutral-500 rounded px-3 py-2 w-full" />
						<button type="button" className="btn-primary">Subscribe</button>
					</form>
					<div className="mt-4">
						<h5 className="font-semibold mb-1">We accept</h5>
						<div className="flex gap-2 text-xs text-gray-400">
							<span className="px-2 py-1 border border-neutral-700 rounded">Visa</span>
							<span className="px-2 py-1 border border-neutral-700 rounded">Mastercard</span>
							<span className="px-2 py-1 border border-neutral-700 rounded">Amex</span>
							<span className="px-2 py-1 border border-neutral-700 rounded">Interac</span>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="text-center text-xs text-gray-500 py-6 border-t border-gray-700 relative z-10">
				© 2025 Relish66 — Crafted with care. Sister company of Chilli Peppers.
			</div>
		</footer>
	);
}
