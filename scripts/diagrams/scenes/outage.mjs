import { scene, INK, BLUE, PURPLE, GREEN, ZONE, CLOUD } from '../iso.mjs';

const copy = {
	en: {
		office: 'Your office',
		cloud: "Microsoft's cloud",
		node: ['Your node', 'keeps working'],
		firms: ['Every firm on it', 'no email, no files'],
		down: ['Microsoft 365', 'down for everyone at once']
	},
	ro: {
		office: 'Biroul dumneavoastră',
		cloud: 'Cloudul Microsoft',
		node: ['Nodul dumneavoastră', 'funcționează mai departe'],
		firms: ['Toate firmele din el', 'fără e-mail, fără fișiere'],
		down: ['Microsoft 365', 'oprit pentru toți deodată']
	}
};

const FLOOR = 14;
const FLY = 180;
const RED = '#C8372D';
const FIRMS = [3.2, 4.65, 6.1];
const LAPTOP = 1.15;

const cross = (color) => `<path d="M-7 -7L7 7M7 -7L-7 7" stroke="${color}" stroke-width="3.6" stroke-linecap="round"/>`;
const check = (color) => `<path d="M-8 0.5l5.5 5.5 10.5-11" fill="none" stroke="${color}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>`;

const draw = (c) => {
	const s = scene({ unit: 76, ox: 700, oy: 205 });

	s.slab(-1.6, 3.2, 3.6, 3.6, FLOOR, { layer: 'floor', palette: ZONE, rx: 12 });
	s.floorText(-1.25, 6.6, c.office, { z: FLOOR, size: 20 });
	s.path([[-0.5, 5.2, FLOOR], [-0.5, 4.0, FLOOR], [-0.1, 4.0, FLOOR]], { color: BLUE });
	s.path([[1.35, 5.1, FLOOR], [1.35, 4.0, FLOOR], [1.0, 4.0, FLOOR]], { color: BLUE });
	s.device('node', 0.5, 3.95, { scale: 1.5, z: FLOOR });
	s.device('laptop', -0.5, 5.75, { scale: LAPTOP, z: FLOOR });
	s.device('phone', 1.35, 5.55, { scale: 1.3, z: FLOOR });
	s.badge(0.5, 3.95, GREEN, check, { z: FLOOR + 75 });

	s.shadow(3.5, -0.9, 3.3, 3.5);
	for (const [index, x] of FIRMS.entries()) {
		s.path([[x + 0.5, 4.3 - index * 0.45], [x + 0.5, 2.2]], { color: PURPLE, arrow: false });
		s.path([[x + 0.5, 2.2, 0], [x + 0.5, 2.2, FLY - 8]], { color: PURPLE, dash: '2 9', arrow: false });
	}
	s.slab(3.5, -0.9, 3.3, 3.5, 16, { z: FLY, palette: CLOUD, rx: 12, depth: 30 });
	s.floorText(6.52, 2.3, c.cloud, { z: FLY + 16, size: 20, axis: 'y', fill: PURPLE, layer: 'things', depth: 30.5 });
	for (const [index, y] of [-0.2, 0.75, 1.7].entries()) {
		s.device('server', 4.9, y, { scale: 1.5, z: FLY + 16, depth: 31 + index });
	}
	s.badge(6.6, -0.6, RED, cross, { radius: 26, z: FLY + 60 });

	for (const [index, x] of FIRMS.entries()) {
		s.device('laptop', x + 0.5, 4.85 - index * 0.45, { scale: LAPTOP, depth: 9 + index * 0.1 });
		s.badge(x + 0.5, 2.2, RED, cross, { radius: 15, z: 70 });
	}

	s.label(0.5, 3.95, -230, -175, [{ t: c.node[0], size: 28, weight: 700, fill: INK }, { t: c.node[1] }], { z: FLOOR });
	s.label(7.1, 4.8, 190, -10, [{ t: c.firms[0], size: 26, weight: 700, fill: INK }, { t: c.firms[1] }]);
	s.label(4.9, 0.75, 260, -170, [{ t: c.down[0], size: 28, weight: 700, fill: INK }, { t: c.down[1], fill: RED }], { z: FLY });

	return s.svg();
};

export default { name: 'outage', copy, draw };
