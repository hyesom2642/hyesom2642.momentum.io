const clock = document.querySelector("#clock__text");

const clockHours = document.querySelector(".clock__hour");
const clockMinutes = document.querySelector(".clock__minutes");
const clockSeconds = document.querySelector(".clock__seconds");


function getClock(){
    const date = new Date;

    const hours = String(date.getHours()).padStart(2, "0"); // 시
    const minutes = String(date.getMinutes()).padStart(2, "0"); // 분
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 초
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;

    const newSeconds = date.getSeconds();
    const secondsDegree = ((newSeconds / 60) * 360);
    clockHours.style.transform = `rotate(${secondsDegree}deg)`;
    const newMinutes = date.getMinutes();
    const minutesDegree = ((newMinutes / 60) * 360);
    clockMinutes.style.transform = `rotate(${minutesDegree}deg)`;
    const newHours = date.getHours();
    const hoursDegree = ((newHours / 12) * 360);
    clockSeconds.style.transform = `rotate(${hoursDegree}deg)`;
}
getClock();
setInterval(getClock, 1000);
