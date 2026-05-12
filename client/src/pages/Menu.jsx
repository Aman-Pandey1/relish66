import React from 'react';
import { motion } from 'framer-motion';
import { Seo } from '../components/Seo.jsx';
import { Link } from 'react-router-dom';

// Import menu item images
import aaloPuri from '../assets/aalo puri.jpg';
import alooPyazParantha from '../assets/Aloo Pyaz Parantha.jpg';
import amritsariKulcha from '../assets/Amritsari Kulcha.jpg';
import bedmiPuri from '../assets/Bedmi puri.jpg';
import bhelPuri from '../assets/Bhel Puri.jpg';
import breadPakoraStuffed from '../assets/Bread Pakora Stuffed.jpg';
import chaatPapdi from '../assets/Chaat papdi.jpg';
import choleBhature from '../assets/chole bhature.jpg';
import churChurNaan from '../assets/chur chur naan.jpg';
import dahiBhalle from '../assets/Dahi Bhalle.jpg';
import dahiKabab from '../assets/Dahi Kabab.jpg';
import dahiPoori from '../assets/Dahi Poori.jpg';
import golGappe from '../assets/Gol Gappe.jpg';
import mixVegetablePakora from '../assets/Mix vegetable pakora.jpg';
import paneerPakora from '../assets/Paneer Pakora.jpg';
import paneerParantha from '../assets/Paneer Parantha.jpg';
import pavBhaji from '../assets/PAv Bhaji.jpg';
import samosaChaat from '../assets/Samosa Chaat.jpg';
import samosa from '../assets/Samosa.jpg';
import tawaTikkiChaat from '../assets/Tawa Tikki Chaat.jpg';
import tawaTikkiChole from '../assets/Tawa Tikki Chole.jpg';
import vadaPav from '../assets/Vada Pav.jpg';
import curd from '../assets/Curd.jpg';

// Import Veg Appetizers images
import tandooriPaneerTikka from '../assets/Veg appetizers/Tandori paneer tikka.png';
import tandooriPhool from '../assets/Veg appetizers/Tandori Phool.png';
import dahiKababVeg from '../assets/Veg appetizers/Dahi kabab.png';
import achariSoyaChaap from '../assets/Veg appetizers/Aachari Soya chaap.png';
import tandooriMushroom from '../assets/Veg appetizers/Tandoori Mushroom.png';
import crispyVegetables from '../assets/Veg appetizers/Crispy Vegetables.png';
import vegPlatter from '../assets/Veg appetizers/Veg Platter.png';

// Import Non Veg Appetizers images
import banjaraChickenTikka from '../assets/Non veg appetizers/Banjara Chicken Tikka.png';
import chickenLasooniMalaiTikka from '../assets/Non veg appetizers/Chicken Lasooni Malai Tikka.png';
import tandooriChicken from '../assets/Non veg appetizers/Tandoori Chicken.png';
import tandooriMakhaniChickenChop from '../assets/Non veg appetizers/Tandoori Makhani Chicken Chop.png';
import chickenSeekhKabab from '../assets/Non veg appetizers/Chicken Seekh Kabab.png';
import chickenGhungrooKabab from '../assets/Non veg appetizers/Chicken Ghungroo Kabab.png';
import wingsTandoori from '../assets/Non veg appetizers/Wings Tandoori (12).png';
import muttonSeekhKabab from '../assets/Non veg appetizers/Mutton Seekh Kabab.png';
import muttonBarra from '../assets/Non veg appetizers/Mutton Barra LbKg.png';
import muttonGhungrooKabab from '../assets/Non veg appetizers/Mutton Ghungroo Kabab.png';
import chickenTangriKabab from '../assets/Non veg appetizers/Chicken tangri kabab.png';
import fishTikkaNurani from '../assets/Non veg appetizers/Fish Tikka nurani.png';
import fishPakora from '../assets/Non veg appetizers/Fish Pakora.png';
import tandooriPrawnsAjwaini from '../assets/Non veg appetizers/Tandoori Prawns ajwaini.png';
import meatPlatter from '../assets/Non veg appetizers/Meat Platter.png';

