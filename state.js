


export const x={
    IDLE: 0,
    IDLE_BACK:1,
    SLIDE: 2,
    RUN:3,
    RUN_BACK:4,
    JUMP:5,
    JUMP_BACK:6,
    ATTACK:7,
    ATTACK_BACK:8,
    THROW:9
    }

 class State{
    constructor(state, image, w, h, player){
        this.state = state
        this.image = image
        this.width = w
        this.height =h
        this.player = player
 }

    enter(){
        this.player.speed = 0
        this.player.image.src = this.image
        this.player.width = this.width
        this.player.height = this.height
    }
}

export class Idle extends State{
    constructor(player){
        super('IDLE', document.getElementById('idle').src, 232, 439, player)
        this.player = player
        this.image = document.getElementById('idle').src
        this.width = 232
        this.height =439
    }

   
    handleInput(input){
        if(input === 'PRESS right')this.player.setState(x.RUN)
        if(input === 'PRESS left')this.player.setState(x.IDLE_BACK)
        if(input === 'PRESS down')this.player.setState(x.SLIDE)
        if(input === 'PRESS up')this.player.setState(x.JUMP)
        if(input === 'PRESS a')this.player.setState(x.ATTACK)
        if(input === 'PRESS t')this.player.setState(x.THROW)
        
        // if(input === 'HOLD down')this.player.setState(x.SLIDE) 
        
    }
    enter(){
        super.enter()
        console.log('before', this.player.y)
       this.player.y= this.player.defaultY
    //    console.log('after', this.gameHeight)
    }

}

export class Idle_back extends State{
    constructor(player){
        super('IDLE_BACK',document.getElementById('idle_back').src, 232, 439, player )
        this.player = player
        this.image = document.getElementById('idle_back').src
        this.width = 232
        this.height =439
    }

 
    handleInput(input){
        if(input === 'PRESS right') this.player.setState(x.IDLE)
        if(input === 'PRESS left') this.player.setState(x.RUN_BACK)
        // if(input === 'PRESS down')this.player.setState(x.SLIDE_BACK)
        if(input === 'PRESS up')this.player.setState(x.JUMP_BACK)
        if(input === 'PRESS a')this.player.setState(x.ATTACK_BACK)
      
        
    }
    enter(){
        super.enter()
        this.gameHeight - (this.height * 0.2)
    }
}


export class Slide extends State{
    constructor(player){
        super('SLIDE',document.getElementById('slide').src, 373, 351, player )
        this.player = player
        this.image = document.getElementById('slide').src
        this.width = 373
        this.height =351
    }

    handleInput(input){
        if(input === 'RELEASE down')this.player.setState(x.IDLE)
        if(input === 'PRESS right')this.player.setState(x.RUN)
      }

      enter(){
        super.enter()
        this.player.speed = this.player.maxSpeed * 0.5
    }
}

export class Run extends State{
    constructor(player){
        super('RUN',document.getElementById('run').src, 365, 458, player )
        this.player = player
        this.image = document.getElementById('run').src
        this.width = 365
        this.height =458
    }

    handleInput(input){
        if(input === 'RELEASE right')this.player.setState(x.IDLE)
        if(input === 'PRESS down')this.player.setState(x.SLIDE)
        if(input === 'PRESS up')this.player.setState(x.JUMP)
        if(input === 'PRESS left')this.player.setState(x.IDLE_BACK)
        if(input === 'PRESS a')this.player.setState(x.ATTACK)
        if(input === 'PRESS j') this.player.launchMissiles(1)
        if(input === 'PRESS t')this.player.setState(x.THROW)

       
    }
    enter(){
        super.enter()
        // this.gameHeight - (this.height * 0.2)
        this.player.speed = this.player.maxSpeed 
    }
}


export class Run_Back extends State{
    constructor(player){
        super('RUN_BACK',document.getElementById('run_back').src, 360, 458, player )
        this.player = player
        this.image = document.getElementById('run_back').src
        this.width = 360
        this.height =458
    }

