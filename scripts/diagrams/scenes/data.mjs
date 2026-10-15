import { scene, lock, INK, BLUE, PURPLE, ZONE, CLOUD, LEAF } from '../iso.mjs';

const copy = {
	en: {
		office: 'Your office',
		node: ['Node', 'on your own drives'],
		layers: ['Files', 'Email', 'Folders'],
		colleagues: ['Your colleagues', 'each with their own account'],
		outside: ['From outside', 'only after signing in'],
		cloud: ['No copy', "in anyone else's cloud"]
	},
	ro: {
		office: 'Biroul dumneavoastră',
		node: ['Nod', 'pe discurile dumneavoastră'],
		layers: ['Fișiere', 'E-mail', 'Foldere'],
		colleagues: ['Colegii', 'fiecare cu contul lui'],
		outside: ['Din afară', 'doar după autentificare'],
		cloud: ['Nicio copie', 'în cloudul altcuiva']
	}
};

const FLOOR = 14;
const FLY = 130;

const draw = (c) => {
	const s = scene({ unit: 80, ox: 640, oy: 330 });
	const { P } = s;

	s.slab(0, -1.4, 4.4, 4.8, FLOOR, { layer: 'floor', palette: ZONE, rx: 12 });
	s.floorText(2.05, 3.1, c.office, { z: FLOOR, size: 18 });

	s.shadow(-2.8, 0.2, 2.3, 2.3, 0.04);
	s.slab(-2.8, 0.2, 2.3, 2.3, 16, { z: FLY, palette: CLOUD, rx: 10, depth: -10, dash: '6 6' });

	s.path([[3.6, -3.6, 0], [3.6, -1.4, 0], [3.6, -1.4, FLOOR], [3.6, -0.7, FLOOR]], { color: BLUE });
	s.path([[3, 0.1, FLOOR], [1.85, 0.1, FLOOR]], { color: BLUE });
	s.path([[1.2, 1.85, FLOOR], [1.2, 0.65, FLOOR]], { color: BLUE });

	s.device('phone', 3.6, -4.3, { scale: 1.9 });
	s.device('router', 3.6, 0.1, { z: FLOOR });
	s.device('node', 1.2, 0.1, { scale: 2, z: FLOOR });
	s.device('laptop', 1.2, 2.45, { z: FLOOR, scale: 1.45 });

	s.badge(3.6, -2.5, BLUE, lock);

	s.path([[1.2, 0.1, FLOOR + 44], [1.2, 0.1, FLOOR + 132]], { color: '#0F6E56', width: 1.4, dash: '3 5', arrow: false, layer: 'things', depth: 1.25 });
	const [nx, ny] = P(1.85, -0.32, FLOOR + 128);
	s.text(nx + 66, ny - 86, [{ t: c.node[0], size: 26, weight: 700, fill: INK }, { t: c.node[1], size: 20 }], { anchor: 'start' });
	for (const [index, z] of [124, 92, 60].entries()) {
		s.slab(0.55, -0.32, 1.3, 0.84, 9, { z: FLOOR + z, palette: LEAF, rx: 4, depth: 1.3 + index * 0.01 });
		const [px, py] = P(1.85, -0.32, FLOOR + z + 4);
		s.raw(`<line x1="${px + 6}" y1="${py}" x2="${px + 56}" y2="${py}" stroke="#0F6E56" stroke-width="1.2"/><circle cx="${px + 6}" cy="${py}" r="2.6" fill="#0F6E56"/>`);
		s.text(px + 66, py - 22, [{ t: c.layers[index], size: 21, fill: INK }], { anchor: 'start' });
	}

	s.label(3.6, -4.3, 40, -110, [{ t: c.outside[0], size: 26, weight: 700, fill: INK }, { t: c.outside[1] }]);
	s.label(3.6, 0.1, 70, 10, [{ t: 'Router', size: 24, weight: 700, fill: INK }, { t: 'HTTPS 443', size: 20, fill: BLUE, mono: true }], { anchor: 'start', z: FLOOR });
	s.label(1.2, 2.45, -130, -40, [{ t: c.colleagues[0], size: 26, weight: 700, fill: INK }, { t: c.colleagues[1] }], { anchor: 'end', z: FLOOR });
	s.label(-1.65, 1.35, 0, -46, [{ t: c.cloud[0], size: 26, weight: 700, fill: PURPLE }, { t: c.cloud[1] }], { z: FLY + 16 });

	return s.svg();
};

export default { name: 'data-where', copy, draw };
