import { Helmet, HelmetProvider } from 'react-helmet-async';

export function SeoProvider({ children }){
	return <HelmetProvider>{children}</HelmetProvider>;
}

export function Seo({ title, description }){
	const t = title ? `${title} | Relish66` : 'Relish66';
	return (
		<Helmet>
			<title>{t}</title>
			{description && <meta name="description" content={description} />}
			<meta property="og:title" content={t} />
			{description && <meta property="og:description" content={description} />}
			<meta property="og:type" content="website" />
			<meta name="theme-color" content="#1E3A8A" />
		</Helmet>
	);
}