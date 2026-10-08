import { Link, useParams } from 'react-router-dom';
import { Seo } from '../components/Seo.jsx';
import { SITE_URL } from '../seo/pageSeo.js';
import { BLOG_POSTS, formatBlogDate, getBlogPost } from '../data/blogPosts.js';

function renderParts(parts) {
	return parts.map((part, index) => {
		let url = part.to || part.href;
		if (!url) {
			return <span key={index}>{part.text}</span>;
		}
		const isAbsoluteExternal = url.startsWith('http://') || url.startsWith('https://');
		if (isAbsoluteExternal && !url.includes('relishon66.ca')) {
			return (
				<a
					key={`${url}-${index}`}
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="font-semibold text-[#06507D] underline decoration-[#D42127]/40 underline-offset-2 hover:text-[#D42127] hover:decoration-[#D42127] transition-colors"
				>
					{part.text}
				</a>
			);
		}
		if (url.startsWith('https://relishon66.ca')) {
			url = url.replace('https://relishon66.ca', '') || '/';
		} else if (url.startsWith('http://relishon66.ca')) {
			url = url.replace('http://relishon66.ca', '') || '/';
		}
		return (
			<Link
				key={`${url}-${index}`}
				to={url}
				className="font-semibold text-[#06507D] underline decoration-[#D42127]/40 underline-offset-2 hover:text-[#D42127] hover:decoration-[#D42127] transition-colors"
			>
				{part.text}
			</Link>
		);
	});
}

function Block({ block }) {
	if (block.type === 'h2') {
		return (
			<h2 className="font-serif text-2xl md:text-3xl mt-10 mb-4 bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent">
				{block.text}
			</h2>
		);
	}
	if (block.type === 'h3') {
		return <h3 className="font-serif text-xl md:text-2xl mt-8 mb-2 text-gray-900">{block.text}</h3>;
	}
	if (block.type === 'ul') {
		return (
			<ul className="list-disc pl-6 space-y-2 text-gray-700">
				{block.items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		);
	}
	return <p>{renderParts(block.parts || [{ text: block.text || '' }])}</p>;
}

export default function BlogPost() {
	const { slug } = useParams();
	const post = getBlogPost(slug);

	if (!post) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5">
				<Seo
					path={`/blog/${slug || ''}`}
					metaTitle="Post Not Found | Relish on 66 Blog"
					description="The blog post you are looking for could not be found."
				/>
				<section className="container-pad py-24 text-center">
					<h1 className="font-serif text-4xl mb-4 text-gray-900">Post not found</h1>
					<p className="text-gray-600 mb-8">This article may have been moved or removed.</p>
					<Link
						to="/blog"
						className="inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-[#06507D] to-[#D42127] text-white font-semibold"
					>
						Back to Blog
					</Link>
				</section>
			</div>
		);
	}

	const related = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 2);
	const ogImage = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;

	return (
		<div className="overflow-hidden min-h-screen bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5">
			<Seo
				path={`/blog/${post.slug}`}
				metaTitle={post.metaTitle || `${post.title} | Relish on 66 Blog`}
				description={post.metaDescription || post.excerpt}
				ogImage={ogImage}
			/>

			<article className="container-pad py-10 md:py-16">
				<div className="max-w-3xl mx-auto">
					<p className="text-sm text-[#06507D] mb-6">
						<Link to="/blog" className="hover:text-[#D42127] transition-colors">
							← Back to Blog
						</Link>
					</p>
					<p className="text-sm font-medium text-[#D42127] mb-3">
						{post.category} · <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
					</p>
					<h1 className="font-serif text-3xl md:text-5xl text-gray-900 leading-tight mb-8">
						{post.title}
					</h1>
					<img
						src={post.image}
						alt={post.imageAlt}
						className="w-full h-auto object-contain rounded-2xl shadow-xl border border-[#06507D]/10 mb-10 bg-[#f3ecdc]"
					/>

					<div className="space-y-6 text-lg text-gray-700 leading-relaxed">
						{post.content.map((block, index) => (
							<Block key={index} block={block} />
						))}
					</div>

					<div className="mt-12 p-6 rounded-2xl border border-[#06507D]/15 bg-white/80 backdrop-blur-sm">
						<h2 className="font-serif text-2xl mb-3 bg-gradient-to-r from-[#06507D] to-[#D42127] bg-clip-text text-transparent">
							Visit Relish on 66
						</h2>
						<p className="text-gray-600 mb-5">
							Ready for sizzling tawa specialties and live Indian kitchen dining in Edmonton?
						</p>
						<div className="flex flex-wrap gap-3">
							<Link
								to="/reservation"
								className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#06507D] to-[#D42127] text-white font-semibold"
							>
								Reserve a Table
							</Link>
							<Link
								to="/menu"
								className="px-5 py-3 rounded-xl border border-[#06507D]/30 text-[#06507D] font-semibold hover:bg-[#06507D]/5 transition-colors"
							>
								View Menu
							</Link>
							<Link
								to="/contact"
								className="px-5 py-3 rounded-xl border border-[#06507D]/30 text-[#06507D] font-semibold hover:bg-[#06507D]/5 transition-colors"
							>
								Contact Us
							</Link>
						</div>
					</div>
				</div>

				{related.length > 0 && (
					<div className="max-w-5xl mx-auto mt-16">
						<h2 className="font-serif text-3xl mb-8 text-center bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
							More From the Blog
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							{related.map((item) => (
								<Link
									key={item.slug}
									to={`/blog/${item.slug}`}
									className="rounded-2xl border border-[#06507D]/10 bg-white/80 p-5 shadow-md hover:shadow-xl transition-all"
								>
									<p className="text-sm text-[#D42127] mb-2">{item.category}</p>
									<h3 className="font-serif text-xl text-gray-900 mb-2">{item.title}</h3>
									<p className="text-gray-600 text-sm">{item.excerpt}</p>
								</Link>
							))}
						</div>
					</div>
				)}
			</article>
		</div>
	);
}
