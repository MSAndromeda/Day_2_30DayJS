console.clear();
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function addTrans(element) {
    element.classList.add(`transition-all`);
    element.classList.add(`duration-75`);
    element.classList.add(`ease-hand`);
}

function removeTrans(element) {
    element.classList.remove(`transition-all`);
    element.classList.remove(`duration-75`);
    element.classList.remove(`ease-hand`);
}

function setDate(){
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    if(second == 0){
        removeTrans(secondHand);
    } 
    if(minute == 0){
        removeTrans(minuteHand);
    } 
    if(hour == 0){
        removeTrans(hourHand);
    }
    if(second == 1){
        addTrans(secondHand);
    } 
    if(minute == 1){
        addTrans(minuteHand);
    } 
    if(hour == 1){
        addTrans(hourHand);
    }
    const secondDegrees = ((((second)/60)*360)+90);
    const minuteDegrees = ((((minute)/60)*360)+90);
    const hourDegrees = ((((hour)/60)*360)+90);
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate,1000);