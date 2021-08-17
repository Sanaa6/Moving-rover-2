canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa 1.jpg","nasa 2.jpg","nasa3.jpg","nasa 4.jpg" ];

random_number = Math.floor(Math.random()*4);
console.log(random_number);

rover_width = 120 ; 
rover_height = 110 ;

background_image = nasa_mars_images_array[random_number];
console.log("background_image ="+ background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add()
{background_img = new Image();
background_img.onload = upload_background;
background_img.src = background_image;
rover_img = new Image();
rover_img.onload = upload_rover;
rover_img.src = rover_image;}

function upload_background()
{ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function upload_rover()
{ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e)
{keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
 { up(); console.log("up");
 } if(keyPressed == '40')
  { down(); console.log("down");
 } if(keyPressed == '37')
  { left(); console.log("left");
 } if(keyPressed == '39') 
 { right(); console.log("right"); }}

 function up()
 {
     if(rover_y >=0)
     {rover_y = rover_y-10;
    console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
    upload_background();upload_rover();}
 }

 function down()
 {
     if(rover_y <=500)
     {rover_y = rover_y+10;
    console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
    upload_background();upload_rover();}
 }

 function left()
 {
     if(rover_x >=0)
     {rover_x = rover_x-10;
    console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
    upload_background();upload_rover();}
 }


 function right()
 {
     if(rover_x <=700)
     {rover_x = rover_x+10;
    console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
    upload_background();upload_rover();}
 }