import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const dev = process.env.NODE_ENV !== "development";
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
            fallback: 'index.html'
		}),
        paths: {
            base:'',
        },
		files: {
			lib: 'src/lib',
			routes: 'src/routes'
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
