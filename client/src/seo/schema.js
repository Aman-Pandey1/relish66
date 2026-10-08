import { BUSINESS, FAQ_ITEMS, SITE_URL } from './pageSeo.js';

export function buildRestaurantSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		'@id': `${SITE_URL}/#restaurant`,
		name: BUSINESS.name,
		url: `${SITE_URL}/`,
		image: BUSINESS.schemaImage,
		description: BUSINESS.schemaDescription,
		servesCuisine: BUSINESS.servesCuisine,
		priceRange: BUSINESS.priceRange,
		telephone: ['780 784 6642', '780 784 6643'],
		address: {
			'@type': 'PostalAddress',
			streetAddress: '6933 Ellerslie Road SW, Edmonton, AB T6X 2A1',
			addressLocality: BUSINESS.address.city,
			addressRegion: BUSINESS.address.region,
			postalCode: BUSINESS.address.postalCode,
			addressCountry: BUSINESS.address.country,
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: '53.417',
			longitude: '-113.430',
		},
		hasMap: BUSINESS.hasMap,
		menu: `${SITE_URL}/menu`,
		hasMenu: `${SITE_URL}/menu`,
		acceptsReservations: true,
		openingHours: BUSINESS.openingHours,
		paymentAccepted: 'Cash, Credit Card, Debit Card',
		currenciesAccepted: 'CAD',
		sameAs: BUSINESS.sameAs,
		areaServed: [
			{ '@type': 'City', name: 'Edmonton' },
			{ '@type': 'City', name: 'Beaumont' },
		],
		keywords: BUSINESS.schemaKeywords,
	};
}

export function buildFaqSchema(faqs = FAQ_ITEMS) {
	return {
		'@type': 'FAQPage',
		'@id': `${SITE_URL}/contact#faq`,
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};
}

export function buildMenuSchema() {
	return {
		'@type': 'Menu',
		'@id': `${SITE_URL}/menu#menu`,
		name: 'Relish on 66 Menu',
		description:
			'Authentic Indian menu with tandoori specialties, chaat bar, mains, breads, desserts, and non-alcoholic drinks.',
		url: `${SITE_URL}/menu`,
		hasMenuSection: [
			{
				'@type': 'MenuSection',
				name: 'Chaat Bar & Street Food',
				description: 'Indian street food and chaat favorites',
				hasMenuItem: [
					{ '@type': 'MenuItem', name: 'Gol Gappe' },
					{ '@type': 'MenuItem', name: 'Mumbai Pav Bhaji' },
					{ '@type': 'MenuItem', name: 'Samosa Chaat' },
				],
			},
			{
				'@type': 'MenuSection',
				name: 'Tandoori & Meat Appetizers',
				description: 'Live tandoor specialties',
				hasMenuItem: [
					{ '@type': 'MenuItem', name: 'Tandoori Chicken' },
					{ '@type': 'MenuItem', name: 'Chicken Seekh Kabab' },
					{ '@type': 'MenuItem', name: 'Awadhi Fish Tikka' },
				],
			},
			{
				'@type': 'MenuSection',
				name: 'Main Course',
				description: 'Vegetarian and non-vegetarian curries',
				hasMenuItem: [
					{ '@type': 'MenuItem', name: 'Butter Chicken' },
					{ '@type': 'MenuItem', name: 'Shahi Paneer' },
					{ '@type': 'MenuItem', name: 'Chicken Handi Biryani' },
				],
			},
		],
		inLanguage: 'en-CA',
	};
}
