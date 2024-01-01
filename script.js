$(jQuery).ready(function(){
    $('.bar').click(function(){
        $('.nav').addClass('active');
    });
    $('.close').click(function(){
        $('.nav').removeClass('active');
    });

    $('.testimonial-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite:true,
        dots:true,
        arrow:false,
        nav:false,
      });
})