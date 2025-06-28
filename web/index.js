import { projects } from './data.js';

console.log(projects);

const projectContainer = document.querySelector(".projects");

const ulEl = document.createElement("ul");
projects.forEach(project => {
    const liEl = document.createElement("li");
    const aEl = document.createElement("a");
    aEl.setAttribute("href", project.url);
    aEl.setAttribute("target", "_blank");
    aEl.textContent = `${project.id} - ${project.name}`;
    liEl.appendChild(aEl);
    ulEl.appendChild(liEl);
});

projectContainer.appendChild(ulEl);