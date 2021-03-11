const footer = document.getElementById('footer');

window.addEventListener('resize', () => {
    console.log(window.innerHeight - footer.offsetTop);
});
