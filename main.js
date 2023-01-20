const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');


let setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    minsDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.minutes();
    hourDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform = `roate(${hourDegrees}deg)`

}

setInterval(setDate, 1000)