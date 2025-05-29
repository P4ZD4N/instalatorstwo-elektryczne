function handleNavbarColorChange() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function toggleColor() {
        if (window.scrollY > 150) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    toggleColor();
    window.addEventListener('scroll', toggleColor);
}

document.addEventListener("DOMContentLoaded", handleNavbarColorChange);