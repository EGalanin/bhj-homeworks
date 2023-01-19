const reveal = document.querySelectorAll('.reveal');

reveal.forEach((item) => {
    window.addEventListener('scroll', (evt) => {
        if (window.innerHeight > item.getBoundingClientRect().top) {
            item.classList.add('reveal_active');
        }
    })
})