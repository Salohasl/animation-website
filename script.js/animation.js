
  const blockTwo = document.querySelector('.block-two');
  const header = document.querySelector('.header');
  const pruning = document.querySelector('.pruning');
  const scrollClick = document.querySelector('.scroll');
  const scrollTexts = document.querySelectorAll('.scroll-text');
  const pruningReverse = document.querySelector('.pruningOne-reverse');
  const pruningReverse2 = document.querySelector('.pruningTwo-reverse');
  const blockThree = document.querySelector('.block-three');
  const pruning2 = document.querySelector('.pruning2');
  const blockFour = document.querySelector('.block-four');
  const pruning3 = document.querySelector('.pruning3');
  const pruningReverse3 = document.querySelector('.pruningThree-reverse');
  const footer = document.querySelector('footer');
  let languageBtn = document.querySelector('.language');
  let  blockTwoThreshold = 100;
  let blockThreeThreshold = 200;
  let blockFourThreshold = 300;
  let blockFooterThreshold = 400;


function scrollElement(event){
    let direction = event.deltaY > 0 ? 'down' : 'up'; 
    if (direction === 'down') {

        if (!header.classList.contains('removeBlock')) {
           for(let scrollText of scrollTexts){
            scrollText.style.opacity = '0';
          }
           pruning.classList.add('active');
           pruning.setAttribute('loop', 'true');
           pruning.play();
           setTimeout(() => {
             pruning.classList.remove('active');
             pruning.removeAttribute('loop');
             blockTwo.classList.add('active');
           }, 800); 
           header.classList.add('removeBlock'); 

        } else if (blockTwo.classList.contains('active')){
            // Показать blockThree и скрыть blockTwo

            pruning2.classList.add('active');
            pruning2.setAttribute('loop', 'true');
            pruning2.play();
            setTimeout(() => {
              pruning2.classList.remove('active');
              pruning2.removeAttribute('loop');
     
              blockThree.classList.add('active');
            }, 800); 
            blockTwo.classList.remove('active');
  
        } else if(blockThree.classList.contains('active')){
            // Показать blockFour и скрыть blockThree
    
            pruning3.classList.add('active');
            pruning3.setAttribute('loop', 'true');
            pruning3.play();
            setTimeout(() => {
              pruning3.classList.remove('active');
              pruning3.removeAttribute('loop');

              blockFour.classList.add('active');
            }, 2000); 
            blockThree.classList.remove('active');
        } else if(blockFour.classList.contains('active')){
            // Показать footer
            setTimeout(() => {
   
              blockFour.classList.remove('active');
              footer.classList.add('footerActive');
            }, 300); 
            scrollClick.style.opacity = '0';
        }
    } else if(direction === 'up'){
  
      if (blockTwo.classList.contains('active')) {
          if(languageBtn.textContent == 'Eng'){
            scrollTexts[0].style.opacity = '1';
          }else{
            scrollTexts[1].style.opacity = '1';
          }
        
          pruningReverse.classList.add('activeOneReverse');
          pruningReverse.setAttribute('loop', 'true');
          pruningReverse.play();
          setTimeout(() => {
            pruningReverse.removeAttribute('loop');
            pruningReverse.classList.remove('activeOneReverse');
            header.classList.remove('removeBlock'); 

          }, 800); 
          blockTwo.classList.remove('active');

        clickNum = 0;
      } else if (blockThree.classList.contains('active')) {
        pruningReverse2.classList.add('activeReverse');
        pruningReverse2.setAttribute('loop', 'true');
        pruningReverse2.play();
        setTimeout(() => {
          pruningReverse2.removeAttribute('loop');
          pruningReverse2.classList.remove('activeReverse');
          blockTwo.classList.add('active');
        }, 800); 
        blockThree.classList.remove('active');

        clickNum = 1
      } else if (blockFour.classList.contains('active')){

        pruningReverse3.classList.add('activeThreeReverse');
        pruningReverse3.setAttribute('loop', 'true');
        pruningReverse3.play();
        setTimeout(() => {
          pruningReverse3.removeAttribute('loop');
          pruningReverse3.classList.remove('activeThreeReverse');

          blockThree.classList.add('active');
        }, 2000); 
        blockFour.classList.remove('active');

        clickNum = 2;
      } else if(footer.classList.contains('footerActive')){
        // Скрыть footer

        setTimeout(() => {
  
          blockFour.classList.add('active');
          footer.classList.remove('footerActive');
        }, 300); 
        clickNum = 3
        scrollClick.style.opacity = '1';
      }
    } 
        
 // Вызов requestAnimationFrame для следующего кадра анимации
 requestAnimationFrame(touchMoveScroll);
}


