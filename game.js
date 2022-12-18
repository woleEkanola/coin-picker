// import { loadConfigFromFile } from 'vite'
import { gamespeed } from './canvas'
import './style.css'
import InputHandler from './input'
import Player from './player'
import { Background } from './background'
import { GameClass } from './GameClass'





window.addEventListener('load',e=>{
// alert('ready')
loading.classList.add('hidden')
game_canvas.classList.remove('hidden')

const ctx = game_canvas.getContext('2d')

game_canvas.width = 800
game_canvas.height = 567

const sky_bg_src = document.getElementById('sky_bg').src
const sky_bg = new Background(sky_bg_src)
const player = new Player(game_canvas.width, game_canvas.height)

const game = new GameClass(ctx, game_canvas.width, game_canvas.height,sky_bg, player  )



game.animate(0)


})

// export const player = new Player(game_canvas.width, game_canvas.height)
