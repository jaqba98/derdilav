const hamburgerButton = document.getElementById('hamburger');
const hamburgerLineTop = document.getElementById('hamburgerLineTop');
const hamburgerLineMiddle = document.getElementById('hamburgerLineMiddle');
const hamburgerLineBottom = document.getElementById('hamburgerLineBottom');
const menu = document.getElementById('menu');
const container = document.getElementById('container');
let canCloseMenu = false;

const hamburgerOpen = () => {
   hamburgerLineTop.style.transform = 'rotate(45deg)';
   hamburgerLineTop.style.margin = '-5px auto';
   hamburgerLineMiddle.style.transform = 'translate(-150px)';
   hamburgerLineMiddle.style.opacity = '0';
   hamburgerLineBottom.style.transform = 'rotate(-45deg)';
   hamburgerLineBottom.style.margin = '-5px auto';
   menu.style.transform = 'translateX(0%)';
   container.style.overflow = 'hidden';
};

const hamburgerClose = () => {
   hamburgerLineTop.style.transform = 'rotate(0deg)';
   hamburgerLineTop.style.margin = '3px auto';
   hamburgerLineMiddle.style.transform = 'translate(0px)';
   hamburgerLineMiddle.style.opacity = '1';
   hamburgerLineMiddle.style.zIndex = '0';
   hamburgerLineBottom.style.transform = 'rotate(0deg)';
   hamburgerLineBottom.style.margin = '3px auto';
   menu.style.transform = 'translateX(-100%)';
   container.style.overflow = 'auto';
};

hamburgerButton.addEventListener('click', () => {
   hamburgerLineMiddle.style.transform === 'translate(-150px)' ?
       hamburgerClose() :
       hamburgerOpen();

   menu.style.transition = 'transform 1s ease-in-out';
});

window.addEventListener('resize', () => {
   if (window.innerWidth > 767) {
      hamburgerClose();
      menu.style.transform = 'translateX(0%)';
      canCloseMenu = true;
      menu.style.transition = 'transform 0s ease-in-out';
   } else if(canCloseMenu) {
      menu.style.transform = 'translateX(-100%)';
      canCloseMenu = false;
   }
});

document.querySelectorAll('#menu > li > a').forEach(item => {
   item.addEventListener('click', event => {
      if (window.innerWidth <= 767) {
         hamburgerClose();
         menu.style.transform = 'translateX(-100%)';
         canCloseMenu = false;
      }
   });
});

setInterval(() => {
   if (hamburgerLineMiddle.style.transform === 'translate(-150px)') {
      hamburgerLineMiddle.style.zIndex = '-1';
   }
}, 1000);
