import{c as x,S as w,N as I}from"./vendor.064d8e61.js";const F=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}};F();console.log("Hello world");x.init({views:[{namespace:"work",beforeEnter(){w.use([I]);const c=new w(".swiperYoutube",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});new w(".swiperDescr",{thumbs:{swiperDescr:c},loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})}}]});x.hooks.enter(()=>{document.querySelectorAll(".header__link").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault()})});const c=document.querySelector(".dark"),n=document.querySelector("body"),d=document.querySelector(".light");document.querySelector("script");const s=document.querySelector("video");console.log(s.src);const e=document.querySelector("header");console.dir(e);const r="/VitaliyKarabanov/dist/assets/mylivewallpapers.com-Genshin-Impact.f01b0130.mp4",l="/VitaliyKarabanov/src/images/mylivewallpapers.com-Cyberpunk-Girl-Biker.mp4",a=document.querySelector(".canvas");a.width=e.clientWidth,a.height=e.clientHeight,console.log(e.clientHeight),console.dir(a.clientHeight),console.dir(a),document.querySelectorAll("Circle");const i=a.getContext("2d");class q{constructor(o,h,m,g,p,f,y,E){this.x=o,this.y=h,this.radius=m,this.dx=g,this.dy=p,this.color=f,this.shadowBlur=y,this.shadowColor=E}draw(){i.beginPath(),i.arc(this.x,this.y,this.radius,Math.PI*2,!1),i.fillStyle=this.color,i.shadowBlur=this.shadowBlur,i.shadowColor=this.shadowColor,i.fill(),i.stroke(),this.update()}update(){(this.x+this.radius>e.clientWidth||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>e.clientHeight||this.y-this.radius<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy}}function b(t,o){return Math.floor(Math.random()*(o-t+1))+t}const v=["#D2E2F9","#C8D6FC"],S=["#D2E2F9","#C8D6FC","#21337F","#93ACF2","#3458AE","#7699E7","#B6C9FB"],u=[];for(let t=0;t<20;t++){let o=2,h=Math.random(20,25)+o,m=Math.random(20,25)+o,g=(Math.random()-.5)*10.2,p=(Math.random()-.5)*2.5;const f=b(1,S.length-1),y=b(1,v.length-1);u.push(new q(h,m,o,g,p,S[f],15,v[y]))}function k(){requestAnimationFrame(k),i.clearRect(0,0,window.innerWidth,window.innerHeight);for(let t=0;t<u.length;t++)u[t].draw()}k(),localStorage.getItem("darktheme")&&(n.setAttribute("data-theme","dark"),s.setAttribute("src","images/"+l),document.querySelector(".swiper-button-next").style.backgroundColor="#fff",document.querySelector(".swiper-button-prev").style.backgroundColor="#fff");const C=t=>{t.target===c&&!localStorage.getItem("darktheme")&&(localStorage.clear(),document.querySelector(".swiper-button-next")&&(document.querySelector(".swiper-button-next").style.backgroundColor="#fff",document.querySelector(".swiper-button-prev").style.backgroundColor="#fff"),n.setAttribute("data-theme","dark"),s.setAttribute("src","images/"+l),localStorage.setItem("darktheme","darktheme"))},A=t=>{t.target===d&&!localStorage.getItem("lighttheme")&&(localStorage.clear(),document.querySelector(".swiper-button-next")&&(document.querySelector(".swiper-button-next").style.backgroundColor="#000",document.querySelector(".swiper-button-prev").style.backgroundColor="#000"),n.setAttribute("data-theme","light"),s.setAttribute("src","images/"+r),localStorage.setItem("lighttheme","lighttheme"))};document.addEventListener("click",C),document.addEventListener("click",A)});
