import { motion } from 'framer-motion';

export default function PageBanner({ title, subtitle, image, height = 'h-[60vh]', overlay = 'bg-black/50', children }){
	return (
		<section className={`relative ${height} bg-cover bg-center flex items-center justify-center`} style={{ backgroundImage: `url(${image})` }}>
			<div className={`absolute inset-0 ${overlay}`} />
			<div className="relative container-pad text-white text-center">
				{title && (
					<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-serif text-5xl md:text-7xl mb-4">
						{title}
					</motion.h1>
				)}
				{subtitle && (
					<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg md:text-2xl max-w-3xl mx-auto mb-6">
						{subtitle}
					</motion.p>
				)}
				{children && (
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
						{children}
					</motion.div>
				)}
			</div>
		</section>
	);
}