function workSlider(){
    $('.main-slider-js').owlCarousel({
        margin:0,
        responsiveClass: true,
        dotsContainer: '.main-slider__dots',
        responsive:{
            0:{
                items:1,
            }
        }
    })
    
    $('.main-slider__dots--item').on( 'click', function() {
        $('.main-slider-js').trigger('to.owl.carousel', [$(this).index(), 300]);
        $('.main-slider__dots--item').removeClass( 'active' );
        $(this).addClass( 'active' );
    })

}
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass("active");
        } else {
            $('.header').removeClass("active");
        }
    });
});


// function writeSlider(){
//     $('.write__slider').owlCarousel({
//         onChange: callbackWrite,
//         margin:0,
//         responsiveClass: true,
//         dotsContainer: '.write__slider--dots',
//         responsive:{
//             0:{
//                 items:1,
//             }
//         }
//     })

//     $('.write__slider--dots .owl-dot').on( 'click', function() {
//         $('.write__slider').trigger('to.owl.carousel', [$(this).index(), 300]);
//         $( '.write__slider--dots .owl-dot' ).removeClass( 'active' );
//         $(this).addClass( 'active' );
//     })
// }

// $('.pass-hide').on( 'click', function() {
//     $(this).hide();
//     $('.pass-show').show();
//     $('.showpassword')[0].type='text';
// })
// $('.pass-show').on( 'click', function() {
//     $(this).hide();
//     $('.pass-hide').show();
//     $('.showpassword')[0].type='password';
// })

// $('.popup__close, .popup__bg').on( 'click', function() {
//     $('.popup').hide();
// })


// $('.map__svg > circle').on( 'click', function() {
//     $('.js-map').addClass('active');
    
//     var position = $(this).position();
//     $('.map__popup').css({
//         'top': position.top,
//         'left': position.left,
//         'display': 'flex'
//     })
// })


// $('.js-map').on( 'click', function(e) {
//     if( $('.js-map').hasClass('active') ){
//         $('.map__popup').css({
//             'display': 'flex'
//         })

//         $('.js-map').removeClass('active');
//     }else {
//         $('.map__popup').css({
//             'display': 'none'
//         })
//     }
// })

// $('.registration__tabs--item.first').on( 'click', function(e) {
//     $('.registration__tabs--item').removeClass('active')
//     $(this).addClass('active');
//     $('.registration__tab--first').show()
//     $('.registration__tab--second').hide()
// })

// $('.registration__tabs--item.second').on( 'click', function(e) {
//     $('.registration__tabs--item').removeClass('active')
//     $(this).addClass('active');
//     $('.registration__tab--first').hide()
//     $('.registration__tab--second').show()
// })

// function viewImage(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('.upload-profile__image img')
//                 .attr('src', e.target.result);

//             $(".upload-profile__image img").show();
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }

// $('.dashboard__mymenu--item.submenu').on( 'click', function(e) {
//     $(this).toggleClass('active');
//     if( $(this).hasClass('active') ){
//         $(this).children('.dashboard__submenu').show();
//     }else {
//         $(this).children('.dashboard__submenu').hide();
//     }
//     // $('.dashboard__submenu').show();
// })

// $('.upload-profile--open').on( 'click', function(e) {
//     $(this).toggleClass('active');
//     if( $(this).hasClass('active') ){
//         $('.dashboard__header--popup').show()
//     }else {
//         $('.dashboard__header--popup').hide()
//     }
//     // $('.dashboard__submenu').show();
// })

// $('.project-sort').on( 'click', function(e) {
//     $(this).toggleClass('active');
//     if( $(this).hasClass('active') ){
//         $('.project-sort--show').show()
//     }else {
//         $('.project-sort--show').hide()
//     }
//     // $('.dashboard__submenu').show();
// })


// $('.dashboard__right--down').on( 'click', function(e) {
//     $(this).toggleClass('active');
//     if( $(this).hasClass('active') ){
//         $(this).parent().parent().css('height', 'unset')
//     }else {
//         $(this).parent().parent().css('height', '120px')
//     }
//     // $('.dashboard__submenu').show();
// })

// $(".dashboard-language").change(function () {
//     var checkbox = this;
//     $(checkbox).data('languages')
//     if ($(this).is(":checked")) {
//         $('.dashboard__right--container.up').each(function () {
//             if ($(this).data('language') == $(checkbox).data('languages')) {
//                 $(this).show();
//                 localStorage.setItem("checkbox", JSON.stringify( $(checkbox).data('languages') ));
//                 localStorage.setItem("activetab", JSON.stringify( $(this).data('language') ));
//             }
//         });

//     } else {
//         $('.dashboard__right--container.up').each(function () {
//             if ($(this).data('language') == $(checkbox).data('languages')) {
//                 $(this).hide();
//             }
//         });
//     }
// });


// function tap(){
//     $('.dashboard__menu li').each(function () {
//         var menu = this;
//         $('.tab-active').each(function () {
//             if ($(this).data('tab-active') == $(menu).data('tab')) {
//                 $('.tab-active').removeClass('active')
//                 $(this).toggleClass('active');
//                 if( $(this).hasClass('active') ){
//                     $(this).show();
//                     localStorage.setItem("menutab", JSON.stringify( $(menu).data('tab') ));
//                     localStorage.setItem("activesection", JSON.stringify( $(this).data('tab-active') ));
//                 }else {
//                     $(this).hide()
//                 }
    
//                 $('.dashboard__menu li').removeClass('active');
//                 $(menu).toggleClass('active');
//                 if( $(menu).hasClass('active') ){
//                     $(menu).addClass('active');
//                 }else {
//                     $(menu).removeClass('active');
//                 }
//             }
//         });
//     });
// }
// tap();

// $('.dashboard__menu li').on( 'click', function(e) {
//     var menu = this;
//     $('.tab-active').each(function () {
//         if ($(this).data('tab-active') == $(menu).data('tab')) {
//             $('.tab-active').removeClass('active')
//             $(this).toggleClass('active');
//             if( $(this).hasClass('active') ){
//                 $(this).show();
//             }else {
//                 $(this).hide()
//             }

//             $('.dashboard__menu li').removeClass('active');
//             $(menu).toggleClass('active');
//             if( $(menu).hasClass('active') ){
//                 $(menu).addClass('active');
//             }else {
//                 $(menu).removeClass('active');
//             }
//         }
//     });
// })


// $(".tarjimani").change(function () {
//     if ($(this).is(":checked")) {
//         $('.active-tarjimani').css('display','flex')

//     } else {
//         $('.active-tarjimani').css('display','none')
//     }
// });


// $('.burger').on( 'click', function(e) {
//     $(this).toggleClass('active');
//     if( $(this).hasClass('active') ){
//         $('.burger-menu').css('display', 'flex')
//         $('body').css('overflow-y', 'hidden')
//     }else {
//         $('.burger-menu').css('display', 'none')
//         $('body').css('overflow-y', 'unset')
//     }
//     // $('.dashboard__submenu').show();
// })

// $('.burger-menu__cancel').on( 'click', function(e) {
//     $('.burger-menu').css('display', 'none')
//     $('body').css('overflow-y', 'unset')
// })