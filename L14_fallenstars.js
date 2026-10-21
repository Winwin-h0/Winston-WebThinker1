let starX = [];
let starY = [];
let starSize = [];
let starSpeed = [];
let numStar = 10;

let playerX;

function setup(){
    createCanvas(600,400);

    for (let i = 0; i < numStar; i++){
        starX.push(random(width));
        console.log(starX);
        starY.push(random(-300, -50));
        starSize.push(random(10,20));
        starSpeed.push(random(2,5));
    }

    playerX = width/2
}

function draw(){

    background("black");

    for (let i = 0; i < numStar; i++){

        fill(255,255,0);

        circle(starX[i], starY[i], starSize[i]);
        starY[i] += starSpeed[i];

        if (starY[i] > height){
            starY[i] = random(-200, -50);
            starX[i] = random(width);
            starSpeed[i] = random(2,5);
        }
    }
}

if(keyIsDown(LEFT_ARROW)){
    playerX -= 5
}

if(keyIsDown(RIGHT_ARROW)){
    playerX += 5
}

playerX = constrain(playerX, 0, width - 40)

fill(147,233,190)

x = (playerX, height - 40, 40, 40)