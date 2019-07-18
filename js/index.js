$('button').click(function () {
    if ($(this).hasClass('btn_unlike')) {
        $(this).removeClass('btn_unlike');
        $('.ani_heart_m').removeClass('hi');
        $('.ani_heart_m').addClass('bye');
    } else {
        $(this).addClass('btn_unlike');
        $('.ani_heart_m').addClass('hi');
        $('.ani_heart_m').removeClass('bye');
    }
});
$('.menu1').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.sub1').toggleClass('active');
});
$('.menu2').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.sub2').toggleClass('active');
});
$('.menu3').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.sub3').toggleClass('active');
});