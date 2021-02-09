

var db
var player, form, game, playerCount, gameState = 0
var players, distance=0
var car1, car2, car3, car4, cars

var carImg1, carImg2, carImg3, carImg4, trackImg

function preload(){
  carImg1 = loadImage("car1.png")
  carImg2 = loadImage("car2.png")
  carImg3 = loadImage("car3.png")
  carImg4 = loadImage("car4.png")

  trackImg = loadImage("track.jpg")

}

function setup(){
    createCanvas(displayWidth - 20,displayHeight - 30);
    //creating database
    db = firebase.database()
    game = new Game()
  game.getState()
  game.start()

}

function draw(){
   

      if(playerCount === 4){

        game.updateState(1)

      }

     if(gameState === 1){

       clear()
      game.play()

     } 

     if(gameState === 2){

      game.end()

     } 
    
     
}




