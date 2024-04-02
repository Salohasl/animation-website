function animation(){
    const blockTwo = document.querySelector('.block-two');
    const header = document.querySelector('.header');
    const pruning = document.querySelector('.pruning');
    
    let scrolltop = scrollY; // запомнить
    window.addEventListener('scroll', function(){
      if (scrollY >= scrolltop) { // сравнить
        pruning.classList.add('active');
        pruning.setAttribute('loop', 'true'); // Устанавливаем loop в true
        pruning.play(); // Начинаем воспроизведение видео
        header.classList.add('removeBlock');
        setTimeout(() => {
            blockTwo.classList.add('active');
        //    header.classList.add('removeBlock');
        }, 500);
      } else {
        pruning.classList.remove('active');
        pruning.removeAttribute('loop'); // Устанавливаем loop в false
        pruning.pause(); // Останавливаем воспроизведение видео
        blockTwo.classList.remove('active');
        header.classList.remove('removeBlock');
      }
      scrolltop = scrollY; // запомнить для последующих срабатываний
    });
}

animation();