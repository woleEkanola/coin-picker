import { uid } from 'uid'

export class Coins {
    constructor(image, width, height,player){
        this.image = new Image()
        this.image.src = image
        this.width = width * 0.2
        this.height = height * 0.2
        this.x = 300
        this.y = player.y  + ((player.width *0.2)* 0.5)
        this.player = player
        this.speed= 0
        this.maxSpeed=5
       
        this.id = uid(16)
    }
    draw(ctx){

        ctx.drawImage(this.image, this.x, this.y, this.width,this.height )
        // this.player.launchedMissiles.push(this.id)
    }

    update(){

        if(this.player.x == this.x && this.player.y < this.y){

      console.log('collision ti shele')
    }}
}                                                                                                                                                             