import { site } from '../../site';
import type { HomeCopy } from './types';

export const ro: HomeCopy = {
	meta: {
		title: 'virgoOS: cloud privat pe echipamentul dumneavoastră',
		description: 'virgoOS este un sistem de operare open source pentru cloud privat. Fișierele, e-mailul, documentele și apelurile sunt găzduite pe serverul dumneavoastră, cu istoric păstrat automat.'
	},
	hero: {
		label: 'Sistem de operare pentru cloud privat',
		thin: 'Datele dumneavoastră,',
		heavy: 'pe propriul echipament.',
		lede: 'virgoOS este un sistem de operare open source care transformă un server într-un cloud privat. Găzduiește fișierele, e-mailul, documentele și apelurile pe un server care vă aparține, păstrează automat istoricul fiecărei modificări și se administrează din browser.',
		primary: { text: 'Descarcă', href: site.download },
		secondary: { text: 'Citește documentația', href: `${site.docs}/` },
		imageAlt: 'Două noduri virgoOS care se replică în aceeași locație, conectate prin router la internet, la un laptop, la o tabletă și la un calculator de birou.',
		facts: [
			{ term: 'Bazat pe', value: 'Debian' },
			{ term: 'Stocare', value: 'ZFS' },
			{ term: 'Arhitecturi', value: 'amd64, arm64' },
			{ term: 'Licență', value: 'GPL-2.0' },
			{ term: 'Administrare', value: 'Browser și CLI' }
		]
	},
	features: {
		label: 'Aplicații',
		title: 'Tot ce folosiți zilnic, pe un singur server.',
		lede: 'Aplicațiile se instalează din App center, cu câteva setări. Fiecare rulează în containere, își păstrează datele pe pool-ul de stocare și este accesibilă prin HTTPS, la propria adresă, sub domeniul nodului.',
		items: [
			{ icon: 'folder', logos: ['nextcloud'], title: 'Fișiere', text: 'Nextcloud vă păstrează fișierele și le sincronizează pe orice dispozitiv, cu foldere și drepturi de acces pentru fiecare utilizator.' },
			{ icon: 'document', logos: ['euro-office'], title: 'Documente', text: 'Euro Office deschide documentele în browser, astfel încât mai multe persoane pot lucra în același timp la același fișier.' },
			{ icon: 'mail', logos: ['docker-mailserver'], title: 'E-mail', text: 'Un server de e-mail complet pe domeniul dumneavoastră: SMTP și IMAP, cu filtrare antispam și antivirus.' },
			{ icon: 'video', logos: ['nextcloud-hpb', 'nextcloud-whiteboard'], title: 'Apeluri și tablă virtuală', text: 'Apeluri video cu backendul de înaltă performanță al Nextcloud și o tablă virtuală pe care pot desena mai multe persoane deodată.' },
			{ icon: 'shield', logos: ['wireguard'], title: 'VPN', text: 'Din afara rețelei, WireGuard vă oferă o conexiune criptată la nod și la aplicațiile lui.' },
			{ icon: 'ban', logos: ['pi-hole'], title: 'Fără reclame', text: 'Pi-hole blochează reclamele și trackerele la nivel de DNS, pentru toate dispozitivele din rețea.' },
			{ icon: 'share', title: 'Foldere partajate', text: 'Foldere pentru calculatoarele din rețeaua locală, accesibile utilizatorilor pe care îi alegeți sau oricui, ca invitat.' },
			{ icon: 'clock', title: 'Backup pentru Mac', text: 'Time machines sunt destinații de backup pentru aplicația Time Machine de pe Mac, fiecare cu propria capacitate.' },
			{ icon: 'code', logos: ['terminal', 'gitea', 'plausible'], title: 'Unelte pentru dezvoltatori', text: 'Gitea cu runnerul său de CI, analiză web cu Plausible, un panou pentru containere și un terminal în browser.' }
		],
		note: 'Se instalează doar ce alegeți. Trei aplicații de bază sunt mereu prezente: Traefik direcționează cererile către aplicații și se ocupă de certificatele lor SSL, Authelia gestionează conturile nodului, iar Terminal deschide un shell din browser.'
	},
	safety: {
		label: 'Siguranța datelor',
		title: 'Mai multe copii și un istoric la care vă puteți întoarce.',
		lede: 'Tot ce salvează o aplicație se află pe un pool ZFS redundant, care își verifică singur datele, păstrează ani de istoric ce nu poate fi modificat și în care puteți căuta fișiere care nu mai există.',
		items: [
			{
				art: 'redundancy',
				label: 'Redundanță',
				title: 'Un disc poate ceda fără să se piardă date',
				text: 'Pool-ul este construit din cel puțin două discuri de date. Configurarea oferă variantele pe care discurile le permit, de la mirror la RAID-Z3, care rezistă la defectarea a unu până la trei discuri.',
				href: `${site.docs}/setup/storage/`
			},
			{
				art: 'history',
				label: 'Istoric',
				title: 'Reveniți la starea de acum o oră',
				text: 'Nodul păstrează câte un snapshot pentru fiecare dintre ultimele 36 de ore, 30 de zile, 60 de luni și 5 ani și le șterge singur pe cele mai vechi. Un snapshot ocupă spațiu doar pentru ce s-a schimbat de când a fost făcut.',
				href: `${site.docs}/management/system/storage/`
			},
			{
				art: 'ransomware',
				label: 'Ransomware',
				title: 'Un istoric care nu poate fi rescris',
				text: 'Un snapshot este o copie doar pentru citire a datelor unei aplicații, așa cum erau la un moment dat. Fișierele criptate de un calculator infectat nu modifică snapshoturile făcute înainte de atac.',
				href: `${site.docs}/management/resources/apps/snapshots/`
			},
			{
				art: 'integrity',
				label: 'Integritate',
				title: 'Fiecare bloc este verificat',
				text: 'Pool-ul păstrează o sumă de control pentru tot ce stochează. O verificare lunară citește toate datele și repară, din redundanța pool-ului, tot ce nu corespunde.',
				href: `${site.docs}/management/system/storage/`
			},
			{
				art: 'search',
				label: 'Căutare',
				title: 'Găsiți un fișier care a fost șters',
				text: 'Indexerul cataloghează din oră în oră fișierele din snapshoturi. Puteți căuta în catalog din pagina de snapshoturi a unei aplicații sau cu comenzile virgo indexer, ca să găsiți versiuni mai vechi sau șterse ale unui fișier.',
				href: `${site.docs}/cli/indexer/`
			},
			{
				art: 'power',
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
		lede: 'virgoOS este gândit ca un echipament gata de folosit: configurarea vă pune câteva întrebări, iar apoi nodul se administrează din interfața lui web, din contul de fleet sau cu comanda virgo.',
		items: [
			{
				shot: 'storage',
				shotAlt: 'Pasul Storage din configurare, cu un pool mirror din două discuri selectat.',
				title: 'Configurare în nouă pași',
				text: 'Configurarea rulează la prima pornire a nodului. Stabilește rețeaua, creează pool-ul de stocare, înregistrează nodul în fleet, instalează aplicațiile de bază și înlocuiește parola implicită.',
				href: `${site.docs}/setup/`
			},
			{
				shot: 'host',
				shotAlt: 'Pasul Network din configurare, cu hostname-ul, clusterul și domeniul nodului.',
				title: 'Un nume și un certificat',
				text: 'Un nod răspunde la hostname.cluster.domeniu. Cu univrs.cloud, înregistrarea DNS și un certificat wildcard Let\'s Encrypt sunt create automat pentru dumneavoastră. Puteți folosi și un domeniu propriu.',
				href: `${site.docs}/setup/host/`
			},
			{
				shot: 'fleet-registered',
				shotAlt: 'Pasul Fleet din configurare, în care nodul apare înregistrat și conectat.',
				title: 'Administrat de oriunde',
				text: 'Înregistrarea leagă nodul de contul dumneavoastră de fleet. Nodul se conectează singur la fleet, deci administrarea funcționează și în spatele CGNAT, fără adresă IP publică și fără porturi redirecționate. E-mailul, partajarea fișierelor din Nextcloud, VPN-ul și deschiderea aplicațiilor din afara rețelei locale au nevoie de amândouă.',
				href: `${site.docs}/setup/fleet/`
			},
			{
				shot: 'updates',
				shotAlt: 'Pagina Updates, cu patru actualizări disponibile și versiunile lor.',
				title: 'Actualizări dintr-o singură pagină',
				text: 'Nodul caută actualizări în fiecare zi. Pagina Updates afișează fiecare actualizare, cu versiunea instalată și cea nouă, și le instalează pe toate, arătând fiecare pas.',
				href: `${site.docs}/management/system/updates/`
			},
			{
				shot: 'terminal',
				shotAlt: 'Rezultatul comenzii virgo --help într-un terminal.',
				title: 'Și o linie de comandă',
				text: 'Fiecare nod vine cu comanda virgo, pentru setările de rețea, aplicațiile care pot fi instalate și pentru indexarea și căutarea fișierelor din snapshoturi.',
				href: `${site.docs}/cli/`
			}
		]
	},
	faq: {
		label: 'Întrebări',
		title: 'Ce întreabă oamenii înainte de instalare.',
		items: [
			{
				question: 'Ce este virgoOS?',
				answer: 'virgoOS este un sistem de operare open source, bazat pe Debian, care transformă un server într-un cloud privat. Păstrează datele pe un pool ZFS redundant, rulează în containere aplicații precum Nextcloud, un server de e-mail și WireGuard și se administrează din browser.'
			},
			{
				question: 'De unde pot descărca virgoOS?',
				answer: `Imaginile de instalare sunt publicate, la fiecare versiune, pe [pagina cu versiunile virgo](${site.download}): un ISO pentru amd64 și o imagine pentru arm64. După prima pornire, continuați cu [ghidul de configurare](${site.docs}/setup/).`
			},
			{
				question: 'De ce hardware are nevoie un nod?',
				answer: `De cel puțin două discuri de date de aceeași capacitate, cu o diferență de cel mult 10% între ele, pe lângă discul de pe care rulează sistemul. De cel puțin 8 GB de RAM, ideal 16 GB sau mai mult, și de o conexiune de rețea prin cablu. Pachetele sunt publicate pentru amd64 și arm64. În documentație găsiți [ce trebuie pregătit înainte de configurare](${site.docs}/setup/).`
			},
			{
				question: 'Este virgoOS open source?',
				answer: `Da. Componentele lui sunt publicate sub licența [GNU General Public License, versiunea 2](${site.license}), în depozite publice la [github.com/univrs-cloud](${site.github}).`
			},
			{
				question: 'Are nevoie nodul de o adresă IP publică?',
				answer: `Pentru administrare, nu. Un nod înregistrat într-un [cont de fleet](${site.fleet}) se conectează singur la fleet, deci poate fi administrat de oriunde, chiar și în spatele CGNAT. E-mailul, partajarea fișierelor din Nextcloud, VPN-ul și accesul la aplicații din afara rețelei locale au însă nevoie de o adresă IP publică și de [câteva porturi redirecționate](${site.docs}/setup/ports/) în router.`
			},
			{
				question: 'Pot folosi propriul domeniu?',
				answer: `Da. Cu un domeniu propriu, creați dumneavoastră înregistrările DNS, iar înregistrarea în fleet este opțională. Cu univrs.cloud, înregistrarea DNS și certificatul wildcard sunt create prin contul dumneavoastră de fleet. Documentația descrie [alegerea numelui nodului](${site.docs}/setup/host/).`
			},
			{
				question: 'De cât timp în urmă pot recupera un fișier?',
				answer: `Nodul păstrează câte un snapshot pentru fiecare dintre ultimele 36 de ore, 30 de zile, 60 de luni și 5 ani. Snapshoturile mai vechi sunt șterse automat. Documentația arată [snapshoturile unei aplicații și căutarea în ele](${site.docs}/management/resources/apps/snapshots/).`
			},
			{
				question: 'Ce aplicații se pot instala?',
				answer: `[App center](${site.docs}/management/resources/apps/) oferă Nextcloud cu backendul de înaltă performanță și tabla virtuală, Euro Office, un server de e-mail, WireGuard, Pi-hole, Gitea și runnerul său, Plausible, qBittorrent și Dockhand. Traefik, Authelia și un terminal în browser se instalează [la configurare](${site.docs}/setup/apps/).`
			}
		]
	},
	close: {
		title: 'Vedeți cum se configurează un nod.',
		text: 'Documentația, în limba engleză, acoperă configurarea pas cu pas, fiecare pagină de administrare și comanda virgo.',
		primary: { text: 'Citește documentația', href: `${site.docs}/` },
		secondary: { text: 'Descarcă', href: site.download }
	}
};
