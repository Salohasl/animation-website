/* Для всплывающего окна */ 
let menuBtn = document.querySelector('.menuBtn');
let menu = document.querySelector('nav');

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('active');
    menu.classList.toggle('popUp');

    document.addEventListener('click', function(event) {
        // Проверяем, что клик произошел вне меню и кнопки открытия
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            // Закрываем меню, добавляя класс, который изменяет его видимость или другие свойства
            menu.classList.remove('popUp');
            menuBtn.classList.remove('active');
        }
    });
})

function language(){
    let languageBtn = document.querySelector('.language');
    let engs = document.querySelectorAll('#eng');
    let russ = document.querySelectorAll('#rus');
    languageBtn.addEventListener('click', ()=>{
        for(let eng of engs){
            eng.classList.toggle('showEng');
            if(eng.classList.contains('showEng')){
                languageBtn.textContent = 'Rus';
            }else{
                languageBtn.textContent = 'Eng';
            }
        }
        for(let rus of russ){
            rus.classList.toggle('showRus');
        }
    })
}

language();

/*
// JavaScript
function showFooter() {
    var footer = document.querySelector('.block-four');
    footer.style.display = 'block'; // Make sure the element is displayed
    setTimeout(function() {
        footer.classList.add('active'); // Add class to trigger transition
    }, 10); // Small delay to ensure display is set before starting transition
}

function hideFooter() {
    var footer = document.querySelector('.block-four');
    footer.classList.remove('active'); // Remove class to start transition
    footer.addEventListener('transitionend', function handler() {
        footer.style.display = 'none'; // Hide after transition completes
        footer.removeEventListener('transitionend', handler); // Clean up
    });
}*/