import { scene, lock, INK, BLUE, PURPLE, ZONE, GLASS, CLOUD } from '../iso.mjs';

const copy = {
	en: {
		device: ['Phone or laptop', 'outside your network'],
		vpn: ['WireGuard VPN', 'as on your local network'],
		fleet: 'manage the node',
		anywhere: 'from anywhere',
		out: 'the node connects out',
		network: 'Your network',
		node: ['Node', 'Folders', 'Time machines', 'Apps']
	},
	ro: {
		device: ['Telefon sau laptop', 'în afara rețelei'],
		vpn: ['VPN WireGuard', 'ca în rețeaua locală'],
		fleet: 'administrarea nodului',
		anywhere: 'de oriunde',
		out: 'nodul se conectează singur',
		network: 'Rețeaua dumneavoastră',
		node: ['Nod', 'Foldere', 'Time machines', 'Aplicații']
	}
};

const FLOOR = 14;
const FLY = 175;

const draw = (c) => {
	const s = scene({ unit: 72, ox: 620, oy: 455 });

	s.slab(-1, -4.5, 5.4, 2.9, FLOOR, { layer: 'floor', palette: ZONE, rx: 12 });
	s.floorText(4.22, -1.78, c.network, { z: FLOOR, size: 17, axis: 'y' });

	s.shadow(-3.35, -2.35, 1.9, 1.9);
	s.path([[-1, 2.8], [-2.2, 2.8], [-2.2, -0.9]], { color: PURPLE, arrow: false });
	s.path([[-2.2, -0.9, 0], [-2.2, -0.9, FLY - 8]], { color: PURPLE, dash: '2 9' });
	s.path([[1.64, 3.9], [-2.6, 3.9], [-2.6, -0.7]], { color: PURPLE, arrow: false });
	s.path([[-2.6, -0.7, 0], [-2.6, -0.7, FLY - 8]], { color: PURPLE, dash: '2 9' });
	s.path([[2.95, -3.2, FLOOR], [2.95, -4.5, FLOOR], [2.756, -5.1, 0], [-1.8, -5.1, 0], [-1.8, -2, 0]], { color: PURPLE, arrow: false });
	s.path([[-1.8, -2, 0], [-1.8, -2, FLY - 8]], { color: PURPLE, dash: '2 9' });
	s.slab(-3.35, -2.35, 1.9, 1.9, 16, { z: FLY, palette: CLOUD, rx: 10, depth: 20 });
	s.device('globe', -2.4, -1.4, { z: FLY + 16, depth: 21 });

	s.path([[0.2, 2.3, 0], [0.2, -1.6, 0], [0.2, -1.6, FLOOR], [0.2, -2.35, FLOOR]], { color: BLUE });
	s.path([[1.9, 3.05, 0], [1.9, 1.7, 0], [0.4, 1.7, 0], [0.4, -1.6, 0], [0.4, -1.6, FLOOR], [0.4, -2.35, FLOOR]], { color: BLUE });
	s.path([[0.97, -2.9, FLOOR], [2.3, -2.9, FLOOR]], { color: BLUE });
	s.slab(0.04, -1.6, 0.52, 2.9, 30, { palette: GLASS, rx: 6, depth: -0.05, sw: 1.3 });

	s.device('laptop', 0, 3);
	s.device('phone', 1.9, 3.6, { scale: 1.9 });
	s.device('router', 0.3, -2.9, { z: FLOOR, depth: -2.6 });
	s.device('node', 2.95, -2.9, { scale: 2, z: FLOOR });

	s.badge(-2.2, 1.3, PURPLE, lock);
	s.badge(-2.6, 2.3, PURPLE, lock);
	s.badge(-1.8, -3.6, PURPLE, lock);
	s.badge(0.3, 0.2, BLUE, lock, { radius: 24, z: 30 });

	s.label(0.4, 4.6, -70, 14, [{ t: c.device[0], size: 26, weight: 700, fill: INK }, { t: c.device[1] }]);
	s.label(0.56, 0, 44, -6, [{ t: c.vpn[0], size: 26, weight: 700, fill: BLUE }, { t: c.vpn[1] }], { anchor: 'start' });
	s.label(-2.4, -1.4, 150, -78, [{ t: 'fleet.univrs.cloud', size: 26, weight: 700, fill: INK }, { t: c.fleet }], { anchor: 'start', z: FLY });
	s.label(-2.6, 0.6, -34, -14, [{ t: c.anywhere }], { anchor: 'end' });
	s.label(-1.8, -5.1, 0, -46, [{ t: c.out }]);
	s.label(0.3, -2.9, 70, -70, [{ t: 'Router', size: 24, weight: 700, fill: INK }, { t: 'UDP 51820', size: 20, fill: BLUE, mono: true }], { anchor: 'start' });
	s.label(4.4, -2.9, 40, 6, [{ t: c.node[0], size: 26, weight: 700, fill: INK }, ...c.node.slice(1).map((t) => ({ t }))], { anchor: 'start' });

	return s.svg();
};

export default { name: 'vpn-paths', copy, draw };