// Import Veg Main Course images
import shahiPaneer from '../assets/Veg Main course/Shahi Paneer.png';
import palakPaneer from '../assets/Veg Main course/Palak Paneer.png';
import kadahiPaneer from '../assets/Veg Main course/Kadahi Paneer.png';
import dalMakhani from '../assets/Veg Main course/Dal Makhani.png';
import yellowDalTadka from '../assets/Veg Main course/Yellow Dal Tadka.png';
import mixVegetableFreshSeasonal from '../assets/Veg Main course/Mix Vegetable fresh seasonal.png';
import kadahiMasalaMushroom from '../assets/Veg Main course/Kadahi Masala Mushroom.png';
import malaiKofta from '../assets/Veg Main course/Malai Kofta.png';

// Import Non Veg Main Course images
import chickenTikkaMasala from '../assets/Non veg main course/Chicken Tikka Masala.png';
import butterChicken from '../assets/Non veg main course/Butter Chicken (Bone  No Bone).png';
import kadahiChicken from '../assets/Non veg main course/Kadahi Chicken.png';
import palakChicken from '../assets/Non veg main course/Palak Chicken.png';
import patiyalaChickenCurry from '../assets/Non veg main course/Patiyala Chicken Curry.png';
import muttonCurry from '../assets/Non veg main course/Mutton Curry.png';
import kashmiriMuttonRoganJosh from '../assets/Non veg main course/Kashmiri Mutton Rogan Josh.png';
import raraMutton from '../assets/Non veg main course/Rara Mutton.png';
import saagMutton from '../assets/Non veg main course/Saga Mutton.png';
import mughalaiMuttonHandi from '../assets/Non veg main course/Mughalai Mutton handi.png';
import murghMussalamBonein from '../assets/Non veg main course/Murgh mussalam bonein.png';
import fishGoanCurry from '../assets/Non veg main course/Fish Goan Curry.png';
import laalMaas from '../assets/Non veg main course/Laal Maas.png';
import prawnMasala from '../assets/Non veg main course/Prawn Masala (with Tail).png';

// Import Desserts and other items images
import rasamalaiRoll from '../assets/Rasamalai Roll.jpg';
import moongDalHalwa from '../assets/moong dal halwa.jpg';
import gulabJamunHot from '../assets/Gulab Jamun Hot.jpg';
import malaiKulfi from '../assets/Malai Kulfi.jpg';
import casata from '../assets/casata.jpg';
import brownieWithVanillaIceCream from '../assets/Brownie with Vanilla Ice Cream.jpg';

// Import Drinks images
import strawberryShake from '../assets/Strawberry Shake.jpg';
import mangoMilkShake from '../assets/Mango Milk Shake.jpg';
import coldCoffee from '../assets/Cold coffe.jpg';
import mangoLassi from '../assets/Mango Lassi.jpg';
import lassiSalted from '../assets/Lassi Salted.jpg';
import lassiSweet from '../assets/Lassi Sweet.jpg';
import aamPanna from '../assets/Aam Panna.jpg';
import lemonSoda from '../assets/Lemon Soda.jpg';
import chaiTea from '../assets/Chai tea.jpg';
import popCokeProducts from '../assets/Pop Coke Products.jpg';
import juice from '../assets/Juice.jpg';
import tandooriChai from '../assets/Tandoori Chai.jpg';
import greenTea from '../assets/Green Tea.jpg';
import coffeeNscafe from '../assets/Coffee Nscafe.jpg';
import blackCoffee from '../assets/Black Coffee.jpg';

// Import Rice images
import cuminRice from '../assets/Cumin Rice.jpg';
import gheeRice from '../assets/Ghee Rice.jpg';
import plainSteamRice from '../assets/Plain Steam Rice.jpg';

// Import Breads images
import tandooriRoti from '../assets/Tandoori Roti.jpg';
import lachaParantha from '../assets/Lacha Parantha.jpg';
import plainNaan from '../assets/Plain Naan.jpg';
import butterLachhaNaan from '../assets/Butter lachha Naan.jpg';
import garlicNaan from '../assets/Garlic Naan.jpg';
import breadBasket from '../assets/Bread Basket any 4 assortment.jpg';

