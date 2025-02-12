import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeFlexoki from 'starlight-theme-flexoki'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/delucis/starlight-theme-flexoki/edit/main/docs/',
      },
      plugins: [starlightThemeFlexoki()],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ slug: 'getting-started' }],
        },
      ],
      social: {
        github: 'https://github.com/delucis/starlight-theme-flexoki',
      },
      title: 'starlight-theme-flexoki',
    }),
  ],
})
