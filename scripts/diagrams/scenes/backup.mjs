import { scene, lock, INK, BLUE, ZONE, LEAF } from '../iso.mjs';

const copy = {
	en: {
		office: 'Your office',
		node: ['Node', 'time capsule'],
		disks: ['James MacBook Air', 'Olivia MacBook Pro', 'Studio iMac'],
		inside: ['Macs at the office', 'a backup every hour'],
		outside: ['Away from the office', 'over the VPN']
	},
	ro: {
		office: 'Biroul dumneavoastră',
		node: ['Nod', 'time capsule'],
		disks: ['James MacBook Air', 'Olivia MacBook Pro', 'Studio iMac'],
		inside: ['Mac-urile din birou', 'un backup pe oră'],
		outside: ['Departe de birou', 'prin VPN']
	}
};

const FLOOR = 14;

const draw = (c) => {
	const s = scene({ unit: 80, ox: 600, oy: 300 });
	const { P } = s;

	s.slab(-0.6, -1.4, 5, 5.7, FLOOR, { layer: 'floor', palette: ZONE, rx: 12 });
	s.floorText(0.9, 4.05, c.office, { z: FLOOR, size: 18 });

	s.path([[3.6, -3.6, 0], [3.6, -1.4, 0], [3.6, -1.4, FLOOR], [3.6, -0.7, FLOOR]], { color: BLUE });
	s.path([[3, 0.1, FLOOR], [1.85, 0.1, FLOOR]], { color: BLUE });
	s.path([[0.3, 2.4, FLOOR], [0.3, 1.2, FLOOR], [0.9, 1.2, FLOOR], [0.9, 0.65, FLOOR]], { color: BLUE });
	s.path([[2.8, 2.6, FLOOR], [2.8, 1.2, FLOOR], [1.5, 1.2, FLOOR], [1.5, 0.65, FLOOR]], { color: BLUE });

	s.device('laptop', 3.6, -4.3, { scale: 1.45 });
	s.device('router', 3.6, 0.1, { z: FLOOR });
	s.device('node', 1.2, 0.1, { scale: 2, z: FLOOR });
	s.device('laptop', 0.3, 3, { z: FLOOR, scale: 1.45 });
	s.device('laptop', 2.8, 3.2, { z: FLOOR, scale: 1.45 });

	s.badge(3.6, -2.5, BLUE, lock);

	s.path([[1.2, 0.1, FLOOR + 44], [1.2, 0.1, FLOOR + 132]], { color: '#0F6E56', width: 1.4, dash: '3 5', arrow: false, layer: 'things', depth: 1.25 });
	const [nx, ny] = P(1.85, -0.32, FLOOR + 128);
	s.text(nx + 66, ny - 86, [{ t: c.node[0], size: 26, weight: 700, fill: INK }, { t: c.node[1], size: 20 }], { anchor: 'start' });
	for (const [index, z] of [124, 92, 60].entries()) {
		s.slab(0.55, -0.32, 1.3, 0.84, 9, { z: FLOOR + z, palette: LEAF, rx: 4, depth: 1.3 + index * 0.01 });
		const [px, py] = P(1.85, -0.32, FLOOR + z + 4);
		s.raw(`<line x1="${px + 6}" y1="${py}" x2="${px + 56}" y2="${py}" stroke="#0F6E56" stroke-width="1.2"/><circle cx="${px + 6}" cy="${py}" r="2.6" fill="#0F6E56"/>`);
		s.text(px + 66, py - 22, [{ t: c.disks[index], size: 21, fill: INK }], { anchor: 'start' });
	}

	s.label(3.6, -4.3, 30, -200, [{ t: c.outside[0], size: 26, weight: 700, fill: INK }, { t: c.outside[1] }]);
	s.label(0.3, 3, -150, -70, [{ t: c.inside[0], size: 26, weight: 700, fill: INK }, { t: c.inside[1] }], { anchor: 'end', z: FLOOR });

	return s.svg();
};

export default { name: 'backup-paths', copy, draw };
