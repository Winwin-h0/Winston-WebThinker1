let starX = [];
let starY = [];
let starSize = [];
let starSpeed = [];
let numStar = 10;

let playerX;

let gameOver = false

let score = 0

let osc;

let audioStarted = false

preLoad

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

    osc = new p5.Oscillator()
    osc.start()
    osc.amp(0)

}

function draw(){


    background("black");

    textSize(16)

    text("Score: " + score, 50, 100)

    if(!gameOver){

        for (let i = 0; i < numStar; i++){

            fill(255,255,0);

            circle(starX[i], starY[i], starSize[i]);
            starY[i] += starSpeed[i];

            if (starY[i] > height){
                starY[i] = random(-200, -50);
                starX[i] = random(width);
                starSpeed[i] = random(2,5);
                score++
                playRandomTone()
            }


            if (starY[i] > height - 40 && starX[i] - playerX >= 0 && starX[i] - playerX <= 40){
                gameOver = true
                osc.amp(0)
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

function mousePressed(){
    if (!audioStarted){
        userStartAudio()
        audioStarted = true
    }
}
function playRandomTone(){
    if(audioStarted){
        let freq = random(100,1000)
        osc.freq(freq)
        osc.amp(0.5,0.1)
        setTimeout(() => osc.amp(0, 0.5), 500)
    }
}

