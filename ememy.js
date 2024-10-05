import {Idle, Idle_back, Slide, Run, Jump, Run_Back, Jump_Back, Attack, Attack_Back, Throw} from './state'
import { Missile } from './missiles'


export class Player{
  constructor(gameWidth, gameHeight){
    this.gameWidth = gameWidth
    this.image = new Image()
    this.gameHeight = gameHeight
    this.states = [new Idle(this), new Idle_back(this), new Slide(this), 
      new Run(this), new Run_Back(this), new Jump(this) , new Jump_Back(this), new Attack(this), 
      new Attack_Back(this), new Throw(this)]
      this.currentState = this.states[0]
      this.missiles= []
      this.launchedMissiles = []
      this.image= new Image()
      this.imageSrc= this.currentState.image
      this.image.src = this.imageSrc
      this.width = this.currentState.width
      this.height = this.currentState.height
      this.x = 0
      this.y= this.gameHeight - (this.height * 0.2) - 80
      this.frameX= 0
      this.frameY=0
      this.speed = 0
      this.maxSpeed = 3
      this.vy = 0
      this.weight = 0.5
      this.fps = 20
      this.frameTimer = 0
      this.frameInterval = 1000/this.fps
      this.defaultY = this.gameHeight - (this.height * 0.2) - 80
    }

  draw(ctx, deltaTime){

    if(this.frameTimer > this.frameInterval){

      if(this.frameX < 9){
        this.frameX++
      }else{
        this.frameX = 0
      }
      this.frameTimer = 0
    }else{
      this.frameTimer += deltaTime
    }
    ctx.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width * 0.2, this.height * 0.2)

  }

  update(input){
    // console.log('kk', input)
    this.currentState.handleInput(input)
    this.x += this.speed
    this.y += this.vy
    if(this.x <=0){
      this.x = 0
    }else if(this.x >= this.gameWidth - (this.width * 0.2)){
      this.x = this.gameWidth - (this.width * 0.2)
    }

    if(!this.onGround()){
      // console.log(this.onGround())
      this.vy += this.weight
    }else{
      // console.log(this.onGround())
      this.vy = 0
    }
  }

  setState(state){
    // console.log('p',state)
    this.currentState = this.states[state]
    this.currentState.enter()
  }

  onGround(){
    return this.y >= this.gameHeight - ((this.height * 0.2 ) + 80)
  }
  moveFront(){
    return ['JUMP', 'RUN', 'SLIDE'].includes(this.currentState.state)
  }
  moveBack(){
    return ['JUMP_BACK', 'RUN_BACK'].includes(this.currentState.state)
  }

  launchMissiles(){
    let m = new Missile(document.getElementById('missile').src,160,32,this)
    this.missiles.push(m)
  }

}