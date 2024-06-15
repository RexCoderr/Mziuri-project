document.addEventListener('DOMContentLoaded',() => {
    const navLinks = document.querySelectorAll('.navigation a')
    console.log(navLinks);
    const location =  window.location.pathname


    navLinks.forEach((link) => {
        if (location.includes(link.textContent.toLowerCase().replace(/\s+/g, ''))) {
            link.classList.add('active')
        }
    })

})