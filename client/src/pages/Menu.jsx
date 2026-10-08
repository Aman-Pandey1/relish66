import React from 'react';
import { motion } from 'framer-motion';
import { Seo } from '../components/Seo.jsx';
import { PAGE_SEO, IMAGE_ALTS } from '../seo/pageSeo.js';
import JsonLd from '../components/JsonLd.jsx';
import { buildMenuSchema } from '../seo/schema.js';
import { Link } from 'react-router-dom';

// Import menu item images
import bhelPuri from '../assets/Bhel Puri.jpg';
import breadPakoraStuffed from '../assets/Bread Pakora Stuffed.jpg';
import chaatPapdi from '../assets/Chaat papdi.jpg';
import churChurNaan from '../assets/chur chur naan.jpg';
import dahiBhalle from '../assets/Dahi Bhalle.jpg';
import dahiKabab from '../assets/Dahi Kabab.jpg';
import dahiPoori from '../assets/Dahi Poori.jpg';
import golGappe from '../assets/Gol Gappe.jpg';
import mixVegetablePakora from '../assets/Mix vegetable pakora.jpg';
import paneerPakora from '../assets/Paneer Pakora.jpg';
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
		// Other dishes
		'Chur Chur Naan': churChurNaan,
		'Dahi': curd,
		// Chaat
		'Chaat Papadi': chaatPapdi,
		'Bhel Puri': bhelPuri,
		'Dahi Bhalla (4)': dahiBhalle,
		'Dahi Bhalla': dahiBhalle,
		'Gol Gappe (10)': golGappe,
		'Gol Gappe': golGappe,
		'Gol Gappe (Live)': golGappe,
		'Dahi Poori (8)': dahiPoori,
		'Dahi Poori': dahiPoori,
		'Pav Bhaji': pavBhaji,
		'Tawa Tikki Chaat (2)': tawaTikkiChaat,
		'Tawa Tikki Chaat': tawaTikkiChaat,
		'Tawa Tikki Chaat (Live)': tawaTikkiChaat,
		'Tawa Tikki Chole (2)': tawaTikkiChole,
		'Tawa Tikki Chole': tawaTikkiChole,
		'Tawa Tikki Chole (Live)': tawaTikkiChole,
		'Vada Pav (2)': vadaPav,
		'Vada Pav': vadaPav,
		// Frying Items
		'Samosa': samosa,
		'Samosa Chat': samosaChaat,
		'Samosa Chaat': samosaChaat,
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
		'Mix Veg Fresh Seasonal': mixVegetableFreshSeasonal,
		'Mix Vegetables (Fresh Seasonal)': mixVegetableFreshSeasonal,
		'Kadahi Masala Mushroom': kadahiMasalaMushroom,
		'Kadhai Masala Mushroom': kadahiMasalaMushroom,
		'Kadhai Paneer': kadahiPaneer,
		'Pindi Channa': mixVegetableFreshSeasonal,
		'Soya Paneer Methi Malai Handi': malaiKofta,
		'Malai Kofta': malaiKofta,
		'Moti Malai Kofta': malaiKofta,
		'Lasooni Bhuna Palak Paneer': palakPaneer,
		'Lasooni Bhuna Palak Chicken': palakChicken,
		'Chicken Murgh Tikka Masala': chickenTikkaMasala,
		// Non Veg Main Course
		'Chicken Tikka Masala': chickenTikkaMasala,
		'Butter Chicken (Bone / No Bone)': butterChicken,
		'Butter Chicken': butterChicken,
		'Butter Chicken (Bone/Boneless)': butterChicken,
		'Kadahi Chicken': kadahiChicken,
		'Kadhai Chicken': kadahiChicken,
		'Chicken Curry': chickenTikkaMasala,
		'Kali Mirch Chicken': chickenTikkaMasala,
		'Rara Mutton Handi': raraMutton,
		'Mughlai Mutton Handi': mughalaiMuttonHandi,
		'Fish Coconut Goan Curry': fishGoanCurry,
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
		'Veg Biryani': mixVegetableFreshSeasonal,
		'Veg Handi Biryani': mixVegetableFreshSeasonal,
		'Chicken Biryani': chickenTikkaMasala,
		'Chicken Handi Biryani': chickenTikkaMasala,
		'Mutton Biryani': muttonCurry,
		'Awadhi Mutton Handi Biryani': muttonCurry,
		'Coconut Naan': garlicNaan,
		'Cocktail Samosa': samosa,
		'Samosa Veg': samosa,
		'Samosa Chole': samosaChaat,
		'Fries 66': mixVegetablePakora,
		'Smashed Potato': mixVegetablePakora,
		'Juicy Chicken Tenders': chickenSeekhKabab,
		'Shikanji': aamPanna,
		'Lahori Jaljeera On the Rocks': aamPanna,
		'Malai Rabadi Kulfi Falooda': malaiKulfi,
		'Laal Maas': laalMaas,
		'Prawn Masala (with Tail)': prawnMasala,
		'Prawn Masala': prawnMasala,
		// Desserts
		'Rasamalai Roll': rasamalaiRoll,
		'Moong Dal Halwa': moongDalHalwa,
		'Gulab Jamun Hot': gulabJamunHot,
		'Gulab Jamun With Vanilla Ice-Cream Topped With Nuts': gulabJamunHot,
		'Strawberry Fruits And Nut Ice Cream': casata,
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
		'Lacha Paratha Harimirch Masala': lachaParantha,
		'Plain Naan': plainNaan,
		'Butter lachha Naan': butterLachhaNaan,
		'Garlic Naan': garlicNaan,
		'Bread Basket any 4 assortment': breadBasket,
		'Bread Basket Any 4': breadBasket,
		'Plain / Butter Naan': plainNaan,
		'Malabari Parantha': lachaParantha,
		'Mumbai Pav Bhaji': pavBhaji,
		'Mumbai Pav Bhaji (Live)': pavBhaji,
		'Aam Papad wali Chaat Papadi': chaatPapdi,
		'Vada Pav Sliders': vadaPav,
		'Tomato Dhaniya Shorba': tamatoDhaniyaShorba,
		'Lemon Corriander Soup': tamatoDhaniyaShorba,
		'Lemon Corriander Soup (veg or chicken)': tamatoDhaniyaShorba,
		'Paneer Bullet Pakora': paneerPakora,
		'Veg Velvet Kabab': dahiKababVeg,
		'Velvet Dudhiya Kabab': dahiKababVeg,
		'Aachari Paneer Tikka': tandooriPaneerTikka,
		'Tandoori Soya Chaap': achariSoyaChaap,
		'Malai Soya Chaap': achariSoyaChaap,
		'Crispy Vegetables Platter': crispyVegetables,
		'Chote Laal Baked Masala Potatoes': mixVegetablePakora,
		'Crispy Cauliflower Tacos': crispyVegetables,
		'Chicken Lasooni Tikka': chickenLasooniMalaiTikka,
		'Chicken Malai Tikka': chickenLasooniMalaiTikka,
		'Tandoori Chicken Half/Full': tandooriChicken,
		'Chicken Ghungrroo Kabab': chickenGhungrooKabab,
		'Tandoori Makhani Chicken Chop': tandooriMakhaniChickenChop,
		'Seekh Kabab / Tikka Taco': chickenSeekhKabab,
		'Chicken Chapali Kabab': chickenSeekhKabab,
		'Juicy Chicken Chapali Kabab': chickenSeekhKabab,
		'Amritsari Fish Pakora': fishPakora,
		'Kalmi Chicken Chop': tandooriMakhaniChickenChop,
		'Seekh Kabab Taco': chickenSeekhKabab,
		'Seekh Kabab Taco (4 Taco)': chickenSeekhKabab,
		'Mutton Ghungrroo Kabab': muttonGhungrooKabab,
		'Awadhi Fish Tikka': fishTikkaNurani,
		'Tandoori Prawns': tandooriPrawnsAjwaini,
		'Mutton Barra (By lb)': muttonBarra,
		'Mutton Barra': muttonBarra,
		'Banta Lemon Soda': lemonSoda,
		'Indian Chai tea': chaiTea,
		'Coffee Nescafe': coffeeNscafe,
		'Hot lime water': lemonSoda,
		'Green Salad': saladGreen,
		'Masala Onion': masalaOnions,
		'Raita/Plain Yogurt': raita,
		'Malai Kulfi Falooda': malaiKulfi,
		'Ice Cream': casata,
		'Warm Dhoda Burfi with Ice Cream': moongDalHalwa,
		'Butter Naan': butterLachhaNaan,
		'Brownie with Vanilla Ice Cream': brownieWithVanillaIceCream,
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

