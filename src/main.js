
const appElement = document.getElementById('app');

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

const portfolioItems = [
  {
    title: 'War of the Wilds',
    imageUrl: 'img/War_of_the_Wilds.png',
    description: 'A simplistic third-person dungeon crawler with RPG turn-based combat. Players control a small group of animals to explore the dungeon, defeat different enemies, obtain different rewards through treasure chests, and finally reach the end.',
    link: 'https://store.steampowered.com/app/3689620/War_of_the_Wilds/'
  },
  {
    title: 'Phaser Valley',
    imageUrl: 'img/phaser_valley.png',
    description: 'A 2D Phaser game where players can plant different plants. Plants grow based on sun and water levels. When the plants mature, players can reap them to earn money. Players need to earn enough money to reach the game win condition.',
    link: 'https://hrong1.github.io/CMPM-121-Phaser-Valley/'
  },
  {
    title: 'Sticky Pad',
    imageUrl: 'img/sticky_pad.png',
    description: 'Student solo project. A canvas page that allow user draw on. User can change the linewidth and the color of the line. Canvas is also allow user add emoji in the canvas, user can use the emoji that in the web or add new emoji in. Redo, undo, and clear are available for canvas. And it also allow user export the canvas.',
    link: 'https://hrong1.github.io/cmpm-121-demo-2/'
  },
  {
    title: 'Earn Money',
    imageUrl: 'img/earn_money.png',
    description: 'An idle game similar to cookie clicker. Players can press the button in the center to get money, or use the money to buy different things to make the money grow automatically.',
    link: 'https://hrong1.github.io/cmpm-121-demo-1/'
  }
];

const portfolioTitle = document.createElement('h2');
portfolioTitle.textContent = 'Portfolio';
app.append(portfolioTitle);

const portfolioContainer = document.createElement('div');
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