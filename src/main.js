
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
    <p style="max-width: 800px;">${info.intro}</p>
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
  const portfolioHTML = portfolioItems.map(item => `
    <div class="portfolio-card">
      <h3>${item.title}</h3>
      <img src="${item.imageUrl}" alt="${item.description}" style="width: 600px; height: auto;">
      <p style="max-width: 500px;">${item.description}</p>
      <li>Project Link: <a href="${item.link}" target="_blank">${item.link}</a></li>
    </div>
  `).join('');

  app.innerHTML += `
    <div>
      <h2>Portfolio</h2>
      ${portfolioHTML}
    </div>
  `;
}

loadMyInfo(myInfo)
loadProjectData();

