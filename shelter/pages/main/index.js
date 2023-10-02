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


// 2. Слайдер 

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

const wrapper = document.querySelectorAll('.card-wrapper');
let isOn = true;
let currentWrapper = 0;

function changeCard (num) {
 currentWrapper = (num + wrapper.length) % wrapper.length;
}

function hiddenCard (line) {
 isOn = false;
 wrapper[currentWrapper].classList.add(line);
 wrapper[currentWrapper].addEventListener('animationend', function () {
   this.classList.remove('current', line);
 } )
}

function showCard (line) {
 wrapper[currentWrapper].classList.add('next', line);
 wrapper[currentWrapper].addEventListener('animationend', function () {
   this.classList.remove('next', line);
   this.classList.add('current');
   isOn = true;
 })
}

function previousCard (num) {
 showCardPrev(num);
 hiddenCard('following');
 changeCard(num - 1);
 showCard('from-previous');
}

function nextCard (num) {
 showCardNext(num);
 hiddenCard('previous');
 changeCard(num + 1);
 showCard('from-following');
}

let arrayNum = [0, 1, 2, 3, 4, 5, 6, 7];
let randomNumber, numberCard;
let num = 8;

let firstPet, secondPet, thirdPet, fourthPet, fifthPet, sixthPet, seventhPet, eigthPet, ninthPet;
let counter = 0;

const card1 = document.querySelector('.slider__card-1');
const card1Name = document.querySelector('.slider__card-1__name');
const card1Image = document.querySelector('.slider__card-1__image');
const card2Name = document.querySelector('.slider__card-2__name');
const card2Image = document.querySelector('.slider__card-2__image');
const card3Name = document.querySelector('.slider__card-3__name');
const card3Image = document.querySelector('.slider__card-3__image');   
const card4Name = document.querySelector('.slider__card-4__name');
const card4Image = document.querySelector('.slider__card-4__image');
const card5Name = document.querySelector('.slider__card-5__name');
const card5Image = document.querySelector('.slider__card-5__image');
const card6Name = document.querySelector('.slider__card-6__name');
const card6Image = document.querySelector('.slider__card-6__image');
const card7Name = document.querySelector('.slider__card-7__name');
const card7Image = document.querySelector('.slider__card-7__image');
const card8Name = document.querySelector('.slider__card-8__name');
const card8Image = document.querySelector('.slider__card-8__image');
const card9Name = document.querySelector('.slider__card-9__name');
const card9Image = document.querySelector('.slider__card-9__image');

function getRandomNum() {
 randomNumber = Math.floor(Math.random() * num);
 numberCard = arrayNum.splice(randomNumber, 1);
 num--;
 return numberCard;
};


function starCardPets () {
 firstPet = getRandomNum();
 secondPet = getRandomNum();
 thirdPet = getRandomNum();
 card1Name.innerText = `${pets[firstPet].name}`;
 card1Image.style.backgroundImage = `url(${pets[firstPet].img})`;
 card2Name.innerText = `${pets[secondPet].name}`;
 card2Image.style.backgroundImage = `url(${pets[secondPet].img})`;
 card3Name.innerText = `${pets[thirdPet].name}`;
 card3Image.style.backgroundImage = `url(${pets[thirdPet].img})`;
}

starCardPets ();

