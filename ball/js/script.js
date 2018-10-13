let btn = document.querySelector('#bounce');
let ball = document.querySelector('.ball');

const bounce = () => {
    if (ball.classList.contains('bounce')) {
        ball.classList.remove('bounce');
    } else {
        ball.classList.add('bounce');
    }
};

btn.addEventListener('click',bounce);
