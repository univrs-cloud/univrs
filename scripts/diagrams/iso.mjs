export const W = 1440;
export const H = 800;
export const INK = '#13131E';
export const MUTED = '#75758E';
export const BLUE = '#3B4FD4';
export const PURPLE = '#7A4BA6';
export const GREEN = '#1D9E75';
export const SANS = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";
export const MONO = "Menlo, 'DejaVu Sans Mono', monospace";

const N = 'stroke="#55534E" stroke-width="0.7"';

const devices = {
	node: { w: 47, d: 21, svg: `
		<g transform="matrix(0.866,0.5,0,-1,-18.19,10.5)"><rect width="47" height="21" rx="2" fill="#0F6E56" stroke="#04342C" stroke-width="0.7"/><circle cx="8" cy="10.5" r="2.4" fill="#C0DD97"/><line x1="29" y1="5" x2="29" y2="16" stroke="#5DCAA5" stroke-width="0.9"/><line x1="33" y1="5" x2="33" y2="16" stroke="#5DCAA5" stroke-width="0.9"/><line x1="37" y1="5" x2="37" y2="16" stroke="#5DCAA5" stroke-width="0.9"/><line x1="41" y1="5" x2="41" y2="16" stroke="#5DCAA5" stroke-width="0.9"/></g>
		<g transform="matrix(-0.866,0.5,0,-1,40.70,23.5)"><rect width="21" height="21" rx="2" fill="#085041" stroke="#04342C" stroke-width="0.7"/><rect x="6" y="7" width="9" height="6" rx="1" fill="none" stroke="#5DCAA5" stroke-width="0.9"/></g>
		<g transform="matrix(0.866,0.5,-0.866,0.5,0,-21)"><rect width="47" height="21" rx="2" fill="#1D9E75" stroke="#04342C" stroke-width="0.7"/></g>` },
	server: { w: 47, d: 21, svg: `
		<g transform="matrix(0.866,0.5,0,-1,-18.19,10.5)"><rect width="47" height="21" rx="2" fill="#F2F1ED" ${N}/><circle cx="8" cy="10.5" r="2.4" fill="#6B6963"/><line x1="29" y1="5" x2="29" y2="16" stroke="#B9B7B0" stroke-width="0.9"/><line x1="33" y1="5" x2="33" y2="16" stroke="#B9B7B0" stroke-width="0.9"/><line x1="37" y1="5" x2="37" y2="16" stroke="#B9B7B0" stroke-width="0.9"/><line x1="41" y1="5" x2="41" y2="16" stroke="#B9B7B0" stroke-width="0.9"/></g>
		<g transform="matrix(-0.866,0.5,0,-1,40.70,23.5)"><rect width="21" height="21" rx="2" fill="#E9E8E4" ${N}/></g>
		<g transform="matrix(0.866,0.5,-0.866,0.5,0,-21)"><rect width="47" height="21" rx="2" fill="#FBFAF8" ${N}/></g>` },
	router: { w: 57, d: 36, svg: `
		<g transform="matrix(0.866,0.5,0,-1,-31.18,18)"><rect width="57" height="9" rx="2" fill="#F2F1ED" ${N}/></g>
		<g transform="matrix(-0.866,0.5,0,-1,49.36,28.5)"><rect width="36" height="9" rx="2" fill="#E9E8E4" ${N}/></g>
		<g transform="matrix(0.866,0.5,-0.866,0.5,0,-9)"><rect width="57" height="36" rx="4" fill="#FBFAF8" ${N}/><circle cx="14" cy="26" r="1.8" fill="#6B6963"/><circle cx="21" cy="26" r="1.8" fill="#6B6963"/><circle cx="28" cy="26" r="1.8" fill="#6B6963"/></g>
		<line x1="39.8" y1="20" x2="39.8" y2="-6" stroke="#6B6963" stroke-width="3" stroke-linecap="round"/>
		<line x1="19" y1="32" x2="19" y2="6" stroke="#6B6963" stroke-width="3" stroke-linecap="round"/>` },
	phone: { w: 20, d: 40, svg: `
		<g transform="matrix(0.866,0.5,0,-1,-34.64,20)"><rect width="20" height="2" fill="#F2F1ED" ${N}/></g>
		<g transform="matrix(-0.866,0.5,0,-1,17.32,10)"><rect width="40" height="2" fill="#E9E8E4" ${N}/></g>
		<g transform="matrix(0.866,0.5,-0.866,0.5,0,-2)"><rect width="20" height="40" rx="3" fill="#FBFAF8" ${N}/><rect x="2.5" y="4" width="15" height="32" rx="2" fill="#E9E8E4" stroke="#D5D3CD" stroke-width="0.7"/></g>` },
	laptop: { w: 83, d: 57, svg: `
		<g transform="translate(0,-4)">
		<g transform="matrix(-0.866,0.5,0,-1,71.88,41.5)"><rect width="3" height="52" fill="#E9E8E4" ${N}/></g>
		<g transform="matrix(0.866,0.5,-0.866,0.5,0,-52)"><rect width="83" height="3" fill="#FBFAF8" ${N}/></g>
		<g transform="matrix(0.866,0.5,0,-1,-2.60,1.5)"><rect width="83" height="52" rx="2" fill="#F2F1ED" ${N}/><rect x="5" y="5" width="73" height="42" rx="1" fill="#E9E8E4" stroke="#D5D3CD" stroke-width="0.7"/></g>
		</g>
		<g transform="matrix(0.866,0.5,0,-1,-49.36,28.5)"><rect width="83" height="4" rx="1" fill="#F2F1ED" ${N}/></g>
		<g transform="matrix(-0.866,0.5,0,-1,71.88,41.5)"><rect width="57" height="4" rx="1" fill="#E9E8E4" ${N}/></g>
		<g transform="matrix(0.866,0.5,-0.866,0.5,0,-4)"><rect width="83" height="57" rx="4" fill="#FBFAF8" ${N}/><rect x="7" y="9" width="69" height="27" rx="2" fill="#E9E8E4" stroke="#D5D3CD" stroke-width="0.7"/><rect x="31" y="41" width="22" height="11" rx="2" fill="none" stroke="#D5D3CD" stroke-width="0.7"/></g>` },
	globe: { w: 52, d: 52, svg: `
		<g transform="matrix(0.866,0.5,0,-1,-45.03,26)"><rect width="52" height="13" rx="3" fill="#F2F1ED" ${N}/></g>
		<g transform="matrix(-0.866,0.5,0,-1,45.03,26)"><rect width="52" height="13" rx="3" fill="#E9E8E4" ${N}/></g>
		<g transform="matrix(0.866,0.5,-0.866,0.5,0,-13)"><rect width="52" height="52" rx="6" fill="#FBFAF8" ${N}/><circle cx="26" cy="26" r="17" fill="none" stroke="#6B6963" stroke-width="1"/><ellipse cx="26" cy="26" rx="7" ry="17" fill="none" stroke="#6B6963" stroke-width="1"/><line x1="9" y1="26" x2="43" y2="26" stroke="#6B6963" stroke-width="1"/></g>` }
};

