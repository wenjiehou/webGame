// define({ //直接导出
//     color: "#fdeec9",
// });

// define(function(){//return 导出
//     var getColor = function(){
//         return "#fdeec9";
//     }

//     return {
//         getColor:getColor
//     }
// });

// define(function (require, exports, module) { //可以 return > module.exports >exports 其中 exports.name = value 要这样写
//     var color = "#fdeec9";
//     $("body").css("background", color);
//     module.exports = {
//         color:color
//     }
// });

//如果有依赖关系
// define(['a','b','c'],function(a,b,c){})


define(function (require, exports, module) {
    var test01 = require('common/test01');
    module.exports = {
        color: test01.color
    }
}
);