export interface Fact {
	term: string;
	value: string;
}

export interface Action {
	text: string;
	href: string;
}

export interface Card {
	icon?: string;
	label?: string;
	title: string;
	text: string;
	href?: string;
}

export interface Section {
	label: string;
	title: string;
	lede: string;
}

export interface HomeCopy {
	meta: { title: string; description: string };
	hero: {
		label: string;
		thin: string;
		heavy: string;
		lede: string;
		primary: Action;
		secondary: Action;
		imageAlt: string;
		facts: Fact[];
	};
	features: Section & { items: Card[]; note: string };
	safety: Section & { items: Card[] };
	platform: Section & { items: Card[] };
	source: Section & { items: Card[]; action: Action };
	faq: { label: string; title: string; items: { question: string; answer: string }[] };
	close: { title: string; text: string; primary: Action; secondary: Action };
}
