import { site, type Locale } from '../site';

export interface SupportPlan {
	label: string;
	title: string;
	text: string;
	items: string[];
	action: { text: string; href: string };
}

export interface SupportCopy {
	meta: { title: string; description: string };
	label: string;
	title: string;
	lede: string;
	community: SupportPlan;
	paid: SupportPlan;
	quote: {
		label: string;
		title: string;
		lede: string;
		message: string;
		send: string;
		note: string;
	};
}

export const support: Record<Locale, SupportCopy> = {
	en: {
		meta: {
			title: 'Support',
			description: 'Two ways to get help with virgoOS: the free community resources, and paid technical support from the people who build it.'
		},
		label: 'Support',
		title: 'Help with virgoOS.',
		lede: 'virgoOS is free to use and documented in the open. When you would rather have someone look at your node with you, there is paid technical support.',
		community: {
			label: 'Community',
			title: 'Free',
			text: 'Everything needed to set up and run a node on your own.',
			items: [
				'The documentation: setup step by step, every management page and the virgo command.',
				'GitHub issues, to report a problem or ask for a feature in the open.',
				'The blog, for how the system works and what is new.'
			],
			action: { text: 'Read the docs', href: `${site.docs}/` }
		},
		paid: {
			label: 'Technical support',
			title: 'Paid',
			text: 'Private help from the people who build virgoOS, for your own node and setup.',
			items: [
				'Help installing virgoOS and going through setup.',
				'Troubleshooting a node that does not behave as the documentation says.',
				'Advice on storage layout, network, domain and port forwarding.',
				'Help installing and configuring apps.'
			],
			action: { text: 'Ask for a quote', href: '#quote' }
		},
		quote: {
			label: 'Paid technical support',
			title: 'Ask for a quote.',
			lede: 'Tell us what you need help with and what your setup looks like. We answer by email with a quote.',
			message: 'What do you need help with?',
			send: 'Ask for a quote',
			note: 'This is a request for a quote for paid technical support, sent from the Support page.'
		}
	},
	ro: {
		meta: {
			title: 'Suport',
			description: 'Două moduri de a primi ajutor pentru virgoOS: resursele gratuite ale comunității și suportul tehnic plătit, de la cei care îl construiesc.'
		},
		label: 'Suport',
		title: 'Ajutor pentru virgoOS.',
		lede: 'virgoOS este gratuit și documentat public. Atunci când preferați ca cineva să se uite împreună cu dumneavoastră la nod, există suport tehnic plătit.',
		community: {
			label: 'Comunitate',
			title: 'Gratuit',
			text: 'Tot ce este necesar ca să configurați și să folosiți singur un nod.',
			items: [
				'Documentația, în limba engleză: configurarea pas cu pas, fiecare pagină de administrare și comanda virgo.',
				'GitHub issues, pentru a raporta public o problemă sau a cere o funcție.',
				'Blogul, pentru cum funcționează sistemul și ce este nou.'
			],
			action: { text: 'Citește documentația', href: `${site.docs}/` }
		},
		paid: {
			label: 'Suport tehnic',
			title: 'Plătit',
			text: 'Ajutor privat de la cei care construiesc virgoOS, pentru nodul și configurația dumneavoastră.',
			items: [
				'Ajutor la instalarea virgoOS și la parcurgerea configurării.',
				'Depanarea unui nod care nu se comportă așa cum spune documentația.',
				'Sfaturi pentru configurația de stocare, rețea, domeniu și redirecționarea porturilor.',
				'Ajutor la instalarea și configurarea aplicațiilor.'
			],
			action: { text: 'Cere o ofertă', href: '#quote' }
		},
		quote: {
			label: 'Suport tehnic plătit',
			title: 'Cereți o ofertă.',
			lede: 'Spuneți-ne cu ce aveți nevoie de ajutor și cum arată configurația dumneavoastră. Vă răspundem pe e-mail cu o ofertă.',
			message: 'Cu ce aveți nevoie de ajutor?',
			send: 'Cere o ofertă',
			note: 'Aceasta este o cerere de ofertă pentru suport tehnic plătit, trimisă din pagina Suport.'
		}
	}
};
