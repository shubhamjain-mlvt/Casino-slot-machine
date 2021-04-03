 

let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let inpSpeed = document.getElementById('inpSpeed')
let stop = document.getElementById('stop')
let btnstop = false

let values = [
    '😋','😎','😁','🤑','😭','😡','😂','😢','😍'
]

function getRandomValue() {
    return values[Math.floor(Math.random() * 9)]
}
let animationId;
function updateAnimation(newSpeed){
    if (animationId) clearInterval(animationId)


    animationId = setInterval(()=> {
        if(btnstop){
            result()
            return
        }

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()

    },1000 / newSpeed)
}
function result (){
    if(value1.innerText==value2.innerText==value3.innerText)
    alert('you won')
    else
    alert('you lost,please refersh to play again')
}

inpSpeed.onchange = function(ev) {
    //console.log('value changed')
    //document.documentElement ==> this is ":root" of css

    document.documentElement.style.setProperty('--speed',ev.target.value)

    updateAnimation(ev.target.value)
}
stop.onclick = function(ev){
    document.documentElement.style.setProperty('--speed',0)
    
   // ev.target.value = 0
   // updateAnimation(ev.target.value)
    btnstop = true
    
    
    
}