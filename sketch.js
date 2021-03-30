var ball
var ballposition,Database;
var position

function setup(){
    createCanvas(400,400)
    Database=firebase.database()
    ball=createSprite(200,200,30,30)
    ball.shapeColor="green"
    ballposition=Database.ref("Ball/position")
    ballposition.on("value",readPosition)
}
function readPosition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}
function writePosition(x,y){
    Database.ref("Ball/position").set({
        "x":position.x+x,
        "y":position.y+y
    })
}
function draw(){
    background("skyblue")
    if(keyDown("right"))
    writePosition(1,0)
    
    if(keyDown("left"))
    writePosition(-1,0)

    if(keyDown("down"))
    writePosition(0,1)

    if(keyDown("up"))
    writePosition(0,-1)

    drawSprites()
}