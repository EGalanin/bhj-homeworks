// const reveal = document.querySelectorAll('.reveal');

// reveal.forEach((item) => {
//     window.addEventListener('scroll', (evt) => {
//         if (window.innerHeight > item.getBoundingClientRect().top) {
//             item.classList.add('reveal_active');
//         }
//     })
// })


const reveal = document.querySelectorAll('.reveal');
const { innerHeight } = window;
const { top } = reveal.getBoundingClientRect();

reveal.forEach((item) => {
    window.addEventListener('scroll', (evt) => {
        if (top < innerHeight && top > 0) {
            item.classList.add("reveal_active");
          } else {
            item.classList.remove("reveal_active");
          }
    })
})