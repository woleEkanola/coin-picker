import store from 'store'
import {c, CANVAS_HEIGHT, CANVAS_WIDTH, gamespeed} from '../../canvas'


class Img {
    constructor(src, w, h, x, y, speedfactor, ctx){
        this.x= x
        this.y = y
        this.width = w
        this.height= h
        this.img= new Image()
        this.img.src = src
        this.speedfactor = speedfactor
        this.speed = gamespeed * this.speedfactor
       
            }

            update(){
                this.speed = gamespeed * this.speedfactor
                this.x = Math.floor(this.x - 1)
            }
            draw(){
               c.drawImage(this.img, this.x,this.y, this.width, this.height)
            }
            
}
export default Img