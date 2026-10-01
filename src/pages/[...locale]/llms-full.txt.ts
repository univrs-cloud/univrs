import type { APIRoute } from 'astro';
import { homeMarkdown } from '../../data/home';
import { localePosts, postMarkdown, postPath } from '../../data/posts';
import { ui } from '../../data/ui';
import { localeParams, localePath, type Locale } from '../../site';

export const getStaticPaths = localeParams;

export const GET: APIRoute<{ locale: Locale }> = async ({ props, site: origin }) => {
	const { locale } = props;
	const posts = await localePosts(locale);
	const absolute = (path: string) => new URL(path, origin).href;
	const body = [
		homeMarkdown(locale),
		`Source: ${absolute(localePath(locale))}`,
		...posts.map((post) => [
			'---',
			`# ${ui[locale].blog.title}: ${post.data.title}`,
			`> ${post.data.description}`,
			`${ui[locale].blog.published}: ${post.data.pubDate.toISOString().slice(0, 10)} · ${absolute(postPath(post))}`,
			postMarkdown(post)
		].join('\n\n'))
	].join('\n\n');

	return new Response(`${body}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
