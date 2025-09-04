export default function Privacy(){
	return (
		<div className="container-pad py-10">
			<h1 className="font-serif text-3xl mb-4">Privacy Policy</h1>
			<div className="prose max-w-none text-neutral-800">
				<p>Effective date: {new Date().toLocaleDateString()}</p>
				<h2 className="font-semibold text-xl mt-6">Overview</h2>
				<p>We respect your privacy. This policy explains what information we collect, how we use it, and your choices. By using our website and services, you agree to this policy.</p>

				<h2 className="font-semibold text-xl mt-6">Information We Collect</h2>
				<ul className="list-disc ml-6">
					<li>Account data: name, email, password (hashed), membership status</li>
					<li>Order data: items purchased, delivery address, contact details</li>
					<li>Payment data: method and status (processed by third-party providers)</li>
					<li>Technical data: IP address, device info, cookies for session/auth</li>
				</ul>

				<h2 className="font-semibold text-xl mt-6">How We Use Information</h2>
				<ul className="list-disc ml-6">
					<li>To process and deliver orders</li>
					<li>To manage your account, membership, and rewards</li>
					<li>To communicate updates, receipts, and support</li>
					<li>To improve our products, services, and website</li>
				</ul>

				<h2 className="font-semibold text-xl mt-6">Sharing</h2>
				<p>We do not sell your personal information. We share limited data with service providers (e.g., payment processors, email services) to operate our business, under confidentiality obligations.</p>

				<h2 className="font-semibold text-xl mt-6">Security</h2>
				<p>We use reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission or storage is 100% secure.</p>

				<h2 className="font-semibold text-xl mt-6">Data Retention</h2>
				<p>We retain information as needed to provide services, comply with legal obligations, resolve disputes, and enforce agreements.</p>

				<h2 className="font-semibold text-xl mt-6">Your Choices</h2>
				<ul className="list-disc ml-6">
					<li>Access/Update: You may access or update your account information through your profile or by contacting us.</li>
					<li>Marketing: You can unsubscribe from marketing emails at any time via the link in the email.</li>
					<li>Cookies: You can control cookies through your browser settings, though some features may not work properly.</li>
				</ul>

				<h2 className="font-semibold text-xl mt-6">Children</h2>
				<p>Our services are not directed to individuals under the legal drinking age. We do not knowingly collect data from minors.</p>

				<h2 className="font-semibold text-xl mt-6">International Users</h2>
				<p>Your data may be processed in countries other than your own. By using our services, you consent to such processing.</p>

				<h2 className="font-semibold text-xl mt-6">Changes to This Policy</h2>
				<p>We may update this policy from time to time. We will post the updated policy on this page with a new effective date.</p>

				<h2 className="font-semibold text-xl mt-6">Contact Us</h2>
				<p>If you have questions about this policy, contact us at hello@kickinghorse.store.</p>
			</div>
		</div>
	);
}