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

    for(let i = 0; i < numStars; i++)
        fill
}