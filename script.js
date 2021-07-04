const canvas = document.getElementById("canvas");
canvas.width = window.innerwidth - 60;
canvas.height = 400;

let context = canvas.getContext("2d");
context.fillStyle = "white";
context..fillRect(0, 0, canvas.width, canvas.height);

let draw_color = "white";
let draw_width = "2";
let is_drwaing = false;

let restore_array = [];
let index = -1;

function change_color(element)
{
draw_color =  element.style.background;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mousedown", stop, false);
function start(event)
{
is_drawing = true;
context.beginPath();
context.moveTo(event.clientX - canvas.offsetLeft, event,clientY - canvas.offsetTop);
event.preventDefault();
}

function draw(event)
{
if ( is_drawing )
{
context.lineTo(event.clientX - canvas.offsetLeft, event,clientY - canvas.offsetTop);
context.strokeStyle = draw_color;
context.lineWidth = draw_width;
context.lineCap = "round";
context.lineJoin = "round";
context.stroke();
}
event.preventDefault();
}