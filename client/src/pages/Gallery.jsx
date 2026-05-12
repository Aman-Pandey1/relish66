import PageBanner from '../components/PageBanner.jsx';
import { Seo } from '../components/Seo.jsx';

import g1 from '../assets/gallary/WhatsApp Image 2026-05-08 at 10.46.11 AM (1).jpeg';
import g2 from '../assets/gallary/WhatsApp Image 2026-05-08 at 10.46.11 AM.jpeg';
import g3 from '../assets/gallary/WhatsApp Image 2026-05-08 at 10.46.12 AM (1).jpeg';
import g4 from '../assets/gallary/WhatsApp Image 2026-05-08 at 10.46.12 AM (2).jpeg';
import g5 from '../assets/gallary/WhatsApp Image 2026-05-08 at 10.46.12 AM (3).jpeg';
import g6 from '../assets/gallary/WhatsApp Image 2026-05-08 at 10.46.12 AM (4).jpeg';
import g7 from '../assets/gallary/WhatsApp Image 2026-05-08 at 10.46.12 AM.jpeg';
import g8 from '../assets/gallary/WhatsApp Image 2026-05-08 at 10.46.13 AM (1).jpeg';
import g9 from '../assets/gallary/WhatsApp Image 2026-05-08 at 10.46.13 AM.jpeg';

const galleryImages = [
	{ src: g1, alt: 'Relish on 66 gallery' },
	{ src: g2, alt: 'Relish on 66 gallery' },
	{ src: g3, alt: 'Relish on 66 gallery' },
	{ src: g4, alt: 'Relish on 66 gallery' },
	{ src: g5, alt: 'Relish on 66 gallery' },
	{ src: g6, alt: 'Relish on 66 gallery' },
	{ src: g7, alt: 'Relish on 66 gallery' },
	{ src: g8, alt: 'Relish on 66 gallery' },
	{ src: g9, alt: 'Relish on 66 gallery' },
];

export default function Gallery() {
	return (
		<div className="overflow-hidden">
			<Seo title="Gallery" description="Explore moments from Relish on 66 Restaurant and Bar." />
			<PageBanner
				title="Gallery"
				subtitle="A glimpse of our food, ambiance, and celebrations"
				image={g1}
				height="h-[35vh]"
				overlay="bg-gradient-to-r from-[#06507D]/60 to-[#D42127]/60"
			/>

			<section className="container-pad py-16 bg-gradient-to-br from-gray-50/60 to-white">
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{galleryImages.map(({ src, alt }, index) => (
						<div
							key={`${src}-${index}`}
							className="group overflow-hidden rounded-2xl border border-[#06507D]/10 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
						>
							<img
								src={src}
								alt={alt}
								className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
							/>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
