// import { loadConfigFromFile } from 'vite'
import { gamespeed } from './canvas'
import './style.css'
import InputHandler from './input'
import Player from './player'
import { Background } from './background'





window.addEventListener('load',e=>{
// alert('ready')
loading.classList.add('hidden')
game_canvas.classList.remove('hidden')

const ctx = game_canvas.getContext('2d')

game_canvas.width = 800
game_canvas.height = 567

// console.log(game_canvas)
const input = new InputHandler()
let lastTime = 0

const player = new Player(game_canvas.width, game_canvas.height)
const sky_bg_src = document.getElementById('sky_bg').src
const sky_bg = new Background(sky_bg_src)
// sky_bg.src = sky_bg_src

function animate(timeStamp){
    const deltaTime = timeStamp -lastTime
    lastTime = timeStamp
    ctx.clearRect(0,0, game_canvas.width, game_canvas.height)
   sky_bg.draw(ctx)
    player.update(input.lastKey)
    player.draw(ctx, deltaTime)
    // console.log(player)
    requestAnimationFrame(animate)
}

animate(0)


})