// Import Extras images
import raita from '../assets/Raita.jpg';
import plainYogurt from '../assets/Plain Yogurt.jpg';
import papad from '../assets/papad.jpg';
import pickle from '../assets/Pickle.jpg';
import chutney from '../assets/chutney.jpg';
import saladGreen from '../assets/Salad Green.jpg';
import masalaOnions from '../assets/Masala Onions.jpg';
import sirkeWalaPyaaz from '../assets/sirke wala pyaar.jpg';

// Import Soup images
import tamatoDhaniyaShorba from '../assets/Tamato dhaniya shorba.jpg';

// Helper function to convert menu name to image file name format
const nameToImageName = (name) => {
	return name
		.replace(/\([^)]*\)/g, '') // Remove parentheses and content
		.replace(/\s*\/\s*/g, ' ') // Replace slashes with spaces
		.replace(/\?+/g, '') // Remove question marks
		.trim()
		.replace(/\s+/g, ' '); // Replace multiple spaces with single space
};

// Image mapping function - comprehensive mapping for all menu items
const getMenuItemImage = (itemName) => {
	const imageMap = {
		// Breakfast/Lunch
		'Aloo Poori': aaloPuri,
		'Bedmi Poori': bedmiPuri,
		'Chole Bhature': choleBhature,
		'Chur Chur Naan': churChurNaan,
		'Amritsari Kulcha': amritsariKulcha,
		'Aloo Pyaz Parantha': alooPyazParantha,
		'Paneer Parantha': paneerParantha,
		'Dahi': curd,
		// Chaat
		'Chaat Papadi': chaatPapdi,
		'Bhel Puri': bhelPuri,
		'Dahi Bhalla (4)': dahiBhalle,
		'Dahi Bhalla': dahiBhalle,
		'Gol Gappe (10)': golGappe,
		'Gol Gappe': golGappe,
		'Dahi Poori (8)': dahiPoori,
		'Dahi Poori': dahiPoori,
		'Pav Bhaji': pavBhaji,
		'Tawa Tikki Chaat (2)': tawaTikkiChaat,
		'Tawa Tikki Chaat': tawaTikkiChaat,
		'Tawa Tikki Chole (2)': tawaTikkiChole,
		'Tawa Tikki Chole': tawaTikkiChole,
		'Vada Pav (2)': vadaPav,
		'Vada Pav': vadaPav,
		// Frying Items
		'Samosa': samosa,
		'Samosa Chat': samosaChaat,
		'Mix vegetable pakora': mixVegetablePakora,
		'Mix Vegetable Pakora': mixVegetablePakora,
		'Bread Pakora Stuffed': breadPakoraStuffed,
		'Paneer Pakora': paneerPakora,
		'Dahi Kabab (4)': dahiKabab, // Frying Items version
		// Veg Appetizers
		'Tandoori Paneer Tikka': tandooriPaneerTikka,
		'Tandoori Phool': tandooriPhool,
		'Dahi Kabab': dahiKababVeg, // Veg Appetizers version (without quantity)
		'Achari Soya Chaap': achariSoyaChaap,
		'Tandoori Mushroom': tandooriMushroom,
		'Crispy Vegetables': crispyVegetables,
		'Veg Platter': vegPlatter,
		// Non Veg Appetizers
		'Banjara Chicken Tikka': banjaraChickenTikka,
		'Chicken Lasooni Malai Tikka': chickenLasooniMalaiTikka,
		'Tandoori Chicken Half / Full': tandooriChicken,
		'Tandoori Chicken Half': tandooriChicken,
		'Tandoori Chicken Full': tandooriChicken,
		'Tandoori Makhani Chicken Chop(3)': tandooriMakhaniChickenChop,
		'Chicken Seekh Kabab': chickenSeekhKabab,
		'Chicken Ghungroo Kabab': chickenGhungrooKabab,
		'Wings Tandoori (12)': wingsTandoori,
		'Wings Tandoori': wingsTandoori,
		'Mutton Seekh Kabab': muttonSeekhKabab,
		'Mutton Barra Lb/Kg': muttonBarra,
		'Mutton Ghungroo Kabab': muttonGhungrooKabab,
		'Chicken tangri kabab': chickenTangriKabab,
		'Chicken Tangri Kabab': chickenTangriKabab,
		'Fish Tikka nurani': fishTikkaNurani,
		'Fish Tikka Nurani': fishTikkaNurani,
		'Fish Pakora': fishPakora,
		'Tandoori Prawns ajwaini': tandooriPrawnsAjwaini,
		'Tandoori Prawns Ajwaini': tandooriPrawnsAjwaini,
		'Meat Platter': meatPlatter,
		// Veg Main Course
		'Shahi Paneer': shahiPaneer,
		'Palak Paneer': palakPaneer,
		'Kadahi Paneer': kadahiPaneer,
		'Daal Makhani': dalMakhani,
		'Dal Makhani': dalMakhani,
		'Yellow Dal Tadka': yellowDalTadka,
		'Mix Vegetable fresh seasonal??': mixVegetableFreshSeasonal,
		'Mix Vegetable Fresh Seasonal': mixVegetableFreshSeasonal,
		'Kadahi Masala Mushroom': kadahiMasalaMushroom,
		'Malai Kofta': malaiKofta,
		// Non Veg Main Course
		'Chicken Tikka Masala': chickenTikkaMasala,
		'Butter Chicken (Bone / No Bone)': butterChicken,
		'Butter Chicken': butterChicken,
		'Kadahi Chicken': kadahiChicken,
		'Palak Chicken': palakChicken,
		'Patiyala Chicken Curry': patiyalaChickenCurry,
		'Mutton Curry': muttonCurry,
		'Kashmiri Mutton Rogan Josh': kashmiriMuttonRoganJosh,
		'Rara Mutton': raraMutton,
		'Saag Mutton': saagMutton,
		'Mughalai Mutton handi': mughalaiMuttonHandi,
		'Mughalai Mutton Handi': mughalaiMuttonHandi,
		'Murgh mussalam bonein': murghMussalamBonein,
		'Murgh Mussalam Bonein': murghMussalamBonein,
		'Fish Goan Curry': fishGoanCurry,
		'Laal Maas': laalMaas,
		'Prawn Masala (with Tail)': prawnMasala,
		'Prawn Masala': prawnMasala,
		// Desserts
		'Rasamalai Roll': rasamalaiRoll,
		'Moong Dal Halwa': moongDalHalwa,
		'Gulab Jamun Hot': gulabJamunHot,
		'Malai Kulfi': malaiKulfi,
		'Casata Ice Cream': casata,
		'Brownie with Vanilla Ice Cream': brownieWithVanillaIceCream,
		// Drinks
		'Strawberry Shake': strawberryShake,
		'Mango Milk Shake': mangoMilkShake,
		'Cold Coffee': coldCoffee,
		'Mango Lassi': mangoLassi,
		'Lassi Salted': lassiSalted,
		'Lassi Sweet': lassiSweet,
		'Aam Panna': aamPanna,
		'Lemon Soda': lemonSoda,
		'Chai tea': chaiTea,
		'Pop Coke Products': popCokeProducts,
		'Juice': juice,
		'Tandoori Chai': tandooriChai,
		'Green Tea': greenTea,
		'Coffee Nscafe': coffeeNscafe,
		'Black Coffee': blackCoffee,
		// Rice
		'Cumin Rice': cuminRice,
		'Ghee Rice': gheeRice,
		'Plain Steam Rice': plainSteamRice,
		// Breads
		'Tandoori Roti': tandooriRoti,
		'Lacha Parantha': lachaParantha,
		'Plain Naan': plainNaan,
		'Butter lachha Naan': butterLachhaNaan,
		'Garlic Naan': garlicNaan,
		'Bread Basket any 4 assortment': breadBasket,
		// Extras
		'Raita': raita,
		'Plain Yogurt': plainYogurt,
		'Papad': papad,
		'Pickle': pickle,
		'Chutney': chutney,
		'Salad Green': saladGreen,
		'Masala Onions': masalaOnions,
		'Sirke Wala Pyaaz': sirkeWalaPyaaz,
		// Soup
		'Tamato dhaniya shorba': tamatoDhaniyaShorba,
	};
	
	// Try exact match first
	if (imageMap[itemName]) {
		return imageMap[itemName];
	}
	
	// Try case-insensitive match
	const lowerName = itemName.toLowerCase();
	for (const [key, value] of Object.entries(imageMap)) {
		if (key.toLowerCase() === lowerName) {
			return value;
		}
	}
	
	// Try partial match (remove numbers, parentheses, etc.)
	const cleanName = nameToImageName(itemName);
	for (const [key, value] of Object.entries(imageMap)) {
		if (nameToImageName(key).toLowerCase() === cleanName.toLowerCase()) {
			return value;
		}
	}
	
	// Return null if no match found - images will be loaded dynamically if they exist
	return null;
};