export const NEUTRAL = { top: '#FBFAF8', left: '#F2F1ED', right: '#E9E8E4', stroke: '#55534E' };
export const ZONE = { top: '#F4F4F9', left: '#E4E4EF', right: '#D8D8E6', stroke: '#A9A9C2' };
export const GLASS = { top: 'rgba(59,79,212,0.10)', left: 'rgba(59,79,212,0.17)', right: 'rgba(59,79,212,0.24)', stroke: BLUE };
export const CLOUD = { top: '#F7F2FB', left: '#E9DFF2', right: '#DCCDEA', stroke: PURPLE };
export const LEAF = { top: 'rgba(29,158,117,0.16)', left: 'rgba(29,158,117,0.26)', right: 'rgba(29,158,117,0.36)', stroke: '#0F6E56' };

const TOP = '0.866,0.5,-0.866,0.5';
const LEFT = '0.866,0.5,0,-1';
const RIGHT = '-0.866,0.5,0,-1';

export const scene = ({ unit, ox, oy, deviceScale = 1.7 }) => {
	const P = (x, y, z = 0) => [ox + (x - y) * 0.866 * unit, oy + (x + y) * 0.5 * unit - z];
	const at = (x, y, z = 0) => P(x, y, z).map((n) => n.toFixed(1)).join(',');
	const layers = { floor: [], lines: [], things: [], over: [] };
	const thing = (depth, svg) => layers.things.push({ depth, svg });
	const escape = (t) => t.replace(/&/g, '&amp;');

	const api = {
		P,
		slab(x, y, w, d, h, { z = 0, palette = NEUTRAL, rx = 4, layer = 'things', depth, sw = 0.9, dash, inner = '' } = {}) {
			const stroke = `stroke="${palette.stroke}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}`;
			const svg = `<g>
<g transform="matrix(${LEFT},${at(x, y + d, z)})"><rect width="${w * unit}" height="${h}" rx="${Math.min(rx, h / 2)}" fill="${palette.left}" ${stroke}/></g>
<g transform="matrix(${RIGHT},${at(x + w, y, z)})"><rect width="${d * unit}" height="${h}" rx="${Math.min(rx, h / 2)}" fill="${palette.right}" ${stroke}/></g>
<g transform="matrix(${TOP},${at(x, y, z + h)})"><rect width="${w * unit}" height="${d * unit}" rx="${rx}" fill="${palette.top}" ${stroke}/>${inner}</g>
</g>`;
			if (layer === 'floor') {
				layers.floor.push(svg);
			} else {
				thing(depth ?? (x + w / 2 + y + d / 2), svg);
			}
		},
		shadow(x, y, w, d, opacity = 0.07) {
			layers.floor.push(`<g transform="matrix(${TOP},${at(x, y)})"><rect width="${w * unit}" height="${d * unit}" rx="10" fill="#13131E" fill-opacity="${opacity}"/></g>`);
		},
		decal(x, y, inner, { z = 0, layer = 'floor', depth } = {}) {
			const svg = `<g transform="matrix(${TOP},${at(x, y, z)})">${inner}</g>`;
			if (layer === 'floor') {
				layers.floor.push(svg);
			} else if (layer === 'lines') {
				layers.lines.push(svg);
			} else {
				thing(depth ?? (x + y), svg);
			}
		},
		floorText(x, y, t, { z = 0, size = 22, fill = MUTED, weight = 500, axis = 'x', anchor = 'start', mono = false, layer = 'lines', depth } = {}) {
			const m = axis === 'x' ? TOP : '0.866,-0.5,0.866,0.5';
			const svg = `<text transform="matrix(${m},${at(x, y, z)})" text-anchor="${anchor}" font-family="${mono ? MONO : SANS}" font-size="${size}" font-weight="${weight}" fill="${fill}">${escape(t)}</text>`;
			if (layer === 'things') {
				thing(depth ?? (x + y), svg);
			} else {
				layers[layer].push(svg);
			}
		},
		faceText(x, y, z, t, { size = 13, fill = PURPLE, weight = 600, dx = 0, depth } = {}) {
			thing(depth ?? (x + y), `<text transform="matrix(0.866,0.5,0,1,${at(x, y, z)})" x="${dx}" text-anchor="middle" font-family="${MONO}" font-size="${size}" font-weight="${weight}" fill="${fill}">${escape(t)}</text>`);
		},
		path(points, { color = '#6B6963', width = 3.2, dash, arrow = true, glow = false, z = 0, layer = 'lines', depth } = {}) {
			const d = points.map(([x, y, pz], index) => `${index ? 'L' : 'M'}${at(x, y, pz ?? z).replace(',', ' ')}`).join('');
			let svg = '';
			if (glow) {
				svg += `<path d="${d}" fill="none" stroke="${color}" stroke-opacity="0.13" stroke-width="22" stroke-linejoin="round"/>`;
			}
			svg += `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linejoin="round" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}${arrow ? ` marker-end="url(#arrow-${color.slice(1)})"` : ''}/>`;
			if (layer === 'things') {
				thing(depth ?? 0, svg);
			} else {
				layers[layer].push(svg);
			}
		},
		device(name, x, y, { scale = deviceScale, z = 0, depth } = {}) {
			const { w, d, svg } = devices[name];
			const [cx, cy] = P(x, y, z);
			const tx = cx - (w - d) * 0.433 * scale;
			const ty = cy - (w + d) * 0.25 * scale;
			thing(depth ?? (x + y), `<g transform="translate(${tx.toFixed(1)},${ty.toFixed(1)}) scale(${scale})">${svg}</g>`);
		},
		badge(x, y, color, glyph, { radius = 21, z = 0 } = {}) {
			const [cx, cy] = P(x, y, z);
			layers.over.push(`<g transform="translate(${cx.toFixed(1)},${cy.toFixed(1)})"><circle r="${radius}" fill="#FFFFFF" stroke="${color}" stroke-width="3"/>${glyph(color)}</g>`);
		},
		step(sx, sy, n, color) {
			layers.over.push(`<g transform="translate(${sx},${sy})"><circle r="15" fill="${color}"/><text y="6.5" text-anchor="middle" font-family="${SANS}" font-size="18" font-weight="700" fill="#FFFFFF">${n}</text></g>`);
		},
		text(sx, sy, lines, { anchor = 'middle' } = {}) {
			let dy = 0;
			for (const { t, size = 22, weight = 400, fill = MUTED, mono = false, gap } of lines) {
				dy += gap ?? size * 1.35;
				layers.over.push(`<text x="${sx.toFixed(1)}" y="${(sy + dy).toFixed(1)}" text-anchor="${anchor}" font-family="${mono ? MONO : SANS}" font-size="${size}" font-weight="${weight}" fill="${fill}">${escape(t)}</text>`);
			}
		},
		label(x, y, dx, dy, lines, options = {}) {
			const [px, py] = P(x, y, options.z ?? 0);
			api.text(px + dx, py + dy, lines, options);
		},
		raw(svg, layer = 'over') {
			layers[layer].push(svg);
		},
		svg() {
			const marker = (color) => `<marker id="arrow-${color.slice(1)}" viewBox="0 0 10 10" refX="7.5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></marker>`;
			const sorted = layers.things.map((item, index) => ({ ...item, index })).sort((a, b) => a.depth - b.depth || a.index - b.index).map(({ svg }) => svg);

			return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>${[BLUE, PURPLE, GREEN, '#6B6963'].map(marker).join('')}</defs>
<rect width="${W}" height="${H}" fill="#FFFFFF"/>
${layers.floor.join('\n')}
${layers.lines.join('\n')}
${sorted.join('\n')}
${layers.over.join('\n')}
</svg>`;
		}
	};

	return api;
};

export const lock = (color) => `<rect x="-8" y="-3" width="16" height="12" rx="2.5" fill="${color}"/><path d="M-4.5 -3v-3.5a4.5 4.5 0 0 1 9 0v3.5" fill="none" stroke="${color}" stroke-width="2.4"/>`;
