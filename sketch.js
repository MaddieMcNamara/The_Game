'use strict';


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let rupee;
let playerImg;
let greenImg;
let redImg;
let blueImg;
let backImg;

function preload(){
 playerImg = loadImage('assets/photos/link1.png')
 greenImg = loadImage('assets/photos/rupeegreen.png')
 redImg = loadImage('assets/photos/rupeered.png')
 blueImg = loadImage('assets/photos/rupeeblue.png')
 backImg = loadImage('assets/photos/bg.png')

}

function setup() {
cnv = createCanvas(w, h);
imageMode(CENTER);
rectMode(CENTER);

textFont('monospace');

player = new Player();
// coins[0] = new Coin();
coins.push(new Coin());


}

function draw() {


switch (state) {
 case 'title':
 title();
cnv.mouseClicked(titleMouseClicked);
break;
case 'level 1':
level1();
cnv.mouseClicked(level1MouseClicked);
break;
case 'you win':
youWin();
cnv.mouseClicked(youWinMouseClicked);
break;
default:
break;
}

}

function keyPressed() {
  if (keyCode == LEFT_ARROW){
     player.direction = 'left'
   } else if (keyCode == RIGHT_ARROW){
     player.direction = 'right'
   } else if (keyCode == UP_ARROW) {
     player.direction = 'up'
   } else if (keyCode == DOWN_ARROW) {
     player.direction = 'down'
   }  else if (key = ' ') {
     player.direction = 'still'
}
}

function keyReleased(){

  let numberKeysPressed = 0;
  if (keyIsDown(LEFT_ARROW)){
   numberKeysPressed++;


  }

  if (keyIsDown(RIGHT_ARROW)){
   numberKeysPressed++;


  }

  if (keyIsDown(UP_ARROW)){
   numberKeysPressed++;


  }

  if (keyIsDown(DOWN_ARROW)){
   numberKeysPressed++;
}

  }
console.log(numberKeysPressed);

if (numberKeysPressed == 0) {
  player.direction = 'still';
}


// function mousePressed(){
// state = 'level 1';
//
// }
function title(){
background(0);
textSize(80);
fill(255);
textAlign(CENTER);
text('The Game', w/2, h/5);

textSize(30);
text('click anywhere to start', w/2, h/2);

}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
state = 'level 1'

}


function level1() {
background(50, 150, 200);

if (random(1) <= 0.01){
   coins.push(new Coin());
}



player.display();
player.move();



for (let i = 0; i < coins.length; i++){
  coins[i].display();
  coins[i].move();



}

for (let i = coins.length - 1; i >= 0; i--) {
// if there is a collision incread points by 1
if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
points++;
console.log(points);
coins.splice(i, 1);
} else if (coins[i].y > h){
  coins.splice(i, 1);
  console.log('coins gone');
}

}
textSize(20);
text('Rupees Collected: ' + points, w/5, h - 30);
}




function level1MouseClicked() {
  points++;
console.log('points = ' + points);

if (points >= 10){
 state = 'you win';

}

}

function youWin(){

  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/2);

  textSize(30);
  text('click anywhere to restart', w/2, h * 3/4);

}

function youWinMouseClicked (){
state = 'level 1';
points = 0;
}
