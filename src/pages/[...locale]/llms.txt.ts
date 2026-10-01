import type { APIRoute } from 'astro';
import { home } from '../../data/home';
import { localePosts, postMarkdownPath } from '../../data/posts';
import { ui } from '../../data/ui';
import { localeParams, localePath, site, type Locale } from '../../site';

export const getStaticPaths = localeParams;

export const GET: APIRoute<{ locale: Locale }> = async ({ props, site: origin }) => {
	const { locale } = props;
	const copy = home[locale];
	const posts = await localePosts(locale);
	const absolute = (path: string) => new URL(path, origin).href;
	const body = [
		`# ${site.name}: ${site.product}`,
		`> ${copy.meta.description}`,
		copy.hero.lede,
		`## ${site.name}`,
		[
			`- [${copy.meta.title}](${absolute(localePath(locale))}): ${copy.features.title}`,
			`- [llms-full.txt](${absolute(localePath(locale, 'llms-full.txt'))}): ${copy.meta.description}`
		].join('\n'),
		`## ${ui[locale].nav.docs}`,
		[...copy.safety.items, ...copy.platform.items].map(({ title, text, href }) => `- [${title}](${href}): ${text}`).join('\n'),
		`## ${copy.source.label}`,
		copy.source.items.map(({ title, text, href }) => `- [${title}](${href}): ${text}`).join('\n'),
		`## ${ui[locale].blog.title}`,
		posts.map((post) => `- [${post.data.title}](${absolute(postMarkdownPath(post))}): ${post.data.description}`).join('\n')
	].join('\n\n');

	return new Response(`${body}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
