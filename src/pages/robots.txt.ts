import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const body = [
		'User-agent: *',
		'Allow: /',
		'',
		`Sitemap: ${new URL('sitemap-index.xml', site).href}`
	].join('\n');

	return new Response(`${body}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
