import { company, localePath, type Locale } from '../site';

export interface PrivacySection {
	title: string;
	paragraphs?: string[];
	items?: string[];
}

export interface PrivacyCopy {
	meta: { title: string; description: string };
	label: string;
	title: string;
	lede: string;
	updated: string;
	sections: PrivacySection[];
}

const contactLink = (locale: Locale, text: string) => {
	return `<a href="${localePath(locale, 'support/')}#quote">${text}</a>`;
};

export const privacy: Record<Locale, PrivacyCopy> = {
	en: {
		meta: {
			title: 'Privacy policy',
			description: 'How univrs Fleet and univrs.cloud handle your personal data, why, and what you can do about it.'
		},
		label: 'Legal',
		title: 'Privacy policy.',
		lede: 'What personal data univrs Fleet and this website handle, why, and what you can do about it.',
		updated: 'Last updated on 26 November 2026.',
		sections: [
			{
				title: 'Who we are',
				paragraphs: [
					`univrs Fleet (fleet.univrs.cloud and the univrs Fleet apps for iPhone, iPad and Android) and this website are run by ${company.name}, Unique Registration Code ${company.cui}, Trade Register No. ${company.regCom}, the controller of the personal data described here.`
				]
			},
			{
				title: 'What we collect',
				items: [
					'Your account: your name, your email address and your password, which we keep only as a hash, never in readable form.',
					'Sign-in security: the secret for your authenticator app (stored encrypted), your recovery codes (kept only as hashes), and the public keys of your passkeys and of biometric sign-in in the app. Your fingerprint and face never leave your device: the app only sends Fleet a public key and a signature.',
					'Sessions: the IP address, the browser or device description, and when each session started and was last active, so you can see where you are signed in and sign other sessions out.',
					'Your nodes: for each univrs node you register, its name, identifiers, domain name, status, storage health, available updates, when it was online, and who you share it with.',
					'Notifications: if you turn them on, the delivery address your browser or phone gives us for push notifications.',
					'Contact form: the name, email address and message you send us. They reach us by email and are not kept in Fleet.'
				]
			},
			{
				title: 'What we do not collect',
				paragraphs: [
					'There is no advertising, usage analytics or tracking in univrs Fleet or on this website, and we do not sell your data or share it for marketing.',
					'The files and data on your nodes stay on your nodes. When you open a node through Fleet, it connects your device to the node and does not keep the files or data you work with.'
				]
			},
			{
				title: 'Why we use it',
				items: [
					'To provide your account and the Fleet features you use (performance of our contract with you).',
					'To keep accounts secure with sign-in codes, sessions and connection history (our legitimate interest in preventing misuse).',
					'To send push notifications, only when you turn them on (your consent, which you can withdraw in Profile at any time).',
					'To answer the messages you send through the contact form (your request).'
				]
			},
			{
				title: 'Where it is kept and who else is involved',
				items: [
					'The Fleet servers and database are in Romania.',
					'Emails about your account, such as the sign-up confirmation, are sent through our email provider.',
					'Push notifications are delivered through the push service of your browser or phone maker, for example Apple, Google or Mozilla.',
					'When you turn on biometric sign-in, the app asks Apple (iPhone and iPad) or Google (Android) to confirm that it is the genuine univrs Fleet app. That check does not include your name or email address.'
				]
			},
			{
				title: 'How long we keep it',
				items: [
					'Your account data, until you delete your account.',
					'Sessions, for at most 30 days, or until you sign out.',
					'The online history of your nodes, for about a day.',
					'Sign-ups that are not confirmed, for 30 minutes.',
					'Contact form messages, as long as we need them to answer you.'
				]
			},
			{
				title: 'Deleting your account',
				paragraphs: [
					'You can delete your account at any time in Profile, under Danger zone, on fleet.univrs.cloud and in the app. Your account is removed from Fleet right away, together with the nodes you own and the groups you created.'
				]
			},
			{
				title: 'Your rights',
				paragraphs: [
					`Under the GDPR you can ask for a copy of your data, have it corrected or deleted, restrict or object to how we use it, and receive it in a portable format. To do so, write to us through the ${contactLink('en', 'contact form')}.`,
					'You can also complain to the Romanian data protection authority, ANSPDCP, at <a href="https://www.dataprotection.ro">www.dataprotection.ro</a>.'
				]
			},
			{
				title: 'Changes',
				paragraphs: [
					'If this policy changes, we update this page and the date at the top.'
				]
			}
		]
	},
	ro: {
		meta: {
			title: 'Politica de confidențialitate',
			description: 'Cum folosesc univrs Fleet și univrs.cloud datele dumneavoastră personale, de ce, și ce drepturi aveți.'
		},
		label: 'Informații legale',
		title: 'Politica de confidențialitate.',
		lede: 'Ce date personale prelucrează univrs Fleet și acest site, de ce, și ce drepturi aveți.',
		updated: 'Actualizată la 26 noiembrie 2026.',
		sections: [
			{
				title: 'Cine suntem',
				paragraphs: [
					`univrs Fleet (fleet.univrs.cloud și aplicațiile univrs Fleet pentru iPhone, iPad și Android) și acest site sunt administrate de ${company.name}, CUI ${company.cui}, Nr. Reg. Com. ${company.regCom}, operatorul datelor personale descrise aici.`
				]
			},
			{
				title: 'Ce date colectăm',
				items: [
					'Contul: numele, adresa de email și parola, pe care o păstrăm doar sub formă de hash, niciodată în clar.',
					'Securitatea autentificării: cheia pentru aplicația de autentificare (păstrată criptat), codurile de recuperare (doar sub formă de hash) și cheile publice ale passkey-urilor și ale autentificării biometrice din aplicație. Amprenta și chipul dumneavoastră nu părăsesc niciodată dispozitivul: aplicația trimite către Fleet doar o cheie publică și o semnătură.',
					'Sesiunile: adresa IP, descrierea browserului sau a dispozitivului și momentul în care fiecare sesiune a început și a fost activă ultima dată, ca să vedeți unde sunteți autentificat și să puteți închide celelalte sesiuni.',
					'Nodurile: pentru fiecare nod univrs înregistrat, numele, identificatorii, domeniul, starea, starea stocării, actualizările disponibile, perioadele în care a fost online și persoanele cu care îl partajați.',
					'Notificările: dacă le activați, adresa de livrare pe care browserul sau telefonul o furnizează pentru notificările push.',
					'Formularul de contact: numele, adresa de email și mesajul trimis. Ajung la noi prin email și nu sunt păstrate în Fleet.'
				]
			},
			{
				title: 'Ce nu colectăm',
				paragraphs: [
					'univrs Fleet și acest site nu conțin reclame, statistici de utilizare sau urmărire, iar datele dumneavoastră nu sunt vândute și nici partajate în scop de marketing.',
					'Fișierele și datele de pe noduri rămân pe noduri. Când deschideți un nod prin Fleet, acesta vă conectează dispozitivul la nod și nu păstrează fișierele sau datele cu care lucrați.'
				]
			},
			{
				title: 'De ce le folosim',
				items: [
					'Pentru a vă oferi contul și funcțiile Fleet pe care le folosiți (executarea contractului cu dumneavoastră).',
					'Pentru securitatea conturilor, prin coduri de autentificare, sesiuni și istoricul conexiunilor (interesul nostru legitim de a preveni abuzurile).',
					'Pentru notificările push, doar dacă le activați (consimțământul dumneavoastră, pe care îl puteți retrage oricând din Profile).',
					'Pentru a răspunde mesajelor trimise prin formularul de contact (la cererea dumneavoastră).'
				]
			},
			{
				title: 'Unde sunt păstrate și cine mai este implicat',
				items: [
					'Serverele și baza de date Fleet se află în România.',
					'Emailurile legate de cont, de exemplu confirmarea înregistrării, sunt trimise prin furnizorul nostru de email.',
					'Notificările push sunt livrate prin serviciul de notificări al producătorului browserului sau al telefonului, de exemplu Apple, Google sau Mozilla.',
					'Când activați autentificarea biometrică, aplicația îi cere lui Apple (iPhone și iPad) sau Google (Android) să confirme că este aplicația univrs Fleet autentică. Verificarea nu include numele sau adresa dumneavoastră de email.'
				]
			},
			{
				title: 'Cât timp le păstrăm',
				items: [
					'Datele contului, până când vă ștergeți contul.',
					'Sesiunile, cel mult 30 de zile sau până la deconectare.',
					'Istoricul de conectare al nodurilor, aproximativ o zi.',
					'Înregistrările neconfirmate, 30 de minute.',
					'Mesajele din formularul de contact, cât timp avem nevoie de ele pentru a vă răspunde.'
				]
			},
			{
				title: 'Ștergerea contului',
				paragraphs: [
					'Vă puteți șterge contul oricând din Profile, secțiunea Danger zone, pe fleet.univrs.cloud și în aplicație. Contul este eliminat imediat din Fleet, împreună cu nodurile pe care le dețineți și grupurile pe care le-ați creat.'
				]
			},
			{
				title: 'Drepturile dumneavoastră',
				paragraphs: [
					`Conform GDPR, puteți cere o copie a datelor, corectarea sau ștergerea lor, puteți restricționa prelucrarea sau vă puteți opune acesteia și le puteți primi într-un format portabil. Pentru oricare dintre acestea, scrieți-ne prin ${contactLink('ro', 'formularul de contact')}.`,
					'Puteți depune și o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), la <a href="https://www.dataprotection.ro">www.dataprotection.ro</a>.'
				]
			},
			{
				title: 'Modificări',
				paragraphs: [
					'Dacă politica se schimbă, actualizăm această pagină și data de mai sus.'
				]
			}
		]
	}
};
