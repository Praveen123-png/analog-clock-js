const secondHand = document.querySelector('.hand-sec');
const minuteHand = document.querySelector('.hand-min');
const hourHand = document.querySelector('.hand-hours');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    let secondsDegrees = ((seconds / 60) * 360) + 180;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let minutesDegrees =((minutes / 60) * 360) +180;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    let horusDegrees= ((hours / 12) * 360) + 180;
    hourHand.style.transform = `rotate(${horusDegrees}deg)`;

    console.log(`second: ${seconds}`);
    console.log(`hours: ${hours}`);
}

setInterval(setDate, 1000);
