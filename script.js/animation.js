function animation(){
  const blockTwo = document.querySelector('.block-two');
  const header = document.querySelector('.header');
  const pruning = document.querySelector('.pruning');
  const scrollClick = document.querySelector('.scroll');
  const pruningReverse = document.querySelector('.pruningOne-reverse');
  const pruningReverse2 = document.querySelector('.pruningTwo-reverse');
  const blockThree = document.querySelector('.block-three');
  const pruning2 = document.querySelector('.pruning2');
  const blockFour = document.querySelector('.block-four');
  const pruning3 = document.querySelector('.pruning3');
  const pruningReverse3 = document.querySelector('.pruningThree-reverse');
  const footer = document.querySelector('footer');

  let lastScrollTop = 0; // Запомнить последнее положение прокрутки
  // Пороги прокрутки для блоков
  const blockTwoThreshold = 100; // Примерное значение, замените на реальное
  const blockThreeThreshold = 200; // Примерное значение, замените на реальное
  const blockFourThreshold = 300; // Примерное значение, замените на реальное
  const blockFooterThreshold = 400; // Примерное значение, замените на реальное
  window.addEventListener('scroll', function(event) {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let direction = scrollTop > lastScrollTop ? 'down' : 'up';
    console.log(scrollTop)

    if (direction === 'down') {
  
      event.stopPropagation();
        if (!blockTwo.classList.contains('active') && blockTwoThreshold >= scrollTop) {
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
        } else if (!blockThree.classList.contains('active') && blockThreeThreshold >= scrollTop){
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
            }, 500);
          
        } else if(!blockFour.classList.contains('active') && blockFourThreshold >= scrollTop){
            // Показать blockFour и скрыть blockThree
            document.body.classList.add('body-no-scroll');
            pruning3.classList.add('active');
            pruning3.setAttribute('loop', 'true');
            pruning3.play();
            setTimeout(() => {
              pruning3.classList.remove('active');
              pruning3.removeAttribute('loop');
              document.body.classList.remove('body-no-scroll');
            }, 2000); 
            setTimeout(() => {
              blockFour.classList.add('active');
              blockThree.classList.remove('active');
            }, 2000);

            lastScrollTop = 300;

        } else if(!footer.classList.contains('footerActive') && blockFooterThreshold >= scrollTop){
            // Показать footer
            document.body.classList.add('body-no-scroll');
            setTimeout(() => {
              document.body.classList.remove('body-no-scroll');
              blockFour.classList.remove('active');
              footer.classList.add('footerActive');
            }, 300); 
            scrollClick.style.opacity = '0';
        }
    } else {
      if (blockTwo.classList.contains('active')) {
        
          document.body.classList.add('body-no-scroll');
          pruningReverse.classList.add('activeOneReverse');
          pruningReverse.setAttribute('loop', 'true');
          pruningReverse.play();
          setTimeout(() => {
            pruningReverse.removeAttribute('loop');
            pruningReverse.classList.remove('activeOneReverse');
            document.body.classList.remove('body-no-scroll');
          }, 800); 
          blockTwo.classList.remove('active');
          setTimeout(() => {
              header.classList.remove('removeBlock'); 
          }, 400);
        blockThree.classList.remove('active');
        
      } else if (blockThree.classList.contains('active')) {
        document.body.classList.add('body-no-scroll');
        pruningReverse2.classList.add('activeReverse');
        pruningReverse2.setAttribute('loop', 'true');
        pruningReverse2.play();
        setTimeout(() => {
          pruningReverse2.removeAttribute('loop');
          pruningReverse2.classList.remove('activeReverse');
          document.body.classList.remove('body-no-scroll');
        }, 800); 
        blockThree.classList.remove('active');
        setTimeout(() => {
          blockTwo.classList.add('active');
        }, 500);
      } else if (blockFour.classList.contains('active')){
        document.body.classList.add('body-no-scroll');
        pruningReverse3.classList.add('activeThreeReverse');
        pruningReverse3.setAttribute('loop', 'true');
        pruningReverse3.play();
        setTimeout(() => {
          pruningReverse3.removeAttribute('loop');
          pruningReverse3.classList.remove('activeThreeReverse');
          document.body.classList.remove('body-no-scroll');
        }, 2000); 
        //  header.classList.add('removeBlock'); 
        blockFour.classList.remove('active');
        setTimeout(() => {
          blockThree.classList.add('active');
        }, 2000);
      } else if(footer.classList.contains('footerActive')){
        // Скрыть footer
        document.body.classList.add('body-no-scroll');
        footer.classList.remove('footerActive');
        setTimeout(() => {
          document.body.classList.remove('body-no-scroll');
          blockFour.classList.add('active');
        }, 400); 
        
        scrollClick.style.opacity = '1';
      }
    } 

    lastScrollTop = scrollTop;
});


      scrollClick.addEventListener('click', (event)=>{
          if (!blockTwo.classList.contains('active') && !header.classList.contains('removeBlock')) {
            pruning.classList.add('active');
            pruning.setAttribute('loop', 'true');
            pruning.play();
            setTimeout(() => {
              pruning.classList.remove('active');
              pruning.removeAttribute('loop');
            }, 800); 
            header.classList.add('removeBlock'); 
            setTimeout(() => {
                blockTwo.classList.add('active');
            }, 400);
            blockThree.classList.remove('active');
         } else if (!blockThree.classList.contains('active')){
          // Показать blockThree и скрыть blockTwo
          pruning2.classList.add('active');
          pruning2.setAttribute('loop', 'true');
          pruning2.play();
          setTimeout(() => {
            pruning2.classList.remove('active');
            pruning2.removeAttribute('loop');
          }, 800); 
          setTimeout(() => {
            blockThree.classList.add('active');
            blockTwo.classList.remove('active');
          }, 500);
         
        } else if(!blockFour.classList.contains('active')){
          // Показать blockFour и скрыть blockThree
          pruning3.classList.add('active');
          pruning3.setAttribute('loop', 'true');
          pruning3.play();
          setTimeout(() => {
            pruning3.classList.remove('active');
            pruning3.removeAttribute('loop');
          }, 2000); 
          setTimeout(() => {
            blockFour.classList.add('active');
            blockThree.classList.remove('active');
          }, 2000);
        } else if(!footer.classList.contains('footerActive')){
          // Показать footer
          setTimeout(() => {
            footer.classList.add('footerActive');
          }, 300); 
          blockFour.classList.remove('active');
          scrollClick.style.opacity = '0';
        }
        event.preventDefault();
      })
}

animation();

