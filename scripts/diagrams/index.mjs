import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { W, H } from './iso.mjs';
import data from './scenes/data.mjs';
import files from './scenes/files.mjs';
import gdpr from './scenes/gdpr.mjs';
import mail from './scenes/mail.mjs';
import vpn from './scenes/vpn.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const ASSETS_DIR = path.join(ROOT, 'src/assets/blog');
const SCALE = 2;
const SCENES = [data, files, gdpr, mail, vpn];

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

const variants = (scene) => {
	if (!scene.copy) {
		return [[scene.name, {}]];
	}

	return Object.entries(scene.copy).map(([locale, copy]) => { return [`${scene.name}-${locale}`, copy]; });
};

for (const scene of plan(process.argv.slice(2))) {
	for (const [name, copy] of variants(scene)) {
		const svg = scene.draw(copy);
		const file = path.join(ASSETS_DIR, name);
		writeFileSync(`${file}.svg`, svg);
		await sharp(Buffer.from(svg), { density: 72 * SCALE }).resize(W * SCALE, H * SCALE).png().toFile(`${file}.png`);
		console.log(name);
	}
}
