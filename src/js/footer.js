window.addEventListener('resize', () => updateFooter());

const updateFooter = () => {
    const footer = document.getElementById('footer');
    window.innerHeight - footer.offsetTop > 0 ?
        footer.style.minHeight = height.toString().concat('px') :
        footer.style.minHeight = 'auto';
};

updateFooter();
