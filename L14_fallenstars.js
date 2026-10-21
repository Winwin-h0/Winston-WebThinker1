let starX = [];
let starY = [];
let starSize = [];
let starSpeed = [];
let numStar = 10;

let playerX;

let gameOver = false

let score = 0

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
    text("Score: " + score, 50, 100)

    background("black");

    if(!gameOver){

        for (let i = 0; i < numStar; i++){

            fill(255,255,0);

            circle(starX[i], starY[i], starSize[i]);
            starY[i] += starSpeed[i];

            if (starY[i] > height){
                starY[i] = random(-200, -50);
                starX[i] = random(width);
                starSpeed[i] = random(2,5);
            }
            score++


            if (starY[i] > height - 40 && starX[i] - playerX >= 0 && starX[i] - playerX <= 40){
                gameOver = true
            }

        }
        if (keyIsDown(LEFT_ARROW)){
            playerX -= 5;
        }

        if (keyIsDown(RIGHT_ARROW)){
            playerX += 5;
        }

    playerX = constrain(playerX, 0, width - 40);

    fill(147,233,190);

    rect(playerX, height - 40, 40, 40);
    }else{
        fill(255,0,0)
        textSize(32)
        background('black')
        text("Game Over", 300, 200)
        text("Final score: " + score, 300, 200 + 40)

    }
}

