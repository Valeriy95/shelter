'use strict'

const burgerMenuBtn = document.querySelector('.burger-menu');
burgerMenuBtn.addEventListener('click', burgerMenuOpenClose);
const burgerLink = document.querySelectorAll('.burger-menu-list__link');
burgerLink.forEach(burgerLink => burgerLink.addEventListener('click', burgerMenuOpenClose));
const burgerLinkActive = document.querySelector('.burger-menu-list_link_active');
burgerLinkActive.addEventListener('click', burgerMenuOpenClose);
const burgerMenuFon = document.querySelector('.burger-menu-fon');
burgerMenuFon.addEventListener('click', burgerMenuOpenClose);

const burgerContainer = document.querySelector('.burger-menu-container');
const html = document.querySelector('html');

function burgerMenuOpenClose () {
   burgerMenuBtn.classList.toggle('rotate-icon');
   burgerContainer.classList.toggle('open-burger-menu');
   burgerMenuFon.classList.toggle('hidden');
   html.classList.toggle('overflow'); 
}


// Пагинация 

let pets = [
   {
     "name": "Jennifer",
     "img": "../../accects/img/pets-jennifer.png",
     "type": "Dog",
     "breed": "Labrador",
     "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
     "age": "2 months",
     "inoculations": ["none"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Sophia",
     "img": "../../accects/img/pets-sohnia.png",
     "type": "Dog",
     "breed": "Shih tzu",
     "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
     "age": "1 month",
     "inoculations": ["parvovirus"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Woody",
     "img": "../../accects/img/pets-woody.png",
     "type": "Dog",
     "breed": "Golden Retriever",
     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
     "age": "3 years 6 months",
     "inoculations": ["adenovirus", "distemper"],
     "diseases": ["right back leg mobility reduced"],
     "parasites": ["none"]
   },
   {
     "name": "Scarlett",
     "img": "../../accects/img/pets-scarlet.png",
     "type": "Dog",
     "breed": "Jack Russell Terrier",
     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
     "age": "3 months",
     "inoculations": ["parainfluenza"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Katrine",
     "img": "../../accects/img/pets-katrine.png",
     "type": "Cat",
     "breed": "British Shorthair",
     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
     "age": "6 months",
     "inoculations": ["panleukopenia"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Timmy",
     "img": "../../accects/img/pets-timmy.png",
     "type": "Cat",
     "breed": "British Shorthair",
     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
     "age": "2 years 3 months",
     "inoculations": ["calicivirus", "viral rhinotracheitis"],
     "diseases": ["kidney stones"],
     "parasites": ["none"]
   },
   {
     "name": "Freddie",
     "img": "../../accects/img/pets-freddie.png",
     "type": "Cat",
     "breed": "British Shorthair",
     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
     "age": "2 months",
     "inoculations": ["rabies"],
     "diseases": ["none"],
     "parasites": ["none"]
   },
   {
     "name": "Charly",
     "img": "../../accects/img/pets-charly.png",
     "type": "Dog",
     "breed": "Jack Russell Terrier",
     "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
     "age": "8 years",
     "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
     "diseases": ["deafness", "blindness"],
     "parasites": ["lice", "fleas"]
   }
 ];


let arrayPets = [];
let arrayCard1280 = [];
let arrayCard768 = [];
let arrayCard320 = [];
let arrayPetsContainer768, arrayPetsContainer320; 
const cardImg1 = document.querySelector('.main__card-1__img');
const cardTitle1 = document.querySelector('.main__card-1__title');
const cardImg2 = document.querySelector('.main__card-2__img');
const cardTitle2 = document.querySelector('.main__card-2__title');
const cardImg3 = document.querySelector('.main__card-3__img');
const cardTitle3 = document.querySelector('.main__card-3__title');
const cardImg4 = document.querySelector('.main__card-4__img');
const cardTitle4 = document.querySelector('.main__card-4__title');
const cardImg5 = document.querySelector('.main__card-5__img');
const cardTitle5 = document.querySelector('.main__card-5__title');
const cardImg6 = document.querySelector('.main__card-6__img');
const cardTitle6 = document.querySelector('.main__card-6__title');
const cardImg7 = document.querySelector('.main__card-7__img');
const cardTitle7 = document.querySelector('.main__card-7__title');
const cardImg8 = document.querySelector('.main__card-8__img');
const cardTitle8 = document.querySelector('.main__card-8__title');
const currentPage = document.querySelector('.main-paginator__btn-now-text');
const paginatorBtnNext = document.querySelector('.main-paginator__btn-next');
const paginatorBtnEnd = document.querySelector('.main-paginator__btn-end');
const paginatorBtnNextText = document.querySelector('.main-paginator__btn-next-text');
const paginatorBtnEndText = document.querySelector('.main-paginator__btn-end-text');
const paginatorBtnStart = document.querySelector('.main-paginator__btn-start');
const paginatorBtnLast = document.querySelector('.main-paginator__btn-last');
const paginatorBtnLastText = document.querySelector('.main-paginator__btn-last-text');
const paginatorBtnStartText = document.querySelector('.main-paginator__btn-start-text');

function sortArr(array) {
  return array.sort(() => Math.random() - 0.5);
}

for(let i = 0; i < 6; i++) {
  arrayPets.push(pets);
}

arrayPetsContainer768 = arrayPets.flat();
arrayPetsContainer320 = arrayPets.flat();

for(let i = 0; i < 6; i++) {
  arrayCard1280.push(arrayPetsContainer768.slice().splice(0,8))
}

for(let i = 0; i < 6; i++) {
  sortArr(arrayCard1280[i])
}


for(let i = 0; i < 8; i++) {
  arrayCard768.push(arrayPetsContainer768.splice(0,6));
}

for(let i = 0; i < 8; i++) {
  sortArr(arrayCard768[i])
}

for(let i = 0; i < 16; i++) {
  arrayCard320.push(arrayPetsContainer320.splice(0,3));
}

for(let i = 0; i < 16; i++) {
  sortArr(arrayCard320[i])
}

let n = 0;

function showPaginatorStartPage () {
  paginatorBtnNext.classList.remove('disabled');
  paginatorBtnEnd.classList.remove('disabled');
  paginatorBtnNextText.classList.remove('disabled');
  paginatorBtnEndText.classList.remove('disabled');
  paginatorBtnNext.classList.add('active');
  paginatorBtnEnd.classList.add('active');
  paginatorBtnStart.classList.add('disabled');
  paginatorBtnLast.classList.add('disabled');
  paginatorBtnStartText.classList.add('disabled');
  paginatorBtnLastText.classList.add('disabled');
  paginatorBtnStart.classList.remove('active');
  paginatorBtnLast.classList.remove('active');
}

function showPaginatorBtnStartLast () {
  paginatorBtnStart.classList.remove('disabled');
  paginatorBtnLast.classList.remove('disabled');
  paginatorBtnStartText.classList.remove('disabled');
  paginatorBtnLastText.classList.remove('disabled');
  paginatorBtnStart.classList.add('active');
  paginatorBtnLast.classList.add('active');
}

function showPaginatorBtnNextEnd () {
  paginatorBtnNext.classList.remove('disabled');
  paginatorBtnEnd.classList.remove('disabled');
  paginatorBtnNextText.classList.remove('disabled');
  paginatorBtnEndText.classList.remove('disabled');
  paginatorBtnNext.classList.add('active');
  paginatorBtnEnd.classList.add('active');
}

function inactivePaginatorBtnNextEnd () {
  paginatorBtnNext.classList.add('disabled');
  paginatorBtnEnd.classList.add('disabled');
  paginatorBtnNextText.classList.add('disabled');
  paginatorBtnEndText.classList.add('disabled');
  paginatorBtnNext.classList.remove('active');
  paginatorBtnEnd.classList.remove('active');
}

function showCard () {
  if (window.innerWidth >= 1280) {
    if (n < 0) {
      n = 0;
    }
    if(n == 0) {
      showPaginatorStartPage();
    }
    if(n >= 1) {
      showPaginatorBtnStartLast();
    }
    if(n == arrayCard1280.length - 2) {
      showPaginatorBtnNextEnd();
    }
    if (n == arrayCard1280.length - 1) {
      inactivePaginatorBtnNextEnd();
    }
    if (n >= arrayCard1280.length) {
      n = 5;
      return 
    } else {
      cardImg1.style.backgroundImage = `url(${arrayCard1280[n][0].img})`;
      cardTitle1.innerText = `${arrayCard1280[n][0].name}`;
      cardImg2.style.backgroundImage = `url(${arrayCard1280[n][1].img})`;
      cardTitle2.innerText = `${arrayCard1280[n][1].name}`;
      cardImg3.style.backgroundImage = `url(${arrayCard1280[n][2].img})`;
      cardTitle3.innerText = `${arrayCard1280[n][2].name}`;
      cardImg4.style.backgroundImage = `url(${arrayCard1280[n][3].img})`;
      cardTitle4.innerText = `${arrayCard1280[n][3].name}`;
      cardImg5.style.backgroundImage = `url(${arrayCard1280[n][4].img})`;
      cardTitle5.innerText = `${arrayCard1280[n][4].name}`;
      cardImg6.style.backgroundImage = `url(${arrayCard1280[n][5].img})`;
      cardTitle6.innerText = `${arrayCard1280[n][5].name}`;
      cardImg7.style.backgroundImage = `url(${arrayCard1280[n][6].img})`;
      cardTitle7.innerText = `${arrayCard1280[n][6].name}`;
      cardImg8.style.backgroundImage = `url(${arrayCard1280[n][7].img})`;
      cardTitle8.innerText = `${arrayCard1280[n][7].name}`;
      currentPage.innerText = `${n + 1}`
    }
  }

  if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    if (n < 0 ) {
      n = 0;
    }
    if(n == 0) {
      showPaginatorStartPage();
    }
    if(n >= 1) {
      showPaginatorBtnStartLast();
    }
    if(n == arrayCard768.length - 2) {
      showPaginatorBtnNextEnd();
    }
    if(n == arrayCard768.length - 1) {
      inactivePaginatorBtnNextEnd();
    }
    if(n >= arrayCard768.length) {
      n = 7;
      return 
    } else {
      cardImg1.style.backgroundImage = `url(${arrayCard768[n][0].img})`;
      cardTitle1.innerText = `${arrayCard768[n][0].name}`;
      cardImg2.style.backgroundImage = `url(${arrayCard768[n][1].img})`;
      cardTitle2.innerText = `${arrayCard768[n][1].name}`;
      cardImg3.style.backgroundImage = `url(${arrayCard768[n][2].img})`;
      cardTitle3.innerText = `${arrayCard768[n][2].name}`;
      cardImg4.style.backgroundImage = `url(${arrayCard768[n][3].img})`;
      cardTitle4.innerText = `${arrayCard768[n][3].name}`;
      cardImg5.style.backgroundImage = `url(${arrayCard768[n][4].img})`;
      cardTitle5.innerText = `${arrayCard768[n][4].name}`;
      cardImg6.style.backgroundImage = `url(${arrayCard768[n][5].img})`;
      cardTitle6.innerText = `${arrayCard768[n][5].name}`;
      currentPage.innerText = `${n + 1}`
    }
  }

  if (window.innerWidth > 319 && window.innerWidth <= 767) {
    if (n < 0 ) {
      n = 0;
    }
    if(n == 0) {
      showPaginatorStartPage();
    }
    if(n >= 1) {
      showPaginatorBtnStartLast();
    }
    if(n == arrayCard320.length - 2) {
      showPaginatorBtnNextEnd();
    }
    if(n == arrayCard320.length - 1) {
      inactivePaginatorBtnNextEnd();
    }
    if(n >= arrayCard320.length) {
      n = 15;
      return 
    } else {
      cardImg1.style.backgroundImage = `url(${arrayCard320[n][0].img})`;
      cardTitle1.innerText = `${arrayCard320[n][0].name}`;
      cardImg2.style.backgroundImage = `url(${arrayCard320[n][1].img})`;
      cardTitle2.innerText = `${arrayCard320[n][1].name}`;
      cardImg3.style.backgroundImage = `url(${arrayCard320[n][2].img})`;
      cardTitle3.innerText = `${arrayCard320[n][2].name}`;
      currentPage.innerText = `${n + 1}`
    }
  }
}

showCard();


paginatorBtnNext.addEventListener('click', function () {
  n++;
  showCard();
});

paginatorBtnLast.addEventListener('click', function () {
  n--;
  showCard();
});

paginatorBtnEnd.addEventListener('click', function () {
  if (window.innerWidth >= 1280) {
    n = 5;
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    n = 7;
  } else if (window.innerWidth > 319 && window.innerWidth <= 767) {
    n = 15;
  }
  showCard();
});

paginatorBtnStart.addEventListener('click', function () {
  n = 0;
  showCard();
});

window.addEventListener('resize', function () {
  showPaginatorBtnNextEnd();
  showCard();
}) 


// Реализация попап

const card1 = document.querySelector('.main__card-1');
const card2 = document.querySelector('.main__card-2');
const card3 = document.querySelector('.main__card-3');
const card4 = document.querySelector('.main__card-4');
const card5 = document.querySelector('.main__card-5');
const card6 = document.querySelector('.main__card-6');
const card7 = document.querySelector('.main__card-7');
const card8 = document.querySelector('.main__card-8');

const modalWindow = document.querySelector('.modal-window-container');
const modalIcon = document.querySelector('.modal-window__icon');
const modalIconText = document.querySelector('.modal-window__text');


const modalTitle = document.querySelector('.modal-window__title');
const modalBreed = document.querySelector('.modal-window__breed');
const modalDescribe = document.querySelector('.modal-window__describe');
const modalImage = document.querySelector('.modal-window__image');
const age = document.querySelector('.age');
const inoculations = document.querySelector('.inoculations');
const diseases = document.querySelector('.diseases');
const parasites = document.querySelector('.parasites');

card1.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  if (window.innerWidth >= 1280) {
    showModalWindow(arrayCard1280[n][0]);
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    showModalWindow(arrayCard768[n][0]);
  } else if (window.innerWidth > 319 && window.innerWidth <= 767) {
    showModalWindow(arrayCard320[n][0]);
  }
});

card2.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  if (window.innerWidth >= 1280) {
    showModalWindow(arrayCard1280[n][1]);
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    showModalWindow(arrayCard768[n][1]);
  } else if (window.innerWidth > 319 && window.innerWidth <= 767) {
    showModalWindow(arrayCard320[n][1]);
  }
});

