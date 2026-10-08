export const SITE_URL = 'https://relishon66.ca';

export const PRIMARY_KEYWORDS = [
	'best restaurants in edmonton alberta',
	'Indian restaurant in Beaumont',
	'Best family restaurants in Edmonton',
	'Indian restaurant in Edmonton',
	'Best catering services in Edmonton',
	'Best Indian restaurant in Edmonton',
	'Best takeout restaurant in Edmonton',
	'Modern Indian restaurant',
	'Upscale Indian restaurant',
	'Top rated Halal restaurant Edmonton yeg',
	'Halal catering',
	'Halal food',
	'Premium dining experience',
	'Indian restaurant Edmonton',
	'Authentic Indian cuisine Edmonton',
	'Best Indian food Ellerslie Road',
	'Indian fine dining Edmonton',
	'Restaurant with live tandoor Edmonton',
	'Indian live kitchen restaurant',
	'Sizzling tawa station Edmonton',
	'Indian street food Edmonton',
	'Chaat bar Edmonton',
	'Tandoori specialties Edmonton',
	'Family-friendly Indian restaurant Edmonton',
	'Indian catering services Edmonton',
	'Indian tiffin service Edmonton',
	'Restaurants with live music Edmonton',
	'Birthday party venues Edmonton',
	'Indian food near Ellerslie Road',
	'Places to eat in South Edmonton',
	'Dinner restaurants in Edmonton SW',
	'Best restaurants in Edmonton for groups',
];

export const LONG_TAIL_KEYWORDS = [
	'Authentic Indian live tandoor kitchen in Edmonton',
	'Best Indian street food restaurant in South Edmonton',
	'Sizzling tawa specialties at Indian restaurants in Edmonton',
	'Family-friendly Indian dining experience in Edmonton South',
	'Indian restaurants with chaat bars in Edmonton',
	'Modern Indian fusion cuisine in Edmonton by Chef Karan Sarna',
	'Catering services for Indian events in Edmonton',
	'Where to get fresh tandoori bread in Edmonton',
	'Authentic Indian restaurant near Ellerslie Road',
	'Top-rated Indian restaurants for group dining in Edmonton',
];

export const SEO_KEYWORDS = [...PRIMARY_KEYWORDS, ...LONG_TAIL_KEYWORDS].join(', ');

