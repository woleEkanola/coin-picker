
export class Background {
    constructor(img, game, speedfactor){
        console.log(game)
        this.x= 0
        this.image = new Image()
        this.image.src = img
        this.width = 1008
        this.height = 567
        this.speed = 0
        // this.CANVAS_WIDTH = game? game.width:800 
        this.game = game
        // this.player = 'this.game.player'
        this.speedfactor = speedfactor
        
    }

    draw(c){

        c.drawImage(this.image, this.x, 0, this.width  , this.height)
        c.drawImage(this.image, this.x + this.width, 0, this.width, this.height)
  
    } 

    update(gameframe, direction){
  
    //    console.log('oooo', this.x)
        // this.speed = this.game.gameSpeed * this.speedfactor * direction
        // this.x = gameframe * this.speed % this.game.width
    
}

 
}