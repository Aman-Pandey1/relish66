import { Helmet } from 'react-helmet-async';

/** Renders JSON-LD structured data in document head */
export default function JsonLd({ data }) {
	if (!data) return null;

	let payload = data;
	if (Array.isArray(data)) {
		payload = { '@context': 'https://schema.org', '@graph': data };
	} else if (!data['@context']) {
		payload = { '@context': 'https://schema.org', ...data };
	}

	return (
		<Helmet>
			<script type="application/ld+json">{JSON.stringify(payload)}</script>
		</Helmet>
	);
}