card3.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  if (window.innerWidth >= 1280) {
    showModalWindow(arrayCard1280[n][2]);
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    showModalWindow(arrayCard768[n][2]);
  } else if (window.innerWidth > 319 && window.innerWidth <= 767) {
    showModalWindow(arrayCard320[n][2]);
  }
});

card4.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  if (window.innerWidth >= 1280) {
    showModalWindow(arrayCard1280[n][3]);
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    showModalWindow(arrayCard768[n][3]);
  } else if (window.innerWidth > 319 && window.innerWidth <= 767) {
    showModalWindow(arrayCard320[n][3]);
  }
});

card5.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  if (window.innerWidth >= 1280) {
    showModalWindow(arrayCard1280[n][4]);
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    showModalWindow(arrayCard768[n][4]);
  } else if (window.innerWidth > 319 && window.innerWidth <= 767) {
    showModalWindow(arrayCard320[n][4]);
  }
});

card6.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  if (window.innerWidth >= 1280) {
    showModalWindow(arrayCard1280[n][5]);
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    showModalWindow(arrayCard768[n][5]);
  } else if (window.innerWidth > 319 && window.innerWidth <= 767) {
    showModalWindow(arrayCard320[n][5]);
  }
});

card7.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  if (window.innerWidth >= 1280) {
    showModalWindow(arrayCard1280[n][6]);
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    showModalWindow(arrayCard768[n][6]);
  } else if (window.innerWidth > 319 && window.innerWidth <= 767) {
    showModalWindow(arrayCard320[n][6]);
  }
});

card8.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  if (window.innerWidth >= 1280) {
    showModalWindow(arrayCard1280[n][7]);
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    showModalWindow(arrayCard768[n][7]);
  } else if (window.innerWidth > 319 && window.innerWidth <= 767) {
    showModalWindow(arrayCard320[n][7]);
  }
});


function showModalWindow (link) {
  modalTitle.innerHTML = link.name;
  modalBreed.innerHTML = `${link.type} - ${link.breed}`;
  modalDescribe.innerHTML = link.description;
  age.innerHTML = link.age;
  inoculations.innerHTML = link.inoculations;
  diseases.innerHTML = link.diseases;
  parasites.innerHTML = link.parasites;
  modalImage.style.backgroundImage = `url(${link.img})`;
}

modalWindow.addEventListener('click', function (e) {
  if (e.target == modalWindow || e.target == modalIcon  || e.target == modalIconText) {
    modalWindow.classList.add('hidden');
    html.classList.toggle('overflow-hidden');
  }
}); 
