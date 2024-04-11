
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

  function preloadImage(url) {
    const img = new Image();
    img.src = url;
    document.body.appendChild(img);
    img.style.display = 'none'; // Скрываем изображение
   }
   // Использование
   preloadImage('/img/3_robots.png');


  let  blockTwoThreshold = 100;
  let blockThreeThreshold = 200;
  let blockFourThreshold = 300;
  let blockFooterThreshold = 400;

  let isScrolling = false;
  let scrollTimeout;

  let lastKnownScrollPosition = 0;
  let ticking = false;

function scrollElement(event){
    let direction = event.deltaY > 0 ? 'down' : 'up'; 
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
          if (direction === 'down') {
            if (!header.classList.contains('removeBlock')) {

              header.classList.add('removeBlock')

              if(header.classList.contains('removeBlock') ){
                  for(let scrollText of scrollTexts){
                    scrollText.style.opacity = '0';
                  }
                  pruning.classList.add('active');
                  pruning.setAttribute('loop', 'true');
                  if (!pruning.paused) {
                    pruning.pause();
                  }
                  pruning.play();
                  setTimeout(() => {
                    pruning.addEventListener('ended', function() {
                      pruning.pause();
                      pruning.currentTime = 0; // Возвращение к началу видео
                    });
                    pruning.classList.remove('active');
                    pruning.removeAttribute('loop');
                    blockTwo.classList.add('active');
                  }, 1200); 
              }

    
            } else if (blockTwo.classList.contains('active')){

                blockTwo.classList.remove('active');
                if(!blockTwo.classList.contains('active')){
                    // Показать blockThree и скрыть blockTwo
                    pruning2.classList.add('active');
                    pruning2.setAttribute('loop', 'true');
                    if (!pruning2.paused) {
                      pruning2.pause();
                    }
                    pruning2.play();
                    setTimeout(() => {
                      pruning2.addEventListener('ended', function() {
                        pruning2.pause();
                        pruning2.currentTime = 0; // Возвращение к началу видео
                      });
                      pruning2.classList.remove('active');
                      pruning2.removeAttribute('loop');
            
                      blockThree.classList.add('active');
                    }, 2000); 
                }

            } else if(blockThree.classList.contains('active')){

                blockThree.classList.remove('active');
                if(!blockThree.classList.contains('active')){
                  // Показать blockFour и скрыть blockThree
                  pruning3.classList.add('active');
                  pruning3.setAttribute('loop', 'true');
                  if (!pruning3.paused) {
                    pruning3.pause();
                  }
                  pruning3.play();
                  setTimeout(() => {
                    pruning3.addEventListener('ended', function() {
                      pruning3.pause();
                      pruning3.currentTime = 0; // Возвращение к началу видео
                    });
                    pruning3.classList.remove('active');
                    pruning3.removeAttribute('loop');
                    blockFour.classList.add('active');
                  }, 2000); 
                } 
          
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
            blockTwo.classList.remove('active');
              if(languageBtn.textContent == 'Eng'){
                scrollTexts[0].style.opacity = '1';
              }else{
                scrollTexts[1].style.opacity = '1';
              }

              if(!blockTwo.classList.contains('active')){
                pruningReverse.classList.add('activeOneReverse');
                pruningReverse.setAttribute('loop', 'true');
                if (!pruningReverse.paused) {
                  pruningReverse.pause();
                }
                pruningReverse.play();
                setTimeout(() => {
                  pruningReverse.addEventListener('ended', function() {
                    pruningReverse.pause();
                    pruningReverse.currentTime = 0; // Возвращение к началу видео
                  });
                  pruningReverse.classList.remove('activeOneReverse');
                  pruningReverse.removeAttribute('loop');
                  header.classList.remove('removeBlock'); 
                }, 1200); 
              }
    
            clickNum = 0;
          } else if (blockThree.classList.contains('active')) {

            blockThree.classList.remove('active');
            if(!blockThree.classList.contains('active')){
              pruningReverse2.classList.add('activeReverse');
              pruningReverse2.setAttribute('loop', 'true');
              if (!pruningReverse2.paused) {
                pruningReverse2.pause();
              }
              pruningReverse2.play();
              setTimeout(() => {
                pruningReverse2.addEventListener('ended', function() {
                  pruningReverse2.pause();
                  pruningReverse2.currentTime = 0; // Возвращение к началу видео
                });
                pruningReverse2.classList.remove('activeReverse');
                pruningReverse2.removeAttribute('loop');
                blockTwo.classList.add('active');
              }, 2000); 
            }
            clickNum = 1

          } else if (blockFour.classList.contains('active')){

            blockFour.classList.remove('active');
            if(!blockFour.classList.contains('active')){
              pruningReverse3.classList.add('activeThreeReverse');
              pruningReverse3.setAttribute('loop', 'true');
              if (!pruningReverse3.paused) {
                pruningReverse3.pause();
              }
              pruningReverse3.play();
              setTimeout(() => {
                pruningReverse3.addEventListener('ended', function() {
                  pruningReverse3.pause();
                  pruningReverse3.currentTime = 0; // Возвращение к началу видео
                });
                pruningReverse3.classList.remove('activeThreeReverse');
                pruningReverse3.removeAttribute('loop');
      
                blockThree.classList.add('active');
              }, 2000); 
            }
    
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
          ticking = false;
        });

        ticking = true;
    }
      // Если прокрутка уже идет, не делаем ничего
    //  if (isScrolling) return;

      // Начинаем анимационный цикл
    //  isScrolling = true;
    //  requestAnimationFrame(updateScroll);
}
window.addEventListener('wheel', scrollElement, { passive: true });




