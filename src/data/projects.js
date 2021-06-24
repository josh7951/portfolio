import img1 from '../img/galaxy.png';
import img2 from '../img/snowy-mountains.jpg';
import img3 from '../img/mountain-lake.png';

const portfolios = [
  {
    id: 1,
    category: 'Web Apps',
    image: img1,
    link1: 'http://ti-enterprise.com/',
    link2: 'https://github.com/josh7951/TI-Enterprise',
    title: 'TI-Enterprise (In Active Development)',
    text: 'Simple brochure site created using Laravel, Vue.js, and Bulma.io. Created a custom Content Management System to give the admin the ability to update the tournament schedule when needed.'
  },
  {
    id: 2,
    category: 'Web Apps',
    image: img3,
    link1: 'https://project-leo.dev/',
    link2: 'https://github.com/josh7951/project-leo',
    title: 'Project-LEO (Learning Environment Online)',
    text: 'Online Learning Application'
  },
  {
    id: 3,
    category: 'Web Apps',
    image: img2,
    link1: 'https://khronotes.com/',
    link2: 'https://github.com/Inviro/584-scheduler',
    title: 'KhroNotes',
    text: 'Simple Web Application that features a working CRUD system to allow users to create and update their schedule planners. Built using Laravel amd Vue.js.'
  },
  {
    id: 4,
    category: 'Mobile Apps',
    image: img2,
    link1: '',
    link2: 'https://github.com/CoconutFresh/RunningApp',
    title: 'Android Application - Fitness Tracker',
    text: 'Developed a login verification system and enabled Google OAuth. Also created the database architecture using FireBase RealTime Database and FireBase FireStore to store user account infromation and user fitness data'
  }
]

export default portfolios;