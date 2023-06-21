import  { TECHONOLOGIES } from './TECHNOLOGIES';
export const PROJECTS = [
  {
    title: 'Component Kits (Vue)',
    description: 'A set of reusable and themeable Vue 3 components to be used with dashboard related projects.',
    img: 'https://raw.githubusercontent.com/castillolianrobin/vue-vite-component-kits/main/public/home_sample.png',
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
    img: 'https://raw.githubusercontent.com/castillolianrobin/react-vite-component-kits/main/public/home_sample.png',
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
    img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1611065926742/aZ6F1CxZ4.png',
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
    img: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png',
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
    img: 'https://pocketyard.com/img/logo_named.b5d74e2a.png',
    link: 'https://pocketyard.com/#/',
    stack: [
      TECHONOLOGIES.VUE, 
      TECHONOLOGIES.BOOTSTRAP,
      TECHONOLOGIES.AWS, 
    ]
  },
]