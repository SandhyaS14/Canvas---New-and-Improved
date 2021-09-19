var mouseEvent = ""
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "pink";
width = 2;
radius = 10;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
  color = document.getElementById("color").value;
  width = document.getElementById("width").value;
  radius = document.getElementById("radius").value;
  mouseEvent = "mousedown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
  mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
  mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
  currentX = e.clientX - canvas.offsetLeft;
  currentY = e.clientY - canvas.offsetTop;
  if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveto(currentX, currentY);
    ctx.lineTo(lastX, lastY);
    ctx.stroke();
  }
  lastX = currentX;
  lastY = currentY;
}
function clearRect() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
};