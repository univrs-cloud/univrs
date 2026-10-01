import type { Locale } from '../../site';
import { en } from './en';
import { ro } from './ro';
import type { Card, Fact, HomeCopy } from './types';

export const home: Record<Locale, HomeCopy> = { en, ro };

const facts = (items: Fact[]) => {
	return items.map(({ term, value }) => `- ${term}: ${value}`).join('\n');
};

const cards = (items: Card[]) => {
	return items.map(({ title, text, href }) => `- **${title}.** ${text}${(href ? ` [${href}](${href})` : '')}`).join('\n');
};

export const homeMarkdown = (locale: Locale) => {
	const copy = home[locale];

	return [
		`# ${copy.meta.title}`,
		copy.hero.lede,
		facts(copy.hero.facts),
		`## ${copy.features.label}: ${copy.features.title}`,
		copy.features.lede,
		cards(copy.features.items),
		copy.features.note,
		`## ${copy.safety.label}: ${copy.safety.title}`,
		copy.safety.lede,
		cards(copy.safety.items),
		`## ${copy.platform.label}: ${copy.platform.title}`,
		copy.platform.lede,
		cards(copy.platform.items),
		`## ${copy.source.label}: ${copy.source.title}`,
		copy.source.lede,
		cards(copy.source.items),
		`## ${copy.faq.label}`,
		copy.faq.items.map(({ question, answer }) => `### ${question}\n\n${answer}`).join('\n\n')
	].join('\n\n');
};