const Section = ({ title, children }) => (
	<motion.section 
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
		viewport={{ once: true, margin: "-100px" }}
		className="mb-16"
	>
			<motion.h2 
				className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent mb-8 text-center"
			>
				{title}
			</motion.h2>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{children}
		</div>
	</motion.section>
);

const Item = ({ name, note, qty, price, index, description }) => {
	const [itemImage, setItemImage] = React.useState(null);
	const [imageError, setImageError] = React.useState(false);
	
	React.useEffect(() => {
		// First try static mapping
		const staticImage = getMenuItemImage(name);
		if (staticImage) {
			setItemImage(staticImage);
			return;
		}
		
		// If no static image, try dynamic import based on menu name
		const cleanName = nameToImageName(name)
			.replace(/\s+/g, ' ')
			.trim();
		
		// Try to dynamically import image
		const tryLoadImage = async () => {
			try {
				// Convert name to potential file name (handle spaces, special chars)
				const imageName = cleanName.replace(/\s+/g, ' ');
				// Try importing with different variations
				const variations = [
					imageName,
					imageName.replace(/\s/g, ''),
					imageName.replace(/\s/g, '_'),
					imageName.toLowerCase(),
					imageName.toLowerCase().replace(/\s/g, ''),
					imageName.toLowerCase().replace(/\s/g, '_')
				];
				
				for (const variation of variations) {
					try {
						const imageModule = await import(`../assets/${variation}.jpg`);
						setItemImage(imageModule.default);
						return;
					} catch {
						// Try with different extensions
						try {
							const imageModule = await import(`../assets/${variation}.png`);
							setItemImage(imageModule.default);
							return;
						} catch {
							continue;
						}
					}
				}
			} catch {
				// Image not found, will show without image
			}
		};
		
		tryLoadImage();
	}, [name]);
	
	return (
	<motion.div 
		key={name}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1, duration: 0.4 }}
		viewport={{ once: true, margin: "-100px" }}
			whileHover={{ y: -5, transition: { duration: 0.2 } }}
			className="bg-gradient-to-br from-[#06507D]/10 to-[#D42127]/10 border border-[#06507D]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
		>
			{/* Image */}
			{itemImage && !imageError && (
				<div className="relative h-48 overflow-hidden">
					<img 
						src={itemImage} 
						alt={name}
						className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						onError={() => setImageError(true)}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#06507D]/35 via-[#D42127]/15 to-transparent"></div>
					</div>
				)}
			
			{/* Content */}
			<div className="p-5">
				<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-2">
					<h3 className="font-bold text-[#06507D] text-lg leading-tight sm:flex-1">
						{name}
						{qty && <span className="text-gray-600 text-sm font-normal ml-2">({qty})</span>}
					</h3>
			{price && (
						<div className="text-[#D42127] font-bold text-xl flex-shrink-0 sm:text-right">
					${price}
				</div>
					)}
				</div>
				
				{(note || description) && (
					<p className="text-gray-700 text-sm leading-relaxed mb-3">
						{description || note}
					</p>
			)}
		</div>
	</motion.div>
);
};

