const scrollBack = document.getElementById('scrollBack');

document.addEventListener('scroll', (scroll) => switchScrollBack(scroll));

const switchScrollBack = (scroll) => {
  this.scrollY > window.innerHeight / 2 ?
    scrollBack.style.visibility = 'visible' : 
    scrollBack.style.visibility = 'hidden';
};

switchScrollBack(0);