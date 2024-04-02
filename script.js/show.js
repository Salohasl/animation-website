/* Для всплывающего окна */ 
let menuBtn = document.querySelectorAll('.menuBtn');
let menus = document.querySelectorAll('nav');

menuBtn.forEach(elem => {
    elem.addEventListener('click', ()=>{
        elem.classList.toggle('active');
        for(let menu of menus){
            menu.classList.toggle('popUp');

            document.addEventListener('click', function(event) {
                // Проверяем, что клик произошел вне меню и кнопки открытия
                if (!menu.contains(event.target) && !elem.contains(event.target)) {
                    // Закрываем меню, добавляя класс, который изменяет его видимость или другие свойства
                    menu.classList.remove('popUp');
                    elem.classList.remove('active');
                }
            });
        }
    })

})

