import  { TECHONOLOGIES } from './TECHNOLOGIES';
export const PROJECTS = [
  {
    title: 'Component Kits (Vue)',
    description: 'A set of reusable and themeable Vue 3 components to be used with dashboard related projects.',
    img: '/projects/component-kit-vue.png',
    link: 'https://component-kits-vue3.netlify.app/',
    stack: [
      TECHONOLOGIES.VUE, 
      TECHONOLOGIES.TYPESCRIPT,
      TECHONOLOGIES.TAILWIND, 
      TECHONOLOGIES.VITEST, 
      TECHONOLOGIES.CYPRESS
    ]
  },
  {
    title: 'Component Kits (React)',
    description: 'A set of reusable and themeable React components to be used with dashboard related projects.',
    img: '/projects/component-kit-react.png',
    link: 'https://component-kits-react18.netlify.app/',
    stack: [
      TECHONOLOGIES.REACT, 
      TECHONOLOGIES.TYPESCRIPT,
      TECHONOLOGIES.TAILWIND, 
      TECHONOLOGIES.VITEST, 
      TECHONOLOGIES.CYPRESS
    ]
  },
  {
    title: 'Express Boilerplate',
    description: 'Basic boilerplate for bootstraping Express applications for standard REST API with PassportJS authentication',
    img: '/projects/express-boilerplate.png',
    link: 'https://github.com/castillolianrobin/api-boilerplate',
    stack: [
      TECHONOLOGIES.EXPRESS, 
      TECHONOLOGIES.TYPESCRIPT,
      TECHONOLOGIES.AWS,
    ]
  },

  {
    title: 'Sample Pokedex',
    description: 'Basic UI Implementation for 3rd party API courtesy of https://pokeapi.co.',
    img: '/projects/sample-pokedex.png',
    link: 'https://sample-pokedex.netlify.app/',
    stack: [
      TECHONOLOGIES.VUE, 
      TECHONOLOGIES.TYPESCRIPT,
      TECHONOLOGIES.TAILWIND, 
    ]
  },
  {
    title: 'Pocketyard Dashboard',
    description: 'Construction E-commerce/E-bidding provider based on US. Web dashboard was implemented using Vue 2',
    img: '/projects/pocketyard.png',
    link: 'https://pocketyard.com/#/',
    stack: [
      TECHONOLOGIES.VUE, 
      TECHONOLOGIES.BOOTSTRAP,
      TECHONOLOGIES.AWS, 
    ]
  },
]