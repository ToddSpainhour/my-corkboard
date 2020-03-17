import util from '../../helpers/util';
import projectInfo from '../../helpers/data/projectData';


const printProjectCards = () => {
  let domString = '';
  const projectAraay = projectInfo.getProjects();
  // const projects = getProjects;
  projectAraay.forEach((projects) => {
    // domString += '<div class="row">';
    domString += '<div class="col-md-3 bg-light mt-5 mr-3 ml-3">';
    domString += '<div class="card">';
    domString += `<img src="${projects.image}" class="card-img-top mt-2 rounded" alt="...">`;
    domString += '<div class="card-body">';
    domString += `<h3 class="card-text text-center">${projects.title}</h3>`;
    domString += `<h3 class="card-text text-center">${projects.category}</h3>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('printProjectCardsHere', domString);
};


export default { printProjectCards };
