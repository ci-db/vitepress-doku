/*
import AutoNavPlugin from 'vitepress-auto-nav-sidebar'
const { nav, sidebar } = AutoNavPlugin({
    ignoreFolders: ["node_modules", "assets", "public", ".vitepress", "code", ".obsidian", "utils"], 
    ignoreFiles: [''],
    dirPrefix: 'test ',
    filePrefix: 'test ',
    showNavIcon:false,
    showSideIcon:true,
    isCollapse: true,
    collapsed: true,
    singleLayerNav:true,
   // customParentFolderName: '/'
  });
*/
export default {
    title: 'VitePress',
    description: 'Just playing around.',
    base: '/vitepress-doku/',
	markdown: {
		theme: 'material-palenight',
        lineNumbers: true,
		toc: {
			level: [2],
		},
	},    
    themeConfig: {
        editLink: {
          pattern: 'https://github.com/ci-db/vitepress-doku/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
		sidebar: {
			// '/cookbook/': sidebarCookbooks(),
			'/': sidebar(),
		},
		nav: [
                { text: 'home', link: '/guide' },
                {
                  text: 'Dropdown Menu',
                  items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                  ]
                }
              ],        
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
          }       
      }
  }

  function sidebar() {
    return [
        {
            text: 'Start',
            collapsible: true,
            collapsed: true,               
            items: [
				{
					text: 'Introduction',
					link: '/getting-started/introduction',
				},
				{
					text: 'Quickstart Guide',
					link: '/getting-started/quickstart',
                 
				},
            ]

        },
        {
            text: 'test',
            collapsible: true,
            collapsed: true,            
            items: [
				{
					text: 'test1',
					link: '/test/test1',
				},
				{
					text: 'test2',
					link: '/test/test2',
				},
            ]
            
        }        
        
    ]
  }
 