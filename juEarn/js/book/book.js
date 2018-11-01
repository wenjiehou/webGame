require.config({
    baseUrl: '../js',//这个里面都会加载
    // paths: {//额外的每个都会加载  "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],而且使用这种备用方案
    //     common:"common"
    // }
})

require(['../libs/jquery-3.3.1.min', 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', 'book/controller'],
    function (jquery, vue, controller) {
        console.log(controller);
        $(document).ready(function () {

            var bookid = getUrlParam("bookid");
            // console.log(controller);
            $("body").css("background", controller.colors[controller.getBgcolor()]);
            controller.getBookDetail({
                bookid: bookid, complete: function (data) {
                    console.log("fanhui...", data);
                    document.title = data.book_name;
                    $("#title").html(data.chapter_name);
                    $("#content").html(data.content);
                }
            });


        });
    });

//设置页面背景颜色

var onClickBody = function () {
    $("#bottomControl").fadeToggle();

}

var controlFadeOut = function () {
    $("#bottomControl").fadeOut();
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}


