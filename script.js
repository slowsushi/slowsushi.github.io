$(document).ready(setInterval(function() {
    var div = ["Verdana", "Arial","Fantasy","Cursive","Comic Sans"];
    var place = Math.floor(Math.random() *div.length);
    $('h1').css("font-family", div[place]);
    
    var colors = ["#CCCCCC", "#333333", "#990099", "#71C671", "#F4A460", "#FFFF00", "#00FF00", "#104E8B", "#8B4789", "#B0171F"];
    var rand = Math.floor(Math.random() * colors.length);
    $('body').css("background-color", colors[rand]);
    
    var randTwo = Math.floor(Math.random() * colors.length);
    $('h1').css("color", colors[randTwo]);
    
    var marginL = ["5","30","50","100","200","250","230","290","230","240","250","260","270","280","290","300","310","320","440","450","460","470","480","490","500","510","520","530","540","550","560","570","580"];
    var randLMargin = Math.floor(Math.random()*marginL.length);
    $('h1').css("margin-left",marginL[randLMargin]);
    
    var marginTop = ["5","30","50","100","200","250","230","290","230","240","250","260","270","280","290","300","310","320","440","450","460","470","480","490","500","510","520","530","540","550","560","570","580"];
    var randTMargin = Math.floor(Math.random()*marginTop.length);
    $('h1').css("margin-top",marginTop[randTMargin]);
    
}, 100));