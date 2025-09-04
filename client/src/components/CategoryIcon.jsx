export default function CategoryIcon({ slug }){
	const common = 'w-7 h-7 text-burnt-700';
	switch ((slug||'').toLowerCase()){
		case 'beer':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M7 6h8a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2Z" />
					<path d="M17 9h2.5a1.5 1.5 0 0 1 0 3H17" />
					<path d="M9 2h6a1 1 0 0 1 1 1v3H8V3a1 1 0 0 1 1-1Z" />
				</svg>
			);
		case 'wine':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M7 2h10v4a5 5 0 0 1-5 5 5 5 0 0 1-5-5V2Z" />
					<path d="M12 11v9" />
					<path d="M8 22h8" />
				</svg>
			);
		case 'spirits':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M10 2h4v5l2 3v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-9l2-3V2Z" />
					<path d="M10 7h4" />
				</svg>
			);
		case 'groceries':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M3 6h18l-2 12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L3 6Z" />
					<path d="M7 6a5 5 0 0 1 10 0" />
				</svg>
			);
		case 'cider':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M12 2a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
					<path d="M9 22h6" />
				</svg>
			);
		case 'vodka':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M10 2h4v6l2 3v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-9l2-3V2Z" />
				</svg>
			);
		case 'whisky':
		case 'whiskey':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M7 3h10l-1 5H8L7 3Z" />
					<path d="M6 8h12l-2 12H8L6 8Z" />
				</svg>
			);
		case 'snacks':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<rect x="4" y="4" width="16" height="12" rx="2" />
					<path d="M6 8h12M6 12h8" />
				</svg>
			);
		case 'dairy':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M9 2h6v6l2 3v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7l2-3V2Z" />
				</svg>
			);
		case 'bakery':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M4 14c0-3.314 3.582-6 8-6s8 2.686 8 6v4H4v-4Z" />
					<path d="M12 8V4" />
				</svg>
			);
		case 'tobacco':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<rect x="3" y="11" width="14" height="4" rx="1" />
					<path d="M19 11h2v4h-2" />
				</svg>
			);
		case 'mixers':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<circle cx="8" cy="8" r="3" />
					<circle cx="16" cy="16" r="3" />
					<path d="M11 8h2M8 11v2M13 16h2" />
				</svg>
			);
		case 'gifts':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<rect x="3" y="8" width="18" height="13" rx="2" />
					<path d="M12 8v13M3 12h18" />
					<path d="M12 8c-2.5 0-4-1-4-2s1.5-2 4 0c2.5-2 4-1 4 0s-1.5 2-4 2Z" />
				</svg>
			);
		case 'coffee':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M3 10h12v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6Z" />
					<path d="M15 10h3a2 2 0 1 1 0 4h-3" />
				</svg>
			);
		case 'tea':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M3 10h10v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6Z" />
					<path d="M13 10h5v3a2 2 0 0 1-2 2h-1" />
				</svg>
			);
		case 'soda':
		case 'water':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M9 2h6v6l2 3v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7l2-3V2Z" />
				</svg>
			);
		case 'produce':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<circle cx="12" cy="12" r="5" />
					<path d="M12 2v4M18 6l-2 3M6 6l2 3" />
				</svg>
			);
		case 'meat':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M5 12c0-4 3-7 7-7s7 3 7 7-3 7-7 7c-1.5 0-3.5-1-4.5-2S5 13.5 5 12Z" />
				</svg>
			);
		case 'household':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M3 12l9-8 9 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8Z" />
					<path d="M9 22V12h6v10" />
				</svg>
			);
		case 'specialty-local':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7Z" />
				</svg>
			);
		case 'general':
			return (
				<svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
					<rect x="4" y="4" width="16" height="12" rx="2" />
					<path d="M2 20h20" />
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

