var global = {};

//定时器走的序号
var curInterval = 1;

//连续蛋蛋切换的序号
var eggWrapIdx = 0;
//标记蛋蛋是否被打了
var dandans = [];
//打蛋的锤子是否正在锤
var daHammerWrap = false;
//当前正在打哪个蛋蛋
var curDaIdx = -1;
//是否正在打蛋中 控制右上角的锤子消失
var durationDa = false;



$(document).ready(function () {
    $("html").css("font-size", 100 * (document.documentElement.clientWidth / 750) + 'px');

    $(window).resize(function () {
        $("html").css("font-size", 100 * (document.documentElement.clientWidth / 750) + 'px');
    });

   
    addListener();
    setInterval(doloop, 100);

});

var addListener = function(){

    for (var i = 0; i < 9; i++) {
        $('.eggsWrap .egg:nth-child(' + (i + 1) + ')').attr("onclick", "dadan(" + i + ");");
        dandans[i] = false;
    }

    $(".close").attr('onclick','closePop()');
    $(".ruleBtn").attr('onclick','popRule()');
    $("#close-rule").attr('onclick','closeRule()');
    
}

var popRule = function(){
    $("#pop-rule").css('display','inline');
}

var closeRule = function(){
    $("#pop-rule").css('display','none');
}

var doloop = function () {
    if (curInterval % 2 == 0) {
        if(durationDa == false){
            if ($('.hammerWrap .hammer1').css('display') == 'none') {
                $('.hammerWrap .hammer1').css('display', 'inline');
                $('.hammerWrap .hammer2').css('display', 'none');
            } else {
                $('.hammerWrap .hammer1').css('display', 'none');
                $('.hammerWrap .hammer2').css('display', 'inline');
            }
        }else{
            $('.hammerWrap .hammer1').css('display', 'none');
            $('.hammerWrap .hammer2').css('display', 'none');
        }
       
    }

    if (daHammerWrap == true) {
        if ($('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ') .hammer1').css('display') == 'none') {
            $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ') .hammer1').css('display', 'inline');
            $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ') .hammer2 ').css('display', 'none');
        } else {
            $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ') .hammer1 ').css('display', 'none');
            $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ') .hammer2 ').css('display', 'inline');
        }
    }

    if (curInterval % 8 == 0) {
        for (var i = 0; i < 9; i++) {
            if (dandans[i] == true) {//这个效果后面再看吧
                // if (eggWrapIdx == i) {
                //     eggWrapIdx++;
                //     if (eggWrapIdx == 9) {
                //         eggWrapIdx = 0;
                //     }
                // }
                continue;
            }
            if (i == eggWrapIdx) {
                $('.eggsWrap .egg:nth-child(' + (i + 1) + ')').addClass("jump");
                $('.eggsWrap .egg:nth-child(' + (i + 1) + ') .egg1').css('display', 'none');
                $('.eggsWrap .egg:nth-child(' + (i + 1) + ') .egg0 ').css('display', 'inline');
            } else {
                $('.eggsWrap .egg:nth-child(' + (i + 1) + ')').removeClass("jump");
                $('.eggsWrap .egg:nth-child(' + (i + 1) + ') .egg1').css('display', 'inline');
                $('.eggsWrap .egg:nth-child(' + (i + 1) + ') .egg0 ').css('display', 'none');
            }
        }
      
        eggWrapIdx++;
        if (eggWrapIdx == 9) {
            eggWrapIdx = 0;
        }
    }
    curInterval++;
    if (curInterval == 8) {
        curInterval = 0;
    }
}

var dadan = function (idx) {
    if(durationDa == true){//正在打蛋中不让打了
        return;
    }
    if (dandans[idx] == true) {
        return;
    }
    //开始打蛋
    dandans[idx] = true;//让连续打蛋的跳过

    curDaIdx = idx;
    daHammerWrap = true;
    durationDa = true;
    $('.eggsWrap .egg:nth-child(' + (idx + 1) + ')').removeClass("jump");
    $('.eggsWrap .egg:nth-child(' + (idx + 1) + ') .egg1').css('display', 'inline');
    $('.eggsWrap .egg:nth-child(' + (idx + 1) + ') .egg0 ').css('display', 'none');
    setTimeout(function(){
        daHammerWrap = false;
        $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ') .hammer1 ').css('display', 'none');
        $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ') .hammer2 ').css('display', 'none');
        $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ')').addClass("swing");

        setTimeout(function(){
            $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ')').removeClass("swing");
            $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ') .egg1').css('display', 'none');
            $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ') .egg0 ').css('display', 'none');
            $('.eggsWrap .egg:nth-child(' + (curDaIdx + 1) + ') .egg2 ').css('display', 'inline');

            //这句话是模拟向服务器请求奖品的
            setTimeout(function(){
                //todo jquery 控制css 或者attr什么的，改变弹出框的内容 可以根据返回的奖品控制 $(".getBtn").attr('onclick','something(...)')
                $("#pop-reward").css('display','inline');
                durationDa = false; 
            },200)
        },500);
    },600);

}

var closePop = function(){
    $("#pop-reward").css('display','none');
}
