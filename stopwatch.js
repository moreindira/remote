let button1=document.getElementById('start');
let button2=document.getElementById('stop');
let button3=document.getElementById('reset');
let ms=document.getElementById('milliseconds');
var seconds=00;
var milliseconds=00;
var timer;

function stopTime()
{
 clearInterval(timer);
}
function startTime()
{
    timer=setInterval(startTimer,10);
}
function resetTime()
{
    clearInterval(timer);
    let time=document.getElementById('time');
    time.innerHTML="00:00";
    button1.onclick=startTime();
    
}
function startTimer()
{
    milliseconds++;
    if(milliseconds<=9)
    {
        ms.innerHTML="0"+milliseconds;
    }
    if(milliseconds>10)
    {
        ms.innerHTML=milliseconds;
    }
    if(milliseconds>99)
    {
        milliseconds=0;
        ms.innerHTML="0"+0;
    }
}