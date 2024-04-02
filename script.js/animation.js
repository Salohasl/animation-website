function animation(){
    const blockTwo = document.querySelector('.block-two');
    const header = document.querySelector('.header');
    const pruning = document.querySelector('.pruning');
    const scrollClick = document.querySelectorAll('.scroll');
    let scrolltop = scrollY; // запомнить
    window.addEventListener('scroll', function scroll(){
      if (scrollY >= scrolltop) { // сравнить
        pruning.classList.add('active');
        pruning.setAttribute('loop', 'true'); // Устанавливаем loop в true
        pruning.play(); // Начинаем воспроизведение видео
        header.classList.add('removeBlock');
        setTimeout(() => {
            blockTwo.classList.add('active');
        }, 400);
      } else {
        pruning.classList.remove('active');
        pruning.removeAttribute('loop'); // Удаляем loop 
        blockTwo.classList.remove('active');
        header.classList.remove('removeBlock');
      }
      scrolltop = scrollY; // запомнить для последующих срабатываний
    });


    scrollClick.forEach(click =>{
        click.addEventListener('click', ()=>{
            if (!header.classList.contains('removeBlock')) { // сравнить
                pruning.classList.add('active');
                pruning.setAttribute('loop', 'true'); // Устанавливаем loop в true
                pruning.play(); // Начинаем воспроизведение видео
                header.classList.add('removeBlock');
                setTimeout(() => {
                    blockTwo.classList.add('active');
                }, 400);
              } else {
                pruning.classList.remove('active');
                pruning.removeAttribute('loop'); // Удаляем loop 
                blockTwo.classList.remove('active');
                header.classList.remove('removeBlock');
              }
        })
    })
}

animation();

