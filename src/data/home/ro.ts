import { site } from '../../site';
import type { HomeCopy } from './types';

export const ro: HomeCopy = {
	meta: {
		title: 'virgoOS: cloud privat pe echipamentul dumneavoastră',
		description: 'virgoOS este un sistem de operare open source pentru cloud privat. Fișierele, e-mailul, documentele și apelurile rulează pe propriul server, cu istoric automat.'
	},
	hero: {
		label: 'Sistem de operare pentru cloud privat',
		thin: 'Datele dumneavoastră,',
		heavy: 'pe propriul echipament.',
		lede: 'virgoOS este un sistem de operare open source care transformă un server într-un cloud privat. Rulează fișierele, e-mailul, documentele și apelurile pe un server care vă aparține, păstrează automat istoricul fiecărei modificări și se administrează din browser.',
		primary: { text: 'Citește documentația', href: `${site.docs}/` },
		secondary: { text: 'Codul sursă pe GitHub', href: site.github },
		imageAlt: 'Două noduri virgoOS care se replică în aceeași locație, conectate prin router la internet, la un laptop, la o tabletă și la un calculator.',
		facts: [
			{ term: 'Bază', value: 'Debian' },
			{ term: 'Stocare', value: 'ZFS' },
			{ term: 'Arhitecturi', value: 'amd64, arm64' },
			{ term: 'Licență', value: 'GPL-2.0' },
			{ term: 'Administrare', value: 'Browser și CLI' }
		]
	},
	features: {
		label: 'Aplicații',
		title: 'Tot ce folosiți zilnic, pe un singur server.',
		lede: 'Aplicațiile se instalează din App center, cu câteva setări. Fiecare rulează în containere, își ține datele pe pool-ul de stocare și se deschide prin HTTPS, la propriul nume sub domeniul nodului.',
		items: [
			{ icon: 'folder', title: 'Fișiere', text: 'Nextcloud vă păstrează fișierele și le sincronizează pe orice dispozitiv, cu foldere și drepturi de acces pentru fiecare utilizator.' },
			{ icon: 'document', title: 'Documente', text: 'Euro Office deschide documentele în browser, astfel încât mai mulți oameni pot lucra în același timp pe același fișier.' },
			{ icon: 'mail', title: 'E-mail', text: 'Un server de e-mail complet pe propriul domeniu: SMTP și IMAP, cu filtru de spam și de viruși.' },
			{ icon: 'video', title: 'Apeluri și tablă comună', text: 'Apeluri video cu backendul de înaltă performanță Nextcloud și o tablă pe care desenează mai mulți oameni deodată.' },
			{ icon: 'shield', title: 'VPN', text: 'WireGuard vă oferă o conexiune criptată la nod și la aplicațiile lui din afara rețelei.' },
			{ icon: 'ban', title: 'Fără reclame', text: 'Pi-hole blochează reclamele și trackerele la nivel de DNS, pentru toate dispozitivele din rețea.' },
			{ icon: 'share', title: 'Foldere partajate', text: 'Foldere pentru calculatoarele din rețeaua locală, deschise utilizatorilor pe care îi alegeți sau tuturor, ca invitat.' },
			{ icon: 'clock', title: 'Backup pentru Mac', text: 'Time machines sunt destinații de backup pentru aplicația Time Machine de pe Mac, fiecare cu propria capacitate.' },
			{ icon: 'code', title: 'Unelte pentru dezvoltatori', text: 'Gitea cu runnerul său de CI, analiză web cu Plausible, un panou pentru containere și un terminal în browser.' }
		],
		note: 'Nu se instalează nimic din ce nu alegeți. Trei aplicații de bază sunt mereu prezente: Traefik direcționează cererile către aplicații, Authelia ține conturile, iar Terminal deschide un shell din browser.'
	},
	safety: {
		label: 'Siguranța datelor',
		title: 'Mai multe copii și un istoric la care vă puteți întoarce.',
		lede: 'Tot ce salvează o aplicație stă pe un pool ZFS redundant, care își verifică singur datele, păstrează ani de istoric ce nu poate fi modificat și în care se pot căuta fișiere care nu mai există.',
		items: [
			{
				label: 'Redundanță',
				title: 'Un disc poate ceda fără să se piardă date',
				text: 'Pool-ul este construit din cel puțin două discuri de date. Configurarea oferă variantele pe care discurile le permit, de la mirror la RAID-Z3, care rezistă la defectarea a unu până la trei discuri.',
				href: `${site.docs}/setup/storage/`
			},
			{
				label: 'Istoric',
				title: 'Reveniți la starea de acum o oră',
				text: 'Nodul păstrează câte un snapshot pentru fiecare dintre ultimele 36 de ore, 30 de zile, 60 de luni și 5 ani și le șterge singur pe cele mai vechi. Un snapshot ocupă spațiu doar pentru ce s-a schimbat de când a fost făcut.',
				href: `${site.docs}/management/system/storage/`
			},
			{
				label: 'Ransomware',
				title: 'Un istoric care nu poate fi rescris',
				text: 'Un snapshot este o copie doar pentru citire a datelor unei aplicații, așa cum erau la un moment dat. Fișierele criptate de pe un calculator infectat nu schimbă snapshoturile făcute înainte de atac.',
				href: `${site.docs}/management/resources/apps/snapshots/`
			},
			{
				label: 'Integritate',
				title: 'Fiecare bloc este verificat',
				text: 'Pool-ul păstrează o sumă de control pentru tot ce stochează. O verificare lunară citește toate datele și repară, din redundanța pool-ului, tot ce nu corespunde.',
				href: `${site.docs}/management/system/storage/`
			},
			{
				label: 'Căutare',
				title: 'Găsiți un fișier care a fost șters',
				text: 'Indexerul cataloghează din oră în oră fișierele din snapshoturi. Căutați în el din snapshoturile unei aplicații sau cu comenzile virgo indexer, ca să găsiți versiuni mai vechi sau șterse ale unui fișier.',
				href: `${site.docs}/cli/indexer/`
			},
			{
				label: 'Curent electric',
				title: 'O pană de curent nu îl strică',
				text: 'Nodul își monitorizează UPS-ul, arată dacă funcționează de la rețea sau pe baterie și se închide singur, în ordine, atunci când pana ține prea mult.',
				href: `${site.docs}/management/dashboard/`
			}
		]
	},
	platform: {
		label: 'Platformă',
		title: 'Administrat din browser, nu din terminal.',
		lede: 'virgoOS este un sistem pentru un echipament gata de folosit: configurarea pune câteva întrebări, iar apoi nodul se administrează din interfața lui web, din contul de fleet sau cu comanda virgo.',
		items: [
			{
				title: 'Configurare în nouă pași',
				text: 'Configurarea pornește la prima pornire a nodului. Stabilește rețeaua, creează pool-ul de stocare, înregistrează nodul în fleet, instalează aplicațiile de bază și înlocuiește parola din fabrică.',
				href: `${site.docs}/setup/`
			},
			{
				title: 'Un nume și un certificat',
				text: 'Un nod răspunde la hostname.cluster.domeniu. Cu univrs.cloud, înregistrarea DNS și un certificat wildcard Let\'s Encrypt sunt create pentru dumneavoastră. Se poate folosi și un domeniu propriu.',
				href: `${site.docs}/setup/host/`
			},
			{
				title: 'Administrat de oriunde',
				text: 'Înregistrarea leagă nodul de contul dumneavoastră de fleet. Nodul se conectează singur la fleet, deci funcționează și în spatele CGNAT, fără adresă IP publică și fără porturi redirecționate.',
				href: `${site.docs}/setup/fleet/`
			},
			{
				title: 'O singură autentificare',
				text: 'Authelia ține conturile cu care se face autentificarea în nod și în aplicațiile lui. După trei încercări greșite în zece minute, autentificarea de la acea adresă este blocată douăsprezece ore.',
				href: `${site.docs}/management/authentication/`
			},
			{
				title: 'Actualizări dintr-o singură pagină',
				text: 'Nodul caută actualizări în fiecare zi. Pagina Updates le listează pe fiecare, cu versiunea instalată și cea nouă, și le instalează pe toate, arătând fiecare pas.',
				href: `${site.docs}/management/system/updates/`
			},
			{
				title: 'Și o linie de comandă',
				text: 'Fiecare nod vine cu comanda virgo, pentru setările de rețea, aplicațiile care pot fi instalate și pentru indexarea și căutarea fișierelor din snapshoturi.',
				href: `${site.docs}/cli/`
			}
		]
	},
	source: {
		label: 'Open source',
		title: 'Fiecare componentă este publică.',
		lede: 'virgoOS este publicat sub licența GNU General Public License, versiunea 2. Sistemul este împărțit în depozite mici, fiecare cu un singur rol.',
		items: [
			{ title: 'virgo', text: 'Construiește imaginile de instalare virgoOS.', href: `${site.github}/virgo` },
			{ title: 'virgo-api', text: 'Serviciul care rulează pe fiecare nod și comanda virgo.', href: `${site.github}/virgo-api` },
			{ title: 'virgo-ui', text: 'Interfața web: configurarea, pagina Dashboard și toate paginile de administrare.', href: `${site.github}/virgo-ui` },
			{ title: 'virgo-fleet', text: 'Administrarea nodurilor prin fleet, oriunde s-ar afla.', href: `${site.github}/virgo-fleet` },
			{ title: 'virgo-apps', text: 'Șabloanele din spatele App center.', href: `${site.github}/virgo-apps` },
			{ title: 'virgo-ups', text: 'Monitorizarea UPS-ului și oprirea automată.', href: `${site.github}/virgo-ups` },
			{ title: 'virgo-packages', text: 'Depozitul APT cu pachetele virgoOS.', href: `${site.github}/virgo-packages` }
		],
		action: { text: 'univrs-cloud pe GitHub', href: site.github }
	},
	faq: {
		label: 'Întrebări',
		title: 'Ce se întreabă înainte de instalare.',
		items: [
			{
				question: 'Ce este virgoOS?',
				answer: 'virgoOS este un sistem de operare open source, bazat pe Debian, care transformă un server într-un cloud privat. Păstrează datele pe un pool ZFS redundant, rulează în containere aplicații precum Nextcloud, un server de e-mail și WireGuard și se administrează din browser.'
			},
			{
				question: 'De ce hardware are nevoie un nod?',
				answer: 'De cel puțin două discuri de date de aceeași mărime, cu o diferență de cel mult 10% între ele, pe lângă discul de pe care rulează sistemul. De cel puțin 8 GB de RAM, ideal 16 GB sau mai mult, și de o conexiune de rețea prin cablu. Pachetele sunt publicate pentru amd64 și arm64.'
			},
			{
				question: 'Este virgoOS open source?',
				answer: 'Da. Componentele lui sunt publicate sub GNU General Public License, versiunea 2, în depozite publice la github.com/univrs-cloud.'
			},
			{
				question: 'Are nevoie nodul de o adresă IP publică?',
				answer: 'Nu. Un nod înregistrat într-un cont de fleet se conectează singur la fleet, deci poate fi administrat de oriunde, chiar și în spatele CGNAT. Cu o adresă IP publică, puteți redirecționa câteva porturi din router ca să ajungeți la nod și la aplicațiile lui din afara rețelei.'
			},
			{
				question: 'Pot folosi propriul domeniu?',
				answer: 'Da. Cu un domeniu propriu creați singur înregistrările DNS, iar înregistrarea în fleet este opțională. Cu univrs.cloud, înregistrarea DNS și certificatul wildcard sunt create prin contul dumneavoastră de fleet.'
			},
			{
				question: 'Cât de departe în timp pot recupera un fișier?',
				answer: 'Nodul păstrează câte un snapshot pentru fiecare dintre ultimele 36 de ore, 30 de zile, 60 de luni și 5 ani. Snapshoturile mai vechi sunt șterse automat.'
			},
			{
				question: 'Ce aplicații se pot instala?',
				answer: 'App center oferă Nextcloud cu backendul de înaltă performanță și tabla comună, Euro Office, un server de e-mail, WireGuard, Pi-hole, Gitea și runnerul său, Plausible, qBittorrent și Dockhand. Traefik, Authelia și un terminal în browser se instalează la configurare.'
			}
		]
	},
	close: {
		title: 'Vedeți cum se configurează un nod.',
		text: 'Documentația, în limba engleză, acoperă configurarea pas cu pas, fiecare pagină de administrare și comanda virgo.',
		primary: { text: 'Citește documentația', href: `${site.docs}/` },
		secondary: { text: 'Codul sursă pe GitHub', href: site.github }
	}
};
