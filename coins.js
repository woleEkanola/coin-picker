import { uid } from 'uid'

export class Coins {
    constructor(image, width, height,player, x_position, coin_y){
        this.image = new Image()
        this.image.src = image
        this.width = width * 0.2
        this.height = height * 0.2
        this.x = x_position
        this.y =  coin_y
        this.player = player
        this.speed= 0
        this.maxSpeed=5
       
        this.id = uid(16)
    }
    draw(ctx){

        ctx.drawImage(this.image, this.x, this.y, this.width,this.height )
        // this.player.launchedMissiles.push(this.id)
    }
    
    update(coinArray, setCoinsArray, gamePoint){
        
        // check for collision with point
        if((this.x >= (this.player.x ) && this.x <= (this.player.x + (this.player.width * 0.2) )) && (this.y >= (this.player.y ) && this.y  <= (this.player.y + (this.player.height * 0.2)  )) ){
            // console.log('colision')
           let x =  coinArray.findIndex(coin => coin.id == this.id)
           let newArray = coinArray
           newArray.splice(x,1)
           setCoinsArray(newArray)
           gamePoint += 10
         
    }}
}                                                                                                                                                             