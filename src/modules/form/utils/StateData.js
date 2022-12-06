import {
  randFullName,
  randJobTitle,
  randEmail,
  randPhoneNumber,
  randCity,
  randCountry,
  randQuote,
  randAnimalType,
  randSubscriptionPlan,
  randFood,
  randJobType,
  randJobArea,
  randCompanyName,
  randDrinks,
  randMusicGenre,
  randCatchPhrase,
  randPhrase,
  randVehicleFuel,
  randProductName,
} from '@ngneat/falso';

const reset = {
  personal: {
    name: '',
    role: '',
    statement: '',
    email: '',
    phone: '',
    location: '',
    github: '',
    site: '',
  },
  skills: [],
  projects: [],
  experience: [],
  courses: [],
  education: [],
  isVisible: {
    personal: true,
    skills: false,
    projects: false,
    experience: false,
    courses: false,
    education: false,
  },
};

const demo = () => {
  return {
    personal: {
      name: randFullName(),
      role: randJobTitle(),
      statement: randQuote(),
      email: randEmail(),
      phone: randPhoneNumber(),
      location: `${randCity()}, ${randCountry()}`,
      github: `https://github.com/${randAnimalType()}${randAnimalType()}`,
      site: `www.${randSubscriptionPlan()}${randAnimalType()}.com`,
    },
    skills: [
      {
        skill: 'Drinking',
        subSkill: `${randDrinks()}, ${randDrinks()}, ${randDrinks()}, ${randDrinks()}`,
      },
      {
        skill: 'Eating',
        subSkill: `${randFood()}, ${randFood()}, ${randFood()}`,
      },
    ],
    projects: [
      {
        title: `${randMusicGenre()} ${randJobArea()} App`,
        repo: `https://github.com/${randAnimalType()}${randAnimalType()}`,
        live: `${randVehicleFuel()}${randAnimalType()}.com`,
        description: randCatchPhrase(),
      },
      {
        title: `${randMusicGenre()} ${randJobArea()} App`,
        repo: `https://github.com/${randAnimalType()}${randAnimalType()}`,
        live: `${randVehicleFuel()}${randAnimalType()}.com`,
        description: randCatchPhrase(),
      },
    ],
    experience: [
      {
        role: `${randFood()} ${randJobType()}`,
        company: randCompanyName(),
        dates: 'December 2015 - Present',
        description: randPhrase(),
      },
      {
        role: `${randFood()} ${randJobType()}`,
        company: randCompanyName(),
        dates: 'July 2010 - November 2015',
        description: randPhrase(),
      },
    ],
    courses: [
      { course: 'The Odin Project', description: `${randCatchPhrase()}` },
      {
        course: 'CS50 Intro to Computer Science',
        description: `${randCatchPhrase()}`,
      },
    ],
    education: [
      {
        qualification: `${randProductName()} ${randJobType()}`,
        school: `${randCity()} University`,
        location: `${randCity()}`,
        dates: '2008 - 2011',
      },
    ],
    isVisible: {
      personal: false,
      skills: false,
      projects: false,
      experience: false,
      courses: false,
      education: false,
    },
  };
};
export { reset, demo };
