import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const dev = process.env.NODE_ENV === "development";
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
            fallback: 'index.html'
		}),
        paths: {
            // change below to your repo name
            base: dev ? '' : '/zeyadajamy.github.io',
        },
		files: {
			assets: 'src/lib/assets',
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
