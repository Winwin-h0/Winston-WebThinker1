let starX = []
let starY = []
let starSize = []
let starSpeed = []
let numStar = []

function setup(){
    createCanvas(600,400)

    for (let i = 0; i < numStar; i++)
        starX.push(random(width))
        console.log(starX)
        starX.push(random(-300, -50))

}