var canvas = document.getElementById("mc");
var ctx = canvas.getContext("2d");
canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(e)
{
    lpx = e.touches[0].clientX - canvas.offsetLeft;
    lpy = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e)
{
    cpx = e.touches[0].clientX - canvas.offsetLeft;
    cpy = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.stokeStyle = "red";
    ctx.moveTo(lpx,lpy)
    ctx.lineTo(cpx,cpy)
    ctx.stroke();
    lpx = cpx;
    lpy = cpy;
}
