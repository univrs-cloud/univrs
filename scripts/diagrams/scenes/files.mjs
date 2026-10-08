import { scene, INK, BLUE, PURPLE, ZONE, CLOUD } from '../iso.mjs';

const copy = {
	en: {
		office: 'Your office',
		cloud: "Microsoft's cloud",
		next: 'on your node',
		computer: ['Your devices', 'at the office or away'],
		mine: ['on your own drives', 'no fee per user'],
		theirs: ["on Microsoft's servers", 'a licence per user']
	},
	ro: {
		office: 'Biroul dumneavoastră',
		cloud: 'Cloudul Microsoft',
		next: 'pe nodul dumneavoastră',
		computer: ['Dispozitivele', 'la birou sau în deplasare'],
		mine: ['pe discurile dumneavoastră', 'fără taxă per utilizator'],
		theirs: ['pe serverele Microsoft', 'licență per utilizator']
	}
};

const FLOOR = 14;
const FLY = 180;
const DARK = '#3F3F52';

const draw = (c) => {
	const s = scene({ unit: 76, ox: 660, oy: 172 });

	s.slab(-0.9, 3.4, 3.5, 3.3, FLOOR, { layer: 'floor', palette: ZONE, rx: 12 });
	s.floorText(-0.55, 6.4, c.office, { z: FLOOR, size: 20, axis: 'y' });

	s.shadow(3.5, -0.9, 3.3, 3.5);
	s.path([[5, 4.3], [5, 1.9]], { color: PURPLE, arrow: false });
	s.path([[5, 1.9, 0], [5, 1.9, FLY - 8]], { color: PURPLE, dash: '2 9' });
	s.slab(3.5, -0.9, 3.3, 3.5, 16, { z: FLY, palette: CLOUD, rx: 12, depth: 30 });
	s.floorText(6.52, 2.3, c.cloud, { z: FLY + 16, size: 20, axis: 'y', fill: PURPLE, layer: 'things', depth: 30.5 });
	for (const [index, y] of [-0.2, 0.75, 1.7].entries()) {
		s.device('server', 4.9, y, { scale: 1.9, z: FLY + 16, depth: 31 + index });
	}

	s.path([[4.1, 5, 0], [2.6, 5, 0], [2.6, 5, FLOOR], [1.75, 5, FLOOR]], { color: BLUE });
	s.path([[6.24, 6.1, 0], [2.6, 6.1, 0], [2.6, 6.1, FLOOR], [0.9, 6.1, FLOOR], [0.9, 5.45, FLOOR]], { color: BLUE });
	s.path([[6.5, 5.87], [6.5, 2.2]], { color: PURPLE, arrow: false });
	s.path([[6.5, 2.2, 0], [6.5, 2.2, FLY - 8]], { color: PURPLE, dash: '2 9' });
	s.device('node', 0.9, 5, { scale: 2, z: FLOOR });
	for (const [index, x] of [0.25, 0.85, 1.45].entries()) {
		for (const level of [0, 1]) {
			s.slab(x, 3.75, 0.44, 0.62, 9, { z: FLOOR + level * 11, rx: 2, depth: 4 + index * 0.1 + level * 0.01 });
		}
	}
	s.device('laptop', 5.05, 5.05);
	s.device('phone', 6.5, 6.4, { scale: 1.9 });

	s.label(0.9, 5, -215, -200, [{ t: 'Nextcloud', size: 28, weight: 700, fill: INK }, { t: c.next }]);
	s.label(6.95, 6.95, 0, 14, [{ t: c.computer[0], size: 26, weight: 700, fill: INK }, { t: c.computer[1] }]);
	s.label(4.9, 0.75, 250, -165, [{ t: 'OneDrive', size: 28, weight: 700, fill: INK }, { t: 'Microsoft 365' }], { z: FLY });
	s.label(0.85, 6.7, -60, 44, [{ t: c.mine[0], fill: DARK, size: 23 }, { t: c.mine[1], fill: DARK, size: 23, gap: 40 }]);
	s.label(6.8, 0.85, 105, 60, [{ t: c.theirs[0], fill: DARK, size: 23 }, { t: c.theirs[1], fill: DARK, size: 23, gap: 40 }], { z: FLY });

	return s.svg();
};

export default { name: 'files-where', copy, draw };
