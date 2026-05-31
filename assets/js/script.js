(function($) {
    $(document).ready(function($) {

        window.onload = function() {
            document.body.classList.add('ready');
        }

// --- sticky header START ---

        let startScroll = 1;

        $(window).scroll(function(){
            if ($(this).scrollTop() > startScroll) {
                $('.header').addClass('_js-sticky');
            } else {
                $('.header').removeClass('_js-sticky');
            }

        });
// --- sticky header END ---

// --- mobile menu START ---
        let menuBtn = $('.menu-trigger'),
            mobMenu = $('.navbar'),
            mobHeader = $('.header'),
            body = $('body');

        function toggleMobileMenu(){
            menuBtn.toggleClass('_js-active');
            mobMenu.toggleClass('_js-open');
            mobHeader.toggleClass('_js-menu-open');
            body.toggleClass('_js-overflow-hidden');
        }

        menuBtn.on('click', ()=>{
            $('.dropdown').removeClass('_js-open');
            $('.dropdown').find('.d-menu').removeClass('_js-open');
            $('.d-menu__dropdown').removeClass('_js-open');
            $('.d-menu__dropdown').find('.d-menu__submenu').removeClass('_js-open');
            toggleMobileMenu();
        });

        let goMobile = 1200;//set resolution when header goes mobile view

        /* dropdowns in mobile menu START */

        if ($(window).width() < goMobile) {
            $('.dropdown').on('click', (e)=>{
                let aim = $(e.target);

                if(aim.hasClass("menu__back")){
                    aim.parent().removeClass('_js-open');
                    aim.parent().parent().removeClass('_js-open');
                }else{
                    aim.addClass('_js-open');
                    aim.find('.d-menu').addClass('_js-open');
                }
            });

            $('.d-menu__dropdown').on('click', (e)=>{

                let aim = $(e.target);
                if(aim.hasClass("menu__back")){
                    aim.parent().removeClass('_js-open');
                    aim.parent().parent().removeClass('_js-open');
                }else{
                    aim.addClass('_js-open');
                    aim.find('.d-menu__submenu').addClass('_js-open');
                }

            });
        }
        /* dropdowns in mobile menu END */
// --- mobile menu END ---

// --- GALLERY FIRST ITEM ON MOBILE START ---
        $('.box').click(function() {
            $(this).siblings().removeClass('box__mobile');
        });

// --- GALLERY FIRST ITEM ON MOBILE END ---

// --- VIDEO PLAY ON HOVER START ---
        const videos = document.querySelectorAll('video');

        videos.forEach(video => {
            video.addEventListener('mouseenter', () => {
                video.play();
            });

            video.addEventListener('mouseleave', () => {
                video.pause();
            });
        });

// --- VIDEO PLAY ON HOVER END ---

    });
})(jQuery);