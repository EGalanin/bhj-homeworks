const fontSizes = Array.from(document.querySelectorAll('.font-size'));

const book = document.querySelector('.book');

function switchSize(evt) {
    evt.preventDefault();
    fontSizes.forEach((item) =>
    item.classList.remove('font-size_active'));

    evt.target.classList.add('font-size_active');
    book.classList.remove('book_fs-big');
    book.classList.remove('book_fs-small');
    book.classList.add(`book_fs-${evt.target.dataset.size}`);
}

fontSizes.forEach((item) => item.addEventListener("click", switchSize));