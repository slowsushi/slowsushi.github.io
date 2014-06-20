$(document).ready(function(){
  var colors = ["#CCCCCC","#333333","#990099"];                
  var rand = Math.floor(Math.random()*colors.length);           
  $('body').css("background-color", colors[rand]);
  rand = Math.floor(Math.random()*colors.length);
  $('h1').css("color", colors[rand]);
});
