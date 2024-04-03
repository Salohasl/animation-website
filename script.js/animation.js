function animation(){
  const blockTwo = document.querySelector('.block-two');
  const header = document.querySelector('.header');
  const pruning = document.querySelector('.pruning');
  const scrollClick = document.querySelectorAll('.scroll');
  const pruningReverse = document.querySelector('.pruning-reverse');
  
  let scrolltop = scrollY; // запомнить
  
  window.addEventListener('scroll', function scroll() {
    if (scrollY >= scrolltop) {
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
    } else {

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
});




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

