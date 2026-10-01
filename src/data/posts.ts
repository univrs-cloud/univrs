import { getCollection, type CollectionEntry } from 'astro:content';
import { localePath, locales, type Locale } from '../site';

export type Post = CollectionEntry<'blog'>;

const same = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();

const parts = (post: Post) => {
	const [locale, ...rest] = post.id.split('/');

	return { locale: locale as Locale, slug: rest.join('/') };
};

export const postLocale = (post: Post) => parts(post).locale;

export const postSlug = (post: Post) => parts(post).slug;

export const postPath = (post: Post) => localePath(postLocale(post), `blog/${postSlug(post)}/`);

export const postMarkdownPath = (post: Post) => localePath(postLocale(post), `blog/${postSlug(post)}.md`);

export const postImagePath = (post: Post) => `/og${localePath(postLocale(post), `blog/${postSlug(post)}`)}.png`;

export const allPosts = async () => {
	const posts = await getCollection('blog', ({ data }) => !(import.meta.env.PROD && data.draft));

	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
};

export const localePosts = async (locale: Locale) => {
	const posts = await allPosts();

	return posts.filter((post) => same(postLocale(post), locale));
};

export const postAlternates = async (post: Post) => {
	const posts = await allPosts();
	const slug = postSlug(post);
	const alternates: Partial<Record<Locale, string>> = {};
	for (const locale of locales) {
		const match = posts.find((other) => same(postLocale(other), locale) && same(postSlug(other), slug));
		if (match) {
			alternates[locale] = postPath(match);
		}
	}

	return alternates;
};

export const formatDate = (date: Date, locale: Locale) => {
	return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(date);
};
