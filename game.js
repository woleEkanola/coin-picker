// import { loadConfigFromFile } from 'vite'
import { gamespeed } from './canvas'
import './style.css'
import InputHandler from './input'
import Player from './player'
import { Background } from './background'
import { GameClass } from './GameClass'
import store from 'store'



game_canvas.classList.remove('hidden')

const ctx = game_canvas.getContext('2d')

game_canvas.width = 800
game_canvas.height = 567

const sky_bg_src = document.getElementById('sky_bg').src
const sky_bg = new Background(sky_bg_src)
const player = new Player(game_canvas.width, game_canvas.height)

let gameReady = false
store.set('gameStart', false)
export const game = new GameClass(ctx, game_canvas.width, game_canvas.height,sky_bg, player  )
window.addEventListener('load',e=>{
    gameReady = true
// alert('ready')
loading.classList.add('hidden')


game.animate(0)


})

// export const player = new Player(game_canvas.width, game_canvas.height)

const removeScreen = ()=>{
    let b= document.getElementById('contain')
    b.style.top = '0'
    console.log('kjhg')
  

}

const addScreen = ()=>{
    let b= document.getElementById('contain')
    
    b.style.top = '-54%'
  

}

let control = document.getElementById('control')
control.addEventListener('click', e=>{
    
    if(gameReady && store.get('gameStart') == false){
        addScreen()
        store.set('gameStart', true)
        // game.update
    }else{
        removeScreen()
        store.set('gameStart', false)
    }
   
})
