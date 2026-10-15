import { W, H } from '../iso.mjs';

const GOLD = '#F7C33C';
const NODE_WIDTH = 380;

const star = (cx, cy, r) => {
	const points = [];
	for (let i = 0; i < 10; i++) {
		const angle = -Math.PI / 2 + i * Math.PI / 5;
		const radius = (i % 2 ? r * 0.45 : r);
		points.push(`${(cx + Math.cos(angle) * radius).toFixed(1)},${(cy + Math.sin(angle) * radius).toFixed(1)}`);
	}

	return `<polygon points="${points.join(' ')}" fill="${GOLD}" stroke-linejoin="round"/>`;
};

const stars = (cx, cy, radius, r) => {
	let svg = '';
	for (let i = 0; i < 12; i++) {
		const angle = -Math.PI / 2 + i * Math.PI / 6;
		svg += star(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius, r);
	}

	return svg;
};

const folder = (x, y, w, h, fill, stroke, tab = 0.38) => `<path d="M${x} ${y + 14}q0-14 14-14h${w * tab - 20}l14 16h${w - w * tab - 8}q14 0 14 14v${h - 30}q0 14-14 14h-${w - 28}q-14 0-14-14z" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;

const card = (x, y, w, h, { stroke = '#C9D3EA', photo = '#C9D3EA', lines = '#D9E0F0' } = {}) => {
	const p = h * 0.6;
	return `<g transform="translate(${x},${y})"><rect width="${w}" height="${h}" rx="${h * 0.1}" fill="#FFFFFF" stroke="${stroke}" stroke-width="2"/>
<rect x="${h * 0.18}" y="${(h - p) / 2}" width="${p}" height="${p}" rx="${p * 0.12}" fill="${photo}"/>
<circle cx="${h * 0.18 + p / 2}" cy="${(h - p) / 2 + p * 0.38}" r="${p * 0.16}" fill="#FFFFFF"/>
<path d="M${h * 0.18 + p * 0.22} ${(h - p) / 2 + p * 0.88}a${p * 0.28} ${p * 0.24} 0 0 1 ${p * 0.56} 0" fill="#FFFFFF"/>
<rect x="${h * 0.3 + p}" y="${h * 0.28}" width="${w * 0.4}" height="${h * 0.09}" rx="${h * 0.045}" fill="${lines}"/>
<rect x="${h * 0.3 + p}" y="${h * 0.47}" width="${w * 0.3}" height="${h * 0.08}" rx="${h * 0.04}" fill="${lines}"/>
<rect x="${h * 0.3 + p}" y="${h * 0.64}" width="${w * 0.35}" height="${h * 0.08}" rx="${h * 0.04}" fill="${lines}"/></g>`;
};

const node = (x, y) => `<g transform="translate(${x},${y}) scale(${NODE_WIDTH / 47})"><rect width="47" height="21" rx="2" fill="#0F6E56" stroke="#04342C" stroke-width="0.35"/><circle cx="8" cy="10.5" r="2.4" fill="#C0DD97"/><path d="M29 5v11M33 5v11M37 5v11M41 5v11" stroke="#5DCAA5" stroke-width="0.9"/></g>`;

const draw = () => {
	let body = `<rect width="${W}" height="${H}" fill="#F8FAFE"/>
<polygon points="520,0 920,0 1150,720 290,720" fill="#FFFFFF"/>
<polygon points="140,0 330,0 420,720 260,720" fill="url(#beam)" opacity="0.7"/>
<polygon points="1110,0 1300,0 1180,720 1020,720" fill="url(#beam)" opacity="0.7"/>
<path d="M250 702H1190" stroke="#D5DBE8" stroke-width="2"/>`;
	for (const [x, y, w] of [[402, 196, 120], [924, 150, 120], [992, 406, 110], [430, 470, 90]]) {
		body += card(x, y, w, w * 0.56);
	}
	for (const [x, y, w] of [[1010, 200, 44], [560, 330, 30], [960, 520, 34], [480, 600, 26], [700, 240, 22], [870, 350, 18]]) {
		body += `<rect x="${x}" y="${y}" width="${w}" height="${w * 0.45}" rx="4" fill="none" stroke="#D9E0F0" stroke-width="2"/>`;
	}
	body += '<g transform="translate(0,-62)">';
	for (let i = 0; i < 5; i++) {
		body += folder(548 + i * 52, 466, 150, 128, '#CFDCFA', '#A5BAF0', 0.32);
	}
	body += card(612, 262, 220, 124, { stroke: '#B8C7EE', photo: '#7FA2F0', lines: '#C9D3EA' });
	body += folder(636, 400, 196, 196, '#2F49D0', '#2337C7');
	body += `<rect x="654" y="428" width="160" height="150" rx="6" fill="#FFFFFF" stroke="#C9D3EA" stroke-width="2"/>
<path d="M676 456h90M676 476h110M676 496h70" stroke="#D9E0F0" stroke-width="6" stroke-linecap="round"/>
<path d="M606 512h214q12 0 14 12l14 70q2 10-10 10H634q-12 0-14-10l-16-70q-2-12 2-12z" fill="#3B5BDB" stroke="#2337C7" stroke-width="2"/>`;
	body += stars(728, 558, 30, 7);
	body += '</g>';
	body += node((W - NODE_WIDTH) / 2, 532);

	return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs><linearGradient id="beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EEF2FB" stop-opacity="0"/><stop offset="1" stop-color="#E6ECFA"/></linearGradient></defs>
${body}
</svg>`;
};

export default { name: 'gdpr-cover', draw };
