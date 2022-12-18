import Img from "./image";
import {c, CANVAS_HEIGHT, CANVAS_WIDTH, gamespeed} from '../../canvas'



export default class Bg_Layer extends Img{
    update(gameframe){
  
       
            this.speed = gamespeed * this.speedfactor
            this.x = gameframe * this.speed % CANVAS_WIDTH
        
    }
    draw(){
        c.drawImage(this.img, this.x,this.y, this.width  , this.height)
        c.drawImage(this.img, this.x + CANVAS_WIDTH,this.y, this.width, this.height)
    }

}