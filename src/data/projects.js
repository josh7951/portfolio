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
    title: 'TI-Enterprise',
    text: 'Brochure site created using Laravel, Vue.js, and Bulma.io. Created a custom CMS to give the admin the ability to update certain web pages.'
  },
  {
    id: 2,
    category: 'Web Apps',
    image: img3,
    link1: 'https://project-leo.dev/',
    link2: 'https://github.com/josh7951/project-leo',
    title: 'Project-LEO',
    text: 'CSUN Senior Capstone project. Created an application geared towards teaching intermediate school students entry level programming'
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
    title: 'Fitness App - Android',
    text: 'Developed the database architecture using Firebase Realtime/Firestore database to store user account infromation and fitness data'
  }
]

export default portfolios;