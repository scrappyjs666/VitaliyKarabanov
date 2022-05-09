import '../styles/style.css'

import './includes/test'
  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import barba from '@barba/core';


  document.querySelectorAll('.header__link').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
  })
})

const darkbtn = document.querySelector('.dark');
const body = document.querySelector('body');
const lightbtn = document.querySelector('.light');
const script = document.querySelector('script')
const videobg = document.querySelector('video')
console.log(videobg.src)
const header = document.querySelector('header');
console.dir(header)

const lightthemebg = '/VitaliyKarabanov/src/images/mylivewallpapers.com-Genshin-Impact.mp4';
const darkthemebg ='/VitaliyKarabanov/src/images/mylivewallpapers.com-Cyberpunk-Girl-Biker.mp4';


//bacground
const canvas = document.querySelector('.canvas');
canvas.width = header.clientWidth;
canvas.height = header.clientHeight;
console.log(header.clientHeight)
console.dir(canvas.clientHeight)
console.dir(canvas)
const circ = document.querySelectorAll('Circle');


const c = canvas.getContext('2d');

class Circle {
  constructor(x, y, radius, dx, dy, color, shadowBlur, shadowColor) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.shadowBlur = shadowBlur;
    this.shadowColor = shadowColor;
  }
  draw() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.shadowBlur = this.shadowBlur;
  c.shadowColor = this.shadowColor;
  c.fill();
  c.stroke();

  this.update();
  }
  update() {
  if (this.x + this.radius > header.clientWidth || this.x - this.radius < 0) {
    this.dx = -this.dx;
  }
  if (this.y + this.radius > header.clientHeight || this.y - this.radius < 0) {
    this.dy = -this.dy;
  }

  this.x += this.dx;
  this.y += this.dy;
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const shadowArray = [
  '#D2E2F9',
  '#C8D6FC',
];

const colorsArray = [
  '#D2E2F9',
  '#C8D6FC',
  '#21337F',
  '#93ACF2',
  '#3458AE',
  '#7699E7',
  '#B6C9FB',
];

const circlesArray = [];

for (let i = 0; i <20; i++) {
  let radius = 2;
  let x = Math.random(20,25)  + radius;
  let y = Math.random(20,25)  + radius;

  let dx = (Math.random() - 0.5) * 10.2;
  let dy = (Math.random() - 0.5) * 2.5;
  
  const colorIndex = randomInteger(1, colorsArray.length - 1);
  const shadowIndex = randomInteger(1, shadowArray.length - 1);
  
  circlesArray.push(new Circle(x, y, radius, dx, dy, colorsArray[colorIndex], 15, shadowArray[shadowIndex]));
}

function animate () {
  requestAnimationFrame(animate);
  
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].draw();
  }
}

animate();


if (localStorage.getItem("darktheme")) {
  body.setAttribute('data-theme', 'dark')
  videobg.setAttribute('src', darkthemebg)
  if(document.querySelector('.swiper-button-next')) {
    document.querySelector('.swiper-button-next').style.backgroundColor = '#fff';
    document.querySelector('.swiper-button-prev').style.backgroundColor = '#fff';
  }
}



const darktheme = (e) => {
  if(e.target === darkbtn && !localStorage.getItem("darktheme")) {
    localStorage.clear();
    if(document.querySelector('.swiper-button-next')) {
      document.querySelector('.swiper-button-next').style.backgroundColor = '#fff';
      document.querySelector('.swiper-button-prev').style.backgroundColor = '#fff';
    }
    body.setAttribute('data-theme', 'dark')
    videobg.setAttribute('src',darkthemebg)
    localStorage.setItem("darktheme", 'darktheme');
  }
}

const lighttheme = (e) => {
  if(e.target === lightbtn && !localStorage.getItem("lighttheme")) {
    localStorage.clear();
    if(document.querySelector('.swiper-button-next')) {
      document.querySelector('.swiper-button-next').style.backgroundColor = '#000';
      document.querySelector('.swiper-button-prev').style.backgroundColor = '#000';
    }
    body.setAttribute('data-theme', 'light')
    videobg.setAttribute('src', lightthemebg)
    localStorage.setItem("lighttheme", "lighttheme");
  }
}

