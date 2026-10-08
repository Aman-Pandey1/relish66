import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, PAGE_SEO, SEO_KEYWORDS, SITE_URL } from '../seo/pageSeo.js';

/** Shown in Google as the site / brand name */
export const SITE_NAME = 'Relish on 66';
export const SITE_TAGLINE = 'Live Indian Kitchen';

const DEFAULT_TITLE = PAGE_SEO.home.metaTitle;
const DEFAULT_DESCRIPTION = PAGE_SEO.home.description;

export function SeoProvider({ children }) {
	return <HelmetProvider>{children}</HelmetProvider>;
}

/**
 * @param {string} [metaTitle] — Full document title for search & social
 * @param {string} [title] — Legacy page name; appended as "{title} | {SITE_NAME}" when metaTitle is omitted
 * @param {string} [description] — Meta & og:description
 * @param {string} [keywords] — Meta keywords
 * @param {string} [path] — Page path for canonical & og:url (e.g. "/menu")
 * @param {string} [ogTitle] — Optional override for social title
 * @param {string} [ogDescription] — Optional override for social description
 * @param {string} [ogImage] — Open Graph / Twitter image URL
 */
export function Seo({
	metaTitle,
	title,
	description,
	keywords,
	path = '/',
	ogTitle,
	ogDescription,
	ogImage = DEFAULT_OG_IMAGE,
}) {
	const pageTitle = metaTitle ?? (title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE);
	const metaDescription = description ?? DEFAULT_DESCRIPTION;
	const metaKeywords = keywords ?? SEO_KEYWORDS;
	const canonicalUrl = `${SITE_URL}${path}`;
	const socialTitle = ogTitle ?? pageTitle;
	const socialDescription = ogDescription ?? metaDescription;

	return (
		<Helmet>
			<html lang="en-CA" />
			<title>{pageTitle}</title>
			<link rel="canonical" href={canonicalUrl} />
			<link rel="sitemap" type="application/xml" title="Sitemap" href={`${SITE_URL}/sitemap.xml`} />
			<link rel="alternate" type="text/plain" title="LLMs.txt" href={`${SITE_URL}/llms.txt`} />
			<meta name="description" content={metaDescription} />
			<meta name="keywords" content={metaKeywords} />
			<meta name="application-name" content={SITE_NAME} />
			<meta name="robots" content="index, follow" />
			<meta property="og:title" content={socialTitle} />
			<meta property="og:description" content={socialDescription} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={ogImage} />
			<meta property="og:image:alt" content={`${SITE_NAME} — Indian restaurant in Edmonton`} />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:locale" content="en_CA" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={socialTitle} />
			<meta name="twitter:description" content={socialDescription} />
			<meta name="twitter:image" content={ogImage} />
			<meta name="twitter:image:alt" content={`${SITE_NAME} — Edmonton restaurant`} />
			<meta name="theme-color" content="#06507D" />
		</Helmet>
	);
}
