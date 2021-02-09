class Form {

    constructor(){
            this.title =  createElement("h2")
            this.input = createInput("Enter Name:")
            this.button = createButton("Play")
            this.greeting = createElement("h2")
            this.reset = createButton("Reset")
    }

    remove(){
        this.title.hide()
            this.input.hide()
            this.button.hide()
            this.greeting.hide()
           
        }

    display(){
        
        this.title.html("Car Racing!")
        this.title.position(width / 2, 0)
        this.reset.position(width-100,20)
        this.input.position(width / 2, height/2 - 100)
        this.button.position(width / 2 + 40, height / 2)
        // ()=> arrow function
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.updateCount(playerCount)
            player.updateInfo()
            this.greeting.html("Welcome! " + player.name + "!")
            this.greeting.position(width / 2, height / 2)
        })
        
        this.reset.mousePressed(()=>{
            game.updateState(0)
            player.updateCount(0)
        })

    }

}