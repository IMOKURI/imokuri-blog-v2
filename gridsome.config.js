// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'IMOKURI Blog',
  siteUrl: 'https://imokuri123.com',
  siteDescription: 'Tech Blog by IMOKURI. Infrastructure / ML engineer at HPE.',

  templates: {
    Post: '/blog/:year/:month/:slug',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Static',
        path: 'content/static/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-NTBCJL2',
        enabled: true,
        debug: true
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: 'IMOKURI Blog',
          description: 'Tech Blog by IMOKURI. Infrastructure / ML engineer at HPE.'
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        maxItems: 10,
        htmlFields: ['description', 'content'],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.description
        })
      }
    }
  ],

  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
        ['gridsome-plugin-remark-twitter', { omitScript: true }]
      ]
    }
  }
}
