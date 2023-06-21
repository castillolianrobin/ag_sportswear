export const TECHONOLOGIES =  {
  // Front End Frameworks
  VUE: {
    title: 'Vue',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
    color: '#42b883',
  },
  REACT: {
    title: 'React',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    color: '#087ea4',
  },
  TYPESCRIPT: {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
    title: 'TypeScript',
    color: '#FFFFFF',
    accentColor: '#555555'
  },

  // CSS Frameworks

  BOOTSTRAP: {
    title: 'Bootstrap',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png',
    color: '#712cf9',
  },
  TAILWIND: {
    title: 'Tailwind',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png',
    color: '#0ea5e9',
  },
  MATERIAL_DESIGN: {
    title: 'Material Design',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/640px-Google_Material_Design_Logo.svg.png',
    color: '#C2E7F4',
    accentColor: '#555555',
  },
  
  // Testing Frameworks
  JEST: {
    title: 'Jest',
    img: 'https://user-images.githubusercontent.com/10525473/50372432-95dcd880-0611-11e9-9432-58de9be26b3b.png',
    color: '#15c213',
  },
  VITEST: {
    title: 'Vitest',
    img: 'https://vitest.dev/logo-shadow.svg',
    color: '#6da13f',
  },
  CYPRESS: {
    title: 'Cypress',
    img: 'https://paganresearch.io/images/cypressio.png',
    color: '#007780',
  },

  // Backend Frameworks
  LARAVEL: {
    title: 'Laravel',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png',
    color: '#111111',
  },
  EXPRESS: {
    title: 'Express',
    img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png',
    color: '#FFFFFF',
    accentColor: '#444444'
  },

  // DevOps

  AWS: {
    title: 'Amazon Web Service',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png',
    color: '#232F3E',

  }
}


export const TECH_STACK = [
  {
    title: 'Frontend Frameworks',
    skills: [
        { ...TECHONOLOGIES.VUE ,rating: 9  },
        { ...TECHONOLOGIES.REACT, rating: 7 },
    ]
  },
  {
    title: 'CSS Frameworks',
    skills: [
        { ...TECHONOLOGIES.BOOTSTRAP, rating: 9 },
        { ...TECHONOLOGIES.TAILWIND, rating: 8 },
        { ...TECHONOLOGIES.MATERIAL_DESIGN, rating: 7 },
    ]
  },
  {
    title: 'Frontend Testing Frameworks',
    skills: [
        { ...TECHONOLOGIES.JEST, rating: 6 },
        { ...TECHONOLOGIES.VITEST, rating: 6 },
        { ...TECHONOLOGIES.CYPRESS, rating: 5 },
    ]
  },

  {
    title: 'Backend Frameworks',
    skills: [
        { ...TECHONOLOGIES.LARAVEL, rating: 3 },
        { ...TECHONOLOGIES.EXPRESS, rating: 1 },
    ]
  },
]