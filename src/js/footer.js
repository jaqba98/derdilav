class Footer {
    constructor() {
        this.footer = document.getElementById('footer');
    }

    update() {
        const height = window.innerHeight - this.footer.offsetTop;

        this.footer.style.minHeight = this.getHeight(height);
    }

    getHeight(height) {
        return height > 0 ? height.toString().concat('px') : 'auto';
    }
}

const footer = new Footer();

window.onload = () => footer.update();

window.addEventListener('resize', () => footer.update());