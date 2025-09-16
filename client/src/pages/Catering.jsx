import PageBanner from '../components/PageBanner.jsx';

export default function Catering(){
	return (
		<div>
			<PageBanner
				title="Catering"
				subtitle="Live Indian Kitchen • 500+ servings available"
				image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
				height="h-[35vh]"
				overlay="bg-black/40"
			/>
			<section className="container-pad py-12">
				<div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">500+ servings available</div>
				<div className="grid md:grid-cols-3 gap-8">
					<form className="md:col-span-2 border rounded-xl p-6 bg-white space-y-4">
						<div>
							<label className="block text-sm font-medium mb-1">No. of Guests</label>
							<input type="number" min={1} className="border rounded px-3 py-2 w-full" placeholder="e.g. 120" />
						</div>
						<div>
							<label className="block text-sm font-medium mb-1">Comments</label>
							<textarea rows={6} className="border rounded px-3 py-2 w-full" placeholder="Menu preferences, dates, budget, live stations, etc." />
						</div>
						<button type="button" className="btn-primary">Request Quote</button>
					</form>
					<aside className="border rounded-xl p-6 bg-white space-y-4">
						<h3 className="font-serif text-2xl mb-2">Highlights</h3>
						<ul className="space-y-2 text-sm">
							<li className="flex items-center gap-2"><span>🍽️</span><span>Food trays</span></li>
							<li className="flex items-center gap-2"><span>👨‍🍳</span><span>Chef hat</span></li>
							<li className="flex items-center gap-2"><span>🔥</span><span>Live tandoor</span></li>
							<li className="flex items-center gap-2"><span>🍢</span><span>Chaat bars</span></li>
						</ul>
						<div className="p-4 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">Live Indian Kitchen experience</div>
					</aside>
				</div>
			</section>
		</div>
	);
}