document.addEventListener('click', darktheme)
document.addEventListener('click', lighttheme)
barba.init({
  views: [{
    namespace: 'work',
    beforeEnter() {
      Swiper.use([Navigation]);
      const swiperYoutube = new Swiper('.swiperYoutube', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      const swiperDescr = new Swiper('.swiperDescr', {
        thumbs: {
          swiperDescr: swiperYoutube
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    }
  }]
});


barba.hooks.enter(() => {
document.querySelectorAll('.header__link').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
  })
})

const darkbtn = document.querySelector('.dark');
const body = document.querySelector('body');
const lightbtn = document.querySelector('.light');
const script = document.querySelector('script')
const videobg = document.querySelector('video')
console.log(videobg.src)
const header = document.querySelector('header');
console.dir(header)

const lightthemebg = '/VitaliyKarabanov/src/images/mylivewallpapers.com-Genshin-Impact.mp4';
const darkthemebg ='/VitaliyKarabanov/src/images/mylivewallpapers.com-Cyberpunk-Girl-Biker.mp4';


//bacground
const canvas = document.querySelector('.canvas');
canvas.width = header.clientWidth;
canvas.height = header.clientHeight;
console.log(header.clientHeight)
console.dir(canvas.clientHeight)
console.dir(canvas)
const circ = document.querySelectorAll('Circle');


const c = canvas.getContext('2d');

class Circle {
  constructor(x, y, radius, dx, dy, color, shadowBlur, shadowColor) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.shadowBlur = shadowBlur;
    this.shadowColor = shadowColor;
  }
  draw() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.shadowBlur = this.shadowBlur;
  c.shadowColor = this.shadowColor;
  c.fill();
  c.stroke();

  this.update();
  }
  update() {
  if (this.x + this.radius > header.clientWidth || this.x - this.radius < 0) {
    this.dx = -this.dx;
  }
  if (this.y + this.radius > header.clientHeight || this.y - this.radius < 0) {
    this.dy = -this.dy;
  }

  this.x += this.dx;
  this.y += this.dy;
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const shadowArray = [
  '#D2E2F9',
  '#C8D6FC',
];

const colorsArray = [
  '#D2E2F9',
  '#C8D6FC',
  '#21337F',
  '#93ACF2',
  '#3458AE',
  '#7699E7',
  '#B6C9FB',
];

const circlesArray = [];

for (let i = 0; i <20; i++) {
  let radius = 2;
  let x = Math.random(20,25)  + radius;
  let y = Math.random(20,25)  + radius;

  let dx = (Math.random() - 0.5) * 10.2;
  let dy = (Math.random() - 0.5) * 2.5;
  
  const colorIndex = randomInteger(1, colorsArray.length - 1);
  const shadowIndex = randomInteger(1, shadowArray.length - 1);
  
  circlesArray.push(new Circle(x, y, radius, dx, dy, colorsArray[colorIndex], 15, shadowArray[shadowIndex]));
}

function animate () {
  requestAnimationFrame(animate);
  
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i].draw();
  }
}

animate();


if (localStorage.getItem("darktheme")) {
  body.setAttribute('data-theme', 'dark')
  videobg.setAttribute('src', darkthemebg)
  if(document.querySelector('.swiper-button-next')) {
    document.querySelector('.swiper-button-next').style.backgroundColor = '#fff';
    document.querySelector('.swiper-button-prev').style.backgroundColor = '#fff';
    }
}



const darktheme = (e) => {
  if(e.target === darkbtn && !localStorage.getItem("darktheme")) {
    localStorage.clear();
    if(document.querySelector('.swiper-button-next')) {
      document.querySelector('.swiper-button-next').style.backgroundColor = '#fff';
      document.querySelector('.swiper-button-prev').style.backgroundColor = '#fff';
    }
    body.setAttribute('data-theme', 'dark')
    videobg.setAttribute('src',darkthemebg)
    localStorage.setItem("darktheme", 'darktheme');
  }
}

const lighttheme = (e) => {
  if(e.target === lightbtn && !localStorage.getItem("lighttheme")) {
    localStorage.clear();
    if(document.querySelector('.swiper-button-next')) {
      document.querySelector('.swiper-button-next').style.backgroundColor = '#000';
      document.querySelector('.swiper-button-prev').style.backgroundColor = '#000';
    }
    body.setAttribute('data-theme', 'light')
    videobg.setAttribute('src', lightthemebg)
    localStorage.setItem("lighttheme", "lighttheme");
  }
}

document.addEventListener('click', darktheme)
document.addEventListener('click', lighttheme)
});

