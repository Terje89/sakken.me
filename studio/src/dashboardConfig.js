export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8f1fb94617321920900181',
                  title: 'Sanity Studio',
                  name: 'sakken-me-studio',
                  apiId: 'af0cd0b3-7543-462b-a1c4-cf5e582cc538'
                },
                {
                  buildHookId: '5f8f1fb9bb495816de24f6e0',
                  title: 'Blog Website',
                  name: 'sakken-me',
                  apiId: '42cb582f-3e90-48e3-8daa-f2595dd8e971'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Terje89/sakken.me',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sakken-me.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
