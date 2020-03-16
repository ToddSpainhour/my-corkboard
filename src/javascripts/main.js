import '../styles/main.scss';
import printToDom from './helpers/util';
import printProjectCards from './components/main-card/main-card';

// console.error('hello from within your main.js file');

const init = () => {
  printProjectCards();
  printToDom();
};

init();
