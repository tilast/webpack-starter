var module1 = require('./module1');
var $       = require('jquery');
var ember   = require('ember');

module1.init("hello world 2");

$(document).ready(function() {
  $('body').css('background', 'yellow');
});

console.log(ember);
var a = [1,2,3].map((item) => item + 5);
var b = [1,2,3].map(function(item){return item + 5;});
console.log(a, b);