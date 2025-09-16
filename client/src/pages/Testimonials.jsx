import PageBanner from '../components/PageBanner.jsx';
import { motion } from 'framer-motion';

export default function Testimonials(){
	return (
		<div>
			<PageBanner
				title="Testimonials"
				subtitle="Made in Canada — Proudly local and community-driven"
				image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
				height="h-[35vh]"
				overlay="bg-[color:var(--brand-primary)]/40"
			/>
			<section className="container-pad py-12">
				<h2 className="font-serif text-3xl md:text-4xl mb-6">What People Say</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						{ name:'Amelia', text:'Absolutely delicious food. The tandoor specialties are a must-try!', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
						{ name:'Rohan', text:'Chef Karan Sarna’s specials are outstanding. Rich flavors and authentic taste.', img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
						{ name:'Lily', text:'Friendly staff and quick pickup. Highly recommend!', img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop' },
					].map((t, i)=> (
						<motion.div key={i} initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4 }} className="bg-white border border-brandBlue/20 rounded-xl p-6 flex items-start gap-4 shadow-sm">
							<img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
							<div>
								<div className="font-semibold text-brandBlue">{t.name}</div>
								<p className="text-neutral-700">“{t.text}”</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			<section className="container-pad py-12">
				<h2 className="font-serif text-3xl md:text-4xl mb-4">Chef Karan Sarna Specials</h2>
				<div className="grid md:grid-cols-4 gap-6 items-start">
					<img className="md:col-span-1 rounded-xl object-cover h-56 w-full" src="https://images.unsplash.com/photo-1526312426976-593c69b36f8e?q=80&w=600&auto=format&fit=crop" alt="Chef Karan Sarna" />
					<div className="md:col-span-3 grid sm:grid-cols-3 gap-4">
						{['Laal Maas','Tandoori Paneer Tikka','Chole Bhature'].map((dish)=> (
							<div key={dish} className="border border-brandBlue/20 rounded-xl p-4">
								<div className="font-semibold">{dish}</div>
								<div className="text-sm text-neutral-600">Signature preparation by Chef</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="container-pad py-12">
				<h2 className="font-serif text-3xl md:text-4xl mb-6">Community Focus</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="border rounded-xl p-6">
						<h3 className="font-semibold text-xl mb-2">Local Vendors</h3>
						<p className="text-neutral-700">We partner with neighborhood vendors and artisans.</p>
					</div>
					<div className="border rounded-xl p-6">
						<h3 className="font-semibold text-xl mb-2">Farmer Market Products</h3>
						<p className="text-neutral-700">Fresh, seasonal, and market-centric selections.</p>
					</div>
					<div className="border rounded-xl p-6">
						<h3 className="font-semibold text-xl mb-2">Expert Staff</h3>
						<p className="text-neutral-700">Knowledgeable team to guide your choices.</p>
					</div>
				</div>
			</section>

			<section className="container-pad py-12">
				<h2 className="font-serif text-3xl md:text-4xl mb-6">Local Highlights</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="border rounded-xl p-6">
						<h3 className="font-semibold mb-1">Food</h3>
						<p className="text-neutral-700">Authentic Indian cuisine with house-made masalas.</p>
					</div>
					<div className="border rounded-xl p-6">
						<h3 className="font-semibold mb-1">Culture</h3>
						<p className="text-neutral-700">Celebrating Canadian-Indian community stories.</p>
					</div>
					<div className="border rounded-xl p-6">
						<h3 className="font-semibold mb-1">Location</h3>
						<p className="text-neutral-700">In the heart of Golden, BC.</p>
					</div>
				</div>
			</section>
		</div>
	);
}

