window.addEventListener('resize', () => updateFooter());

const updateFooter = () => {
    const footer = document.getElementById('footer');
    const height = window.innerHeight - footer.offsetTop;
    height > 0 ?
        footer.style.minHeight = height.toString().concat('px') :
        footer.style.minHeight = 'auto';
};

updateFooter();
