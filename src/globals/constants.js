import store from 'store'


export const contants = {
    gamespeed: 5,
    gamelevel:0,
    gamescore:0,
    gameplayer:'ninja'
}

export const init_constants = function(x){
    let constant_array = Object.keys(x)

    constant_array.forEach(constnt=>{
        store.set(constnt, x[constnt])
    })

}