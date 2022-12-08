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
  randCetacean,
  randCat,
  randCrocodilia,
  randDog,
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
    interests: '',
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
      github: `github.com/${randAnimalType()}${randAnimalType()}`,
      site: `${randSubscriptionPlan()}${randAnimalType()}.com`,
      interests: `I'm a long term animal riding aficionado. I like to ride ${randDog()}s, ${randCat()} cats and especially ${randCetacean()}s. My dream is to have one day ridden every type of animal on gods green earth (although not ${randCrocodilia()}s, who rides them!)`,
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
        repo: `github.com/${randAnimalType()}${randAnimalType()}`,
        live: `${randVehicleFuel()}${randAnimalType()}.com`,
        description: randCatchPhrase(),
      },
      {
        title: `${randMusicGenre()} ${randJobArea()} App`,
        repo: `github.com/${randAnimalType()}${randAnimalType()}`,
        live: `${randVehicleFuel()}${randAnimalType()}.com`,
        description: randCatchPhrase(),
      },
    ],
    experience: [
      {
        role: `${randFood()} ${randJobType()}`,
        location: randCity(),
        company: randCompanyName(),
        dates: 'Dec-2015 - Present',
        description: randPhrase(),
      },
      {
        role: `${randFood()} ${randJobType()}`,
        location: randCity(),
        company: randCompanyName(),
        dates: 'Jul-2010 - Nov-2015',
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
        dates: '2008 - 2010',
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
