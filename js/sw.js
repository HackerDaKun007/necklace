(function ($) {

    $.sw = {};
    $.sw.api = '/api/';  //API接口
    $.sw.form = $('form').attr('action');
    $.sw.values = '';  //提交事件后返回值

    //显示加载...
    $.sw.onkeyup=function(obj){
        $('.public-load-bak').remove();
        if(obj == true){
            $('body').append('<div class="public-load-bak">\n' +
                '    <div class="public-load">\n' +
                '        <i class="layui-icon layui-anim layui-anim-rotate layui-anim-loop">&#xe63d;</i>\n' +
                '    </div>\n' +
                '</div>')
        }else{
            $('.public-load-bak').remove();
        }
    }

})(jQuery);