function showCardNext (cur) {

 arrayNum = [0, 1, 2, 3, 4, 5, 6, 7];
 if (cur == 2) {
   if (seventhPet == undefined || eigthPet == undefined || ninthPet == undefined) {
     return
   } else {
     let a = arrayNum.indexOf(+seventhPet.join());
     arrayNum.splice(a, 1);
     let b = arrayNum.indexOf(+eigthPet.join());
     arrayNum.splice(b, 1);
     let c = arrayNum.indexOf(+ninthPet.join());
     arrayNum.splice(c, 1);
   }
   num = 5;
   firstPet = getRandomNum();
   secondPet = getRandomNum();
   thirdPet = getRandomNum();
   card1Name.innerText = `${pets[firstPet].name}`;
   card1Image.style.backgroundImage = `url(${pets[firstPet].img})`;
   card2Name.innerText = `${pets[secondPet].name}`;
   card2Image.style.backgroundImage = `url(${pets[secondPet].img})`;
   card3Name.innerText = `${pets[thirdPet].name}`;
   card3Image.style.backgroundImage = `url(${pets[thirdPet].img})`;
 }

 if (cur == 0) {
   if (firstPet == undefined || secondPet == undefined || thirdPet == undefined) {
     return
   } else {
     let a = arrayNum.indexOf(+firstPet.join());
     arrayNum.splice(a, 1);
     let b = arrayNum.indexOf(+secondPet.join());
     arrayNum.splice(b, 1);
     let c = arrayNum.indexOf(+thirdPet.join());
     arrayNum.splice(c, 1);
   }

   num = 5;
   fourthPet = getRandomNum();
   fifthPet = getRandomNum();
   sixthPet = getRandomNum();
   card4Name.innerText = `${pets[fourthPet].name}`;
   card4Image.style.backgroundImage = `url(${pets[fourthPet].img})`;
   card5Name.innerText = `${pets[fifthPet].name}`;
   card5Image.style.backgroundImage = `url(${pets[fifthPet].img})`;
   card6Name.innerText = `${pets[sixthPet].name}`;
   card6Image.style.backgroundImage = `url(${pets[sixthPet].img})`
 }

 if (cur == 1) {
   if (fourthPet == undefined || fifthPet == undefined || sixthPet == undefined) {
     return;
   } else {
     let a = arrayNum.indexOf(+fourthPet.join());
     arrayNum.splice(a, 1);
     let b = arrayNum.indexOf(+fifthPet.join());
     arrayNum.splice(b, 1);
     let c = arrayNum.indexOf(+sixthPet.join());
     arrayNum.splice(c, 1);
   }

   num = 5;
   seventhPet = getRandomNum();
   eigthPet = getRandomNum();
   ninthPet = getRandomNum();
   card7Name.innerText = `${pets[seventhPet].name}`;
   card7Image.style.backgroundImage = `url(${pets[seventhPet].img})`;
   card8Name.innerText = `${pets[eigthPet].name}`;
   card8Image.style.backgroundImage = `url(${pets[eigthPet].img})`;
   card9Name.innerText = `${pets[ninthPet].name}`;
   card9Image.style.backgroundImage = `url(${pets[ninthPet].img})`;
 }
}

function showCardPrev (cur) {
   
 arrayNum = [0, 1, 2, 3, 4, 5, 6, 7];
  
 if (cur == 1) {
   if (fourthPet == undefined || fifthPet == undefined || sixthPet == undefined) {
       return
   } else {
     let a = arrayNum.indexOf(+fourthPet.join());
     arrayNum.splice(a, 1);
     let b = arrayNum.indexOf(+fifthPet.join());
     arrayNum.splice(b, 1);
     let c = arrayNum.indexOf(+sixthPet.join());
     arrayNum.splice(c, 1);
   }

   num = 5;
   firstPet = getRandomNum();
   secondPet = getRandomNum();
   thirdPet = getRandomNum();
   card1Name.innerText = `${pets[firstPet].name}`;
   card1Image.style.backgroundImage = `url(${pets[firstPet].img})`;
   card2Name.innerText = `${pets[secondPet].name}`;
   card2Image.style.backgroundImage = `url(${pets[secondPet].img})`;
   card3Name.innerText = `${pets[thirdPet].name}`;
   card3Image.style.backgroundImage = `url(${pets[thirdPet].img})`;
 }
   
 if (cur == 2) {
   if (ninthPet == undefined || eigthPet == undefined || seventhPet == undefined) {
     return
   } else {
     let a = arrayNum.indexOf(+seventhPet.join());
     arrayNum.splice(a, 1);
     let b = arrayNum.indexOf(+eigthPet.join());
     arrayNum.splice(b, 1);
     let c = arrayNum.indexOf(+ninthPet.join());
     arrayNum.splice(c, 1);
   }

   num = 5;
   fourthPet = getRandomNum();
   fifthPet = getRandomNum();
   sixthPet = getRandomNum();
   card4Name.innerText = `${pets[fourthPet].name}`;
   card4Image.style.backgroundImage = `url(${pets[fourthPet].img})`;
   card5Name.innerText = `${pets[fifthPet].name}`;
   card5Image.style.backgroundImage = `url(${pets[fifthPet].img})`;
   card6Name.innerText = `${pets[sixthPet].name}`;
   card6Image.style.backgroundImage = `url(${pets[sixthPet].img})`
 }
   
 if (cur == 0) {
   if (firstPet == undefined || secondPet == undefined || thirdPet == undefined) {
       return;
   } else {
     let a = arrayNum.indexOf(+firstPet.join());
     arrayNum.splice(a, 1);
     let b = arrayNum.indexOf(+secondPet.join());
     arrayNum.splice(b, 1);
     let c = arrayNum.indexOf(+thirdPet.join());
     arrayNum.splice(c, 1);
   }

   num = 5;
   seventhPet = getRandomNum();
   eigthPet = getRandomNum();
   ninthPet = getRandomNum();
   card7Name.innerText = `${pets[seventhPet].name}`;
   card7Image.style.backgroundImage = `url(${pets[seventhPet].img})`;
   card8Name.innerText = `${pets[eigthPet].name}`;
   card8Image.style.backgroundImage = `url(${pets[eigthPet].img})`;
   card9Name.innerText = `${pets[ninthPet].name}`;
   card9Image.style.backgroundImage = `url(${pets[ninthPet].img})`;
 }
}


