import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-black text-white relative overflow-hidden">
			{/* Animated background */}
			<div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#001F3F_0,transparent_40%),radial-gradient(circle_at_80%_30%,#B91C1C_0,transparent_35%),radial-gradient(circle_at_60%_80%,#243B53_0,transparent_35%)] animate-[footerGlow_12s_ease-in-out_infinite_alternate]" />

			{/* Main Footer Content */}
			<div className="container-pad py-16 md:py-20 grid md:grid-cols-4 gap-8 text-sm relative z-10">
				{/* Store Info */}
				<div>
					<h3 className="font-serif text-xl mb-2">RelishOn66</h3>
					<p className="text-gray-400">6933 Ellerslie Road SW, Edmonton, AB T6X 2A1</p>
					<p className="text-gray-400">+1 (780) 690-0746 • Info.relishon66@gmail.com</p>
					<div className="mt-3">
						<h4 className="font-semibold mb-1">Hours</h4>
						<ul className="text-gray-400 space-y-0.5">
							<li>Mon - Sun: 11am - 11pm</li>
						</ul>
					</div>
					<div className="flex gap-4 mt-3 text-xl">
						<a
							href="https://www.facebook.com/profile.php?id=61579174366831"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
							className="text-gray-400 hover:text-white transition-colors"
						>
							<FaFacebook />
						</a>
						<a
							href="https://www.instagram.com/relishon66"
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

				{/* Payments */}
				<div>
					<h5 className="font-semibold mb-1">We accept</h5>
					<div className="flex gap-2 text-xs text-gray-400">
						<span className="px-2 py-1 border border-neutral-700 rounded">Visa</span>
						<span className="px-2 py-1 border border-neutral-700 rounded">Mastercard</span>
					</div>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="text-center text-xs text-gray-500 py-6 border-t border-gray-700 relative z-10">
				<p>© 2025 Relish66 — Crafted with care. Sister company of Chilli Peppers.</p>
				<p className="mt-2">Designed and developed by MasterMinds Junior</p>
			</div>
		</footer>
	);
}
