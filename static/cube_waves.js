// Define GIF capture varibales
let gif_duration = 180; // x * frame rate = seconds, so this is 3 seconds
let canvas; // which canvas should be recorded

let angle = 0;
var c_colors = [];
var c_values = [];
let c_sel = 0;
let s_sel = 0;
let timer = 0;

function setup(){
    createCanvas(720, 400);
    background(0);
    noSmooth();

    //frameRate(100);
    noStroke();
    for (var i=0; i<100; i++){
        c_colors[i] = color(random(255), random(255), random(255));
        c_values[i] = i;
    }

	createCanvas(w, h).parent('canvasHolder');
	pixelDensity(1);
}

function draw(){
    translate(width/2, height/2); // center position
    rectMode(CENTER);
    background(0);

    let offset = 0;
    let a = 0;
    let hs = 0;
    
    // change color every 1 seconds
    if (millis() - timer > 1000) {
        c_sel = random(c_values);
        timer = millis();
    }
    
    fill(c_colors[c_sel+5]);
    ellipse(0, 0, 500, 500, 50);
    fill(255, 255,0,63);
    // ellipse(0, 0, 300, 300, 50);


    for (let x=250; x < 350; x+=2){ 
        a = angle + offset; 
        hs = map(sin(a), -1, 1, 0, 200);
        fill(c_colors[c_sel]);
        ellipse(x - 400, -100, hs, hs);
        offset += 0.1;
    }
    
    for (let x=350; x > 250; x-=2){ 
        a = angle + offset;
        hs1 = map(sin(a), -1, 1, 0, 200);
        fill(c_colors[c_sel+1]);
        ellipse(x - 200, 100, hs1, hs1);
        offset += 0.1;
    }
    
    for (let x=350; x > 250; x-=2){ 
        a = angle + offset; 
        hs = map(sin(a), -1, 1, 0, 200);
        fill(c_colors[c_sel+2]);
        ellipse(x -200, -100, hs, hs);
        offset += 0.1;
    }
    
    for (let x=250; x < 350; x+=2){ 
        a = angle + offset; 
        hs = map(sin(a), -1, 1, 0, 200);
        fill(c_colors[c_sel+3]);
        ellipse(x -400, 100, hs, hs);
        offset += 0.1;
    }
    
    
    angle += 0.1
    
}
