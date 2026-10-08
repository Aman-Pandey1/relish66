import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import { Seo } from '../components/Seo.jsx';
import { PAGE_SEO } from '../seo/pageSeo.js';
import { BLOG_POSTS, formatBlogDate } from '../data/blogPosts.js';

export default function Blog() {
	return (
		<div className="overflow-hidden min-h-screen bg-gradient-to-br from-[#06507D]/5 to-[#D42127]/5">
			<Seo path={PAGE_SEO.blog.path} metaTitle={PAGE_SEO.blog.metaTitle} description={PAGE_SEO.blog.description} />
			<PageBanner
				title="Blog"
				subtitle="Stories, flavors, and dining tips from Relish on 66 in Edmonton"
				image="/sizzling-tawa-specialties.png"
				imageAlt="Sizzling tawa specialties at Relish on 66 in Edmonton"
				height="h-[35vh]"
				overlay="bg-gradient-to-r from-[#06507D]/60 to-[#D42127]/60"
			/>

			<section className="container-pad py-14 md:py-16">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="font-serif text-3xl md:text-4xl mb-4 bg-gradient-to-r from-[#06507D] via-[#D42127] to-[#06507D] bg-clip-text text-transparent">
						From Our Kitchen to Yours
					</h2>
					<p className="text-gray-600 text-lg">
						Explore Indian dining guides, catering ideas, and behind-the-scenes looks at our live tandoor kitchen in South Edmonton.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{BLOG_POSTS.map((post) => (
						<article
							key={post.slug}
							className="group overflow-hidden rounded-2xl border border-[#06507D]/10 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300"
						>
							<Link to={`/blog/${post.slug}`} className="block">
								<div className="bg-[#f3ecdc] px-2 pt-2">
									<img
										src={post.image}
										alt={post.imageAlt}
										className="w-full h-auto object-contain"
										loading="lazy"
									/>
								</div>
								<div className="p-6">
									<div className="flex items-center gap-3 text-sm text-[#06507D]/80 mb-3">
										<span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#06507D]/10 to-[#D42127]/10 font-medium text-[#D42127]">
											{post.category}
										</span>
										<time dateTime={post.date}>{formatBlogDate(post.date)}</time>
									</div>
									<h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-[#06507D] transition-colors">
										{post.title}
									</h3>
									<p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
									<span className="inline-flex items-center font-semibold text-[#D42127]">
										Read more
										<span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
									</span>
								</div>
							</Link>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
