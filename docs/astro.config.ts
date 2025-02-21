import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

export default defineConfig({
	site: 'https://delucis.github.io',
	base: '/starlight-theme-flexoki',
	integrations: [
		starlight({
			title: 'Starlight Flexoki',
			description: 'Starlight theme based on the Flexoki colour palette',
			social: {
				github: 'https://github.com/delucis/starlight-theme-flexoki',
			},
			editLink: {
				baseUrl: 'https://github.com/delucis/starlight-theme-flexoki/edit/main/docs/',
			},
			plugins: [starlightThemeFlexoki()],
			sidebar: [
				{
					label: 'Start Here',
					items: ['getting-started', 'demo'],
				},
				{ label: 'Examples', autogenerate: { directory: 'examples' } },
			],
		}),
	],
});
