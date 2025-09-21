
const app = document.getElementById('app');

const myInfo = {
  name: 'Haorong Rong',
  bio: 'Recent graduate student from the University of California, Santa Cruz with a B.S. in Computer Science: Computer Game Design. <br>Know C#, C++, Python, JavaScript, Phaser 3, Unity.',
  contact: {
    email: 'sig37672jddh@gmail.com',
    github: 'https://github.com/hrong1',
    LinkedIn: 'http://www.linkedin.com/in/haorong-rong-8a9460314',
  }
};

// Name info
const nameElement = document.createElement('h1');
nameElement.textContent = myInfo.name;
app.append(nameElement);

// bio info
const bioElement = document.createElement('p');
bioElement.innerHTML = myInfo.bio;
bioElement.style.maxWidth = '800px';
app.append(bioElement);

// contact info
const contactContainer = document.createElement('div');
const contactTitle = document.createElement('h2');
contactTitle.textContent = 'Contact Info';
const contactList = document.createElement('ul');
const emailItem = document.createElement('li');
const emailLink = document.createElement('a');
emailLink.textContent = myInfo.contact.email;
emailLink.href = `mailto:${myInfo.contact.email}`;
emailItem.append('Email: ', emailLink); 
const githubItem = document.createElement('li');
const githubLink = document.createElement('a');
githubLink.textContent =  myInfo.contact.github;
githubLink.href = myInfo.contact.github;
githubLink.target =  myInfo.contact.github;
githubItem.append('Github Link: ', githubLink);
contactList.append(emailItem);
contactList.append(githubItem);
contactContainer.append(contactTitle);
contactContainer.append(contactList);
app.append(contactContainer);



async function loadUserData() {
  try {
    const response = await fetch('./data/project.json');
    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }
    const portfolioItems = await response.json();
    console.log(portfolioItems);
    displayUserInfo(portfolioItems);

  } catch (error) {
    console.error('Get data error:', error);
  }
}

function displayUserInfo(portfolioItems) {
    const portfolioContainer = document.createElement('div');
    const portfolioTitle = document.createElement('h2');
    portfolioTitle.textContent = 'Portfolio';
    app.append(portfolioTitle);
    portfolioItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-card'; 
        //title
        const titleElement = document.createElement('h3');
        titleElement.textContent = item.title;
        // image
        const imageElement = document.createElement('img');
        imageElement.src = item.imageUrl;
        imageElement.alt = item.description;
        imageElement.style.width = '600px';
        imageElement.style.height = 'auto';
        // text description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;
        descriptionElement.style.maxWidth = '500px';
        //project link
        const projectItem = document.createElement('li');
        const projectLink = document.createElement('a');
        projectLink.textContent = item.link;
        projectLink.href = item.link;
        projectLink.target = item.link;
        projectItem.append('Project Link: ', projectLink);
        // add up
        card.append(titleElement);
        card.append(imageElement);
        card.append(descriptionElement);
        card.append(projectItem)
        portfolioContainer.append(card);
    });
    app.append(portfolioContainer);
}

loadUserData();

