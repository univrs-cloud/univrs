import { site } from '../../site';
import type { HomeCopy } from './types';

export const en: HomeCopy = {
	meta: {
		title: 'virgoOS: a private cloud on hardware you own',
		description: 'virgoOS is an open-source operating system for a private cloud. Files, email, documents and calls run on a server you own, with automatic snapshot history.'
	},
	hero: {
		label: 'Private cloud operating system',
		thin: 'Your data,',
		heavy: 'on hardware you own.',
		lede: 'virgoOS is an open-source operating system that turns a server into a private cloud. It runs files, email, documents and calls on a server you own, keeps an automatic history of every change, and is managed from a browser.',
		primary: { text: 'Download', href: site.download },
		secondary: { text: 'Read the docs', href: `${site.docs}/` },
		imageAlt: 'Two virgoOS nodes replicating on site, connected through the router to the internet, a laptop, a tablet and a desktop.',
		facts: [
			{ term: 'Base', value: 'Debian' },
			{ term: 'Storage', value: 'ZFS' },
			{ term: 'Architectures', value: 'amd64, arm64' },
			{ term: 'Licence', value: 'GPL-2.0' },
			{ term: 'Managed from', value: 'Browser and CLI' }
		]
	},
	features: {
		label: 'Apps',
		title: 'What you use every day, on one server.',
		lede: 'Apps are installed from the App center with a few settings. Each one runs in containers, keeps its data on the storage pool and is reached over HTTPS at its own name under the node\'s domain.',
		items: [
			{ icon: 'folder', title: 'Files', text: 'Nextcloud stores your files and shares them with every device, with folders and access rights per user.' },
			{ icon: 'document', title: 'Documents', text: 'Euro Office opens documents in the browser, so several people can edit the same file at the same time.' },
			{ icon: 'mail', title: 'Email', text: 'A full mail server on your own domain: SMTP and IMAP, with spam and virus filtering.' },
			{ icon: 'video', title: 'Calls and whiteboard', text: 'Video calls with the Nextcloud high-performance backend, and a whiteboard several people draw on at once.' },
			{ icon: 'shield', title: 'VPN', text: 'WireGuard gives you an encrypted connection to the node and its apps from outside your network.' },
			{ icon: 'ban', title: 'Ad blocking', text: 'Pi-hole blocks ads and trackers at DNS level for every device on the network.' },
			{ icon: 'share', title: 'Shared folders', text: 'Folders for the computers on the local network, open to the users you choose or to everyone as a guest.' },
			{ icon: 'clock', title: 'Mac backups', text: 'Time machines are backup destinations for the Time Machine app on a Mac, each with its own capacity.' },
			{ icon: 'code', title: 'Developer tools', text: 'Gitea with its CI runner, Plausible web analytics, a container dashboard and a terminal in the browser.' }
		],
		note: 'Nothing is installed unless you choose it. Three core apps are always present: Traefik routes requests to the apps and handles their SSL certificates, Authelia owns the accounts, and Terminal opens a shell from the browser.'
	},
	safety: {
		label: 'Data safety',
		title: 'Several copies, and a history to go back to.',
		lede: 'Everything an app stores lives on a redundant ZFS pool that checks its own data, keeps years of read-only history and can be searched for files that no longer exist.',
		items: [
			{
				label: 'Redundancy',
				title: 'A drive can fail without losing data',
				text: 'The pool is built from at least two data drives. Setup offers the layouts the drives support, from a mirror to RAID-Z3, surviving one to three drive failures.',
				href: `${site.docs}/setup/storage/`
			},
			{
				label: 'History',
				title: 'Go back by the hour',
				text: 'The node keeps a snapshot for each of the last 36 hours, 30 days, 60 months and 5 years, and removes older ones by itself. A snapshot only takes space for what changed since it was taken.',
				href: `${site.docs}/management/system/storage/`
			},
			{
				label: 'Ransomware',
				title: 'History that cannot be rewritten',
				text: 'A snapshot is a read-only copy of an app\'s data as it was at one moment. Files encrypted from an infected computer do not change the snapshots taken before the attack.',
				href: `${site.docs}/management/resources/apps/snapshots/`
			},
			{
				label: 'Integrity',
				title: 'Every block is checked',
				text: 'The pool keeps a checksum of everything it stores. A monthly scrub reads all of it back and repairs anything that does not match from the pool\'s redundancy.',
				href: `${site.docs}/management/system/storage/`
			},
			{
				label: 'Search',
				title: 'Find a file that was deleted',
				text: 'The indexer catalogues the files in the snapshots every hour. Search it from an app\'s snapshots or with the virgo indexer commands to find earlier and deleted versions of a file.',
				href: `${site.docs}/cli/indexer/`
			},
			{
				label: 'Power',
				title: 'A power cut does not corrupt it',
				text: 'The node monitors its UPS, shows whether it runs on the grid or on battery, and powers off by itself, in order, when an outage lasts too long.',
				href: `${site.docs}/management/dashboard/`
			}
		]
	},
	platform: {
		label: 'Platform',
		title: 'Run from a browser, not from a terminal.',
		lede: 'virgoOS is an appliance system: setup asks a few questions, and from then on the node is run from its web interface, from your fleet account or with the virgo command.',
		items: [
			{
				title: 'Setup in nine steps',
				text: 'Setup runs the first time a node starts. It sets the network, creates the storage pool, registers the node with your fleet, installs the core apps and replaces the factory password.',
				href: `${site.docs}/setup/`
			},
			{
				title: 'A name and a certificate',
				text: 'A node answers at hostname.cluster.domain. With univrs.cloud, the DNS record and a wildcard Let\'s Encrypt certificate are created for you. A domain you own works too.',
				href: `${site.docs}/setup/host/`
			},
			{
				title: 'Managed from anywhere',
				text: 'Registering a node connects it to your fleet account. The node connects out to the fleet itself, so managing it works behind CGNAT, without a public IP address or forwarded ports. Email, sharing files from Nextcloud, the VPN and opening apps from outside your local network do need both.',
				href: `${site.docs}/setup/fleet/`
			},
			{
				title: 'One sign-in',
				text: 'Authelia owns the accounts that the node and its apps sign in with. After three failed attempts in ten minutes, signing in from that address is blocked for twelve hours.',
				href: `${site.docs}/management/authentication/`
			},
			{
				title: 'Updates from one page',
				text: 'The node checks for updates every day. The Updates page lists each one with its current and new version, and installs them all while showing every step.',
				href: `${site.docs}/management/system/updates/`
			},
			{
				title: 'A command line too',
				text: 'Every node ships with the virgo command, for network settings, installable apps, and indexing and searching the files in snapshots.',
				href: `${site.docs}/cli/`
			}
		]
	},
	faq: {
		label: 'Questions',
		title: 'What people ask before they install it.',
		items: [
			{
				question: 'What is virgoOS?',
				answer: 'virgoOS is an open-source, Debian-based operating system that turns a server into a private cloud. It stores data on a redundant ZFS pool, runs apps such as Nextcloud, a mail server and WireGuard in containers, and is managed from a browser.'
			},
			{
				question: 'Where can I download virgoOS?',
				answer: `The installer images are published with each release on the [virgo releases page](${site.download}): an ISO for amd64 and an image for arm64. The [setup guide](${site.docs}/setup/) takes over from the first start.`
			},
			{
				question: 'What hardware does a node need?',
				answer: `At least two data drives of the same size, within 10% of each other, in addition to the drive the system runs from. At least 8 GB of RAM, with 16 GB or more being ideal, and a wired network connection. Packages are published for amd64 and arm64. The docs list [what to have ready before setup](${site.docs}/setup/).`
			},
			{
				question: 'Is virgoOS open source?',
				answer: `Yes. Its components are released under the [GNU General Public License, version 2](${site.license}), in public repositories at [github.com/univrs-cloud](${site.github}).`
			},
			{
				question: 'Does the node need a public IP address?',
				answer: `Not to manage it. A node registered with a [fleet account](${site.fleet}) connects out to the fleet, so it can be managed from anywhere, even behind CGNAT. Email, sharing files from Nextcloud, the VPN and reaching the apps from outside your local network do need a public IP address and [a few ports forwarded](${site.docs}/setup/ports/) on your router.`
			},
			{
				question: 'Can I use my own domain?',
				answer: `Yes. With your own domain you create the DNS records yourself, and registering with a fleet is optional. With univrs.cloud, the DNS record and the wildcard certificate are created through your fleet account. The docs cover [choosing the node's name](${site.docs}/setup/host/).`
			},
			{
				question: 'How far back can I recover a file?',
				answer: `The node keeps a snapshot for each of the last 36 hours, 30 days, 60 months and 5 years. Older snapshots are removed automatically. The docs show [an app's snapshots and how to search them](${site.docs}/management/resources/apps/snapshots/).`
			},
			{
				question: 'Which apps can be installed?',
				answer: `The [App center](${site.docs}/management/resources/apps/) offers Nextcloud with its high-performance backend and whiteboard, Euro Office, a mail server, WireGuard, Pi-hole, Gitea and its runner, Plausible, qBittorrent and Dockhand. Traefik, Authelia and a browser terminal are installed [during setup](${site.docs}/setup/apps/).`
			}
		]
	},
	close: {
		title: 'See how a node is set up.',
		text: 'The documentation covers setup step by step, every management page and the virgo command.',
		primary: { text: 'Read the docs', href: `${site.docs}/` },
		secondary: { text: 'Download', href: site.download }
	}
};
