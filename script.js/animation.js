function animation(){
  const blockTwo = document.querySelector('.block-two');
  const header = document.querySelector('.header');
  const pruning = document.querySelector('.pruning');
  const scrollClick = document.querySelectorAll('.scroll');
  const pruningReverse = document.querySelector('.pruning-reverse');
  const pruningReverse2 = document.querySelector('.pruningTwo-reverse');
  const blockThree = document.querySelector('.block-three');
  const pruning2 = document.querySelector('.pruning2');

  let lastScrollTop = 0; // Запомнить последнее положение прокрутки
  // Пороги прокрутки для блоков
 // const blockTwoThreshold = 99; // Примерное значение, замените на реальное
 // const blockThreeThreshold = 299; // Примерное значение, замените на реальное

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let direction = scrollTop > lastScrollTop ? 'down' : 'up';

    if (direction === 'down') {
      //document.body.classList.add('body-no-scroll');
        if (!blockThree.classList.contains('active') && blockTwo.classList.contains('active')) {
            // Показать blockThree и скрыть blockTwo
            document.body.classList.add('body-no-scroll');
            pruning2.classList.add('active');
            pruning2.setAttribute('loop', 'true');
            pruning2.play();
            setTimeout(() => {
              pruning2.classList.remove('active');
              pruning2.removeAttribute('loop');
              document.body.classList.remove('body-no-scroll');
            }, 800); 
            setTimeout(() => {
              blockThree.classList.add('active');
              blockTwo.classList.remove('active');
            }, 400);
        } else if (!blockTwo.classList.contains('active')){
            // Показать blockTwo и скрыть blockThree
            document.body.classList.add('body-no-scroll');
            pruning.classList.add('active');
            pruning.setAttribute('loop', 'true');
            pruning.play();
            setTimeout(() => {
              pruning.classList.remove('active');
              pruning.removeAttribute('loop');
              document.body.classList.remove('body-no-scroll');
            }, 800); 
            header.classList.add('removeBlock'); 
            setTimeout(() => {
                blockTwo.classList.add('active');
            }, 400);
            blockThree.classList.remove('active');
        }
    } else {
      if (blockTwo.classList.contains('active')) {
          // Показать blockTwo и скрыть blockThree
          document.body.classList.add('body-no-scroll');
          pruningReverse.setAttribute('loop', 'true');
          pruningReverse.play();
          setTimeout(() => {
            pruningReverse.removeAttribute('loop');
            document.body.classList.remove('body-no-scroll');
          }, 800); 
        //  blockTwo.classList.remove('active');
        //  setTimeout(() => {
        //      header.classList.remove('removeBlock'); 
        //  }, 400);
         // blockThree.classList.remove('active');
      }else if(blockThree.classList.contains('active')){

        document.body.classList.add('body-no-scroll');
        
        pruningReverse2.classList.add('activeReverse');
        pruningReverse2.setAttribute('loop', 'true');
        pruningReverse2.play();
        setTimeout(() => {
          pruningReverse2.removeAttribute('loop');
          pruningReverse2.classList.remove('activeReverse');
          document.body.classList.remove('body-no-scroll');
        }, 800); 
      //  header.classList.add('removeBlock'); 
      blockThree.classList.remove('active');
        setTimeout(() => {
          blockTwo.classList.add('active');
        }, 400);
      }
    } 
    
    lastScrollTop = scrollTop;
});

 /* window.addEventListener('scroll', function scroll() {
    console.log(scrolltop)
    if (header.style.opacity == 0 && scrolltop <= scrollY) {
        document.body.classList.add('body-no-scroll');
        pruning.classList.add('active');
        pruning.setAttribute('loop', 'true');
        pruning.play();
        setTimeout(() => {
          pruning.classList.remove('active');
          pruning.removeAttribute('loop');
          document.body.classList.remove('body-no-scroll');
        }, 800); 
        header.classList.add('removeBlock'); 
        setTimeout(() => {
            blockTwo.classList.add('active');
        }, 400);
    } else{
        pruningReverse.classList.add('active-reverse');
        pruningReverse.setAttribute('loop', 'true');
        pruningReverse.play();
        setTimeout(() => {
          pruningReverse.removeAttribute('loop');
          pruningReverse.classList.remove('active-reverse');
        }, 800); 
        setTimeout(() => {
            header.classList.remove('removeBlock');
        }, 400);
        blockTwo.classList.remove('active');
    }

    scrolltop = scrollY;
});*/




    scrollClick.forEach(click =>{
        click.addEventListener('click', ()=>{
            if (!header.classList.contains('removeBlock')) { // сравнить
              pruning.classList.add('active');
              pruning.setAttribute('loop', 'true');
              pruning.play();
              setTimeout(() => {
                pruning.classList.remove('active');
                pruning.removeAttribute('loop');
              }, 850); 
      
              header.classList.add('removeBlock');
              setTimeout(() => {
                  blockTwo.classList.add('active');
              }, 350);
          } else {
      
              pruningReverse.classList.add('active-reverse');
              pruningReverse.setAttribute('loop', 'true');
              pruningReverse.play();
              setTimeout(() => {
                pruningReverse.removeAttribute('loop');
                pruningReverse.classList.remove('active-reverse');
              }, 850); 
      
              setTimeout(() => {
                  header.classList.remove('removeBlock');
              }, 350);
      
              blockTwo.classList.remove('active');
            }
        })
    })
}

animation();

