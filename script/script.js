var hours=0,minutes=0,seconds=0;
var t;

function start()
{
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}
function timer()
{
    t=setTimeout("start()",1000);
}
function stop()
{
    clearTimeout(t);
}
function reset()
{
    h1.textContent="00:00:00";
    hours=0;
    minutes=0;
    seconds=0;
}