export const BUSINESS = {
	name: 'Relish on 66',
	legalName: 'Relish on 66 Restaurant and Bar',
	tagline: 'Live Indian Kitchen',
	url: SITE_URL,
	email: 'Info.relishon66@gmail.com',
	telephone: '+1-780-784-6642',
	telephoneAlt: '+1-780-784-6643',
	address: {
		street: '6933 Ellerslie Road SW',
		city: 'Edmonton',
		region: 'AB',
		postalCode: 'T6X 2A1',
		country: 'CA',
	},
	geo: {
		latitude: 53.417,
		longitude: -113.43,
	},
	openingHours: ['Tu-Th 13:00-23:00', 'Fr-Sa 13:00-00:00', 'Su 13:00-23:00'],
	priceRange: '$$',
	servesCuisine: ['Indian', 'Punjabi', 'Tandoori', 'Street Food'],
	sameAs: [
		'https://www.facebook.com/people/Relish-on-66/61579174366831/',
		'https://www.instagram.com/relishon66/',
	],
	schemaImage: 'https://relishon66.ca/wp-content/uploads/logo.png',
	schemaDescription:
		'Relish on 66 is one of the best Indian restaurants in Edmonton and a top family restaurant with authentic Indian cuisine, takeout, and the best catering services in Edmonton. Convenient for diners seeking an Indian restaurant in Beaumont and South Edmonton on Ellerslie Road, with live tandoor cooking, sizzling tawa specialties, chaat bar favorites, and traditional Indian dining.',
	hasMap:
		'https://www.google.com/search?q=Relish+On+66&stick=H4sIAAAAAAAA_-NgU1I1qDA1TjQwTEo1MrFMs0hJTDK3MqgwSzI0tTBKNTUwNTS2MDQ3XsTKE5Sak1mcoeCfp2BmBgAnqxQBOAAAAA&hl=en&mat=CQmrBgyqxPZnElcBa0lj_xHT4dz8SMFK3dhOXyrrpkZBQUSPIQ0XFJRgxB62T4J7y1dESQIuQBqmAXnXg3q3QUmyhs5aGG0TBnI73PNW-PXthZza1TLnYOBE2M_T2HqXvnw&authuser=0',
	schemaKeywords: [...PRIMARY_KEYWORDS, ...LONG_TAIL_KEYWORDS],
};

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpeg`;

export const PAGE_SEO = {
	home: {
		path: '/',
		metaTitle: 'Relish on 66 | Restaurant in Edmonton – Food, Dining & Events',
		description:
			'Relish on 66 is a modern Indian restaurant in Edmonton offering delicious food, live tandoor dining, and a premium dining experience for families, friends, and events on Ellerslie Road.',
		ogTitle: 'Relish on 66 | Restaurant in Edmonton',
		ogDescription:
			'Enjoy premium dining at Relish on 66 in Edmonton with authentic Indian food, live kitchen, and a warm atmosphere.',
	},
	about: {
		path: '/about',
		metaTitle: 'About Relish on 66 | Modern Indian Fusion & Chef Karan Sarna',
		description:
			'Discover the passion behind our kitchen. Led by Chef Karan Sarna, Relish on 66 offers a modern Indian fusion experience in South Edmonton. Learn more about our vision for authentic flavors and community dining.',
	},
	menu: {
		path: '/menu',
		metaTitle: 'Authentic Indian Menu | Tandoori Specialties & Street Food Edmonton',
		description:
			'Explore our extensive menu featuring tandoori specialties, sizzling tawa dishes, and authentic Indian street food. Perfect for dinner or a group dining experience in Edmonton SW.',
	},
	catering: {
		path: '/catering',
		metaTitle: 'Indian Catering Services in Edmonton | Events & Private Parties',
		description:
			'Planning a special event? Relish on 66 provides premium Indian catering services in Edmonton. From corporate gatherings to family celebrations, we bring the best of our kitchen to your event.',
	},
	gallery: {
		path: '/gallery',
		metaTitle: 'Birthday Party Venue & Live Music Restaurant in Edmonton',
		description:
			'Looking for birthday party venues or restaurants with live music in Edmonton? Visit Relish on 66 for a memorable atmosphere, great food, and a perfect setting for groups.',
	},
	reservation: {
		path: '/reservation',
		metaTitle: 'Book a Table at Relish on 66 | Indian Restaurant Near Ellerslie Road',
		description:
			'Visit us on Ellerslie Road! Book your table for a family-friendly Indian dining experience or group dinner. Contact Relish on 66 for reservations or inquiries today.',
	},
	contact: {
		path: '/contact',
		metaTitle: 'Contact Relish on 66 | Authentic Indian Restaurant Near Ellerslie Road',
		description:
			'Contact Relish on 66 for reservations, catering inquiries, tiffin service, birthday parties, and group dining. Visit our authentic Indian restaurant near Ellerslie Road.',
	},
	blog: {
		path: '/blog',
		metaTitle: 'Best Family Restaurants in Edmonton | Indian Restaurant in Edmonton – Relish on 66',
		description:
			'Discover Relish on 66, the destination for the Best catering services in Edmonton, Best Indian restaurant in Edmonton, and Best takeout restaurant in Edmonton. Enjoy authentic Indian cuisine, family-friendly dining, delicious takeout, and exceptional catering. Visit us for the Best family restaurants in Edmonton and authentic Indian restaurant experiences in Edmonton.',
	},
};

export const HOME_H1 = 'Relish on 66 – Edmonton Restaurant & Dining Experience';

export const FAQ_ITEMS = [
	{
		question: 'What type of food does Relish on 66 serve?',
		answer:
			'Relish on 66 is an Indian live kitchen restaurant in Edmonton serving authentic Indian cuisine, tandoori specialties, chaat bar favorites, street food, and modern fusion dishes prepared fresh daily.',
	},
	{
		question: 'Does Relish on 66 offer takeout or delivery?',
		answer:
			'Yes, Relish on 66 offers takeout and pickup. Delivery availability may vary depending on third-party delivery platforms and your location in Edmonton.',
	},
	{
		question: 'What are the opening hours of Relish on 66?',
		answer:
			'We are closed on Mondays. We are open Tuesday–Thursday and Sunday from 1:00 PM to 11:00 PM, and Friday–Saturday from 1:00 PM to 12:00 AM. Hours may change on holidays — contact us or visit our website for the latest timings.',
	},
	{
		question: 'Do you accept reservations at Relish on 66?',
		answer:
			'Yes, we accept table reservations based on availability. Book online through our reservation page or call us at 780 784 6642 / 780 784 6643.',
	},
	{
		question: 'Is parking available at Relish on 66?',
		answer:
			'Yes, parking is available near our Ellerslie Road location. Availability may vary during peak dining hours and weekends.',
	},
];

export const IMAGE_ALTS = {
	homeHero: 'Best Indian restaurant Edmonton with live tandoor and sizzling tawa station',
	homeFlavors:
		'Authentic Indian cuisine Edmonton prepared fresh daily at Relish on 66 live kitchen',
	homeHighlightTandoor:
		'Freshly prepared tandoori specialties Edmonton at Relish on 66 restaurant',
	homeHighlightTawa:
		'Sizzling tawa station Edmonton featuring flavorful Indian dishes and chaat bar favorites',
	homeHighlightDining:
		'Family-friendly Indian restaurant Edmonton for all occasions at Relish on 66',
	aboutTeam: 'Experienced chefs preparing authentic Indian food in Edmonton live kitchen',
	aboutBanner:
		'About Relish on 66 authentic Indian fine dining restaurant in Edmonton',
	menuFood1: 'Fresh butter chicken served at Indian restaurant Edmonton',
	menuFood2: 'Tandoori specialties prepared in live tandoor Edmonton restaurant',
	menuFood3: 'Indian street food and chaat bar favorites in Edmonton',
	menuBuffet: 'Premium Indian fine dining Edmonton experience — à la carte buffet at Relish on 66',
	cateringEvent: 'Professional Indian catering setup with authentic cuisine in Edmonton',
	cateringChef: 'Indian catering services Edmonton for special events — Chef Karan Sarna',
	cateringGallery: 'Professional Indian catering setup with authentic cuisine in Edmonton',
	galleryFood: 'Signature Indian dishes from Relish on 66 Edmonton',
	galleryDining: 'Family-friendly Indian restaurant dining experience in Edmonton',
	galleryBanner:
		'Gallery of Relish on 66 Indian fine dining and live kitchen experience Edmonton',
	reservationBanner: 'Online table reservation for authentic Indian restaurant Edmonton',
	contactLocation:
		'Indian restaurant near Ellerslie Road Edmonton offering authentic Indian cuisine',
	contactLogo: 'Relish on 66 Live Indian Kitchen — contact our Edmonton restaurant',
};
