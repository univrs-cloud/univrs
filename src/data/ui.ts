import type { Locale } from '../site';

export interface UiCopy {
	skip: string;
	nav: { features: string; safety: string; platform: string; source: string; blog: string; docs: string; menu: string };
	theme: string;
	language: string;
	languageNames: Record<Locale, string>;
	inDocs: string;
	blog: {
		title: string;
		label: string;
		description: string;
		latest: string;
		all: string;
		read: string;
		published: string;
		updated: string;
		back: string;
		empty: string;
		feed: string;
	};
	notFound: { label: string; title: string; text: string; home: string };
	footer: { tagline: string };
}

export const ui: Record<Locale, UiCopy> = {
	en: {
		skip: 'Skip to content',
		nav: {
			features: 'Apps',
			safety: 'Data safety',
			platform: 'Platform',
			source: 'Open source',
			blog: 'Blog',
			docs: 'Docs',
			menu: 'Menu'
		},
		theme: 'Dark theme',
		language: 'Language',
		languageNames: { en: 'English', ro: 'Română' },
		inDocs: 'In the docs',
		blog: {
			title: 'Blog',
			label: 'Blog',
			description: 'News and notes on virgoOS: releases, how the system works and how to run it.',
			latest: 'From the blog',
			all: 'All posts',
			read: 'Read',
			published: 'Published',
			updated: 'Updated',
			back: 'All posts',
			empty: 'No posts yet.',
			feed: 'RSS feed'
		},
		notFound: {
			label: 'Error 404',
			title: 'This page does not exist.',
			text: 'The address may be mistyped, or the page may have moved.',
			home: 'Back to the home page'
		},
		footer: {
			tagline: 'Private cloud on hardware you own.'
		}
	},
	ro: {
		skip: 'Sari la conținut',
		nav: {
			features: 'Aplicații',
			safety: 'Siguranța datelor',
			platform: 'Platformă',
			source: 'Open source',
			blog: 'Blog',
			docs: 'Documentație',
			menu: 'Meniu'
		},
		theme: 'Temă întunecată',
		language: 'Limbă',
		languageNames: { en: 'English', ro: 'Română' },
		inDocs: 'În documentație',
		blog: {
			title: 'Blog',
			label: 'Blog',
			description: 'Noutăți și note despre virgoOS: versiuni noi, cum funcționează sistemul și cum se folosește.',
			latest: 'De pe blog',
			all: 'Toate articolele',
			read: 'Citește',
			published: 'Publicat',
			updated: 'Actualizat',
			back: 'Toate articolele',
			empty: 'Încă nu există articole.',
			feed: 'Flux RSS'
		},
		notFound: {
			label: 'Eroare 404',
			title: 'Această pagină nu există.',
			text: 'Adresa poate fi scrisă greșit sau pagina a fost mutată.',
			home: 'Înapoi la prima pagină'
		},
		footer: {
			tagline: 'Cloud privat pe echipamentul dumneavoastră.'
		}
	}
};
