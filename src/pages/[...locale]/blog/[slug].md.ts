import type { APIRoute } from 'astro';
import { allPosts, postLocale, postPath, postSlug, type Post } from '../../../data/posts';
import { localePath } from '../../../site';

export const getStaticPaths = async () => {
	const posts = await allPosts();

	return posts.map((post) => ({
		params: { locale: localePath(postLocale(post)).slice(1, -1) || undefined, slug: postSlug(post) },
		props: { post }
	}));
};

export const GET: APIRoute<{ post: Post }> = ({ props, site }) => {
	const { post } = props;
	const { title, description, pubDate } = post.data;
	const body = [
		`# ${title}`,
		`> ${description}`,
		`Published ${pubDate.toISOString().slice(0, 10)} · ${new URL(postPath(post), site).href}`,
		(post.body ?? '').trim()
	].join('\n\n');

	return new Response(`${body}\n`, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
