$('img').attr('ondragstart','return false;');
layui.use('layer', function(){

    //删除购物车
    $('.public-ul-error').on('click',function(){
        var This = $(this);
        layer.confirm('确定要删除?', {icon: 3, title:'提示'}, function(index){
            This.parent('li').remove();
            layer.close(index);
        });
    });

    //移入鼠标显示购物车
    $('.public-cait').on('mouseenter',function(){
        $(this).find('.public-header-xixn').css('display','block');
    });
    //移出鼠标显示购物车
    $('.public-cait').on('mouseleave',function(){
        $(this).find('.public-header-xixn').css('display','none');
    });

    $('.public-logo-centr input').bind("click",function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
            $('.public-logo-centr ').animate({width:'240px'});
        }else{
            e.cancelBubble = true;
        }
    });
    $(document).bind("click",function(event){
        var e=window.event || event;
        if(e.which == 1) {
            //此处写触发函数
            $('.public-logo-centr ').animate({width:'200px'});
        }
    });


});

