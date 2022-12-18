import { uid } from 'uid'

export class Missile {
    constructor(image, width, height,player, dir){
        this.image = new Image()
        this.image.src = image
        this.width = width * 0.2
        this.height = height * 0.2
        this.x = player.x
        this.y = player.y
        this.player = player
        this.speed= 0
        this.maxSpeed=5
        this.direction = dir
        this.id = uid(16)
    }
    draw(ctx){

        ctx.drawImage(this.image, this.x, this.y, this.width,this.height )
        this.player.launchedMissiles.push(this.id)
    }

    update(){

        if(this.direction <0){

            if(this.x>0){

                this.x -= this.speed
                this.speed += (this.maxSpeed * 0.02)
            }

        }else{

            if(this.x < this.player.gameWidth)
            this.x += this.speed
            this.speed += (this.maxSpeed * 0.02)
        }
    }
}