const Section = ({ title, subtitle, children }) => (
	<motion.section 
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
		viewport={{ once: true, margin: "-100px" }}
		className="mb-16"
	>
			<motion.h2 
				className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent text-center ${subtitle ? 'mb-4' : 'mb-8'}`}
			>
				{title}
			</motion.h2>
			{subtitle && (
				<p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
					{subtitle}
				</p>
			)}
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
						alt={`${name} — Relish on 66 Indian restaurant Edmonton`}
						className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						loading="lazy"
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

const menuFeaturedImages = [
	{ src: butterChicken, alt: IMAGE_ALTS.menuFood1 },
	{ src: tandooriChicken, alt: IMAGE_ALTS.menuFood2 },
	{ src: golGappe, alt: IMAGE_ALTS.menuFood3 },
];

const buffetCourses = [
	{
		step: 1,
		title: 'Begin Your Experience With',
		single: 'Signature Welcome Drink',
	},
	{
		step: 2,
		title: 'Starters to Share',
		items: [
			'2 Vegetarian Appetizers',
			'2 Non-Vegetarian Appetizers',
			'House Condiments & Chutneys',
		],
	},
	{
		step: 3,
		title: 'Soup Course',
		single: "Chef's Seasonal Soup",
	},
	{
		step: 4,
		title: 'Main Course Selection',
		items: [
			'2 Vegetarian Curries',
			'1 Non-Vegetarian Curry',
			'Fragrant Fresh Rice',
			'Fresh Salad',
			'Yogurt / Raita',
		],
	},
	{
		step: 5,
		title: 'Fresh From The Tandoor',
		single: "Assorted Bread Basket",
		detail: "(Naan, Roti & Chef's Selection)",
	},
	{
		step: 6,
		title: 'Sweet Ending',
		single: 'Dessert',
	},
];

const BuffetExperience = () => (
	<div className="max-w-6xl mx-auto space-y-8">
		<p className="text-center text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
			A curated multi-course journey—served at your table with live kitchen flair. Perfect for celebrations and group dining.
		</p>

		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
			{buffetCourses.map((course) => (
				<div
					key={course.step}
					className="group relative bg-white rounded-2xl border border-[#06507D]/15 p-5 shadow-md hover:shadow-xl hover:border-[#D42127]/25 transition-all duration-300 overflow-hidden"
				>
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] opacity-80 group-hover:opacity-100 transition-opacity" />
					<div className="flex items-start gap-3">
						<span className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#06507D] to-[#D42127] text-white text-sm font-bold flex items-center justify-center shadow-md">
							{course.step}
						</span>
						<div className="min-w-0 flex-1">
							<p className="text-xs uppercase tracking-[0.15em] text-[#06507D] font-semibold mb-2 leading-snug">
								{course.title}
							</p>
							{course.single && (
								<p className="text-gray-900 font-medium leading-relaxed">
									{course.single}
									{course.detail && (
										<span className="block text-sm text-gray-600 font-normal mt-0.5">{course.detail}</span>
									)}
								</p>
							)}
							{course.items && (
								<ul className="space-y-1.5">
									{course.items.map((item) => (
										<li key={item} className="flex items-start gap-2 text-sm text-gray-700">
											<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D42127] flex-shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
			))}
		</div>

		<div className="flex flex-col lg:flex-row gap-6 items-stretch">
			<div className="lg:w-2/5 rounded-2xl overflow-hidden shadow-xl border border-[#06507D]/10 min-h-[200px]">
				<img
					src={vegPlatter}
					alt={IMAGE_ALTS.menuBuffet}
					className="w-full h-full object-cover min-h-[200px] lg:min-h-full"
				/>
			</div>
			<div className="lg:flex-1 flex flex-col justify-center rounded-2xl bg-gradient-to-br from-[#06507D] to-[#D42127] p-6 md:p-8 text-white shadow-xl">
				<p className="text-white/90 text-sm uppercase tracking-[0.2em] mb-2">Plan Your Table</p>
				<p className="font-serif text-xl md:text-2xl font-semibold mb-3">
					Pricing, custom menus &amp; slot booking
				</p>
				<p className="text-white/85 text-sm md:text-base mb-6 leading-relaxed">
					Contact us to reserve your buffet experience—we&apos;ll tailor the menu to your group size and occasion.
				</p>
				<Link
					to="/contact"
					className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-white text-[#06507D] rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
				>
					Contact the Restaurant
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</Link>
			</div>
		</div>
	</div>
);

const buffetSection = {
	title: 'À La Carte Buffet Served at Your Table',
	buffetOnly: true,
	items: [],
	note: <BuffetExperience />,
};

export default function Menu() {
	const menuSections = [
		{
			title: 'Chaat Bar',
			subtitle: 'Guest favourites',
			items: [
				{ name: 'Cocktail Samosa', price: '0.66' },
				{ name: 'Samosa Veg', price: '1.25' },
				{ name: 'Aam Papad wali Chaat Papadi', price: '8.66' },
				{ name: 'Bhel Puri', price: '8.66' },
				{ name: 'Dahi Bhalla', price: '8.66' },
				{ name: 'Samosa Chaat', price: '8.66' },
				{ name: 'Samosa Chole', price: '8.66' },
				{ name: 'Tawa Tikki Chaat (Live)', price: '8.66' },
				{ name: 'Tawa Tikki Chole (Live)', price: '8.66' },
				{ name: 'Gol Gappe (Live)', price: '9.66' },
				{ name: 'Mix vegetable pakora', price: '9.66' },
				{ name: 'Dahi Poori', price: '9.66' },
				{ name: 'Mumbai Pav Bhaji (Live)', price: '11.66' },
			],
		},
		{
			title: 'Meat Appetizers',
			subtitle: 'Slow-cooked specialties',
			items: [
				{ name: 'Amritsari Fish Pakora', price: '13.66' },
				{ name: 'Juicy Chicken Chapali Kabab', price: '15.66' },
				{ name: 'Tandoori Chicken Half/Full', note: 'Half / full', price: '15.66 / 25.66' },
				{ name: 'Awadhi Fish Tikka', price: '17.66' },
				{ name: 'Banjara Chicken Tikka', price: '17.66' },
				{ name: 'Chicken Lasooni Tikka', price: '17.66' },
				{ name: 'Chicken Malai Tikka', price: '17.66' },
				{ name: 'Chicken Seekh Kabab', price: '17.66' },
				{ name: 'Chicken Ghungroo Kabab', price: '17.66' },
				{ name: 'Seekh Kabab Taco (4 Taco)', price: '17.66' },
				{ name: 'Mutton Seekh Kabab', price: '17.66' },
				{ name: 'Mutton Ghungroo Kabab', price: '18.66' },
				{ name: 'Tandoori Prawns', price: '19.66' },
				{ name: 'Mutton Barra', price: '28.66' },
			],
		},
		{
			title: 'Veg Appetizers',
			subtitle: 'Served with our house made chutneys',
			items: [
				{ name: 'Paneer Bullet Pakora', price: '12.66' },
				{ name: 'Crispy Cauliflower Tacos', price: '13.66' },
				{ name: 'Dahi Kabab', price: '14.66' },
				{ name: 'Velvet Dudhiya Kabab', price: '15.66' },
				{ name: 'Aachari Paneer Tikka', price: '15.66' },
				{ name: 'Tandoori Soya Chaap', price: '15.66' },
				{ name: 'Malai Soya Chaap', price: '15.66' },
				{ name: 'Crispy Vegetables Platter', price: '19.66' },
			],
		},
		{
			title: 'Kids Menu',
			items: [
				{ name: 'Smashed Potato', price: '7.66' },
				{ name: 'Crispy Vegetables', price: '8.66' },
				{ name: 'Fries 66', note: 'Comes with cheese sauce and Peri Peri rub', price: '9.66' },
				{ name: 'Juicy Chicken Tenders', price: '9.66' },
				{ name: 'Butter Chicken with Rice / Fresh Naan', price: '9.66' },
			],
		},
		{
			title: 'Veg Main Course',
			subtitle: 'Best compliment with fresh breads',
			items: [
				{ name: 'Yellow Dal Tadka', note: 'Tempered with desi ghee', price: '14.66' },
				{ name: 'Mix Vegetables (Fresh Seasonal)', price: '15.66' },
				{ name: 'Moti Malai Kofta', price: '15.66' },
				{ name: 'Daal Makhani', note: 'Cooked overnight on tandoor', price: '15.66' },
				{ name: 'Shahi Paneer', price: '17.66' },
				{ name: 'Lasooni Bhuna Palak Paneer', price: '17.66' },
				{ name: 'Kadahi Paneer', price: '17.66' },
				{ name: 'Soya Paneer Methi Malai Handi', price: '18.66' },
			],
		},
		{
			title: 'Meat Main Course',
			subtitle: 'Best compliment with fresh breads',
			items: [
				{ name: 'Chicken Tikka Masala', price: '17.66' },
				{ name: 'Butter Chicken (Bone/Boneless)', price: '17.66' },
				{ name: 'Kadahi Chicken', price: '17.66' },
				{ name: 'Lasooni Bhuna Palak Chicken', price: '17.66' },
				{ name: 'Chicken Curry', price: '17.66' },
				{ name: 'Fish Coconut Goan Curry', price: '18.66' },
				{ name: 'Prawn Masala', price: '19.66' },
				{ name: 'Kashmiri Mutton Rogan Josh', price: '22.66' },
				{ name: 'Rara Mutton Handi', price: '22.66' },
			],
		},
		{
			title: 'Rice',
			subtitle: 'Gluten free',
			items: [
				{ name: 'Cumin Rice', price: '5.66' },
				{ name: 'Plain Steam Rice', price: '5.66' },
				{ name: 'Ghee Rice', price: '7.66' },
				{ name: 'Saffron Rice', price: '7.66' },
				{ name: 'Coconut Rice', price: '8.66' },
				{ name: 'Veg Handi Biryani', price: '14.66' },
				{ name: 'Chicken Handi Biryani', price: '15.66' },
				{ name: 'Awadhi Mutton Handi Biryani', price: '17.66' },
			],
		},
		{
			title: 'Fresh Breads',
			subtitle: 'You can enjoy watching chef making fresh breads',
			items: [
				{ name: 'Tandoori Roti', note: 'Plain / buttered', price: '2.66' },
				{ name: 'Plain Naan', price: '2.66' },
				{ name: 'Butter Naan', price: '3.66' },
				{ name: 'Garlic Naan', price: '3.66' },
				{ name: 'Lacha Parantha', price: '4.66' },
				{ name: 'Lacha Paratha Harimirch Masala', price: '5.66' },
				{ name: 'Bread Basket Any 4', price: '17.66' },
			],
		},
		{
			title: 'Dessert',
			subtitle: 'Fresh homemade',
			items: [
				{ name: 'Moong Dal Halwa', price: '7.66' },
				{ name: 'Gulab Jamun Hot', price: '7.66' },
				{ name: 'Strawberry Fruits And Nut Ice Cream', price: '7.66' },
				{ name: 'Warm Dhoda Burfi with Ice Cream', price: '8.66' },
				{ name: 'Gulab Jamun With Vanilla Ice-Cream Topped With Nuts', price: '7.66' },
			],
		},
		{
			title: "Extra's",
			items: [
				{ name: 'Pickle', price: '0.66' },
				{ name: 'Chutney', price: '0.66' },
				{ name: 'Raita/Plain Yogurt', price: '4.66' },
				{ name: 'Masala Onion', price: '1.66' },
				{ name: 'Papad', price: '3.66' },
				{ name: 'Sirke Wala Pyaaz', price: '4.66' },
				{ name: 'Green Salad', price: '5.66' },
			],
		},
		buffetSection,
		{
			title: 'Non Alcoholic Drinks',
			items: [
				{ name: 'Hot lime water', price: '1.66' },
				{ name: 'Pop Coke Products', price: '2.66' },
				{ name: 'Juice', price: '2.66' },
				{ name: 'Green Tea', price: '2.66' },
				{ name: 'Black Coffee', price: '2.66' },
				{ name: 'Indian Chai tea', price: '3.66' },
				{ name: 'Tandoori Chai', price: '3.66' },
				{ name: 'Coffee Nescafe', price: '3.66' },
				{ name: 'Banta Lemon Soda', price: '5.66' },
				{ name: 'Shikanji', price: '5.66' },
				{ name: 'Lahori Jaljeera On the Rocks', price: '5.66' },
				{ name: 'Strawberry Shake', price: '6.66' },
				{ name: 'Mango Milk Shake', price: '6.66' },
				{ name: 'Cold Coffee', price: '6.66' },
				{ name: 'Mango Lassi', price: '6.66' },
				{ name: 'Lassi Salted', price: '6.66' },
				{ name: 'Lassi Sweet', price: '6.66' },
			],
		},
	];

	return (
		<div className="container-pad py-12 bg-white min-h-screen">
			<Seo path={PAGE_SEO.menu.path} metaTitle={PAGE_SEO.menu.metaTitle} description={PAGE_SEO.menu.description} />
			<JsonLd data={buildMenuSchema()} />
			
			{/* Header */}
			<motion.div 
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center mb-10"
			>
				<h1 className="font-serif text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent font-bold">
					Relish66 Menu
				</h1>
				<div className="inline-block w-24 h-1 bg-gradient-to-r from-[#06507D] to-[#D42127] rounded-full mb-4"></div>
				<p className="text-gray-600 text-lg font-medium">
					Monday Closed · Tue - Thu &amp; Sun • 1pm - 11pm · Fri - Sat • 1pm - 12am
				</p>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto">
				{menuFeaturedImages.map(({ src, alt }) => (
					<div key={alt} className="overflow-hidden rounded-2xl border border-[#06507D]/15 shadow-lg">
						<img src={src} alt={alt} className="w-full h-48 object-cover" loading="lazy" />
					</div>
				))}
			</div>

			{/* Menu Sections */}
			{menuSections.map((section) => (
				<Section key={section.title} title={section.title} subtitle={section.subtitle}>
					{section.subsections ? (
						section.subsections.map((subsection, subIndex) => (
							<React.Fragment key={`${section.title}-${subsection.title}-${subIndex}`}>
								<div className="col-span-full mb-4">
									<h3 className="text-2xl font-bold bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent mb-2">{subsection.title}</h3>
									{subsection.blurb && (
										<p className="text-gray-600 text-sm md:text-base mb-6 max-w-3xl">{subsection.blurb}</p>
									)}
								</div>
									{subsection.items.map((item, itemIndex) => (
									<Item key={`${subsection.title}-${item.name}-${itemIndex}`} {...item} index={itemIndex} description={item.note} />
									))}
							</React.Fragment>
						))
					) : (
						<>
							{section.items?.length > 0 &&
								section.items.map((item, itemIndex) => (
									<Item key={item.name} {...item} index={itemIndex} description={item.note} />
								))}
							{section.note && (
								<div className={`col-span-full ${section.items?.length > 0 ? 'mt-8' : ''}`}>
									<div
										className={
											section.buffetOnly
												? 'rounded-2xl p-0 md:p-2'
												: 'bg-white rounded-2xl p-6 border border-[#06507D]/20 shadow-md'
										}
									>
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