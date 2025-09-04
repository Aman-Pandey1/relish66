import { useEffect, useState } from 'react';

const ageKey = 'kh_age_verified';
const generalOnlyKey = 'kh_age_general_only';

export default function AgeGate() {
	const [ageVerified, setAgeVerified] = useState(() => typeof window !== 'undefined' && localStorage.getItem(ageKey) === '1');
	const [generalOnly] = useState(() => typeof window !== 'undefined' && localStorage.getItem(generalOnlyKey) === '1');
	const [show, setShow] = useState(!ageVerified && !generalOnly);

	useEffect(() => setShow(!ageVerified && !generalOnly), [ageVerified, generalOnly]);

	if (!show) return null;
	return (
		<div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">
			<div className="bg-white max-w-md w-full rounded shadow-lg p-6 text-center">
				<h2 className="font-serif text-2xl mb-2">Are you 19 or older?</h2>
				<p className="text-neutral-600 mb-6">You must be of legal drinking age to enter.</p>
				<div className="flex gap-3 justify-center">
					<button className="btn-primary" onClick={() => { localStorage.setItem(ageKey,'1'); setAgeVerified(true); localStorage.removeItem(generalOnlyKey); }}>Yes, I'm 19+</button>
					<button className="px-4 py-2 border rounded" onClick={() => { localStorage.setItem(generalOnlyKey,'1'); setShow(false); }}>No, Continue (General Store only)</button>
				</div>
			</div>
		</div>
	);
}