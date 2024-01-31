import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
export default {
	kit: {
		adapter: adapter({
			
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: false,
			fallback: 'index.html'
		})
	},
	 preprocess: vitePreprocess()
};