var global = {};

require.config({
    baseUrl: '../js',//这个里面都会加载
    // paths: {//额外的每个都会加载  "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],而且使用这种备用方案
    //     common:"common"
    // }
})

require(['../libs/jquery-3.3.1.min', 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js','components/componentA'],//   https://cdn.jsdelivr.net/npm/vue/dist/vue.js
    function (jquery, Vue, compA) {
        $(document).ready(function () {
            // localStorage.setItem("wxkey","2db6957a8c4e60d1a3475cd481b4419e");
            // var wxkey = localStorage.getItem("wxkey");
            // $.get("https://ju.giantfun.cn/v1/book/recommend?wxkey="+wxkey,function(data,status){
            //     console.log(data);
            //     var html = '';
            //     var bookList = data.book_list;
            //     for(var i=0;i<bookList.length;i++){
            //         if(i != 0){
            //             html += '<div class="fenge" style="height: 4px;width: 100%;"></div>';
            //         }
            //         html += '<div class="activity" onclick="onclickItem('+bookList[i].book_id+')">'+
            //         '<div style="width:340px;"><img src="' + bookList[i].book_recommend_img +'" class="pic-size1""></img></div>'+
            //         '<div class="item-desc">'+
            //             '<div style="height:80px;margin-top: -18px">'+
            //                 '<h1 class="font2">'+ bookList[i].title + '</h1>'+
            //             '</div>'+
            //             '<div style="margin-bottom: 16px;display:flex;flex-direction:column;justify-content:space-between;algin-items:flex-start; height:200px;">'+
            //                 '<font class="font3" style="margin-top: -10px;">'+bookList[i].description+'</font>'+
            //                 '<font style="color: #444;font-size: 42px;">'+ bookList[i].author +'</font>'+
            //             '</div>'+
            //         '</div>'+
            //     '</div>'
            //     }
            //     $("#content").html(html);
            //   });

            var app = new Vue({
                el: '#app',
                data: {
                    message: '我是侯文杰'
                }
            })

            var app2 = new Vue({
                el: '#app-2',
                data: {
                    message: '页面加载于 ' + new Date().toLocaleString()
                }
            })

            var app3 = new Vue({
                el: '#app-3',
                data: {
                    seen: true
                }
            })

            var app4 = new Vue({
                el: '#app-4',
                data: {
                    todos: [
                        { text: '学习 JavaScript', img: "http://qidian.qpic.cn/qdbimg/349573/1009683043/150" },
                        { text: '学习 Vue', img: "http://qidian.qpic.cn/qdbimg/349573/1009683043/150" },
                        { text: '整个牛项目', img: "http://qidian.qpic.cn/qdbimg/349573/1009683043/150" },
                        { text: '我学会了', img: "http://qidian.qpic.cn/qdbimg/349573/1009683043/150" }
                    ]
                }
            })

            var app5 = new Vue({
                el: '#app-5',
                data: {
                    message: 'Hello Vue.js!'
                },
                methods: {
                    reverseMessage: function () {
                        this.message = this.message.split('').reverse().join('')
                    }
                }
            })

            var app6 = new Vue({
                el: '#app-6',
                data: {
                    message: 'Hello Vue!'
                }
            })

            // Vue.component('todo-item', {
            //     props: ['todo'],
            //     template: '<li>{{ todo.text }}</li>'
            // })

            var app7 = new Vue({
                el: '#app-7',
                components:{
                    'todo-item':compA.componentA
                },
                data: {
                    groceryList: [
                        { id: 0, css: 'font1' }, 
                        { id: 1, css: 'font2' },
                        { id: 2, css: 'font3' }
                    ]
                }
            })

            global.app7 = app7;


            new Vue({
                el: '#example-5',
                data: {
                    selected: ''
                }
            })

            // 定义一个名为 button-counter 的新组件
            Vue.component('button-counter', {
                data: function () {
                    return {
                        count: 0
                    }
                },
                template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
            })

            new Vue({ el: '#components-demo' })

        });
    });



// var onclickItem = function (bookid) {
//     console.log(bookid);
//     window.location.href = './book.html?bookid=' + bookid;

// }



