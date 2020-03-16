import printToDom from '../../helpers/util';
import getProjects from '../../helpers/data/projectData';

const printProjectCards = () => {
  let domString = '';
  const projects = getProjects;
  projects.forEach(getProjects);
  domString += '<div class="col-md-3 bg-light mt-5 mr-3 ml-3">';
  domString += '<div class="card">';
  domString += `<img src="${getProjects.image}" class="card-img-top mt-2 rounded" alt="...">`;
  domString += '<div class="card-body">';
  domString += `<h3 class="card-text text-center">${getProjects.title}</h3>`;
  domString += `<h3 class="card-text text-center">${getProjects.category}</h3>`;
  domString += '</div>';
  domString += '</div>';
  console.error('this is from inside your printProjectCards function');

  printToDom('printProjectCardsHere', domString);
};

export default { printProjectCards };
