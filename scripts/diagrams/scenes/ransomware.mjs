import { scene, INK, GREEN, ZONE, LEAF } from '../iso.mjs';

const copy = {
	en: {
		office: 'Your office',
		laptop: ['The infected laptop', 'encrypts what it can reach'],
		node: ['Documents', 'encrypted at 16:40'],
		snapshots: ['Snapshots', 'read-only, out of its reach'],
		rollback: 'Roll back here'
	},
	ro: {
		office: 'Biroul dumneavoastră',
		laptop: ['Laptopul infectat', 'criptează tot ce atinge'],
		node: ['Documents', 'criptat la 16:40'],
		snapshots: ['Snapshoturile', 'doar pentru citire, de neatins'],
		rollback: 'Înapoi aici'
	}
};

const FLOOR = 14;
const FLY = 150;
const RED = '#C8372D';
const STACK = ['14:00', '15:00', '16:00'];

const cross = (color) => `<path d="M-7 -7L7 7M7 -7L-7 7" stroke="${color}" stroke-width="3.6" stroke-linecap="round"/>`;
const marker = `<defs><marker id="arrow-C8372D" viewBox="0 0 10 10" refX="7.5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="${RED}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>`;

const draw = (c) => {
	const s = scene({ unit: 76, ox: 820, oy: 250 });
	s.raw(marker, 'floor');

	s.slab(-1.2, 2.7, 4.8, 3.9, FLOOR, { layer: 'floor', palette: ZONE, rx: 12 });
	s.floorText(-0.85, 6.45, c.office, { z: FLOOR, size: 20 });

	s.path([[0.95, 5.5, FLOOR], [2.2, 5.5, FLOOR], [2.2, 4.3, FLOOR]], { color: RED });
	s.device('laptop', 0.2, 5.3, { scale: 1.2, z: FLOOR });
	s.badge(0.2, 5.3, RED, cross, { radius: 18, z: FLOOR + 110 });

	s.device('node', 2.3, 4.1, { scale: 1.6, z: FLOOR });

	const [x0, y0, w, d] = [2.3 - 0.684, 4.1 - 0.442, 1.368, 0.884];
	for (const [index, time] of STACK.entries()) {
		const z = FLY + (STACK.length - 1 - index) * 32;
		s.slab(x0, y0, w, d, 9, { z, palette: LEAF, rx: 4, depth: 20 + index * 0.01 });
		const [px, py] = s.P(x0 + w, y0, z + 4);
		s.raw(`<line x1="${px + 6}" y1="${py}" x2="${px + 56}" y2="${py}" stroke="#0F6E56" stroke-width="1.2"/><circle cx="${px + 6}" cy="${py}" r="2.6" fill="#0F6E56"/>`);
		s.text(px + 66, py - 22, [{ t: time, size: 21, fill: INK }], { anchor: 'start' });
		if (index === STACK.length - 1) {
			s.text(px + 136, py - 22, [{ t: c.rollback, size: 21, weight: 600, fill: GREEN }], { anchor: 'start' });
		}
	}
	const [tx, ty] = s.P(x0 + w, y0, FLY + 64 + 4);
	s.text(tx + 66, ty - 86, [{ t: c.snapshots[0], size: 26, weight: 700, fill: INK }, { t: c.snapshots[1], size: 20 }], { anchor: 'start' });

	s.path([[2.3, 4.1, FLY - 6], [2.3, 4.1, FLOOR + 50]], { color: GREEN, dash: '2 9', layer: 'things', depth: 10 });

	s.label(0.2, 5.3, -190, -175, [{ t: c.laptop[0], size: 26, weight: 700, fill: INK }, { t: c.laptop[1], fill: RED }], { z: FLOOR });
	s.label(2.3, 4.1, 120, 40, [{ t: c.node[0], size: 26, weight: 700, fill: INK }, { t: c.node[1], fill: RED }], { z: FLOOR, anchor: 'start' });

	return s.svg();
};

export default { name: 'ransomware', copy, draw };