function updateScroll() {
  // Ваш код обновления состояния прокрутки
  console.log('1')
  // Проверяем, не прекратилась ли прокрутка
  if (!isScrolling) {
      return;
  }
  // Запрашиваем следующий кадр анимации
  requestAnimationFrame(updateScroll);
}
function stopScrolling() {
  isScrolling = false;
  console.log('2')
}

function touchStart(event) {
  startY = event.touches[0].clientY;
}
function touchMoveScroll(event){
const currentY = event.touches[0].clientY;
const diffY = startY - currentY;

  if (diffY > 0) {
      if (!header.classList.contains('removeBlock')) {

        header.classList.add('removeBlock'); 
        if(header.classList.contains('removeBlock')){
          for(let scrollText of scrollTexts){
            scrollText.style.opacity = '0';
          }
           pruning.classList.add('active');
           pruning.setAttribute('loop', 'true');
           if (!pruning.paused) {
            pruning.pause();
          }
           pruning.play();
           setTimeout(() => {
            pruning.addEventListener('ended', function() {
              pruning.pause();
              pruning.currentTime = 0; // Возвращение к началу видео
            });
            pruning.classList.remove('active');
            pruning.removeAttribute('loop');
             blockTwo.classList.add('active');
           }, 1200); 
        }
         startY = currentY; // Обновляем startY после перехода

      } else if (blockTwo.classList.contains('active')){
       
        blockTwo.classList.remove('active');
        if(!blockTwo.classList.contains('active')){
          // Показать blockThree и скрыть blockTwo
          pruning2.classList.add('active');
          pruning2.setAttribute('loop', 'true');
          if (!pruning2.paused) {
            pruning2.pause();
          }
           pruning2.play();
           setTimeout(() => {
              pruning2.addEventListener('ended', function() {
              pruning2.pause();
              pruning2.currentTime = 0; // Возвращение к началу видео
            });
            pruning2.classList.remove('active');
            pruning2.removeAttribute('loop');
            blockThree.classList.add('active');
          }, 2000); 
        }
        startY = currentY; // Обновляем startY после перехода

      } else if(blockThree.classList.contains('active')){

        blockThree.classList.remove('active');
        if(!blockThree.classList.contains('active')){
          // Показать blockFour и скрыть blockThree
          pruning3.classList.add('active');
          pruning3.setAttribute('loop', 'true');
          if (!pruning3.paused) {
            pruning3.pause();
          }
           pruning3.play();
           setTimeout(() => {
            pruning3.addEventListener('ended', function() {
              pruning3.pause();
              pruning3.currentTime = 0; // Возвращение к началу видео
            });
            pruning3.classList.remove('active');
            pruning3.removeAttribute('loop');
            blockFour.classList.add('active');
          }, 2000); 
        }
        startY = currentY; // Обновляем startY после перехода

      } else if(blockFour.classList.contains('active')){
          // Показать footer
          blockFour.classList.remove('active');
          setTimeout(() => {
            footer.classList.add('footerActive');
          }, 300); 
          scrollClick.style.opacity = '0';
          startY = currentY; // Обновляем startY после перехода
      }
    
  } else if(diffY < 0){
    if (blockTwo.classList.contains('active')) {

      blockTwo.classList.remove('active');
      if(!blockTwo.classList.contains('active')){
        if(languageBtn.textContent == 'Eng'){
          scrollTexts[0].style.opacity = '1';
        }else{
          scrollTexts[1].style.opacity = '1';
        }
          pruningReverse.classList.add('activeOneReverse');
          pruningReverse.setAttribute('loop', 'true');
          if (!pruningReverse.paused) {
            pruningReverse.pause();
          }
          pruningReverse.play();
           setTimeout(() => {
            pruningReverse.addEventListener('ended', function() {
              pruningReverse.pause();
              pruningReverse.currentTime = 0; // Возвращение к началу видео
            });
            pruningReverse.classList.remove('activeOneReverse');
            pruningReverse.removeAttribute('loop');
            header.classList.remove('removeBlock'); 
          }, 1200); 
      }
      clickNum = 0;
      startY = currentY; // Обновляем startY после перехода

    } else if (blockThree.classList.contains('active')) {

      blockThree.classList.remove('active');
      if(!blockThree.classList.contains('active')){
        pruningReverse2.classList.add('activeReverse');
        pruningReverse2.setAttribute('loop', 'true');
        if (!pruningReverse2.paused) {
          pruningReverse2.pause();
        }
        pruningReverse2.play();
         setTimeout(() => {
          pruningReverse2.addEventListener('ended', function() {
            pruningReverse2.pause();
            pruningReverse2.currentTime = 0; // Возвращение к началу видео
          });
          pruningReverse2.classList.remove('activeReverse');
          pruningReverse2.removeAttribute('loop');
          blockTwo.classList.add('active');
        }, 2000); 
      }
      clickNum = 1
      startY = currentY; // Обновляем startY после перехода

    } else if (blockFour.classList.contains('active')){

      blockFour.classList.remove('active');
      if(!blockFour.classList.contains('active')){
        pruningReverse3.classList.add('activeThreeReverse');
        pruningReverse3.setAttribute('loop', 'true');
        if (!pruningReverse3.paused) {
          pruningReverse3.pause();
        }
        pruningReverse3.play();
         setTimeout(() => {
          pruningReverse3.addEventListener('ended', function() {
            pruningReverse3.pause();
            pruningReverse3.currentTime = 0; // Возвращение к началу видео
          });
          pruningReverse3.classList.remove('activeThreeReverse');
          pruningReverse3.removeAttribute('loop');
          blockThree.classList.add('active');
        }, 2000); 
      }
      clickNum = 2;
      startY = currentY; // Обновляем startY после перехода

    } else if(footer.classList.contains('footerActive')){
      // Скрыть footer
      setTimeout(() => {
        blockFour.classList.add('active');
        footer.classList.remove('footerActive');
      }, 300); 
      clickNum = 3
      scrollClick.style.opacity = '1';
      startY = currentY; // Обновляем startY после перехода
    }
  } 
    startY = currentY;

    
      // Если прокрутка уже идет, не делаем ничего
     if (isScrolling) return;

    //   Начинаем анимационный цикл
      isScrolling = true;
      requestAnimationFrame(updateScroll);
}
window.addEventListener('touchstart', touchStart);
window.addEventListener('touchmove', touchMoveScroll, { passive: true });
window.addEventListener('touchmove', function() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(stopScrolling, 100); // Задержка 100 мс
});



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

    header.classList.add('removeBlock'); 
    if(header.classList.contains('removeBlock')){
      for(let scrollText of scrollTexts){
        scrollText.style.opacity = '0';
      }
       pruning.classList.add('active');
       pruning.setAttribute('loop', 'true');
       if (!pruning.paused) {
        pruning.pause();
      }
      pruning.play();
      setTimeout(() => {
        pruning.addEventListener('ended', function() {
          pruning.pause();
          pruning.currentTime = 0; // Возвращение к началу видео
        });
        pruning.classList.remove('active');
        pruning.removeAttribute('loop');
        blockTwo.classList.add('active');
       }, 1200); 
    }

  } else if (!blockThree.classList.contains('active') && clickNum == 1){

    // Показать blockThree и скрыть blockTwo
    blockTwo.classList.remove('active');
    if(!blockTwo.classList.contains('active')){
      pruning2.classList.add('active');
      pruning2.setAttribute('loop', 'true');
      if (!pruning2.paused) {
        pruning2.pause();
      }
      pruning2.play();
      setTimeout(() => {
        pruning2.addEventListener('ended', function() {
          pruning2.pause();
          pruning2.currentTime = 0; // Возвращение к началу видео
        });
        pruning2.classList.remove('active');
        pruning2.removeAttribute('loop');
  
        blockThree.classList.add('active');
      }, 2000); 
    }

  } else if(!blockFour.classList.contains('active') && clickNum == 2){

    // Показать blockFour и скрыть blockThree
    blockThree.classList.remove('active');
    if(!blockThree.classList.contains('active')){
      pruning3.classList.add('active');
      pruning3.setAttribute('loop', 'true');
      if (!pruning3.paused) {
        pruning3.pause();
      }
      pruning3.play();
      setTimeout(() => {
        pruning3.addEventListener('ended', function() {
          pruning3.pause();
          pruning3.currentTime = 0; // Возвращение к началу видео
        });
        pruning3.classList.remove('active');
        pruning3.removeAttribute('loop');
  
        blockFour.classList.add('active');
      }, 2000); 
    }


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
 requestAnimationFrame(touchStart);
}

scrollClick.addEventListener('click', handleScrollClick);


/*
// Начинаем анимационный цикл при начале прокрутки
window.addEventListener('wheel', scrollElement);
// Останавливаем анимационный цикл, когда прокрутка прекращается
window.addEventListener('wheel', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(stopScrolling, 100); // Задержка 100 мс
});

window.addEventListener('touchstart', touchStart);
window.addEventListener('touchmove', touchMoveScroll);
window.addEventListener('touchmove', function() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(stopScrolling, 100); // Задержка 100 мс
});*/


