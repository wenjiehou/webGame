define(function (require, exports, module) {
    var colors = ["#eee9dd", "#e8d3a0", "#a2b3b3", "#aaf49c", "#3c3c3c", "#000000"];
   
    var setBgcolor = function(idx){
        if(idx < colors.length){
            color = colors[idx];
            localStorage.setItem("bookBgcolor",idx)
        }
    }

    var getBgcolor = function(){
        var idx = localStorage.getItem("bookBgcolor");
        if(!idx){
            idx = 1;
        }
        return idx;
    }

    var getBookDetail = function(callObj){
        var wxkey = localStorage.getItem("wxkey");
        $.get("https://ju.giantfun.cn/v1/book/list?wxkey=" + wxkey+"&bookid="+callObj.bookid+"&pageindex=0"+"&order=2", function (data, status) {
            console.log(data);
            $.get("https://ju.giantfun.cn/v1/book/details?wxkey=" + wxkey+"&chapterid="+data.chapter[0].chapter_id, function (data, status) {
            console.log(data);
            if(callObj && callObj.complete){
                callObj.complete(data);
            }
        });
        });

        
    }
    
module.exports = {
    colors:colors,
    setBgcolor:setBgcolor,
    getBgcolor:getBgcolor,
    getBookDetail:getBookDetail
}
});



