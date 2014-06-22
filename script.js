$(document).ready(setInterval(function() {
    var div = ["Verdana", "Arial","Fantasy","Cursive","Comic Sans"];
    var place = Math.floor(Math.random() *div.length);
    $('h1').css("font-family", div[place]);
    
    var colors = ["#CCCCCC", "#333333", "#990099", "#71C671", "#F4A460", "#FFFF00", "#00FF00", "#104E8B", "#8B4789", "#B0171F"];
    var rand = Math.floor(Math.random() * colors.length);
    $('body').css("background-color", colors[rand]);
    
    var randTwo = Math.floor(Math.random() * colors.length);
    $('h1').css("color", colors[randTwo]);
    
    var marginL = ["5px","30px","50px","100px","200px","250px","230px","290px","230px","240px","250px","260px","270px","280px","290px","300px","310px","320px","440px","450px","460px","470px","480px","490px","500px","510px","520px","530px","540px","550px","560px","570px","580px"];
    var randLMargin = Math.floor(Math.random()*marginL.length);
    $('div').css("margin-left",marginL[randLMargin]);
    
    var marginTop = ["5px","30px","50px","100px","200px","250px","230px","290px","230px","240px","250px","260px","270px","280px","290px","300px","310px","320px","440px","450px","460px","470px","480px","490px","500px","510px","520px","530px","540px","550px","560px","570px","580px"];
    var randTMargin = Math.floor(Math.random()*marginTop.length);
    $('div').css("margin-top",marginTop[randTMargin]);
    
}, 1000));
