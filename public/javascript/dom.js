const createHTMLElement = (element, className, id, textContent) => {
  const item = document.createElement(element);

  if (className) item.className = className;
  if (id) item.id = id;
  if (textContent) item.textContent = textContent;

  return item;
};

const appendChildren = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

const createCard = (job) => {
  const card = createHTMLElement('div', 'card');

  const topSec = createHTMLElement('div', 'top');
  const middleSec = createHTMLElement('div', 'middle');
  const bottomSec = createHTMLElement('div', 'bottom');

  const compIconSpan = createHTMLElement('span');
  const companyIcon = createHTMLElement('i', 'fa-solid fa-briefcase-blank company-icon');

  appendChildren(compIconSpan, companyIcon);

  const companyName = createHTMLElement('span', null, null, job.employer_name);

  const fivIconSpan = createHTMLElement('span');
  const favoriteIcon = createHTMLElement('i', 'fa-regular fa-heart favorite-icon');
  appendChildren(fivIconSpan, favoriteIcon);

  appendChildren(topSec, compIconSpan, companyName, fivIconSpan);

  const jobTitle = createHTMLElement('h1', 'job-title', null, 'Title');
  const jobDesc = createHTMLElement('p', 'job-desc', null, 'DESC');
  const jobSalary = createHTMLElement('span', 'job-salary', null, 'Salary');

  appendChildren(middleSec, jobTitle, jobDesc, jobSalary);

  const jobDate = createHTMLElement('span', 'job-date', null, 'DAte');
  const jobType = createHTMLElement('span', 'job-type', null, 'Type');

  const jobLink = createHTMLElement('a', 'job-link');
  jobLink.setAttribute('href', 'Link');

  const applyBtn = createHTMLElement('button', 'apply-btn', null, 'Apply');

  appendChildren(jobLink, applyBtn);

  appendChildren(bottomSec, jobDate, jobType, jobLink);

  appendChildren(card, topSec, middleSec, bottomSec);

  return card;
};

module.exports = createCard;
