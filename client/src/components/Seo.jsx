import { Helmet, HelmetProvider } from 'react-helmet-async';

export function SeoProvider({ children }){
	return <HelmetProvider>{children}</HelmetProvider>;
}

export function Seo({ title, description }){
	const t = title ? `${title} | Kicking Horse General Store` : 'Kicking Horse General Store';
	return (
		<Helmet>
			<title>{t}</title>
			{description && <meta name="description" content={description} />}
			<meta property="og:title" content={t} />
			{description && <meta property="og:description" content={description} />}
			<meta property="og:type" content="website" />
		</Helmet>
	);
}