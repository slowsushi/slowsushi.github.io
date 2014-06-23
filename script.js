$(document).ready(setInterval(function() {
    var div = ["Verdana", "Arial","Fantasy","Cursive","Comic Sans"];
    var place = Math.floor(Math.random() *div.length);
    $('h1').css("font-family", div[place]);
    
    var colors = ["#CCCCCC", "#333333", "#990099", "#71C671", "#F4A460", "#FFFF00", "#00FF00", "#104E8B", "#8B4789", "#B0171F"];
    var rand = Math.floor(Math.random() * colors.length);
    $('#head').css("background-color", colors[rand]);
    
    var randTwo = Math.floor(Math.random() * colors.length);
    $('h1').css("color", colors[randTwo]);
    
}, 1000));
