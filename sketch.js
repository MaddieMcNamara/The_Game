let noiseOffset = 0.0;
let strokeWidth = 5;

let array = [];
let backgroundColor = 200;


function setup() {
  createCanvas(700, 700);
  // background(backgroundColor);

  drawGrid();



}



function draw() {
push();
  textSize(32);
  text('1', 100, 30);
  fill(10);
pop();

  circle(175, 700, 20);
  circle(175, 600, 20);
  circle(175, 500, 20);
  circle(175, 400, 20);
  circle(175, 300, 20);
  circle(175, 200, 20);

  rect(220, 350, 15, 25);
  rect(260, 355, 10, 20);

  line(280, 480, 275, 480);

//LR UPDOWN
  circle(230, 200, 20);
  circle(230, 300, 20);
  circle(270, 285, 20);
  circle(270, 220, 20);
  circle(300, 220, 20);
circle(301, 285, 20);
circle(301, 400, 20);
circle(360, 400, 20);
circle(360, 500, 20);
circle(301, 500, 20);
circle(301, 600, 20);
circle(301, 700, 20);










  background(220, 50, 133, 5);
  strokeWeight(strokeWidth);
  noFill();

  // noiseOffset += + 0.05;
  // strokeWidth = noise(noiseOffset) * 100;

if (mouseIsPressed){
  // These create fade to black
  // backgroundColor -= 5;
  // background(backgroundColor);

// stroke(map(mouseX, 0, 600, 0, 255, true), map(mouseX, 0, 600, 0, 255, true))
//
// line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
//
line(mouseX, mouseY, pmouseX, pmouseY);

//connects each drawn line
// array.push([mouseX, mouseY]);
//
// beginShape();
// for(let i = 0; i < array.length - 1; i++){
//
// curveVertex(array[i][0], array[i][1])
// }
// endShape();

}
}
function keyTyped() {
  if (key === 's') {
    //save image
    saveCanvas('fileName', 'jpg');

} else if (key === 'd') {

  // clear();
  beginShape();
  for(let i = 0; i < array.length; i++){

curveVertex(array[i][0], array[i][1])
}
endShape();
  //display image

} else if (key === 'c') {
  background(backgroundColor);
  array = [];



}


return false;

}
function drawGrid(){
  numCells = 20;
  fillColor = 255;
  strokeWeight(3);

  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j <= height; j += height / numCells){

      if (fillColor === 255){
fillColor = 200;
} else {
fillColor = 255;


}
fill(fillColor);
  rect(i, j, width / numCells, height / numCells);

    }






}

}
