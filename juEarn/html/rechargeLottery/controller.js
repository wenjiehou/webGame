define(function (require, exports, module) {

    var jinbiEff = [];
    var getJinbiEff = function () {
        if (jinbiEff.length == 0) {
            for (var i = 0; i < 18; i++) {
                jinbiEff.push("http://ju.cdn.giantfun.cn/yueEarn/story/img/eff/jinbiEff/eff" + i + ".png");
            }
        }
    }
    getJinbiEff();
    var getPlayInfo = function (callObj) {
        setTimeout(function () {
            if (callObj && callObj.complete) {
                var play_info = {
                    first_recharge: 300,
                    cost: 100,//每次消耗的金币
                    multiple: callObj.multiple,
                    play_list: [
                        { img: "http://ju.cdn.giantfun.cn/juEarnWeb/lottery/xinjinbi.png", value: "150", index: 1 },
                        { img: "http://ju.cdn.giantfun.cn/juEarnWeb/lottery/xinjinbi.png", value: "30", index: 2 },
                        { img: "http://ju.cdn.giantfun.cn/juEarnWeb/lottery/xinjinbi.png", value: "300", index: 3 },
                        { img: "http://ju.cdn.giantfun.cn/juEarnWeb/lottery/xinjinbi.png", value: "50", index: 4 },
                        { img: "http://ju.cdn.giantfun.cn/juEarnWeb/lottery/xinjinbi.png", value: "200", index: 5 },
                        { img: "http://ju.cdn.giantfun.cn/juEarnWeb/lottery/xinjinbi.png", value: "20", index: 6 }
                    ]
                }
                console.log("play_info////", play_info);
                callObj.complete(play_info);
            }
        }, 100)
    }



    var getIndex = function (callObj) {
        setTimeout(function () {
            if (callObj && callObj.complete) {
                callObj.complete(Math.floor(Math.random() * 6 + 1));
            }

        }, 100);
    }

    module.exports = {
        getPlayInfo: getPlayInfo,
        getIndex: getIndex,
        jinbiEff:jinbiEff
    }

})