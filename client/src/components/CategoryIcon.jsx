export default function CategoryIcon({ slug }){
	const common = 'w-7 h-7 text-navy-700';
	switch ((slug||'').toLowerCase()){
		case 'breakfast-lunch':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M3 10h18" />
					<path d="M7 6h10" />
					<path d="M5 14h14" />
				</svg>
			);
		case 'thali':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<circle cx="12" cy="12" r="8" />
					<circle cx="9" cy="10" r="2" />
					<circle cx="15" cy="10" r="2" />
					<path d="M6 14h12" />
				</svg>
			);
		case 'chaat-cold':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M4 15h16l-2 5H6l-2-5Z" />
					<path d="M6 12h12" />
				</svg>
			);
		case 'chaat-tawa':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<circle cx="12" cy="12" r="6" />
					<path d="M18 12h3" />
				</svg>
			);
		case 'chaat-frying':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M4 16h16" />
					<path d="M7 10c0 2 2 3 5 3s5-1 5-3" />
				</svg>
			);
		case 'veg-appetizers':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M6 12c0-3 3-6 6-6s6 3 6 6-3 6-6 6-6-3-6-6Z" />
				</svg>
			);
		case 'non-veg-appetizers':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M5 12c0-4 3-7 7-7s7 3 7 7-3 7-7 7c-1.5 0-3.5-1-4.5-2S5 13.5 5 12Z" />
				</svg>
			);
		case 'veg-main-course':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M3 8h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />
					<path d="M7 8a5 5 0 0 1 10 0" />
				</svg>
			);
		case 'non-veg-main-course':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" />
					<path d="M12 6c2 0 4 2 4 4H8c0-2 2-4 4-4Z" />
				</svg>
			);
		case 'rice':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M4 15h16l-2 5H6l-2-5Z" />
					<path d="M6 12c2-2 4-3 6-3s4 1 6 3" />
				</svg>
			);
		case 'breads':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M4 12c0-3 3-6 8-6s8 3 8 6v6H4v-6Z" />
				</svg>
			);
		case 'extras':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M12 2v20" />
					<path d="M2 12h20" />
				</svg>
			);
		case 'soup':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M3 10h18v4a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-4Z" />
				</svg>
			);
		case 'drinks':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M6 3h12l-1 8H7L6 3Z" />
					<path d="M5 11h14l-2 10H7L5 11Z" />
				</svg>
			);
		case 'desserts':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M12 3l4 7H8l4-7Z" />
					<path d="M4 20h16" />
				</svg>
			);
		case 'chef-special':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M12 2a5 5 0 0 1 5 5c0 1-.5 2-1 3H8c-.5-1-1-2-1-3a5 5 0 0 1 5-5Z" />
					<path d="M7 10v8h10v-8" />
				</svg>
			);
		default:
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M6 2h12l-1 8H7L6 2Z" />
					<path d="M5 10h14l-2 10H7L5 10Z" />
				</svg>
			);
	}
}

