import Img from "./image";
import {c, CANVAS_HEIGHT, CANVAS_WIDTH, gamespeed} from '../../canvas'




export default class Character extends Img{
  
    constructor(src, frameWidth, newW, newH){
        super(src)
        this.frameWidth = frameWidth
        this.newW =newW
        this.newH = newH
      
    }

    updateImg(nsrc, nframeW,  newW, newH){
        this.img.src = nsrc
        this.frameWidth = nframeW
        this.newW =newW
        this.newH = newH



    }
    draw(gameframe){
        // console.log('ggg', (( Math.floor((-1 * gameframe)/5) % 10) * this.frameWidth))
        c.drawImage(this.img, 20 +(( Math.floor((-1 * gameframe)/5) % 10) * this.frameWidth) , 0, this.frameWidth,458, 170, 395, this.newW, this.newH)
       
    }

}