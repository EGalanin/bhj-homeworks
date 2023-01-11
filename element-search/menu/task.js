// const menuLink = Array.from(document.getElementsByClassName('menu__link'));

// menuLink.forEach(el => {
//     el.onclick = function () {
//         let parent = el.parentElement.querySelector('ul');
//         let active = el.closest('.menu_main').querySelector('.menu_active');

//         if (parent.classList.contains('menu_active')) {
//             active.classList.remove('menu_active');
//         } else {
//             if(active) {
//                 active.classList.remove('menu_active');
//                 parent.classList.add('menu_active')
//             } else {
//                 parent.classList.add('menu_active')
//             }
//         }
//         return false;
//     };
// })


const menuItem = document.getElementsByClassName('menu__item');
const menuLink = document.getElementsByClassName('menu__link');
const itemActive = document.querySelector('.menu_active');
const arrItem = Array.from(menuItem);

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        if (menuItem[i].querySelector('.menu_sub') !== null && menuItem[i].querySelector('.menu_active') === null) {

            arrItem.forEach((element, index) => {
                if (element.querySelector('.menu_active')) {
                    arrItem[index].querySelector('.menu_sub').classList.remove('menu_active');
                }
            });

            menuItem[i].querySelector('.menu_sub').classList.add('menu_active');
            return menuItem[i].href = false;
        } else if (menuItem[i].querySelector('.menu_sub') !== null && menuItem[i].querySelector('.menu_active') !== null) {
            menuItem[i].querySelector('.menu_sub').classList.remove('menu_active');
            return menuItem[i].href = false;
        }
    }
}