
var oldxpostition,oldypostition;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
color = "black";
width_of_line = 1;
var width= screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=newwidth;
document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touch);
function my_touch(e)
{
    console.log("touchstarted");
   oldxpostition= e.touches[0].clientX - canvas.offsetLeft;
    oldypostition = e.touches[0].clientY - canvas.offsetTop;
color = document.getElementById("add").value;
width_of_line = document.getElementById("thick").value;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
  
    ctx.beginPath();
    ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
console.log("Last position of x and y coordinates = ");
console.log("x = " + oldxpostition + "y = " + oldypostition);
ctx.moveTo(oldxpostition,oldypostition);
console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
ctx.stroke();
oldxpostition=current_position_of_touch_x;
oldypostition=current_position_of_touch_y;
    }
    