class Game {

    constructor(){

    }

//reading the gameState value from the database
    getState(){

        db.ref("gameState").on("value", function(data){
            gameState = data.val()
        })
        
    }

//writing the gameState value to the database
    updateState(state){

        db.ref("/").update({
            gameState:state
        })

    }

    //start screen
    async start(){

        if(gameState === 0){
            player = new Player()
            var countRef = await db.ref("playerCount").once("value")
            if(countRef.exists()){
                playerCount = countRef.val()
                player.getCount()   
            }
            
            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        car1.addImage(carImg1)
        car2.addImage(carImg2)
        car3.addImage(carImg3)
        car4.addImage(carImg4)
        cars = [car1, car2, car3, car4]
    }

    //play screen
    play(){
        form.remove()
        Player.readInfo()
        if(players !== undefined){
            background("pink")
            image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
            var index = 0
            var x = 200
            var y 
            for(var i in players){
                index++
                x += 300
                y = displayHeight - players[i].distance
                cars[index - 1].x = x
                cars[index - 1].y = y
                if(index === player.index){
                    fill("red")
                    ellipse(x,y,60)
                    camera.position.x = width/2
                    camera.position.y = cars[index - 1].y
                }
            }
        } 
         if(keyDown("UP_ARROW") && player.index !== null){
             player.distance += 10
             player.updateInfo()
         } 
         if(player.distance > 5210){
            gameState = 2
         }
        drawSprites()
    }

    end() {
        console.log("you win!")
    }
}