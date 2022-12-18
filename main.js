import sky_bg_src from '/src/img/sky_bg.png'
import sky_fg_src from '/src/img/sky_fg.png'
import cloud_src from '/src/img/cloud.png'
import platform_src from '/src/img/platform2.png'
import floor_src from '/src/img/floor.png'
import ninja_attack_src from '/src/img/ninja/attack.png'
import ninja_jump_src from '/src/img/ninja/jump.png'


import Character from '/src/classes/character'

import ninja_src from '/src/img/ninja/run.png'
// import Img from './src/classes/image'
import Bg_Layer from './src/classes/bg_layer'

import { contants, init_constants } from './src/globals/constants'

import store from 'store'
import {c, CANVAS_HEIGHT, CANVAS_WIDTH, gamespeed} from './canvas'



let gameframe = 0
init_constants(contants)
// let gamespeed= store.get('gamespeed')
const sky_bg = new Bg_Layer(sky_bg_src,1008, CANVAS_HEIGHT, 0, 0, 0.04 )
const sky_fg = new Bg_Layer(sky_fg_src,1008, CANVAS_HEIGHT, 0, 0, 0.09 )
const cloud = new Bg_Layer(cloud_src,1008, CANVAS_HEIGHT, 0, 0, 0.2 )
const floor = new Bg_Layer(floor_src, 1008, CANVAS_HEIGHT, 0, 0, 0.01  )
const platform = new Bg_Layer(platform_src,1008, CANVAS_HEIGHT, 0, 0, 0.6 )

const ninja = new Character(ninja_src, 360, 71, 90)
ninja.src = ninja_src

const backgrounds = [sky_bg, sky_fg, cloud, floor,platform]
function drawStage(){
  backgrounds.forEach(background =>{
    background.update(gameframe)
    background.draw()
  })
}

let an 
let chtFrm = 0
function animate(){
  c.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT)
  drawStage()
 
    ninja.draw(gameframe)
  
  chtFrm ++
gameframe --
 an =  requestAnimationFrame(animate)
}
animate()

// document.addEventListener('keydown', e=>{

//   if(e.key == ' '){

//     animate()
//   }
// })

// document.addEventListener('keyup', e=>{

//   if(e.key == ' '){
//     cancelAnimationFrame(an)
//     console.log(an)
//   }
// })

document.addEventListener('keypress', e=>{

  if(e.key == 'a'){
    ninja.updateImg(ninja_attack_src, 536, 97.45, 90)
  }

  // if(e.key == 'm'){
  //   ninja.updateImg(ninja_src, 360, 71, 90)
  // }

})


document.addEventListener('keyup', e=>{

  if(e.key == 'a'){
    ninja.updateImg(ninja_src, 360, 71, 90)
  }

  // if(e.key == 'r'){
  //   ninja.updateImg(ninja_src, 360, 71, 90)
  // }

})



