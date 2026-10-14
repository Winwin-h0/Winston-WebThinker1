let starX = [];
let starY = [];
let starSize = [];
let starSpeed = [];
let numStar = 10;

function setup(){
    createCanvas(600,400);

    for (let i = 0; i < numStar; i++){
        starX.push(random(width));
        console.log(starX);
        starX.push(random(-300, -50));
        starSize.push(random(10,20));
        starSpeed.push(random(10,20));
    }
}

function draw(){
    background("black")

    for(let i = 0; i < numStar; i++)
        fill(255,255,0)
        circle(starX[i], starY[i], starSize[i]);
        starY[i] += starSpeed[i]

        if (starY[i] > height){
            starY[i] = random(-200, -50)
            starX[i] = random(width)
        }
}