function touchStart(event) {
  startY = event.touches[0].clientY;
}
function touchMoveScroll(event){
const currentY = event.touches[0].clientY;
const diffY = startY - currentY;

  if (diffY > 0) {
      if (!header.classList.contains('removeBlock')) {

         for(let scrollText of scrollTexts){
          scrollText.style.opacity = '0';
        }
         pruning.classList.add('active');
         pruning.setAttribute('loop', 'true');
         pruning.play();
         setTimeout(() => {
           pruning.classList.remove('active');
           pruning.removeAttribute('loop');

           blockTwo.classList.add('active');
         }, 800); 
         header.classList.add('removeBlock'); 
      
      } else if (blockTwo.classList.contains('active')){

          // Показать blockThree и скрыть blockTwo

          pruning2.classList.add('active');
          pruning2.setAttribute('loop', 'true');
          pruning2.play();
          setTimeout(() => {
            pruning2.classList.remove('active');
            pruning2.removeAttribute('loop');

            blockThree.classList.add('active');
          }, 800); 
          blockTwo.classList.remove('active');
      } else if(blockThree.classList.contains('active')){

          // Показать blockFour и скрыть blockThree

          pruning3.classList.add('active');
          pruning3.setAttribute('loop', 'true');
          pruning3.play();
          setTimeout(() => {
            pruning3.classList.remove('active');
            pruning3.removeAttribute('loop');
            blockFour.classList.add('active');
          }, 2000); 
          blockThree.classList.remove('active');
      } else if(blockFour.classList.contains('active')){
          // Показать footer
          setTimeout(() => {
            blockFour.classList.remove('active');
            footer.classList.add('footerActive');
          }, 300); 
          scrollClick.style.opacity = '0';
      }
    
  } else if(diffY < 0){
    if (blockTwo.classList.contains('active')) {
      if(languageBtn.textContent == 'Eng'){
        scrollTexts[0].style.opacity = '1';
      }else{
        scrollTexts[1].style.opacity = '1';
      }
        pruningReverse.classList.add('activeOneReverse');
        pruningReverse.setAttribute('loop', 'true');
        pruningReverse.play();
        setTimeout(() => {
          pruningReverse.removeAttribute('loop');
          pruningReverse.classList.remove('activeOneReverse');
          header.classList.remove('removeBlock'); 
        }, 800); 
        blockTwo.classList.remove('active');
      clickNum = 0;
    } else if (blockThree.classList.contains('active')) {
      pruningReverse2.classList.add('activeReverse');
      pruningReverse2.setAttribute('loop', 'true');
      pruningReverse2.play();
      setTimeout(() => {
        pruningReverse2.removeAttribute('loop');
        pruningReverse2.classList.remove('activeReverse');
        blockTwo.classList.add('active');
      }, 800); 
      blockThree.classList.remove('active');
      clickNum = 1
    } else if (blockFour.classList.contains('active')){

      pruningReverse3.classList.add('activeThreeReverse');
      pruningReverse3.setAttribute('loop', 'true');
      pruningReverse3.play();
      setTimeout(() => {
        pruningReverse3.removeAttribute('loop');
        pruningReverse3.classList.remove('activeThreeReverse');
        blockThree.classList.add('active');
      }, 2000); 
      blockFour.classList.remove('active');
      clickNum = 2;
    } else if(footer.classList.contains('footerActive')){
      // Скрыть footer
      setTimeout(() => {
        blockFour.classList.add('active');
        footer.classList.remove('footerActive');
      }, 300); 
      clickNum = 3
      scrollClick.style.opacity = '1';
    }
  } 
    startY = currentY;

    
 // Вызов requestAnimationFrame для следующего кадра анимации
 requestAnimationFrame(touchMoveScroll);
}



let clickNum = 0;
  // Обработчик события клика на элементах .scroll
function handleScrollClick() {
  let targetScrollPosition = 0;
  if (clickNum === 0) {
      targetScrollPosition = blockTwoThreshold; //Позиция прокрутки
  } else if (clickNum === 1) {
      targetScrollPosition = blockThreeThreshold;
  } else if (clickNum === 2) {
      targetScrollPosition = blockFourThreshold;
  } else if (clickNum === 3) {
      targetScrollPosition = blockFooterThreshold;
  }
// Прокрутка до целевой позиции
  window.scrollTo({
    top: targetScrollPosition,
    behavior: 'smooth' // Необязательно: плавная прокрутка
  });

  if (!blockTwo.classList.contains('active') && clickNum == 0) {
    if(languageBtn.textContent == 'Eng'){
            scrollTexts[0].style.opacity = '1';
          }else{
            scrollTexts[1].style.opacity = '1';
          }
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
    }, 800);
    blockThree.classList.remove('active');
  } else if (!blockThree.classList.contains('active') && clickNum == 1){
    // Показать blockThree и скрыть blockTwo
    pruning2.classList.add('active');
    pruning2.setAttribute('loop', 'true');
    pruning2.play();
    setTimeout(() => {
      pruning2.classList.remove('active');
      pruning2.removeAttribute('loop');
    }, 800); 
    blockTwo.classList.remove('active');
      setTimeout(() => {
      blockThree.classList.add('active');
    }, 800);
  
  } else if(!blockFour.classList.contains('active') && clickNum == 2){
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
    scrollClick.style.opacity = '1';
  } else if(!footer.classList.contains('footerActive')  && clickNum == 3){
    // Показать footer
    setTimeout(() => {
      footer.classList.add('footerActive');
    }, 300); 
    blockFour.classList.remove('active');
    scrollClick.style.opacity = '0';
  }
  clickNum++

   // Вызов requestAnimationFrame для следующего кадра анимации
 requestAnimationFrame(touchMoveScroll);
}


window.addEventListener('wheel', scrollElement);
window.addEventListener('touchstart', touchStart);
window.addEventListener('touchmove', touchMoveScroll);
scrollClick.addEventListener('click', handleScrollClick);

      


