import type { Locale } from '../site';

export interface UiCopy {
	skip: string;
	nav: { features: string; safety: string; platform: string; blog: string; docs: string; contact: string; menu: string };
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
		zoom: string;
		zoomClose: string;
		empty: string;
		feed: string;
	};
	contact: {
		label: string;
		title: string;
		lede: string;
		name: string;
		email: string;
		message: string;
		send: string;
		sending: string;
		sentTitle: string;
		sentText: string;
		errors: { name: string; email: string; message: string; limit: string; failed: string };
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
			blog: 'Blog',
			docs: 'Docs',
			contact: 'Contact',
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
			zoom: 'Zoom in',
			zoomClose: 'Close the enlarged image',
			empty: 'No posts yet.',
			feed: 'RSS feed'
		},
		contact: {
			label: 'Contact',
			title: 'Write to us.',
			lede: 'A question about virgoOS, or something that does not work as the documentation says? Send a message and we will answer by email.',
			name: 'Name',
			email: 'Email',
			message: 'Message',
			send: 'Send message',
			sending: 'Sending…',
			sentTitle: 'Thank you, the message was sent.',
			sentText: 'We will answer at the email address you gave.',
			errors: {
				name: 'Enter your name.',
				email: 'Enter a valid email address.',
				message: 'Enter a message of at most 5000 characters.',
				limit: 'Too many messages were sent from your address. Please try again later.',
				failed: 'The message could not be sent. Please try again later.'
			}
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
			blog: 'Blog',
			docs: 'Documentație',
			contact: 'Contact',
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
			zoom: 'Mărește imaginea',
			zoomClose: 'Închide imaginea mărită',
			empty: 'Încă nu există articole.',
			feed: 'Flux RSS'
		},
		contact: {
			label: 'Contact',
			title: 'Scrieți-ne.',
			lede: 'Aveți o întrebare despre virgoOS sau ceva nu funcționează așa cum spune documentația? Trimiteți un mesaj și vă răspundem pe e-mail.',
			name: 'Nume',
			email: 'E-mail',
			message: 'Mesaj',
			send: 'Trimite mesajul',
			sending: 'Se trimite…',
			sentTitle: 'Vă mulțumim, mesajul a fost trimis.',
			sentText: 'Vă răspundem la adresa de e-mail pe care ați scris-o.',
			errors: {
				name: 'Scrieți numele dumneavoastră.',
				email: 'Scrieți o adresă de e-mail validă.',
				message: 'Scrieți un mesaj de cel mult 5000 de caractere.',
				limit: 'De la adresa dumneavoastră au fost trimise prea multe mesaje. Încercați din nou mai târziu.',
				failed: 'Mesajul nu a putut fi trimis. Încercați din nou mai târziu.'
			}
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
