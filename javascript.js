$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".header-container").addClass("active");
    } else {
        $(".header-container").removeClass("active");
    }
});

// $(document).ready(function(){
//     $('#menu').on("click","a", function (event) {
//         event.preventDefault();
//
//         var id  = $(this).attr('href'),
//
//             top = $(id).offset().top;
//
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });//анімашка для перехода по якорям яка не працює


//
// $(document).ready(function(){
// $('.slick').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//             }
//         }
//     ]
// });
//
// slick, який ніхуя не працює і коли активний то перестає працювати бекграунд для навбара