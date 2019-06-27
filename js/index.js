var map_swiper = new Swiper('.map-container', {
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.map-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.map-next',
        prevEl: '.map-prev',
    },
});
var map ;
//鼠标移入暂停轮播图mouseenter
$('.map-container').on('mouseenter',function(){
    map_swiper.autoplay.stop();
    map = setTimeout(function(){
        $('.map-next').animate({opacity:1,right:'40px'});
        $('.map-prev').animate({opacity:1,left:'40px'});
    },300);
});
//鼠标移出开始轮播图mouseleave
$('.map-container').on('mouseleave',function(){
    map_swiper.autoplay.start();
    clearTimeout(map);
    $('.map-next').animate({opacity:0,right:'0px'});
    $('.map-prev').animate({opacity:0,left:'0px'});
});
var ars;
//控制栏目推荐
$('.index-column .layui-col-md4').on('mouseenter',function(){
    var ar = $(this);
     ars = setTimeout(function(){
        ar.find('.index-column-ts').animate({width:'100%'},300);
         ar.find('.index-column-back').animate({width:'100%'},300);
    },500);
});
$('.index-column .layui-col-md4').on('mouseleave',function(){
    clearTimeout(ars);
    $(this).find('.index-column-ts').animate({width:'0%'},500);
});