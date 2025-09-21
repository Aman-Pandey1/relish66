import { MdBreakfastDining, MdSetMeal, MdFastfood , MdOutdoorGrill, MdKebabDining, MdLocalDining, MdDinnerDining, MdRiceBowl, MdAddCircleOutline, MdSoupKitchen, MdLocalDrink, MdRestaurantMenu, MdStarRate } from 'react-icons/md';
import { FaLeaf, FaDrumstickBite, FaBreadSlice, FaIceCream } from 'react-icons/fa6';

export default function CategoryIcon({ slug }){
	const common = 'w-8 h-8 md:w-9 md:h-9 text-brandBlue';
	switch ((slug||'').toLowerCase()){
		case 'breakfast-lunch':
			return <MdBreakfastDining className={common} />;
		case 'thali':
			return <MdSetMeal className={common} />;
		case 'chaat-cold':
			return <MdFastfood  className={common} />;
		case 'chaat-tawa':
			return <MdOutdoorGrill className={common} />;
		case 'chaat-frying':
			return <MdKebabDining className={common} />;
		case 'veg-appetizers':
			return <FaLeaf className={common} />;
		case 'non-veg-appetizers':
			return <FaDrumstickBite className={common} />;
		case 'veg-main-course':
			return <MdLocalDining className={common} />;
		case 'non-veg-main-course':
			return <MdDinnerDining className={common} />;
		case 'rice':
			return <MdRiceBowl className={common} />;
		case 'breads':
			return <FaBreadSlice className={common} />;
		case 'extras':
			return <MdAddCircleOutline className={common} />;
		case 'soup':
			return <MdSoupKitchen className={common} />;
		case 'drinks':
			return <MdLocalDrink className={common} />;
		case 'desserts':
			return <FaIceCream className={common} />;
		case 'chef-special':
			return <MdStarRate className={common} />;
		default:
			return <MdRestaurantMenu className={common} />;
	}
}

