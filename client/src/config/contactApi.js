/** Baked into production build — change here if backend or site key changes */
export const CONTACT_API_BASE = 'https://emailforstatic-site.onrender.com';
export const CONTACT_SITE_IDENTIFIER = 'relish';

export async function fetchSiteFields() {
	const res = await fetch(`${CONTACT_API_BASE}/api/sites/${CONTACT_SITE_IDENTIFIER}/fields`);
	const data = await res.json();
	if (!data.success) {
		throw new Error(data.error || 'Failed to load form fields');
	}
	return data.fields || [];
}

export async function submitContactForm(formData) {
	const res = await fetch(`${CONTACT_API_BASE}/api/contact`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			...formData,
			site: CONTACT_SITE_IDENTIFIER,
		}),
	});
	const data = await res.json();
	if (!data.success) {
		throw new Error(data.error || 'Submit failed');
	}
	return data;
}
