import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Smart Claude Setup',
  description: 'Stop using Claude like Google. Use it like a staff engineer who knows your context.',

  themeConfig: {
    nav: [
      { text: 'Quick Start', link: '/quick-start' },
      { text: 'Guides', link: '/guides/01-six-tools' },
      { text: 'Reference', link: '/reference/model-decision-matrix' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quick Start', link: '/quick-start' },
        ],
      },
      {
        text: '12 Guidelines',
        items: [
          { text: '1. Claude Is 6 Tools', link: '/guides/01-six-tools' },
          { text: '2. ABOUT ME Folder', link: '/guides/02-about-me' },
          { text: '3. Project Structure', link: '/guides/03-project-structure' },
          { text: '4. Global Instructions', link: '/guides/04-global-instructions' },
          { text: '5. Ask Before Act', link: '/guides/05-ask-before-act' },
          { text: '6. Connectors', link: '/guides/06-connectors' },
          { text: '7. Skills & Slash Commands', link: '/guides/07-skills' },
          { text: '8. Pick the Right Model', link: '/guides/08-model-selection' },
          { text: '9. Extended Thinking', link: '/guides/09-extended-thinking' },
          { text: '10. Examples, Not Descriptions', link: '/guides/10-examples-not-descriptions' },
          { text: '11. Cowork', link: '/guides/11-cowork' },
          { text: '12. Plugins', link: '/guides/12-plugins' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Model Decision Matrix', link: '/reference/model-decision-matrix' },
          { text: 'Skill Format', link: '/reference/skill-format' },
          { text: 'Global Instructions', link: '/reference/global-instructions-reference' },
        ],
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
    },

    search: { provider: 'local' },

    socialLinks: [
      { icon: 'github', link: 'https://git.mkngama.com/nandigama/right-claude-use' },
    ],
  },
});
