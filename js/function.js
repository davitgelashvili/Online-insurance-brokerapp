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
function partnersSlider(){
    $('.partners-slider-js').owlCarousel({
        loop:false,
        nav:false,
        margin: 50,
        stagePadding: 0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:6,
            }
        }
    })

    $('.partners-slider__item').each(function () {
        console.log(this);
        $('.partners-slider__item:not(:first):not(:last)').addClass('justify-content-center'); 
        $('.partners-slider__item:last').addClass('justify-content-end');
        $('.partners-slider__item:first').addClass('justify-content-start');
    });
}
function newsSlider(){
    $('.news-slider-js').owlCarousel({
        loop:false,
        nav:false,
        navText: [" "," "],
        margin: 60,
        dots: false,
        stagePadding: 0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })

    var owl = $('.owl-carousel');

    $('.news-slider--next').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('.news-slider--prev').click(function() {
        owl.trigger('prev.owl.carousel');
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

    $('.pass-hide').on( 'click', function() {
        $(this).hide();
        $('.pass-show').show();
        $('.showpassword')[0].type='text';
    })
    $('.pass-show').on( 'click', function() {
        $(this).hide();
        $('.pass-hide').show();
        $('.showpassword')[0].type='password';
    })

    $('.js-radio').on('change', function() {
        $('.js-radio').closest('.js-radio-out').removeClass('active');
        if ($(this).is(":checked")) {
            $(this).closest('.js-radio-out').addClass('active');
        }else {
            $('.js-radio').closest('.js-radio-out').removeClass('active');
        }
    })

    $('.js-check').on('change', function() {
        // $('.js-check').closest('.js-check-out').removeClass('active');
        if ($(this).is(":checked")) {
            $(this).closest('.js-check-out').addClass('active');
        }else {
            $(this).closest('.js-check-out').removeClass('active');
        }
    })

    $('.down-up--head').on( 'click', function() {
        var thisData = this;
        var parent = $(this).closest('.down-up__item');
        $('.down-up--head').closest('.down-up__item').removeClass('active');
        $('.down-up--body').removeClass('active');
        $('.down-up--head').removeClass('active');

        $('.down-up--body').each(function () {
            if ($(this).data('body') == $(thisData).data('head')) {
                console.log($(this).data('body') == $(thisData).data('head'))
                $(this).toggleClass('active');
                if( $(this).hasClass('active') ){
                    $(this).addClass('active');
                    $(thisData).addClass('active');
                    parent.addClass('active')
                }else {
                    $(this).removeClass('active');
                    $(thisData).removeClass('active');
                    parent.removeClass('active');
                }
            }
        });

    })

    $(".ganvadeba-check").change(function () {
        if ($(this).is(":checked")) {
            if ($(this).data('ganvadeba') == true ) {
                $('.ganvadeba').show()
            }else {
                $('.ganvadeba').hide()
            }

        } else {
            $('.ganvadeba').hide()
        }
    });

    $('.add-drive').on( 'click', function(e) {
        e.preventDefault();
        var thisData = this;
        $(thisData).hide();
        $('.driver-form').each(function () {
            if ($(this).data('driver') == $(thisData).data('driver')) {
                $(this).show();
            }
        });
    })

    $(".registration-user").change(function () {
        var thisData = this;
        if ($(thisData).is(":checked")) {
            $('.registration-user-tab').each(function () {
                if ($(this).data('registration') == $(thisData).data('registration')) {
                    $(this).css('display','flex')
                }else {
                    $(this).css('display','none')
                }
            });
        }
    });

    $(".js-driver").change(function () {
        if ($(this).is(":checked")) {
            if ($(this).data('driver') == true ) {
                $('.js-driver-license').css('display','flex')
            }else {
                $('.js-driver-license').css('display','none')
            }

        } else {
            $('.js-driver-license').css('display','none')
        }
    });

    $(".js-insource").change(function () {
        if ($(this).is(":checked")) {
            if ($(this).data('insource') == 'me' ) {
                $('.insource-me').css('display','flex')
                $('.insource-someone').css('display','none');
                $('.insource-someone-me').css('display','none');
            }else if ($(this).data('insource') == 'someone'){
                $('.insource-me').css('display','none')
                $('.insource-someone').css('display','flex');
                $('.insource-someone-me').css('display','none');
            }else {
                $('.insource-me').css('display','none')
                $('.insource-someone').css('display','none');
                $('.insource-someone-me').css('display','flex');
            }
        } else {
            $('.insource-me').css('display','none')
            $('.insource-someone').css('display','none');
            $('.insource-someone-me').css('display','none');
        }
    });

});

function changeYesOrNo(e){
    if(e != ''){
        $('.yesorno').show()
    }else {
        $('.yesorno').hide()
    }
}

function fileUploadName(e) {
   var name =  e.split('\\').pop();
    if(e != ''){ 
        $('.login__upload--name').html(name)
    }
}

function fileUploadImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var x= $(input).closest('.login__image').find('.login__image--upload');
            var y= $(input).closest('.login__image').find('.login__image--delete');
            x.attr('src', e.target.result);
            x.show();
            y.show();
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function calendar(className){
    const date = new Date();
    const [month, day, year]       = [(date.getMonth() + 1), date.getDate(), date.getFullYear()];
    console.log(month, day, year)
    const myCalendar = new TavoCalendar(className, {
        dates: `${year - month - day }`,
        // date_start: "",
        // date_end: "",
        range_select: false,
        multi_select: false,
        future_select: true,
        past_select: true,
        frozen: false
    })
}

$('.price__item').each(function(id, element){
    if(id < ($('.price__item').length - 1) ){
        $(this).addClass('border-right')
    }
})

$( function() {
    $( ".sort" ).sortable();
} );