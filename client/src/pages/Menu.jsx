import { Seo } from '../components/Seo.jsx';

const Section = ({ title, children }) => (
	<section className="mb-8">
		<h2 className="font-serif text-3xl md:text-4xl mb-4 text-brandBlue font-semibold">{title}</h2>
		<div className="bg-white border rounded-xl p-5 md:p-6 shadow-sm hover:shadow transition">{children}</div>
	</section>
);

const Item = ({ name, note, qty, price }) => (
	<div className="grid grid-cols-[1fr_auto] gap-4 py-2 text-base md:text-lg">
		<div>
			<div className="font-semibold">{name}{qty? ` ${qty}`:''}</div>
			{note && <div className="text-neutral-500 text-sm">{note}</div>}
		</div>
		{price && <div className="text-red-600 font-bold">${price}</div>}
	</div>
);

export default function Menu(){
	return (
		<div className="container-pad py-8">
			<Seo title="Menu" />
			<h1 className="font-serif text-4xl mb-2">Relish66 Menu</h1>
			<p className="text-neutral-600 mb-6">SHIVANSH SARNA • 11:00am to 3:00pm • Breakfast / Lunch</p>

			<Section title="Breakfast / Lunch">
				<Item name="Aloo Poori" qty="4pcs" price="10.66" />
				<Item name="Bedmi Poori" note="Crispy urad dal poori" qty="3 Pcs" price="10.66" />
				<Item name="Chole Bhature" qty="2 Pcs" price="12.66" />
				<Item name="Chur Chur Naan" qty="1 Pcs" price="7.66" />
				<Item name="Amritsari Kulcha" qty="1 Pcs" price="7.66" />
				<Item name="Aloo Pyaz Parantha" qty="1 Pcs" price="4.66" />
				<Item name="Paneer Parantha" qty="1 Pcs" price="4.66" />
				<Item name="Dahi" price="2.66" />
			</Section>

			<Section title="Lunch Combo / Thali">
				<Item name="Veg Thali" note="Daal / Paneer / Rice / Bread / Raita / Salad / Sweet" price="14.66" />
				<Item name="Non Veg Thali" note="Daal / Chicken / Rice / Bread / Raita / Salad / Sweet" price="15.66" />
			</Section>

			<Section title="Chaat Bar">
				<div className="grid md:grid-cols-2 gap-6">
					<div>
						<h3 className="font-semibold text-brandBlue mb-3 text-xl">Cold Items</h3>
						<Item name="Chaat Papadi" price="7.66" />
						<Item name="Bhel Puri" price="5.66" />
						<Item name="Dahi Bhalla (4)" price="8.66" />
						<Item name="Gol Gappe (10)" price="9.66" />
						<Item name="Dahi Poori (8)" price="9.66" />
						<Item name="Rajbhog 4pcs" price="9.66" />
					</div>
					<div>
						<h3 className="font-semibold text-brandBlue mb-3 text-xl">Tawa Items</h3>
						<Item name="Pav Bhaji" price="9.66" />
						<Item name="Tawa Tikki Chaat (2)" price="7.66" />
						<Item name="Tawa Tikki Chole (2)" price="7.66" />
						<Item name="Nutree Kulcha (1)" price="9.66" />
						<Item name="Vada Pav (2)" price="7.66" />
					</div>
				</div>
			</Section>

			<Section title="Frying Items">
				<Item name="Samosa" price="1.25" />
				<Item name="Samosa Chat" price="8.66" />
				<Item name="Mix vegetable pakora" price="8.66" />
				<Item name="Ram Ladoo with Lacha Mooli" price="8.66" />
				<Item name="Dahi Kabab (4)" price="8.66" />
				<Item name="Bread Pakora Stuffed" price="1.66" />
				<Item name="Paneer Pakora" price="9.66" />
			</Section>

			<Section title="Veg Appetizers">
				<Item name="Tandoori Paneer Tikka" price="13.66" />
				<Item name="Tandoori Phool" price="13.66" />
				<Item name="Dahi Kabab" price="12.66" />
				<Item name="Achari Soya Chaap" price="13.66" />
				<Item name="Tandoori Mushroom" price="14.66" />
				<Item name="Crispy Vegetables" price="12.66" />
				<Item name="Veg Platter" price="23.66" />
			</Section>

			<Section title="Non Veg Appetizers">
				<Item name="Banjara Chicken Tikka" price="15.66" />
				<Item name="Chicken Lasooni Malai Tikka" price="15.66" />
				<Item name="Tandoori Chicken Half / Full" note="Half / Full" price="14.66/23.66" />
				<Item name="Tandoori Makhani Chicken Chop(3)" price="15.66" />
				<Item name="Chicken Seekh Kabab" price="14.66" />
				<Item name="Chicken Ghungroo Kabab" price="14.66" />
				<Item name="Wings Tandoori (12)" price="14.66" />
				<Item name="Mutton Seekh Kabab" price="16.66" />
				<Item name="Mutton Barra Lb/Kg" />
				<Item name="Mutton Ghungroo Kabab" price="16.66" />
				<Item name="Chicken tangri kabab" price="15.66" />
				<Item name="Fish Tikka nurani" price="14.66" />
				<Item name="Fish Pakora" />
				<Item name="Tandoori Prawns ajwaini" price="19.66" />
				<Item name="Meat Platter" price="28.66" />
			</Section>

			<Section title="Veg Main Course">
				<Item name="Shahi Paneer" price="15.66" />
				<Item name="Palak Paneer" price="15.66" />
				<Item name="Kadahi Paneer" price="15.66" />
				<Item name="Daal Makhani" note="Our Daal is slowly cooked overnight on Tandoor" price="13.66" />
				<Item name="Yellow Dal Tadka" price="12.66" />
				<Item name="Mix Vegetable fresh seasonal??" price="13.66" />
				<Item name="Kadahi Masala Mushroom" price="13.66" />
				<Item name="Malai Kofta" price="15.66" />
			</Section>

			<Section title="Non Veg Main Course">
				<Item name="Chicken Tikka Masala" price="15.66" />
				<Item name="Butter Chicken (Bone / No Bone)" price="15.66" />
				<Item name="Kadahi  Chicken" price="15.66" />
				<Item name="Palak Chicken" price="15.66" />
				<Item name="Patiyala Chicken Curry" price="15.66" />
				<Item name="Mutton Curry" price="17.66" />
				<Item name="Kashmiri Mutton Rogan Josh" price="17.66" />
				<Item name="Rara Mutton" price="17.66" />
				<Item name="Saag Mutton" price="17.66" />
				<Item name="Mughalai Mutton handi" price="22.66" />
				<Item name="Murgh mussalam bonein" price="16.66" />
				<Item name="Fish Goan Curry" price="16.66" />
				<Item name="Laal Maas" price="17.66" />
				<Item name="Prawn Masala (with Tail)" price="17.66" />
			</Section>

			<Section title="Rice">
				<Item name="Cumin Rice" price="5.66" />
				<Item name="Ghee Rice" price="5.66" />
				<Item name="Plain Steam Rice" price="4.66" />
				<Item name="Handi Biryani Veg, Chicken, Goat" price="14.66/15.66/16.66" />
			</Section>

			<Section title="Breads">
				<Item name="Tandoori Roti" price="2" />
				<Item name="Lacha Parantha" price="3" />
				<Item name="Plain Naan" price="2" />
				<Item name="Butter lachha Naan" price="3" />
				<Item name="Garlic Naan" price="3" />
				<Item name="Bread Basket any 4 assortment" price="10.99" />
			</Section>

			<Section title="Extras">
				<Item name="Raita" price="3.66" />
				<Item name="Plain Yogurt" price="3.66" />
				<Item name="Papad" price="2.66" />
				<Item name="Pickle" price="1.66" />
				<Item name="Chutney" price="2.66" />
				<Item name="Salad  Green" price="5.66" />
				<Item name="Masala Onions" price="3.66" />
				<Item name="Sirke Wala Pyaaz" price="3.66" />
			</Section>

			<Section title="Soup">
				<Item name="Tamato dhaniya shorba" note="with croutons and butter cube on top" price="6.66" />
			</Section>

			<Section title="Drinks">
				<Item name="Strawberry Shake" price="7.66" />
				<Item name="Mango Milk Shake" price="7.66" />
				<Item name="Cold Coffee" price="7.66" />
				<Item name="Mango Lassi" price="5.66" />
				<Item name="Lassi Salted" price="5.66" />
				<Item name="Lassi Sweet" price="5.66" />
				<Item name="Aam Panna" price="5.66" />
				<Item name="Lemon Soda" price="5.66" />
				<Item name="Indian Chai tea" price="3.66" />
				<Item name="Pop Coke Products" price="2.66" />
				<Item name="Juice" price="2.66" />
				<Item name="Tandoori Chai" price="3.66" />
				<Item name="Green Tea" price="2.66" />
				<Item name="Coffee Nscafe" price="3.66" />
				<Item name="Black Coffee" price="2.66" />
				<Item name="Edible tea cup" price="1.25" />
			</Section>

			<Section title="Desserts (House Made)">
				<Item name="Rasamalai Roll" price="6.66" />
				<Item name="Moong Dal Halwa" price="6.66" />
				<Item name="Gulab Jamun Hot" price="6.66" />
				<Item name="Malai Kulfi" price="6.66" />
				<Item name="Casata Ice Cream" price="6.66" />
				<Item name="Brownie with Vanilla Ice Cream" price="6.66" />
			</Section>

			<Section title="Chef Specials: Eat As Much As You Can">
				<p className="mb-2">Try our custom chef special menu (Tent Card)</p>
				<Item name="Veg" price="32.66" />
				<Item name="Meat" price="38.66" />
				<div className="mt-2 text-sm text-neutral-700">
					<div>Welcome Drink</div>
					<div>Comes with 4 appetizers</div>
					<div>Comes with 3 mains</div>
					<div>Rice, Salad, Bread Basket, Dessert</div>
				</div>
			</Section>

			<Section title="Notes">
				<ol className="list-decimal ml-5 space-y-1 text-sm">
					<li>Please ask your server for gluten-free and vegan dishes</li>
					<li>Labels: gluten-free, vegan, dairy-free, vegetarian</li>
					<li>Spice levels: mild, medium, hot, extra hot</li>
					<li>Groups of 10 or more: 14% gratuity will be applied</li>
					<li>Our Dal Makhani is slowly cooked overnight on tandoor</li>
					<li>We don’t use any food colour and preservatives</li>
					<li>Story behind Relish</li>
				</ol>
			</Section>

			<Section title="Presentation Notes">
				<ol className="list-decimal ml-5 space-y-1 text-sm">
					<li>Garnish tray: Papadum, fryum, green onion florets, ginger julienne, beet powder, grated paneer, rose petals, silver work, butter in diya, pickled onion on skewers, mooli lachha</li>
					<li>On-table flambé with spirit</li>
					<li>On-table coal in diya presentation for smoky effect</li>
					<li>Beetroot pink yogurt</li>
				</ol>
			</Section>
		</div>
	);
}