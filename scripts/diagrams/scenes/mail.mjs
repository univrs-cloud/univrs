import { scene, INK, BLUE, PURPLE, ZONE, CLOUD, LEAF } from '../iso.mjs';

const copy = {
	en: {
		others: ['Other mail servers', 'anywhere on the internet'],
		dns: 'DNS records',
		steps: ['looks up your domain', 'finds your public address', 'delivers the email', 'filters and keeps the mail', 'read on any device'],
		direct: ['direct, never', 'through a proxy'],
		router: 'port forwarding',
		node: 'Node',
		layers: ['Spam filter', 'Antivirus', 'Mailboxes'],
		clients: 'Mail clients',
		network: 'Your network'
	},
	ro: {
		others: ['Alte servere de e-mail', 'de oriunde din internet'],
		dns: 'Înregistrări DNS',
		steps: ['vă caută domeniul', 'vă află adresa publică', 'livrează e-mailul', 'filtrează și păstrează e-mailul', 'citit de oriunde'],
		direct: ['direct, niciodată', 'printr-un proxy'],
		router: 'redirecționare',
		node: 'Nod',
		layers: ['Filtru de spam', 'Antivirus', 'Căsuțe'],
		clients: 'Clienți de e-mail',
		network: 'Rețeaua dumneavoastră'
	}
};

const FLOOR = 14;
const FLY = 130;
const TAGS = ['MX', 'SPF', 'DKIM', 'DMARC', 'PTR'];
const TAG = { top: '#FFFFFF', left: '#FFFFFF', right: '#E9DFF2', stroke: PURPLE };
const ENVELOPE = { top: '#FFFFFF', left: '#C9CFF6', right: '#AEB7F0', stroke: BLUE };

const draw = (c) => {
	const U = 72;
	const s = scene({ unit: U, ox: 230, oy: 410 });
	const { P } = s;

	s.slab(3.9, -3.7, 2.4, 4.4, FLOOR, { layer: 'floor', palette: ZONE, rx: 12 });
	s.floorText(6.15, 0.52, c.network, { z: FLOOR, size: 17, axis: 'y' });

	s.shadow(-0.7, -4.5, 3.8, 1.8);
	s.path([[0, -0.4], [0, -3.2]], { color: PURPLE, arrow: false });
	s.path([[0, -3.2, 0], [0, -3.2, FLY - 8]], { color: PURPLE, dash: '2 9' });
	s.path([[2.2, -3, FLY - 8], [2.2, -3, 0]], { color: PURPLE, dash: '2 9', arrow: false });
	s.path([[2.2, -3, 0], [2.2, -0.744, 0], [3.706, -0.744, 0], [4.2, -0.55, FLOOR]], { color: PURPLE });
	s.slab(-0.7, -4.5, 3.8, 1.8, 16, { z: FLY, palette: CLOUD, rx: 10, depth: 40 });
	for (const [index, tag] of TAGS.entries()) {
		const x = -0.48 + index * 0.72;
		s.slab(x, -3.66, 0.62, 0.12, 30, { z: FLY + 16, palette: TAG, rx: 3, depth: 41 + index });
		s.faceText(x + 0.31, -3.54, FLY + 16 + 10, tag, { size: 13, depth: 41.5 + index });
	}

	s.path([[0.7, 0, 0], [3.706, 0, 0], [4.22, 0.194, FLOOR]], { color: BLUE, glow: true });
	s.path([[5, -0.6, FLOOR], [5, -2.05, FLOOR]], { color: BLUE });
	s.path([[5.75, -2.6, FLOOR], [6.3, -2.6, FLOOR], [6.3, -2.6, 0], [7.6, -2.6, 0]], { color: BLUE });
	s.path([[7, -2.6], [7, -0.8]], { color: BLUE });
	s.slab(1.5, -0.27, 0.8, 0.54, 5, { z: 12, palette: ENVELOPE, rx: 3, depth: 1.8, sw: 1.3, inner: `<path d="M3 3L${0.4 * U} ${0.3 * U}L${0.8 * U - 3} 3" fill="none" stroke="${BLUE}" stroke-width="1.6" stroke-linejoin="round"/>` });

	s.device('server', 0, 0, { scale: 2 });
	s.device('router', 5, 0, { z: FLOOR });
	s.device('node', 5, -2.6, { scale: 2, z: FLOOR });
	s.device('laptop', 8.6, -2.6, { scale: 1.45 });
	s.device('phone', 7, -0.15, { scale: 1.9 });

	s.path([[5, -2.6, FLOOR + 44], [5, -2.6, FLOOR + 132]], { color: '#0F6E56', width: 1.4, dash: '3 5', arrow: false, layer: 'things', depth: 2.45 });
	const [nx, ny] = P(5.65, -3.02, FLOOR + 128);
	s.text(nx + 66, ny - 62, [{ t: c.node, size: 24, weight: 700, fill: INK }], { anchor: 'start' });
	for (const [index, z] of [124, 92, 60].entries()) {
		s.slab(4.35, -3.02, 1.3, 0.84, 9, { z: FLOOR + z, palette: LEAF, rx: 4, depth: 2.5 + index * 0.01 });
		const [px, py] = P(5.65, -3.02, FLOOR + z + 4);
		s.raw(`<line x1="${px + 6}" y1="${py}" x2="${px + 56}" y2="${py}" stroke="#0F6E56" stroke-width="1.2"/><circle cx="${px + 6}" cy="${py}" r="2.6" fill="#0F6E56"/>`);
		s.text(px + 66, py - 22, [{ t: c.layers[index], size: 21, fill: INK }], { anchor: 'start' });
	}

	const pin = (x, y, z, n, color) => {
		const [px, py] = P(x, y, z);
		s.step(px, py, n, color);
	};

	pin(0, -2, 0, 1, PURPLE);
	pin(2.2, -1.7, 0, 2, PURPLE);
	pin(3.05, 0, 0, 3, BLUE);
	pin(5, -1.35, FLOOR, 4, BLUE);
	pin(6.65, -2.6, 0, 5, BLUE);

	for (const [index, t] of c.steps.entries()) {
		s.step(1052, 96 + index * 42, index + 1, index < 2 ? PURPLE : BLUE);
		s.text(1080, 74 + index * 42, [{ t }], { anchor: 'start' });
	}

	s.label(0.3, 0.9, -40, 14, [{ t: c.others[0], size: 24, weight: 700, fill: INK }, { t: c.others[1], size: 20 }]);
	s.label(2.6, 0, -14, 40, [{ t: 'TCP 25', size: 20, fill: BLUE, mono: true }, { t: c.direct[0], size: 20 }, { t: c.direct[1], size: 20, gap: 26 }], { anchor: 'end' });
	s.label(-0.7, -4.5, -40, -40, [{ t: c.dns, size: 26, weight: 700, fill: INK }], { z: FLY, anchor: 'end' });
	s.label(5, 0, -22, 76, [{ t: 'Router', size: 23, weight: 700, fill: INK }, { t: c.router, size: 19 }], { anchor: 'end', z: FLOOR });
	s.label(9.5, -2.6, 30, -10, [{ t: c.clients, size: 24, weight: 700, fill: INK }, { t: 'IMAP 993', size: 20, fill: BLUE, mono: true }], { anchor: 'start' });

	return s.svg();
};

export default { name: 'mail-paths', copy, draw };
