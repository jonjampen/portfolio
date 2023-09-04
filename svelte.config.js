import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        prerender: {
            // use relative URLs similar to an anchor tag <a href="/test/1"></a>
            // do not include group layout folders in the path such as /(group)/test/1
            entries: ['/projects/fatiguediary', '/projects/mandelbrot', '/projects/cybercrusade', '/projects/solarlog', '/projects/mountainsunset', '/projects/portfolio', "/three"]
        }
    }
};