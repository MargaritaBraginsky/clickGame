const imgDom = document.querySelector("#img")
const distanceDom = document.querySelector('#distanse')
let width = 400
let height = 400
let click = 0 
let scoreNow = document.querySelector('#scoreNow')

// получение случайного числа от 0 до size-1
// בשידרוג של זה צריך לעשות מיקום כבוע ולפחות 3 תמונות

let getRandomNumber = function (size){
    return Math.floor(Math.random() * size)
}

let target = {x: getRandomNumber(width), y:getRandomNumber(height)}
console.log(target)

let getDistance = function (event, target){
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}
// console.log(getDistance())



let getDistanceHint = function (distance){
    if(distance < 8){
        return "ТОЧКА УДАЧИ НАЙДЕНА! Сделано кликов:" + " " + click
    }else if(distance < 10){
        return "обожжешься!"
    }else if(distance < 20){
        return "очень горече!"
    }else if(distance < 40){
        return "горече.."
    }else if(distance < 80){
        return "тепло"
    }else if(distance < 160){
        return "прохладно"
    }else if(distance < 320){
        return "очень холодно"
    } else {
        return "замерзнешь!"
    }
}
   

imgDom.addEventListener('click', function(event){
    click++
    
    let distance = getDistance(event, target)
    let distanceHint = getDistanceHint(distance)
    console.log(distanceHint)
    distanceDom.innerHTML = distanceHint
    scoreNow.innerHTML = click
})
