import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { W, H } from './iso.mjs';
import files from './scenes/files.mjs';
import mail from './scenes/mail.mjs';
import vpn from './scenes/vpn.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const ASSETS_DIR = path.join(ROOT, 'src/assets/blog');
const SCALE = 2;
const SCENES = [files, mail, vpn];

const plan = (targets) => {
	if (targets.length === 0) {
		return SCENES;
	}

	return targets.map((target) => {
		const scene = SCENES.find((candidate) => { return candidate.name === target.toLowerCase(); });
		if (!scene) {
			throw new Error(`Unknown target "${target}". Available: ${SCENES.map(({ name }) => { return name; }).join(', ')}.`);
		}

		return scene;
	});
};

for (const scene of plan(process.argv.slice(2))) {
	for (const [locale, copy] of Object.entries(scene.copy)) {
		const svg = scene.draw(copy);
		const file = path.join(ASSETS_DIR, `${scene.name}-${locale}`);
		writeFileSync(`${file}.svg`, svg);
		await sharp(Buffer.from(svg), { density: 72 * SCALE }).resize(W * SCALE, H * SCALE).png().toFile(`${file}.png`);
		console.log(`${scene.name}-${locale}`);
	}
}
