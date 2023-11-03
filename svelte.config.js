import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			"components": "src/components"
		}
	},
	extensions: ['.svelte', '.svx'],
	preprocess: [
		mdsvex({
			layout: {
				projects: "./src/routes/projects/[slug]/layout.svelte"
			},
		}),
		vitePreprocess(),
	],
};

export default config;
