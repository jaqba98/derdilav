const footer = document.getElementById('footer');

window.addEventListener('resize', () => updateFooter());

const updateFooter = () => {
    const height = window.innerHeight - footer.offsetTop;

    height > 0 ?
        footer.style.height = height.toString().concat('px') :
        footer.style.height = 'auto';
};

updateFooter();
