// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import brokenLinksChecker from 'astro-broken-links-checker';

const SITE = 'https://univrs.cloud';
const DEFAULT_LOCALE = 'en';
const LOCALES = ['en', 'ro'];
const BLOG_DIR = new URL('./src/content/blog/', import.meta.url);

const frontmatterDate = (frontmatter = '', key = '') => {
	const match = frontmatter.match(new RegExp(`^${key}:\\s*['"]?(\\d{4}-\\d{2}-\\d{2})`, 'm'));
	return (match ? match[1] : null);
};

const blogDates = () => {
	const dates = new Map();
	for (const locale of readdirSync(BLOG_DIR)) {
		const prefix = (locale.toLowerCase() === DEFAULT_LOCALE ? '' : `/${locale}`);
		let newest = null;
		for (const file of readdirSync(new URL(`${locale}/`, BLOG_DIR))) {
			if (!file.toLowerCase().endsWith('.md')) {
				continue;
			}

			const frontmatter = readFileSync(new URL(`${locale}/${file}`, BLOG_DIR), 'utf8').split(/^---$/m)[1] ?? '';
			const date = frontmatterDate(frontmatter, 'updatedDate') ?? frontmatterDate(frontmatter, 'pubDate');
			if (!date) {
				continue;
			}

			dates.set(`${SITE}${prefix}/blog/${file.slice(0, -3)}/`, date);
			if (!newest || date > newest) {
				newest = date;
			}
		}
		if (newest) {
			dates.set(`${SITE}${prefix}/blog/`, newest);
		}
	}

	return dates;
};

const lastmods = blogDates();

const localeOrder = (lang = '') => {
	const index = LOCALES.indexOf(lang.toLowerCase());
	return (index === -1 ? LOCALES.length : index);
};

export default defineConfig({
	site: SITE,
	build: {
		inlineStylesheets: 'always'
	},
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark'
			},
			defaultColor: false
		}
	},
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/404'),
			serialize: (item) => {
				const lastmod = lastmods.get(item.url);
				const links = [...(item.links ?? [])].sort((a, b) => localeOrder(a.lang) - localeOrder(b.lang));
				const fallback = links.find((link) => link.lang.toLowerCase() === DEFAULT_LOCALE);
				return { ...item, links: (fallback ? [...links, { lang: 'x-default', url: fallback.url }] : links), ...(lastmod ? { lastmod } : {}) };
			},
			i18n: {
				defaultLocale: DEFAULT_LOCALE,
				locales: Object.fromEntries(LOCALES.map((locale) => [locale, locale]))
			}
		}),
		brokenLinksChecker({
			checkExternalLinks: true,
			cacheExternalLinks: false,
			throwError: true
		})
	]
});
