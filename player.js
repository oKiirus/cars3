class Player {

    constructor(){

        this.index = null
        this.name = null
        this.distance = 0
        
    }
    //reading the playerCount value from the database
    getCount(){

        db.ref("playerCount").on("value", (data)=>{
            playerCount = data.val()
        })
        
    }
//writing the playerCount value to the database
    updateCount(count){

        db.ref("/").update({
            playerCount:count
        })

    }
//writing the player name and distance to the database
    updateInfo(){

        db.ref("players/player" + this.index).set({
            name : this.name,  distance : this.distance
        })

    }
// read all the players information 

    static readInfo(){
        db.ref("players").on("value", (data)=>{
            players = data.val()

        })
    }

}