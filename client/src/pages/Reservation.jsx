import { useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import { Seo } from '../components/Seo.jsx';
import api from '../utils/api';
import { MdCall, MdAccessTime, MdChecklist, MdOutlineRestaurant } from 'react-icons/md';

export default function Reservation() {
	const [form, setForm] = useState({
		outlet: '',
		name: '',
		email: '',
		phone: '',
		date: '',
		time: '',
		guests: '',
		occasion: '',
		message: '',
	});
	const [sent, setSent] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	const submit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			await api.post('/contact', {
				name: form.name,
				email: form.email,
				phone: form.phone,
				message: `Reservation Request
Outlet: ${form.outlet}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}
Occasion: ${form.occasion || 'N/A'}
Notes: ${form.message || 'N/A'}`,
			});
			setSent(true);
		} finally {
			setSubmitting(false);
		}
	};

	const inputClass =
		'w-full px-4 py-3 border border-[#06507D]/20 rounded-xl focus:ring-2 focus:ring-[#06507D]/30 focus:border-[#06507D]/50 transition-all duration-300 bg-white/50 backdrop-blur-sm';

	return (
		<div className="overflow-hidden min-h-screen bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5">
			<Seo title="Reservation" description="Reserve your table at Relish on 66 Restaurant and Bar." />
			<PageBanner
				title="Reserve Your Table"
				subtitle="Book your dining experience at Relish on 66 Restaurant and Bar"
				image="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop"
				height="h-[32vh]"
				overlay="bg-gradient-to-r from-[#06507D]/60 to-[#D42127]/60"
			/>

			<section className="container-pad py-14">
				<div className="grid lg:grid-cols-2 gap-8 items-start">
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#06507D]/20 shadow-xl p-6 md:p-8">
						<h2 className="font-serif text-3xl mb-6 bg-gradient-to-r from-[#D42127] via-[#06507D] to-[#D42127] bg-clip-text text-transparent">
							Reservation Request
						</h2>

						{sent ? (
							<div className="text-center py-8">
								<p className="text-xl font-semibold bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent">
									Reservation request submitted.
								</p>
								<p className="text-neutral-600 mt-2">Our team will call you to confirm your booking.</p>
							</div>
						) : (
							<form onSubmit={submit} className="space-y-4">
								<div>
									<label className="text-sm font-medium text-gray-700 mb-1 block">Select Outlet *</label>
									<select className={inputClass} value={form.outlet} onChange={(e) => setForm({ ...form, outlet: e.target.value })} required>
										<option value="">Choose an outlet</option>
										<option value="Relish on 66 Main">Relish on 66 Main</option>
									</select>
								</div>

								<div className="grid sm:grid-cols-2 gap-4">
									<div>
										<label className="text-sm font-medium text-gray-700 mb-1 block">Select Date *</label>
										<input type="date" className={inputClass} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
									</div>
									<div>
										<label className="text-sm font-medium text-gray-700 mb-1 block">Select Time *</label>
										<input type="time" className={inputClass} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
									</div>
								</div>

								<div className="grid sm:grid-cols-2 gap-4">
									<div>
										<label className="text-sm font-medium text-gray-700 mb-1 block">Number of Guests *</label>
										<input type="number" min="1" className={inputClass} placeholder="2 Guests" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} required />
									</div>
									<div>
										<label className="text-sm font-medium text-gray-700 mb-1 block">Occasion (Optional)</label>
										<select className={inputClass} value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })}>
											<option value="">Select occasion</option>
											<option value="Birthday">Birthday</option>
											<option value="Anniversary">Anniversary</option>
											<option value="Family Dinner">Family Dinner</option>
										</select>
									</div>
								</div>

								<div className="grid sm:grid-cols-2 gap-4">
									<input className={inputClass} placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
									<input type="email" className={inputClass} placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
								</div>

								<input className={inputClass} placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
								<textarea className={inputClass} rows="4" placeholder="Special requests (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

								<button
									type="submit"
									disabled={submitting}
									className="w-full px-6 py-4 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
								>
									{submitting ? 'Submitting...' : 'Submit Reservation Request'}
								</button>
								<p className="text-xs text-gray-500 text-center">
									By submitting, you agree to our reservation terms and conditions.
								</p>
							</form>
						)}
					</div>

					<div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#D42127]/20 shadow-lg p-6 md:p-8">
						<h3 className="font-serif text-3xl mb-5 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
							Table Reservation Terms & Conditions
						</h3>
						<ul className="space-y-3 text-sm text-gray-700 leading-relaxed list-disc list-inside">
							<li>A representative or manager will contact you shortly to confirm your booking details and discuss availability.</li>
							<li>Submitting a reservation request does not guarantee a confirmed booking. All reservations are subject to availability.</li>
							<li>Reservations may be subject to time limits depending on peak hours and policies.</li>
							<li>If you do not receive a confirmation call within a reasonable time, please contact us to check your request status.</li>
							<li>The restaurant reserves the right to modify or cancel reservations due to unforeseen circumstances.</li>
							<li>Kindly arrive on time for your reservation. A grace period of 15 minutes is given.</li>
							<li>Special requests (e.g., seating preference, dietary requirements) will be accommodated where possible.</li>
							<li>For large group reservations (10+ guests), contact us directly for custom arrangements.</li>
						</ul>
					</div>
				</div>

				<div className="grid md:grid-cols-3 gap-6 mt-12">
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#06507D]/20 shadow-md p-6 text-center">
						<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06507D] to-[#D42127] text-white flex items-center justify-center mx-auto mb-3 shadow-lg">
							<MdCall className="w-6 h-6" />
						</div>
						<h4 className="font-semibold text-gray-800">Confirmation Call</h4>
						<p className="text-sm text-neutral-600 mt-2">Receive a confirmation call from our team to finalize your booking.</p>
					</div>
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#06507D]/20 shadow-md p-6 text-center">
						<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06507D] to-[#D42127] text-white flex items-center justify-center mx-auto mb-3 shadow-lg">
							<MdAccessTime className="w-6 h-6" />
						</div>
						<h4 className="font-semibold text-gray-800">Flexible Timing</h4>
						<p className="text-sm text-neutral-600 mt-2">15-minute grace period for late arrivals to accommodate your schedule.</p>
					</div>
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#06507D]/20 shadow-md p-6 text-center">
						<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06507D] to-[#D42127] text-white flex items-center justify-center mx-auto mb-3 shadow-lg">
							<MdChecklist className="w-6 h-6" />
						</div>
						<h4 className="font-semibold text-gray-800">Special Requests</h4>
						<p className="text-sm text-gray-600 mt-2">We do our best to accommodate your seating and dietary preferences.</p>
					</div>
				</div>

				<div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-neutral-700">
					<MdOutlineRestaurant className="w-5 h-5 text-[#06507D]" />
					<span>
						Relish on 66 Restaurant and Bar <span className="text-[#D42127]">•</span> Mon - Sun <span className="text-[#D42127]">•</span>{' '}
						<span className="font-medium text-[#06507D]">11am - 11pm</span>
					</span>
				</div>
			</section>
		</div>
	);
}
