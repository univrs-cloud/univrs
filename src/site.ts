export const locales = ['en', 'ro'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

const prefixes: Record<Locale, string> = {
	en: '',
	ro: '/ro'
};

export const ogLocales: Record<Locale, string> = {
	en: 'en_US',
	ro: 'ro_RO'
};

export const localePath = (locale: Locale, path = '') => {
	return `${prefixes[locale]}/${path}`;
};

export const localeParams = () => {
	return locales.map((locale) => ({
		params: { locale: prefixes[locale].slice(1) || undefined },
		props: { locale }
	}));
};

export const site = {
	name: 'univrs',
	product: 'virgoOS',
	url: 'https://univrs.cloud',
	docs: 'https://docs.univrs.cloud',
	github: 'https://github.com/univrs-cloud',
	download: 'https://github.com/univrs-cloud/virgo/releases/latest',
	fleet: 'https://fleet.univrs.cloud',
	license: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.html'
};

export const actionIcon = (href: string) => {
	const leadsTo = (target: string) => href.toLowerCase().startsWith(target.toLowerCase());
	if (leadsTo(site.docs)) {
		return 'book';
	}

	return (leadsTo(site.download) ? 'download' : null);
};
