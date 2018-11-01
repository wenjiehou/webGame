var global = {};
global.rot = 0;
global.animate = false;

$(document).ready(function () {
    console.log(window.screen.width,window.screen.height);
    global.scale = window.screen.width/980;
    $("#pop-container").css("height",window.screen.height/global.scale+'px'); 
    $("#pop-container").css("width",window.screen.width/global.scale+'px');
    $("#pop-container").css('transform', 'scale(' + global.scale +','+global.scale +')');  
    // 
   

    $("#pop-container").css('top',-(window.screen.height/global.scale-window.screen.height)/2+"px");
    $("#pop-container").css('left',-(window.screen.width/global.scale-window.screen.width)/2+"px");

    require.config({
        baseUrl: './',//这个里面都会加载
    })

    global.jinbiEffVue =new Vue({
        el:'#jinbiEff',
        data:{
            curIdx:-1,
            jinbiEff:[]
        }
    })

    global.playInfo = new Vue({
        el: '#popContent',
        data: {
            show:true,
            info: {first_recharge:300,play_list:[],cost:100,multiple:1},
            rotationBackBg:{1:"http://ju.cdn.giantfun.cn/juEarnWeb/lottery/zhuanpan1.png",
            10:"http://ju.cdn.giantfun.cn/juEarnWeb/lottery/zhuanpan2.png",
            100:"http://ju.cdn.giantfun.cn/juEarnWeb/lottery/zhuanpan3.png"},
            
        },
        methods: {
            closePop:function(){
                this.show = false;
            },

            clickSeleMultiple:function(dt){
                if (global.animate == true) {
                    return;
                }
                this.info.multiple = dt; 
            }

        }
    })

    require(['controller'], function (controller) {
        global.controller = controller;
        global.jinbiEffVue.jinbiEff = global.controller.jinbiEff;
        controller.getPlayInfo({
            multiple:1,
            complete: function (dt) {
                global.playInfo.info = dt;
            }
        });
    });
});

var clickIndicate = function () {
    var temp = this;
    if (global.animate == true) {
        return;
    }
    global.animate = true;
    global.controller.getIndex({
        complete: function (index) {
            if (index != -1) {
                var targetRotation = (6 - index) * 60;
                var curRotation = global.rot % 360;
                if(targetRotation < curRotation){
                    targetRotation += 360;
                }
                var increaseRotation = 360*3  + (targetRotation - curRotation);
                global.rot += increaseRotation;
                var t = 3000;
                $("#rotation-div").animate({ borderSpacing: global.rot }, //180 指旋转度数
                    {
                        step: function (now, fix) {
                            $(this).css('transform', 'rotate(' + now + 'deg)');
                        }, duration: t
                    }, "ease-in-out");
                    setTimeout(function(){
                        global.animate = false;
                        temp.playJinbiEff(0);
                    },t);    
            } else {
                global.animate = false;
            }
        }
    })
}

var playJinbiEff =function(idx) {
    global.jinbiEffVue.curIdx = idx;
  
    if (idx == -1) {
      return;
    }
    idx++;
    if (idx < global.jinbiEffVue.jinbiEff.length) {
      setTimeout(this.playJinbiEff.bind(this), 100, idx);
    } else {
      idx = -1;
      setTimeout(this.playJinbiEff.bind(this), 100, idx);
    }
  }