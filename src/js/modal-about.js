(() => {
    const refs = {
     
        
      openModalAboutMenu: document.querySelector('.modal-about-menu--open'),
      closeModalAboutMenu: document.querySelector('.modal-about-menu--close'),
      modalAboutMenu: document.querySelector('.modal-about__offer'),
    
      };
  
  
    
    refs.openModalAboutMenu.addEventListener('click', toggleModal);
    refs.closeModalAboutMenu.addEventListener('click', toggleModal);
  
   window.addEventListener('click', e => { 
     
    const target = e.target 
     if (!target.closest('.modal-about') && !target.closest('.modal-about-menu--open')) {
       refs.modalAboutMenu.classList.add('visually-hidden')
       document.body.classList.remove('modal-about-menu--visible');
     }
     });
  
    function toggleModal() {
     
      refs.modalAboutMenu.classList.toggle('visually-hidden');
      document.body.classList.toggle('modal-about-menu--visible');
    }
  
  })();