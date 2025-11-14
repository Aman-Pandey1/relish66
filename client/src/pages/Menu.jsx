import { motion } from 'framer-motion';
import { Seo } from '../components/Seo.jsx';

const Section = ({ title, children, bgColor = "bg-white/80" }) => (
	<motion.section 
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
		viewport={{ once: true, margin: "-100px" }}
		className="mb-12"
	>
		<motion.div 
			whileHover={{ scale: 1.02 }}
			className="inline-flex items-center gap-3 mb-6"
		>
			<div className="w-2 h-2 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full"></div>
			<h2 className="font-serif text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
				{title}
			</h2>
		</motion.div>
		<div className={`${bgColor} backdrop-blur-sm border border-[#06507D]/10 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group`}>
			<div className="absolute inset-0 bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
			<div className="relative z-10">{children}</div>
		</div>
	</motion.section>
);

const Item = ({ name, note, qty, price, index }) => (
	<motion.div 
		key={name}
		initial={{ x: -20, opacity: 0 }}
		whileInView={{ x: 0, opacity: 1 }}
		transition={{ delay: index * 0.05, duration: 0.4 }}
		viewport={{ once: true, margin: "-100px" }}
		whileHover={{ x: 5, transition: { duration: 0.2 } }}
		className="group relative py-3 border-b border-[#06507D]/5 last:border-b-0"
	>
		<div className="flex items-center justify-between">
			<div className="flex-1">
				<div className="flex items-center gap-2 mb-1">
					<div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
					<span className="font-semibold text-gray-800">{name}</span>
					{qty && <span className="text-[#06507D] font-medium text-sm">({qty})</span>}
				</div>
				{note && (
					<div className="text-gray-500 text-sm italic pl-5 relative">
						<span className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-[#D42127]/30 to-transparent"></span>
						{note}
					</div>
				)}
			</div>
			{price && (
				<div className="text-[#D42127] font-bold text-lg ml-4 group-hover:text-xl transition-all duration-200">
					${price}
				</div>
			)}
		</div>
	</motion.div>
);

const SubSection = ({ title, children, color = "#06507D" }) => (
	<div className="mb-6">
		<motion.h3 
			whileHover={{ scale: 1.05 }}
			className="font-semibold text-xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#D42127] bg-clip-text text-transparent"
		>
			{title}
		</motion.h3>
		<div className="space-y-3">{children}</div>
	</div>
);

export default function Menu() {
	const menuSections = [
		{
			title: "Breakfast / Lunch",
			bgColor: "bg-gradient-to-br from-white to-[#06507D]/5",
			items: [
				{ name: "Aloo Poori", qty: "4pcs", price: "10.66" },
				{ name: "Bedmi Poori", note: "Crispy urad dal poori", qty: "3 Pcs", price: "10.66" },
				{ name: "Chole Bhature", qty: "2 Pcs", price: "12.66" },
				{ name: "Chur Chur Naan", qty: "1 Pcs", price: "7.66" },
				{ name: "Amritsari Kulcha", qty: "1 Pcs", price: "7.66" },
				{ name: "Aloo Pyaz Parantha", qty: "1 Pcs", price: "4.66" },
				{ name: "Paneer Parantha", qty: "1 Pcs", price: "4.66" },
				{ name: "Dahi", price: "2.66" }
			]
		},
		{
			title: "Lunch Combo / Thali",
			bgColor: "bg-gradient-to-br from-white to-[#D42127]/5",
			items: [
				{ name: "Veg Thali", note: "Daal / Paneer / Rice / Bread / Raita / Salad / Sweet", price: "14.66" },
				{ name: "Non Veg Thali", note: "Daal / Chicken / Rice / Bread / Raita / Salad / Sweet", price: "15.66" }
			]
		},
		{
			title: "Chaat Bar",
			bgColor: "bg-gradient-to-br from-white to-[#06507D]/5",
			subsections: [
				{
					title: "Cold Items",
					items: [
						{ name: "Chaat Papadi", price: "7.66" },
						{ name: "Bhel Puri", price: "5.66" },
						{ name: "Dahi Bhalla (4)", price: "8.66" },
						{ name: "Gol Gappe (10)", price: "9.66" },
						{ name: "Dahi Poori (8)", price: "9.66" },
						{ name: "Rajbhog 4pcs", price: "9.66" }
					]
				},
				{
					title: "Tawa Items",
					items: [
						{ name: "Pav Bhaji", price: "9.66" },
						{ name: "Tawa Tikki Chaat (2)", price: "7.66" },
						{ name: "Tawa Tikki Chole (2)", price: "7.66" },
						{ name: "Nutree Kulcha (1)", price: "9.66" },
						{ name: "Vada Pav (2)", price: "7.66" }
					]
				}
			]
		},
		{
			title: "Frying Items",
			bgColor: "bg-gradient-to-br from-white to-[#D42127]/5",
			items: [
				{ name: "Samosa", price: "1.25" },
				{ name: "Samosa Chat", price: "8.66" },
				{ name: "Mix vegetable pakora", price: "8.66" },
				{ name: "Ram Ladoo with Lacha Mooli", price: "8.66" },
				{ name: "Dahi Kabab (4)", price: "8.66" },
				{ name: "Bread Pakora Stuffed", price: "1.66" },
				{ name: "Paneer Pakora", price: "9.66" }
			]
		},
		{
			title: "Veg Appetizers",
			bgColor: "bg-gradient-to-br from-white to-[#06507D]/5",
			items: [
				{ name: "Tandoori Paneer Tikka", price: "13.66" },
				{ name: "Tandoori Phool", price: "13.66" },
				{ name: "Dahi Kabab", price: "12.66" },
				{ name: "Achari Soya Chaap", price: "13.66" },
				{ name: "Tandoori Mushroom", price: "14.66" },
				{ name: "Crispy Vegetables", price: "12.66" },
				{ name: "Veg Platter", price: "23.66" }
			]
		},
		{
			title: "Non Veg Appetizers",
			bgColor: "bg-gradient-to-br from-white to-[#D42127]/5",
			items: [
				{ name: "Banjara Chicken Tikka", price: "15.66" },
				{ name: "Chicken Lasooni Malai Tikka", price: "15.66" },
				{ name: "Tandoori Chicken Half / Full", note: "Half / Full", price: "14.66/23.66" },
				{ name: "Tandoori Makhani Chicken Chop(3)", price: "15.66" },
				{ name: "Chicken Seekh Kabab", price: "14.66" },
				{ name: "Chicken Ghungroo Kabab", price: "14.66" },
				{ name: "Wings Tandoori (12)", price: "14.66" },
				{ name: "Mutton Seekh Kabab", price: "16.66" },
				{ name: "Mutton Barra Lb/Kg", price: "" },
				{ name: "Mutton Ghungroo Kabab", price: "16.66" },
				{ name: "Chicken tangri kabab", price: "15.66" },
				{ name: "Fish Tikka nurani", price: "14.66" },
				{ name: "Fish Pakora", price: "" },
				{ name: "Tandoori Prawns ajwaini", price: "19.66" },
				{ name: "Meat Platter", price: "28.66" }
			]
		},
		{
			title: "Veg Main Course",
			bgColor: "bg-gradient-to-br from-white to-[#06507D]/5",
			items: [
				{ name: "Shahi Paneer", price: "15.66" },
				{ name: "Palak Paneer", price: "15.66" },
				{ name: "Kadahi Paneer", price: "15.66" },
				{ name: "Daal Makhani", note: "Our Daal is slowly cooked overnight on Tandoor", price: "13.66" },
				{ name: "Yellow Dal Tadka", price: "12.66" },
				{ name: "Mix Vegetable fresh seasonal??" , price: "13.66" },
				{ name: "Kadahi Masala Mushroom", price: "13.66" },
				{ name: "Malai Kofta", price: "15.66" }
			]
		},
		{
			title: "Non Veg Main Course",
			bgColor: "bg-gradient-to-br from-white to-[#D42127]/5",
			items: [
				{ name: "Chicken Tikka Masala", price: "15.66" },
				{ name: "Butter Chicken (Bone / No Bone)", price: "15.66" },
				{ name: "Kadahi Chicken", price: "15.66" },
				{ name: "Palak Chicken", price: "15.66" },
				{ name: "Patiyala Chicken Curry", price: "15.66" },
				{ name: "Mutton Curry", price: "17.66" },
				{ name: "Kashmiri Mutton Rogan Josh", price: "17.66" },
				{ name: "Rara Mutton", price: "17.66" },
				{ name: "Saag Mutton", price: "17.66" },
				{ name: "Mughalai Mutton handi", price: "22.66" },
				{ name: "Murgh mussalam bonein", price: "16.66" },
				{ name: "Fish Goan Curry", price: "16.66" },
				{ name: "Laal Maas", price: "17.66" },
				{ name: "Prawn Masala (with Tail)", price: "17.66" }
			]
		},
		{
			title: "Rice",
			bgColor: "bg-gradient-to-br from-white to-[#06507D]/5",
			items: [
				{ name: "Cumin Rice", price: "5.66" },
				{ name: "Ghee Rice", price: "5.66" },
				{ name: "Plain Steam Rice", price: "4.66" },
				{ name: "Handi Biryani Veg, Chicken, Goat", price: "14.66/15.66/16.66" }
			]
		},
		{
			title: "Breads",
			bgColor: "bg-gradient-to-br from-white to-[#D42127]/5",
			items: [
				{ name: "Tandoori Roti", price: "2" },
				{ name: "Lacha Parantha", price: "3" },
				{ name: "Plain Naan", price: "2" },
				{ name: "Butter lachha Naan", price: "3" },
				{ name: "Garlic Naan", price: "3" },
				{ name: "Bread Basket any 4 assortment", price: "10.99" }
			]
		},
		{
			title: "Extras",
			bgColor: "bg-gradient-to-br from-white to-[#06507D]/5",
			items: [
				{ name: "Raita", price: "3.66" },
				{ name: "Plain Yogurt", price: "3.66" },
				{ name: "Papad", price: "2.66" },
				{ name: "Pickle", price: "1.66" },
				{ name: "Chutney", price: "2.66" },
				{ name: "Salad Green", price: "5.66" },
				{ name: "Masala Onions", price: "3.66" },
				{ name: "Sirke Wala Pyaaz", price: "3.66" }
			]
		},
		{
			title: "Soup",
			bgColor: "bg-gradient-to-br from-white to-[#D42127]/5",
			items: [
				{ name: "Tamato dhaniya shorba", note: "with croutons and butter cube on top", price: "6.66" }
			]
		},
		{
			title: "Drinks",
			bgColor: "bg-gradient-to-br from-white to-[#06507D]/5",
			items: [
				{ name: "Strawberry Shake", price: "7.66" },
				{ name: "Mango Milk Shake", price: "7.66" },
				{ name: "Cold Coffee", price: "7.66" },
				{ name: "Mango Lassi", price: "5.66" },
				{ name: "Lassi Salted", price: "5.66" },
				{ name: "Lassi Sweet", price: "5.66" },
				{ name: "Aam Panna", price: "5.66" },
				{ name: "Lemon Soda", price: "5.66" },
				{ name: "Indian Chai tea", price: "3.66" },
				{ name: "Pop Coke Products", price: "2.66" },
				{ name: "Juice", price: "2.66" },
				{ name: "Tandoori Chai", price: "3.66" },
				{ name: "Green Tea", price: "2.66" },
				{ name: "Coffee Nscafe", price: "3.66" },
				{ name: "Black Coffee", price: "2.66" },
				{ name: "Edible tea cup", price: "1.25" }
			]
		},
		{
			title: "Desserts (House Made)",
			bgColor: "bg-gradient-to-br from-white to-[#D42127]/5",
			items: [
				{ name: "Rasamalai Roll", price: "6.66" },
				{ name: "Moong Dal Halwa", price: "6.66" },
				{ name: "Gulab Jamun Hot", price: "6.66" },
				{ name: "Malai Kulfi", price: "6.66" },
				{ name: "Casata Ice Cream", price: "6.66" },
				{ name: "Brownie with Vanilla Ice Cream", price: "6.66" }
			]
		},
		{
			title: "Chef Specials: Eat As Much As You Can",
			bgColor: "bg-gradient-to-br from-white to-[#06507D]/5",
			special: true,
			items: [
				{ name: "Veg", price: "32.66" },
				{ name: "Meat", price: "38.66" }
			],
			note: (
				<div className="mt-4 pt-4 border-t border-[#06507D]/20 text-sm text-gray-600 space-y-2">
					<p className="font-semibold text-[#06507D] mb-2">What's Included:</p>
					<div className="grid md:grid-cols-2 gap-2">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#D42127] rounded-full"></div>
							<span>Welcome Drink</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#D42127] rounded-full"></div>
							<span>4 Appetizers</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#D42127] rounded-full"></div>
							<span>3 Mains</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#D42127] rounded-full"></div>
							<span>Rice, Salad, Bread Basket, Dessert</span>
						</div>
					</div>
				</div>
			)
		}
	];

	return (
		<div className="container-pad py-12 bg-gradient-to-br from-gray-50/50 to-white min-h-screen">
			<Seo title="Menu" description="Explore our authentic Indian menu featuring traditional breakfast, thalis, chaat, tandoori specialties, and house-made desserts." />
			
			{/* Header */}
			<motion.div 
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center mb-12"
			>
				<h1 className="font-serif text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
					Relish66 Menu
				</h1>
				<div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
				<p className="text-gray-600 text-lg font-medium">
					<span className="text-[#D42127] font-serif">SHIVANSH SARNA</span> • 11:00am to 3:00pm • Breakfast / Lunch
				</p>
				<motion.div 
					whileHover={{ scale: 1.05 }}
					className="mt-6 inline-flex items-center gap-2 text-[#06507D] font-semibold"
				>
					<a 
						href="https://shoppage.onrender.com/s/Relishon66" 
						target="_blank" 
						rel="noreferrer"
						className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#06507D]/20"
					>
						Order Online
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</motion.div>
			</motion.div>

			{/* Menu Sections */}
			{menuSections.map((section, index) => (
				<Section key={section.title} title={section.title} bgColor={section.bgColor}>
					{section.subsections ? (
						<div className="grid md:grid-cols-2 gap-8">
							{section.subsections.map((subsection, subIndex) => (
								<SubSection key={subIndex} title={subsection.title}>
									{subsection.items.map((item, itemIndex) => (
										<Item key={item.name} {...item} index={itemIndex} />
									))}
								</SubSection>
							))}
						</div>
					) : (
						<div>
							{section.special && (
								<motion.p 
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.3 }}
									className="mb-4 text-gray-600 italic font-medium"
								>
									Try our custom chef special menu (Tent Card)
								</motion.p>
							)}
							{section.items.map((item, itemIndex) => (
								<Item key={item.name} {...item} index={itemIndex} />
							))}
							{section.note && section.note}
						</div>
					)}
				</Section>
			))}

			{/* Notes Section */}
			<Section title="Important Notes" bgColor="bg-gradient-to-br from-white to-[#06507D]/5">
				<div className="space-y-4">
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<h3 className="font-semibold text-[#D42127] mb-3 text-lg">Dietary Information</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 bg-[#06507D] rounded-full mt-2 flex-shrink-0"></span>
									Please ask your server for gluten-free and vegan dishes
								</li>
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 bg-[#06507D] rounded-full mt-2 flex-shrink-0"></span>
									Labels: gluten-free, vegan, dairy-free, vegetarian
								</li>
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 bg-[#06507D] rounded-full mt-2 flex-shrink-0"></span>
									Spice levels: mild, medium, hot, extra hot
								</li>
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 bg-[#06507D] rounded-full mt-2 flex-shrink-0"></span>
									Groups of 10 or more: 14% gratuity will be applied
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-[#D42127] mb-3 text-lg">Our Commitment</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 bg-[#06507D] rounded-full mt-2 flex-shrink-0"></span>
									Our Dal Makhani is slowly cooked overnight on tandoor
								</li>
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 bg-[#06507D] rounded-full mt-2 flex-shrink-0"></span>
									We don't use any food colour and preservatives
								</li>
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 bg-[#06507D] rounded-full mt-2 flex-shrink-0"></span>
									Story behind Relish - Made with love in the mountains
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Section>

			{/* Presentation Notes */}
			<Section title="Presentation Notes" bgColor="bg-gradient-to-br from-white to-[#D42127]/5">
				<div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
					<div className="space-y-2">
						<h3 className="font-semibold text-[#06507D] mb-2">Garnish Excellence</h3>
						<p className="pl-4">Papadum, fryum, green onion florets, ginger julienne, beet powder, grated paneer, rose petals, silver work, butter in diya, pickled onion on skewers, mooli lachha</p>
					</div>
					<div className="space-y-2">
						<h3 className="font-semibold text-[#06507D] mb-2">Theatrical Elements</h3>
						<ul className="space-y-1">
							<li>• On-table flambé with spirit</li>
							<li>• On-table coal in diya presentation for smoky effect</li>
							<li>• Beetroot pink yogurt</li>
						</ul>
					</div>
				</div>
			</Section>

			{/* CTA Section */}
			<motion.section 
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="text-center py-16 mt-16"
			>
				<div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-6"></div>
				<h2 className="font-serif text-3xl md:text-4xl mb-4 text-gray-800">
					Ready to Order?
				</h2>
				<p className="text-gray-600 mb-8 max-w-2xl mx-auto">
					Experience the authentic flavors of India with our carefully crafted menu. Order online for quick delivery or pickup.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<motion.button 
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-8 py-4 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
					>
						Order Online
					</motion.button>
					<motion.button 
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-8 py-4 bg-white text-[#06507D] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#06507D]/20 text-lg"
					>
						Download Menu
					</motion.button>
				</div>
			</motion.section>
		</div>
	);
}