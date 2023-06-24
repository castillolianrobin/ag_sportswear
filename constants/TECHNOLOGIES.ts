export const TECHONOLOGIES =  {
  // Front End Frameworks
  VUE: {
    title: 'Vue',
    img: '/technologies/vue.png',
    color: '#42b883',
  },
  REACT: {
    title: 'React',
    img: "/technologies/react.png",
    color: '#087ea4',
  },
  NUXT: {
    title: 'Nuxt',
    img: "/technologies/nuxt.png",
    color: '#42b883',
  },
  TYPESCRIPT: {
    img: "/technologies/typescript.png",
    title: 'TypeScript',
    color: '#FFFFFF',
    accentColor: '#555555'
  },

  // CSS Frameworks

  BOOTSTRAP: {
    title: 'Bootstrap',
    img: "/technologies/bootstrap.png",
    color: '#712cf9',
  },
  TAILWIND: {
    title: 'Tailwind',
    img: "/technologies/tailwind.png",
    color: '#0ea5e9',
  },
  MATERIAL_DESIGN: {
    title: 'Material Design',
    img: "/technologies/material-design.png",
    color: '#C2E7F4',
    accentColor: '#555555',
  },
  
  // Testing Frameworks
  JEST: {
    title: 'Jest',
    img: "/technologies/jest.png",
    color: '#15c213',
  },
  VITEST: {
    title: 'Vitest',
    img: "/technologies/vitest.svg",
    color: '#6da13f',
  },
  CYPRESS: {
    title: 'Cypress',
    img: "/technologies/cypress.png",
    color: '#007780',
  },

  // Backend Frameworks
  LARAVEL: {
    title: 'Laravel',
    img: "/technologies/laravel.png",
    color: '#111111',
  },
  EXPRESS: {
    title: 'Express',
    img: "/technologies/express.png",
    color: '#FFFFFF',
    accentColor: '#444444'
  },

  // DevOps

  AWS: {
    title: 'Amazon Web Service',
    img: "/technologies/aws.png",
    color: '#232F3E',

  },

  VERCEL: {
    title: 'Vercel',
    img: "/technologies/vercel.svg",
    color: '#DDDDDD',
  },

  
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
    ],
  },

  {
    title: 'DevOps',
    skills: [
        { ...TECHONOLOGIES.AWS, rating: 5 },
        // { ...TECHONOLOGIES.EXPRESS, rating: 1 },
    ],
  },
]