const nextBtn = document.querySelector('.slider__btn-right');
nextBtn.addEventListener('click', function () {
   if(isOn) {
     nextCard(currentWrapper);
     counter++;
   }
});

function sliderNext () {
 if (counter == 2) { 
   counter = 1;
 }
}


const previousBtn = document.querySelector('.slider__btn-left');
previousBtn.addEventListener('click', function () {
  if(isOn) {
    previousCard(currentWrapper);
    counter--;
  }
});

function sliderPrev () {
 if (counter == -1) {
   counter = 0;
 }
}



// Реализация попап

// const card1 = document.querySelector('.slider__card-1');
const card2 = document.querySelector('.slider__card-2');
const card3 = document.querySelector('.slider__card-3');
const card4 = document.querySelector('.slider__card-4');
const card5 = document.querySelector('.slider__card-5');
const card6 = document.querySelector('.slider__card-6');
const card7 = document.querySelector('.slider__card-7');
const card8 = document.querySelector('.slider__card-8');
const card9 = document.querySelector('.slider__card-9');

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
  showModalWindow(firstPet);
});

card2.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  showModalWindow(secondPet);
});

card3.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  showModalWindow(thirdPet);
});

card4.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  showModalWindow(fourthPet);
});

card5.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  showModalWindow(fifthPet);
});

card6.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  showModalWindow(sixthPet);
});

card7.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  showModalWindow(seventhPet);
});

card8.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  showModalWindow(eigthPet);
});

card9.addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
  html.classList.toggle('overflow-hidden');
  showModalWindow(ninthPet);
});


function showModalWindow (link) {
  modalTitle.innerHTML = pets[link].name;
  modalBreed.innerHTML = `${pets[link].type} - ${pets[link].breed}`;
  modalDescribe.innerHTML = pets[link].description;
  age.innerHTML = pets[link].age;
  inoculations.innerHTML = pets[link].inoculations;
  diseases.innerHTML = pets[link].diseases;
  parasites.innerHTML = pets[link].parasites;
  modalImage.style.backgroundImage = `url(${pets[link].img})`;
}

modalWindow.addEventListener('click', function (e) {
  if (e.target == modalWindow || e.target == modalIcon  || e.target == modalIconText) {
    modalWindow.classList.add('hidden');
    html.classList.toggle('overflow-hidden');
  }
}); 

console.log("Реализация burger menu на обеих страницах: +26\nпри ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2\nпри нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов: +4\nвысота адаптивного меню занимает всю высоту экрана: +2\nпри повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно: +4\nбургер-иконка создана при помощи html+css, без использования изображений: +2\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню: +2\nпри клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно: +2\nрасположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая: +2\nобласть, свободная от бургер-меню, затемняется: +2\nстраница под бургер-меню не прокручивается: +4\nРеализация слайдера-карусели на странице Main: +36\nпри нажатии на стрелки происходит переход к новому блоку элементов: +4\nсмена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется): +4\nслайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек: +4\nпри переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px): +4\nкаждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:\nв текущем блоке слайда карточки с питомцами не повторяются: +4\nв следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде: +4\nсохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного: +4\nпри каждой перезагрузке страницы формируется новая последовательность карточек: +2\nгенерация наборов карточек происходит на основе 8 объектов с данными о животными: +2\nпри изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования): +4\nРеализация пагинации на странице Pets: +36\nпри перезагрузке страницы всегда открывается первая страница пагинации: +2\nпри нажатии кнопок > или < открывается следующая или предыдущая страница пагинации соответственно: +2\nпри нажатии кнопок >> или << открывается последняя или первая страница пагинации соответственно: +2\nпри открытии первой страницы кнопки << и < неактивны: +2\nпри открытии последней страницы кнопки > и >> неактивны: +2\nв кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный: +2\nкаждая страница пагинации содержит псевдослучайный набор питомцев, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:\nпри загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз: +4\nпри каждой перезагрузке страницы формируется новый массив со случайной последовательностью: +4\nкарточки питомцев не должны повторяться на одной странице: +4\nпри переключении страницы данные меняются (для >1280px меняется порядок карточек, для остальных - меняется набор и порядок карточек): +4\nпри неизменных размерах области пагинации, в том числе размерах окна браузера, и без перезагрузки страницы, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы: +2\nобщее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц: +2\nпри изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации): +4\nРеализация попап на обеих страницах: +12\nпопап появляется при нажатии на любое место карточки с описанием конкретного животного: +2\nчасть страницы вне попапа затемняется: +2\nпри открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным: +2\nпри нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается, при этом при нажатии на сам попап ничего не происходит: +2\nкнопка с крестиком интерактивная: +2\nокно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом: +2\nScore 100/100");