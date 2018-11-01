$(document).ready(function(){
    // hide();
    show(2.3);
});

/**显示 */
var show = function(package){
    $("#pop-content").css("display","flex");
    $("#package").html("￥"+package+"元");
}

/**隐藏 */
var hide = function(){
    $("#pop-content").css("display","none");
}

