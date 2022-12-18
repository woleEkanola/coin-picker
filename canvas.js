import store from 'store'
const canvas = document.querySelector('canvas')

export const c = canvas.getContext('2d')

export const CANVAS_WIDTH=canvas.width =800
export const CANVAS_HEIGHT=canvas.height = 567
export const gamespeed = store.get('gamespeed')