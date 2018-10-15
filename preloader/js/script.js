let preloader = document.querySelector('.preloader');

function show (){
    setTimeout(function(){
        preloader.classList.remove('show-preloader');
    }, 5000);
}

preloader.classList.add('show-preloader');
window.addEventListener('load', show);
