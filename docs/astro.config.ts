import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Starlight Flexoki',
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
