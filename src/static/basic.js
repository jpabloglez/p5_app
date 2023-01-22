var w = 600;
var h = 400;
var n;
let angle = 0;
let rad = 60; // El ancho de la forma
let xpos, ypos; // Posición inicial de la forma

let xspeed = 2.8; // La velocidad de la forma
let yspeed = 2.2; // La velocidad de la forma

let xdirection = 1; // Izquierda o derecha
let ydirection = 1; // De arriba a abajo


function setup(){
  // ...
  createCanvas(600, 400);
  background(0);
  frameRate(30);

  // noStroke();
  /*
  for (var i=0; i<100; i++){
      c_colors[i] = color(random(255), random(255), random(255));
      c_values[i] = i;
  }
  */

  createCanvas(w, h).parent('canvasHolder');
  
}

function draw(){

    background(125,125,125)
    ellipse(width/2, height/2, 100, 100, 50);
    fill(125, 255, 120, 78);
    color = color(random(255), random(255), random(255));
    fill(color);

    // Actualizar la posición de la forma
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;

    // Prueba para ver si la forma excede los límites de la pantalla
    // Si lo hace, invierta su dirección multiplicando por -1
    if (xpos > width - rad || xpos < rad) {
        xdirection *= -1;
    }
    if (ypos > height - rad || ypos < rad) {
        ydirection *= -1;
    }

    // Dibuja la forma
    ellipse(xpos, ypos, rad, rad);

    angle += 0.1

}