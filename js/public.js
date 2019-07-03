$('img').attr('ondragstart','return false;');


layui.use(['flow','layer'], function(){
    var flow = layui.flow;

    var wid = $(window).width(); // 宽度
    var scrolltop = $(window).scrollTop(); //距离高度
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
            $('.public-logo-centr ').animate({width:'280px'});
        }else{
            e.cancelBubble = true;
        }
    });
    $(document).bind("click",function(event){
        var e=window.event || event;
        if(e.which == 1) {
            //此处写触发函数
            $('.public-logo-centr ').animate({width:'240px'});
        }
    });

    var Pubtop = $('.public-top'); //返回顶部元素

    //滚动
    $(window).scroll(function(){
        //当前宽度
        var wid = $(window).width();
        var scrolltop = $(window).scrollTop();
        if(wid > 767){

        }else if(wid < 767){
            moblie(scrolltop);
        }

        //返回顶部
        if(scrolltop > 300){
            Pubtop.css('display','flex');
        }else{
            Pubtop.css('display','none');
        }
    });

    moblie(scrolltop);
    function moblie(scrolltop){
        var mobile = $('.mobile');
        if(scrolltop > 60){
            mobile.css({width:'100%','z-index':2,top:'0px',position:'fixed','box-shadow':'1px 1px 10px rgba(0,0,0,.3)'});
        }else{
            mobile.css({width:'100%','z-index':2,top:0,position:'unset'});
        }
    }

    //监听屏幕大小
    $(window).resize(function(){
        var wid = $(window).width();
        topbu(wid);
    });

    //控制返回顶部
    function topbu(wid){
        if(wid > 1440 && scrolltop > 300){
            var left = $('.public-whole').offset().left;
            Pubtop.css({right:'unset',left:left+1230+'px','display':'flex'});
        }else if(scrolltop > 300){
            Pubtop.css({right:'10px',left:'unset','display':'flex'});
        }
    }
    topbu(wid);

    //点击返回头部
    Pubtop.on('click',function(){
        $('html,body').animate({scrollTop:'0'},800);
    });

    //点击打开微信
    $('.weixin').on('click',function(){
        var This = $(this);
        $('#public-textarea').remove();
        $('body').append('<textarea cols="20" rows="10" id="public-textarea">'+This.attr('num')+'</textarea>');
        layer.open({
            type: 1
            ,title: false //不显示标题栏
            ,closeBtn: false
            ,area: '300px'
            ,shade: 0.8
            ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
            ,btn: ['复制微信号','关闭']
            ,skin:'skin-weixin'
            ,btnAlign: 'c'
            ,offset: ['0', '0']
            ,moveType:0 //拖拽模式，0或者1
            ,content: '<div class="weixin-title">扫一扫添加客服微信</div><div class="weixin-copy"><span>客服微信号: </span><span style="color: #FF4747;">'+This.attr('num')+'</span></div><img style="width: 100%;" src="'+This.attr('img')+'" />'
            ,btn1:function(index, layero){
                // var Url2=document.getElementById("public-textarea");
                // Url2.select(); // 选择对象
                // document.execCommand("Copy"); // 执行浏览器复制命令
                var bth = $('.layui-layer-btn0');
                bth.attr('data-clipboard-action','copy');
                bth.attr('data-clipboard-target','#public-textarea');
                var clipboard = new Clipboard('.layui-layer-btn0');
                clipboard.on('success', function(e) {
                    layer.msg('已复制好，可贴粘');
                });
                clipboard.on('error', function(e) {
                    layer.msg('复制失败');
                });

                return false;
            },btn2:function(){
                $('#public-textarea').remove();
            }
        });
    });




    //
    $('.service-title').on('click',function(){
        var src = $('.service');
        if(src.css('right') == '-135px'){
            src.animate({'right':'0'});
        }else{
            src.animate({'right':'-135px'});
        }

    });



});

