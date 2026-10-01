// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://univrs.cloud',
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
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en',
					ro: 'ro'
				}
			}
		})
	]
});
