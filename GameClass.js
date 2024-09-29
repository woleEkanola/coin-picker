
import InputHandler from "./input"
import { Background } from "./background"
import store from "store"
import { Coins } from "./coins"

export class GameClass {
    constructor(ctx, width, height, bacgroundArray, player){
    this.ctx = ctx
    this.width = width
    this.height = height
    this.gameStates= []
    this.coinsArray = []
    this.currentGameState= 'play'
    this.bgArray = generateBackgrounds(this)
    this.player = player
    this.input = new InputHandler()
    this.lastTime = 0
    this.deltaTime = 0
    this.gameSpeed = 5
    this.gameframe  = 0
    this.gamePoint = 0
    
    }
    setCoinsArray(newArray){
        this.coinsArray = newArray
    }
    pause(){
        this.currentGameState = 'pause'
    }

    play(){
        this.currentGameState = 'play'
        
    }
    
    drawStage(){
        this.bgArray.forEach(background =>{
         background.draw(this.ctx)
        })
      }  
      updateStage(direction){
        this.bgArray.forEach(background =>{
         background.update(this.gameframe, direction)
        })
      }
createCoin(){
    let coin_y = Math.floor( (Math.random() * 460))
    // console.log(this.coinsArray)
    let coin= new Coins(document.getElementById('coin').src,155, 153, this.player, Math.floor( Math.random() * 770), coin_y)
this.coinsArray.push(coin)
}

    animate(timeStamp){
// console.log(this.gameframe % 100)
        this.deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp
        this.ctx.clearRect(0,0, this.width, this.height)
       this.drawStage()
       if(store.get('gameStart')) {
        // console.log('ppppp')
        this.player.update(this.input.lastKey)}
        this.player.draw(this.ctx, this.deltaTime)
        if(this.coinsArray.length < 10 ){
            if(this.gameframe < 510){

                this.createCoin()
            }else{
                if(this.gameframe % 510 == 509 ){
                    while(10 -this.coinsArray.length > 0){
                       this.createCoin() 
                    }
                }
            }
        }
        this.coinsArray.forEach(coin => coin.draw(this.ctx))
        this.coinsArray.forEach(coin => coin.update(this.coinsArray, this.setCoinsArray.bind(this), this.gamePoint))
       if(this.player.moveFront()) this.updateStage(-1)
    
       if(this.player.missiles.length >0){
        this.player.missiles.forEach(missile=>{
           
            missile.draw(this.ctx)
            missile.update()
            // this.player.missiles.pop()
        })
       }
        this.gameframe++
        requestAnimationFrame(this.animate.bind(this))
   
    }


}

export const generateBackgrounds=game=>{
    const bgs = []

    const sky_bg_src = document.getElementById('sky_bg').src
    const sky_bg = new Background(sky_bg_src, game, 0)
    bgs.push(sky_bg)

    // const sky_fg_src = document.getElementById('sky_fg').src
    // const sky_fg = new Background(sky_fg_src, game, 0.05)
    // bgs.push(sky_fg)

    const cloud_src = document.getElementById('cloud').src
    const cloud = new Background(cloud_src, game, 0.1)
    bgs.push(cloud)

    const floor_src = document.getElementById('floor').src
    const floor = new Background(floor_src, game, 0.2)
    bgs.push(floor)

    const platform_src = document.getElementById('platform').src
    const platform = new Background(platform_src, game, 0.4)
    bgs.push(platform)



    return bgs
}