
  const blockTwo = document.querySelector('.block-two');
  const header = document.querySelector('.header');
  const pruning = document.querySelector('.pruning');
  const scrollClick = document.querySelectorAll('.scroll');
  const scrollTexts = document.querySelectorAll('.scroll-text');
  const pruningReverse = document.querySelector('.pruningOne-reverse');
  const pruningReverse2 = document.querySelector('.pruningTwo-reverse');
  const blockThree = document.querySelector('.block-three');
  const pruning2 = document.querySelector('.pruning2');
  const blockFour = document.querySelector('.block-four');
  const pruning3 = document.querySelector('.pruning3');
  const pruningReverse3 = document.querySelector('.pruningThree-reverse');
  const footer = document.querySelector('footer');
  let lastScrollTop = 0; // Запомнить последнее положение прокрутки
  let  blockTwoThreshold = 100;
  let blockThreeThreshold = 200;
  let blockFourThreshold = 300;
  let blockFooterThreshold = 400;
  let isScrolling = false;


function scrollElement(event){
    console.log(event.deltaY)
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let direction = event.deltaY > 0 ? 'down' : 'up'; //scrollTop > lastScrollTop ? 'down' : 'up';
    console.log(direction)
  //  console.log(window.scrollY)

    

    if (direction === 'down') {
      //console.log(lastScrollTop)
        if (!header.classList.contains('removeBlock')) {
           document.body.classList.add('body-no-scroll');
          for(let scrollText of scrollTexts){
            scrollText.style.opacity = '0';
          }
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
        } else if (blockTwo.classList.contains('active')){
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
            blockTwo.classList.remove('active');
            setTimeout(() => {
              blockThree.classList.add('active');
            }, 600);
        } else if(blockThree.classList.contains('active')){
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
  
        } else if(blockFour.classList.contains('active')){
            // Показать footer
            document.body.classList.add('body-no-scroll');
            setTimeout(() => {
              document.body.classList.remove('body-no-scroll');
              blockFour.classList.remove('active');
              footer.classList.add('footerActive');
            }, 300); 
 
        }
    } else if(direction === 'up'){
  
      if (blockTwo.classList.contains('active')) {
          for(let scrollText of scrollTexts){
            scrollText.style.opacity = '1';
          }
          document.body.classList.add('body-no-scroll');
          pruningReverse.classList.add('activeOneReverse');
          pruningReverse.setAttribute('loop', 'true');
          pruningReverse.play();
          setTimeout(() => {
            pruningReverse.removeAttribute('loop');
            pruningReverse.classList.remove('activeOneReverse');
            document.body.classList.remove('body-no-scroll');
          }, 700); 
          blockTwo.classList.remove('active');
          setTimeout(() => {
              header.classList.remove('removeBlock'); 
          },200);
        blockThree.classList.remove('active');
        clickNum = 0;
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
        clickNum = 1
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
        blockFour.classList.remove('active');
        setTimeout(() => {
          blockThree.classList.add('active');
        }, 2000);
        clickNum = 2;
      } else if(footer.classList.contains('footerActive')){
        // Скрыть footer
        document.body.classList.add('body-no-scroll');
        setTimeout(() => {
          document.body.classList.remove('body-no-scroll');
          blockFour.classList.add('active');
          footer.classList.remove('footerActive');
        }, 300); 
        clickNum = 3
      }
    } 


    lastScrollTop = scrollTop;
    setTimeout(() => {
      isScrolling = false;
    }, 100); // Задержка для "debouncing"
}

let clickNum = 0;
  // Обработчик события клика на элементах .scroll
function handleScrollClick(event) {
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
    for(let scrollText of scrollTexts){
      scrollText.style.opacity = '0';
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
    }, 400);
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
    setTimeout(() => {
      blockThree.classList.add('active');
      blockTwo.classList.remove('active');
    }, 500);
  
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
  } else if(!footer.classList.contains('footerActive')  && clickNum == 3){
    // Показать footer
    setTimeout(() => {
      footer.classList.add('footerActive');
    }, 300); 
    blockFour.classList.remove('active');
    scrollClick.style.opacity = '0';
  }
  clickNum++
  event.preventDefault();
}


window.addEventListener('wheel', scrollElement);
window.addEventListener('touchmove', scrollElement);
scrollClick.forEach(clickScroll => {
  clickScroll.addEventListener('click', handleScrollClick);
});
      