const SubSection = ({ title, children }) => (
	<div className="mb-8">
		<motion.h3 
			className="font-semibold text-xl mb-6 text-white"
		>
			{title}
		</motion.h3>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{children}</div>
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
				{ name: "Chai tea", price: "3.66" },
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
			title: "A La Carte Buffet Served at Your Table",
			bgColor: "bg-gradient-to-br from-white to-[#06507D]/5",
			special: true,
			items: [
				{ name: "Veg" },
				{ name: "Meat" }
			],
			note: (
				<div className="mt-4 pt-4 border-t border-[#06507D]/20 text-sm text-gray-700 space-y-4">
					<div>
						<p className="font-semibold text-[#06507D]">Begin Your Experience With</p>
						<p>Signature Welcome Drink</p>
					</div>
					<div>
						<p className="font-semibold text-[#06507D]">Starters to Share</p>
						<ul className="list-disc list-inside space-y-1">
							<li>2 Vegetarian Appetizers</li>
							<li>2 Non-Vegetarian Appetizers</li>
							<li>House Condiments & Chutneys</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold text-[#06507D]">Soup Course</p>
						<p>Chef's Seasonal Soup</p>
					</div>
					<div>
						<p className="font-semibold text-[#06507D]">Main Course Selection</p>
						<ul className="list-disc list-inside space-y-1">
							<li>2 Vegetarian Curries</li>
							<li>1 Non-Vegetarian Curry</li>
							<li>Fragrant Fresh Rice</li>
							<li>Fresh Salad</li>
							<li>Yogurt / Raita</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold text-[#06507D]">Fresh From The Tandoor</p>
						<p>Assorted Bread Basket (Naan, Roti & Chef's Selection)</p>
					</div>
					<div>
						<p className="font-semibold text-[#06507D]">Sweet Ending</p>
						<p>Dessert</p>
					</div>
				</div>
			)
		}
	];

	return (
		<div className="container-pad py-12 bg-white min-h-screen">
			<Seo title="Menu" description="Explore our authentic menu featuring traditional breakfast, thalis, chaat, tandoori specialties, and house-made desserts." />
			
			{/* Header */}
			<motion.div 
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center mb-16"
			>
				<h1 className="font-serif text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent font-bold">
					Relish66 Menu
				</h1>
				<div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
				<p className="text-gray-600 text-lg font-medium">
					Mon to Sun • 11:00am to 11:00pm
				</p>
			</motion.div>

			{/* Menu Sections */}
			{menuSections.map((section) => (
				<Section key={section.title} title={section.title}>
					{section.subsections ? (
						section.subsections.map((subsection, subIndex) => (
							<React.Fragment key={subIndex}>
								<div className="col-span-full mb-4">
									<h3 className="text-2xl font-bold bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent mb-6">{subsection.title}</h3>
								</div>
									{subsection.items.map((item, itemIndex) => (
									<Item key={item.name} {...item} index={itemIndex} description={item.note} />
									))}
							</React.Fragment>
						))
					) : (
						<>
							{section.special && (
								<div className="col-span-full mb-6">
								<motion.p 
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.3 }}
										className="text-gray-400 italic font-medium text-center"
								>
									Try our custom chef special menu (Tent Card)
								</motion.p>
								</div>
							)}
							{section.items.map((item, itemIndex) => (
								<Item key={item.name} {...item} index={itemIndex} description={item.note} />
							))}
							{section.note && (
								<div className="col-span-full mt-8">
									<div className="bg-white rounded-2xl p-6 border border-[#06507D]/20 shadow-md">
										{section.note}
									</div>
						</div>
							)}
						</>
					)}
				</Section>
			))}

			{/* Notes Section */}
			<Section title="Important Notes">
				<div className="col-span-full">
					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
							<h3 className="font-semibold text-[#D42127] mb-4 text-lg text-white">Dietary Information</h3>
							<ul className="space-y-2 text-sm text-gray-300">
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
						<div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
							<h3 className="font-semibold text-[#D42127] mb-4 text-lg text-white">Our Commitment</h3>
							<ul className="space-y-2 text-sm text-gray-300">
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 bg-[#06507D] rounded-full mt-2 flex-shrink-0"></span>
									Our Dal Makhani is slowly cooked overnight on tandoor
								</li>
								<li className="flex items-start gap-2">
									<span className="w-1.5 h-1.5 bg-[#06507D] rounded-full mt-2 flex-shrink-0"></span>
									We don't use any food colour and preservatives
								</li>
							</ul>
						</div>
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
				<h2 className="font-serif text-3xl md:text-4xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
					Ready to Visit?
				</h2>
				<p className="text-gray-600 mb-8 max-w-2xl mx-auto">
					Explore authentic flavors with our carefully crafted menu and plan your next visit.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex"
					>
						<Link
							to="/contact"
							className="px-8 py-4 bg-gradient-to-r from-[#06507D] to-[#D42127] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
						>
							Contact Us
						</Link>
					</motion.div>
					<motion.button 
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-700 text-lg"
					>
						Download Menu
					</motion.button>
				</div>
			</motion.section>
		</div>
	);
}