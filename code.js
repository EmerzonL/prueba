var seconds = document.getElementById('Seconds');
var minutes = document.getElementById('Minutes');
var hours = document.getElementById('Hours');

setInterval(function(){
    var date = new Date();

    //segundos
    var second = date.getSeconds();
    var grados = 180 +second*6;
    seconds.style.transform = 'translateX(-50%) rotate('+grados+'deg)';

    //minutos
    var minute = date.getMinutes();
    var grados = 180 + second*6;
    minutes.style.transform = 'translateX(-50%) rotate('+grados+'deg)';

    //horas
    var hour = date.getHours();
    if(hour>=12)
        hour = hour -12;
    var grados = 180 + second*30;
    seconds.style.transform = 'translateX(-50%) rotate('+grados+'deg)';
})