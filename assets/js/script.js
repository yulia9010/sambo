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



// --- ACCORDION & SELECTOR START ---

        if($('.selector__btn').length){
            $('.selector__btn').on('click',function (){
                if($(this).next().is(':visible')){
                    $(this).next().slideUp(300)
                    $(this).removeClass('_js-expand')
                }else{
                    $(this).next().slideDown(300)
                    $(this).addClass('_js-expand')
                }
            })

            $('.selector__options li').on('click', function (){
                let liWrap = $(this).closest('.selector');

                if(!liWrap.hasClass('selector_horizontal') || $(window).width() < 992){

                    let thisText = $(this).text()
                    liWrap.find('.selector__btn span').text(thisText)
                    liWrap.find('.selector__btn').next().slideUp(300)
                    liWrap.find('.selector__btn').removeClass('_js-expand')
                }
            })

            $('body').on('click', function (e){
                if($('.selector').hasClass('selector_horizontal') && $(window).width() > 991.98){
                    return;
                }else if(!$(e.target).closest('.selector').hasClass('selector')){
                    $('.selector__btn').next().slideUp(300)
                    $('.selector__btn').removeClass('_js-expand')
                }
            })
        }

        if($('.selector-contents-wrapper').length){

            $('.toggle').on('click' ,function(e) {
                let isOpen = 0;
                let $this = $(this);
                let globalWrap = $(this).closest('.content-show-hide');

                if ($this.hasClass('_js-open')){
                    isOpen = 1
                }

                globalWrap.find('.toggle').removeClass('_js-open');
                globalWrap.find('.selector-content li').removeClass('_js-open');
                globalWrap.find('.inner').slideUp(350);

                if (isOpen === 1) {
                    $this.removeClass('_js-open');
                    $this.parent().removeClass('_js-open');
                    $this.next().slideUp(350);
                } else {
                    $this.parent().addClass('_js-open');
                    $this.addClass('_js-open');
                    $this.next().slideToggle(350);
                }
            });
        }
// --- ACCORDION & SELECTOR END ---

    });
})(jQuery);