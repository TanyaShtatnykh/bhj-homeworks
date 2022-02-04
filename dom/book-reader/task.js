const book = document.getElementById('book');
const sizeBtn = document.querySelectorAll('.font-size');
const activeSize = document.querySelector('.font-size_active');

sizeBtn.forEach((btn) => {

    btn.addEventListener('click', changeSize);

    function changeSize (e) {
        activeSize.classList.remove('.font-size_active');
        btn.classList.add('.font-size_active');

        if (btn.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (btn.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.className = 'book';
        }

        e.preventDefault();
    }
    
    
    
})

