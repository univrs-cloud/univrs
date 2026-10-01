import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { localePosts, postPath } from '../../data/posts';
import { ui } from '../../data/ui';
import { localeParams, site, type Locale } from '../../site';

export const getStaticPaths = localeParams;

export const GET: APIRoute<{ locale: Locale }> = async ({ props }) => {
	const { locale } = props;
	const posts = await localePosts(locale);

	return rss({
		title: `${site.name} ${ui[locale].blog.title}`,
		description: ui[locale].blog.description,
		site: site.url,
		customData: `<language>${locale}</language>`,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			categories: post.data.tags,
			link: postPath(post)
		}))
	});
};
