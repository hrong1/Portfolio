"use strict"

const app = document.getElementById('app');

const myInfo = {
  name: 'Haorong Rong',
  intro: 'Recent graduate student from the University of California, Santa Cruz with a B.S. in Computer Science: Computer Game Design. <br>Know C#, C++, Python, JavaScript, Phaser 3, Unity.',
  contact: {
    email: 'sig37672jddh@gmail.com',
    github: 'https://github.com/hrong1',
    LinkedIn: 'http://www.linkedin.com/in/haorong-rong-8a9460314',
  }
};

function loadMyInfo(info) {
  const infoHTML = `
    <h1>${info.name}</h1>
    <p style="max-width: auto;">${info.intro}</p>
    <div>
      <h2>Contact Info</h2>
      <ul>
        <li>Email: <a href="mailto:${info.contact.email}">${info.contact.email}</a></li>
        <li>Github Link: <a href="${info.contact.github}" target="_blank">${info.contact.github}</a></li>
        <li>LinkedIn Link: <a href="${info.contact.LinkedIn}" target="_blank">${info.contact.LinkedIn}</a></li>
      </ul>
    </div>
  `;

  app.innerHTML += infoHTML; 
}

async function loadProjectData() {
  try {
    const response = await fetch('./data/project.json');
    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }
    const portfolioItems = await response.json();
    displayProjectInfo(portfolioItems);

  } catch (error) {
    console.error('Get data error:', error);
  }
}

function displayProjectInfo(portfolioItems) {
  const portfolioHTML = portfolioItems.map(item => {
    const tools = item.tool.join(', ');
    const contributions = item.contribute.map(c => `<li>${c}</li>`).join('');
    const repositoryLinkHTML = item.repositoryLink.startsWith('http') 
      ? `<p class="project-detail"><strong>Repository Link:</strong> <a href="${item.repositoryLink}" target="_blank">${item.repositoryLink}</a></p>`
      : `<p class="project-detail"><strong>Repository Link:</strong> ${item.repositoryLink}</p>`;
    return `
      <div class="portfolio-card">
        <h3 style="text-align: center;" >${item.title}</h3>
        <img class="portfolio-image" src="${item.imageUrl}" alt="${item.title}" style="width: 800px; height: auto;">
        <p style="margin-bottom: 0.3rem" ><strong>Description:</strong></p>
        <p style="font-style: italic;">${item.description}</p>
        <p class="project-detail"><strong>Project Type:</strong> ${item.projectType}</p>
        <p class="project-detail"><strong>My Role:</strong> ${item.role}</p>
        <p class="project-detail"><strong>Languages & Tools:</strong> ${tools}</p>
        <div>
          <strong>Key Contributions:</strong>
          <ul style="text-align: left; list-style-type: disc;" >
            ${contributions}
          </ul>
        </div>
        <p><strong>Project Link:</strong> <a href="${item.link}" target="_blank">${item.link}</a></p>
        ${repositoryLinkHTML} 
      </div>
    `;
  }).join('');

  app.innerHTML += `
    <div>
      <h2>Portfolio</h2>
      ${portfolioHTML}
    </div>
  `;
}

loadMyInfo(myInfo)
loadProjectData();

