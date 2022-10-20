/*
* Function that initiates the whole Game application.
*/

let scoureCounter;


//DOM elements
const chestsBox = document.getElementById('chests');
const refreshBtn = document.getElementById('refresh-button');
const scorue = document.getElementById('scoure');



//Events Listner
refreshBtn.addEventListener('click',refresh)



init();


function init(){
  scoureCounter = 0;
  initGameUI();

}

function initGameUI(){
  // Call functions that creates the Game UI
  initChests();

  initChestEventListeners();

  initScoreBoard();

}

function initChests(){
  const html = `
    <img src='./images/chest-closed.png' alt='closed-box' />

    <img src='./images/chest-closed.png' alt='closed-box' />

    <img src='./images/chest-closed.png' alt='closed-box' />

  `;

  chestsBox.insertAdjacentHTML('beforeend',html);
}

function initScoreBoard(){
  scorue.textContent = 'Scoure: ' + scoureCounter;
}

function initRefreshButton(){
}

function initChestEventListeners() {
  for (let img of chestsBox.children){
    img.addEventListener('click',chestClicked);
  }
}

function placeTreassure(){
  return Math.floor(Math.random() * 3);
}

function chestClicked(e){
  const image = e.target;

  const chestOpenPath = './images/chest-open.png';
  const crystalScullPath = './images/crystal-scull.png';
  
  const treasure = placeTreassure();

  if (image === chestsBox.children[treasure]){
    image.src = crystalScullPath;
    scoureCounter += 5;
    initScoreBoard();
  }
  else{
    image.src = chestOpenPath;
  }

  removeChestEvents();
}

function getImageFromPexels(){
  // make a request towards pexels API and get 1 Diamond image
}

function refresh(){
  chestsBox.innerHTML = '';
  initGameUI();
}

function removeChestEvents(){
  for (let img of chestsBox.children){
    img.removeEventListener('click',chestClicked);
  }
}