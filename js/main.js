$(function() {
    const menuButton = document.querySelector('.menu__button');
    const mobileMenu = document.querySelector('.mobile-menu');
    menuButton.addEventListener('click', () => {
        console.log('clicked');
        let expanded = menuButton.getAttribute('aria-expanded') === 'true' ? true :false ;
        menuButton.setAttribute('aria-expanded', !expanded);
        menuButton.classList.toggle('menu__button--open');
        mobileMenu.classList.toggle('mobile-menu--open');
    });
})

const mainPageSwiper = new Swiper('.swiper-container-main', {
    slidesPerView: 1,
    keyboard: { enabled: true,},
    // breakpoints: {
    //     768: {
    //         slidesPerView: 'auto',
    //         spaceBetween: 75,
    //         // slidesPerGroup: 2,
    //         // slidesPerGroupSkip: 1,
            
    //     }
    // },
  
    navigation: {
      nextEl: '.main-swiper-button-next',
      prevEl: '.main-swiper-button-prev',
    },
});

const aboutTendencies = new Swiper('.swiper-container-about-tendencies', {
    slidesPerView: 1,
    keyboard: { enabled: true,},
    // breakpoints: {
    //     768: {
    //         slidesPerView: 'auto',
    //         spaceBetween: 75,
    //         // slidesPerGroup: 2,
    //         // slidesPerGroupSkip: 1,
            
    //     }
    // },
  
    navigation: {
      nextEl: '.about-tendencies-swiper-button-next',
      prevEl: '.about-tendencies-swiper-button-prev',
    },
});

const documentsSwiper = new Swiper('.swiper-container-documents', {
    slidesPerView: 'auto',
    spaceBetween: 75,
    keyboard: { enabled: true,},
    
    breakpoints: {
        768: {
            slidesPerView: 'auto',
            spaceBetween: 75,
            // slidesPerGroup: 2,
            // slidesPerGroupSkip: 1,
            
        }
    },
    
    slideActiveClass: 'document-swiper-slide-active',
  
    pagination: {
      el: '.documents-swiper-pagination',
      clickable: true,
      bulletClass: 'documents-swiper-pagination-bullet',
      bulletActiveClass: 'documents-swiper-pagination-bullet-active'
    },
  
    navigation: {
      nextEl: '.documents-swiper-button-next',
      prevEl: '.documents-swiper-button-prev',
    },
});