    handleInput(input){
        if(input === 'RELEASE left')this.player.setState(x.IDLE_BACK)
        // if(input === 'PRESS down')this.player.setState(x.SLIDE_BLACK)
        // if(input === 'PRESS up')this.player.setState(x.JUMP_BACK)
        if(input === 'PRESS a')this.player.setState(x.ATTACK_BACK)
        if(input === 'PRESS j') this.player.launchMissiles(-1)
       
    }

    enter(){
        super.enter()
        this.gameHeight - (this.height * 0.2)
        this.player.speed = -1 * (this.player.maxSpeed)
    }
}





export class Jump extends State{
    constructor(player){
        super('JUMP',document.getElementById('jump').src, 362, 483, player )
        this.player = player
        this.image = document.getElementById('jump').src
        this.width = 362
        this.height =483
    }

    handleInput(input){
        let back_onground = true  // this variable  helps know when player is back on ground 
        // if(input === 'RELEASE up')this.player.setState(x.IDLE)
        if(input === 'PRESS left')this.player.setState(x.JUMP_BACK)
        if(input === 'PRESS down')this.player.speed = this.player.maxSpeed * 1.5
        if(input === 'PRESS right')this.player.speed = this.player.maxSpeed * 3
        if(this.player.onGround()) this.player.setState(x.IDLE)
        if(input === 'PRESS j') this.player.launchMissiles(1)

    }
    enter(){
        super.enter()
       if(this.player.onGround()) this.player.vy = -10
       this.player.speed = this.player.maxSpeed * 0.2
    }
}

export class Jump_Back extends State{
    constructor(player){
        super('JUMP_BACK',document.getElementById('jump_back').src, 362, 483, player )
        this.player = player
        this.image = document.getElementById('jump_back').src
        this.width = 362
        this.height =483
    }

    handleInput(input){
        if(input === 'PRESS right')this.player.setState(x.JUMP)
        if(input === 'PRESS down')this.player.speed = this.player.maxSpeed * -1.5
        if(input === 'PRESS left')this.player.speed = this.player.maxSpeed * -3
        if(this.player.onGround()) this.player.setState(x.IDLE_BACK)
        if(input === 'PRESS j') this.player.launchMissiles(-1)

    }
    enter(){
        super.enter()
       if(this.player.onGround()) this.player.vy = -10
       this.player.speed = -1 * (this.player.maxSpeed * 0.2)
    }
}

export class Attack extends State{
    constructor(player){
        super('ATTACK',document.getElementById('attack').src, 536, 495, player )
        this.player = player
        this.image = document.getElementById('attack').src
        this.width = 536
        this.height =495
    }

    handleInput(input){
        if(input === 'RELEASE a')this.player.setState(x.IDLE)
        if(input === 'PRESS right')this.player.setState(x.RUN)
           
       
    }




}

export class Attack_Back extends State{
    constructor(player){
        super('ATTACK_BACK',document.getElementById('attack_back').src, 536, 495, player )
        this.player = player
        this.image = document.getElementById('attack_back').src
        this.width = 536
        this.height =495
    }

    handleInput(input){
        if(input === 'RELEASE a')this.player.setState(x.IDLE_BACK)
        if(input === 'PRESS right')this.player.setState(x.IDLE)
        if(input === 'PRESS left')this.player.setState(x.RUN_BACK)
           
       
    }

    
}

export class Throw extends State{
    constructor(player){
        super('THROW',document.getElementById('throw').src, 377, 451, player )
        this.player = player
        this.image = document.getElementById('throw').src
        this.width = 377
        this.height =451
    }

    handleInput(input){
        if(input === 'RELEASE t')this.player.setState(x.IDLE)
        if(input === 'PRESS right')this.player.setState(x.RUN)
        if(input === 'PRESS left')this.player.setState(x.IDLE_BACK)
           
       
    }


    enter(){
        super.enter()
        this.player.launchMissiles(1)

    }

}