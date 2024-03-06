let square = document.querySelectorAll('.square');

let counter = 0;



    setInterval(() => {
    square[counter%3].classList.toggle('green');
    counter ++;
}, 1000);

