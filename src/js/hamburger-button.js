window.onload = () => {
   const hamburgerButton = document.getElementById('hamburger');

   const hamburgerLineTop = document.getElementById('hamburger-line-top');

   const hamburgerLineMiddle = document.getElementById('hamburger-line-middle');

   const hamburgerLineBottom = document.getElementById('hamburger-line-bottom');

   const hamburgerOpen = () => {
      hamburgerLineTop.style.transform = 'rotate(45deg)';
      hamburgerLineTop.style.margin = '-5px auto';

      hamburgerLineMiddle.style.transform = 'translate(-150px)';
      hamburgerLineMiddle.style.opacity = '0';

      hamburgerLineBottom.style.transform = 'rotate(-45deg)';
      hamburgerLineBottom.style.margin = '-5px auto';
   };

   const hamburgerClose = () => {
      hamburgerLineTop.style.transform = 'rotate(0deg)';
      hamburgerLineTop.style.margin = '3px auto';

      hamburgerLineMiddle.style.transform = 'translate(0px)';
      hamburgerLineMiddle.style.opacity = '1';

      hamburgerLineBottom.style.transform = 'rotate(0deg)';
      hamburgerLineBottom.style.margin = '3px auto';
   };

   hamburgerButton.addEventListener('click', () => {
      hamburgerLineMiddle.style.transform === 'translate(-150px)' ?
          hamburgerClose() :
          hamburgerOpen();
   });
};