define(function (require, exports, module) {
    var componentA = {
      props: ['todo'],
      template: '<font v-bind:class="todo.css">我们都有不同的class</font>'//<li>{{ todo.text }}</li> 
    } 
  
    module.exports = {
      componentA:componentA
    }
  
  });