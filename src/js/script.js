$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 700,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/watches/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/watches/right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,

                }
            }
        ]
    });
  });