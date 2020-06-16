module.exports = {
  siteTitle: 'Bayes Ahmed Shoharto | Software Engineer',
  siteDescription:
    'Bayes Ahmed Shoharto is a software engineer based in Malaysia, UTM who specializes in building exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Bayes Ahmed Shoharto, Bayes, Ahmed, Shoharto, software engineer, front-end engineer, web developer, javascript, malaysia, utm, php, laravel',
  siteUrl: 'https://shoharto.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Bayes Ahmed Shoharto',
  location: 'Malaysia, UTM',
  email: 'shoharto@gmail.com',
  github: 'https://github.com/shoharto',
  twitterHandle: '@mr_shoharto',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shoharto',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shoharto',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/shoharto',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_shoharto_',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mr_shoharto',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
