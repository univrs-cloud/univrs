import type { APIRoute } from 'astro';
import sharp from 'sharp';
import logo from '../../assets/univrs.svg?raw';
import { home } from '../../data/home';
import { allPosts, postImagePath } from '../../data/posts';
import { locales, site } from '../../site';

interface Props {
	label: string;
	title: string;
}

const WIDTH = 1200;
const HEIGHT = 630;
const LINE_LENGTH = 28;
const MAX_LINES = 4;

const escape = (text: string) => {
	return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

const wrap = (text: string) => {
	const lines: string[] = [];
	for (const word of text.split(/\s+/)) {
		const last = lines[lines.length - 1];
		if (last !== undefined && `${last} ${word}`.length <= LINE_LENGTH) {
			lines[lines.length - 1] = `${last} ${word}`;
			continue;
		}

		lines.push(word);
	}
	if (lines.length > MAX_LINES) {
		lines.length = MAX_LINES;
		lines[MAX_LINES - 1] = `${lines[MAX_LINES - 1]}…`;
	}

	return lines;
};

const logoMarkup = logo.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');

const card = ({ label, title }: Props) => {
	const lines = wrap(title);
	const start = 330 - ((lines.length - 1) * 38);

	return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
		<defs>
			<linearGradient id="spectrum" x1="0" y1="0" x2="1" y2="0">
				<stop offset="0%" stop-color="#C05C9E"/>
				<stop offset="45%" stop-color="#7A4BA6"/>
				<stop offset="100%" stop-color="#3B4FD4"/>
			</linearGradient>
		</defs>
		<rect width="${WIDTH}" height="${HEIGHT}" fill="#0D0E24"/>
		<svg x="80" y="72" width="64" height="64" viewBox="0 0 512 512">${logoMarkup}</svg>
		<text x="160" y="117" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="600" fill="#FFFFFF">${escape(site.name)}</text>
		<text x="80" y="${start - 84}" font-family="Menlo, 'DejaVu Sans Mono', monospace" font-size="22" letter-spacing="4" fill="#8C8CA8">${escape(label.toUpperCase())}</text>
		${lines.map((line, index) => `<text x="80" y="${start + (index * 76)}" font-family="Helvetica, Arial, sans-serif" font-size="64" font-weight="700" fill="#FFFFFF">${escape(line)}</text>`).join('')}
		<text x="80" y="560" font-family="Menlo, 'DejaVu Sans Mono', monospace" font-size="22" letter-spacing="4" fill="#8C8CA8">UNIVRS.CLOUD</text>
		<rect x="0" y="${HEIGHT - 8}" width="${WIDTH}" height="8" fill="url(#spectrum)"/>
	</svg>`;
};

export const getStaticPaths = async () => {
	const posts = await allPosts();

	return [
		...locales.map((locale) => ({
			params: { path: locale },
			props: { label: home[locale].hero.label, title: `${home[locale].hero.thin} ${home[locale].hero.heavy}` }
		})),
		...posts.map((post) => ({
			params: { path: postImagePath(post).slice('/og/'.length, -'.png'.length) },
			props: { label: 'Blog', title: post.data.title }
		}))
	];
};

export const GET: APIRoute<Props> = async ({ props }) => {
	const image = await sharp(Buffer.from(card(props))).png().toBuffer();

	return new Response(new Uint8Array(image), { headers: { 'Content-Type': 'image/png' } });
};
